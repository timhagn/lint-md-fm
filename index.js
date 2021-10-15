const core = require("@actions/core");

const {
  STATUS,
  ERRORS,
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("./src/constants");
const { testExtensions } = require("./src/testExtensions");
const { testFrontmatter } = require("./src/testFrontmatter");
const { testDuplication } = require("./src/testDuplication");
const { testLogo } = require("./src/testLogo");
const { reporterComment, initOctokit } = require("./src/reporter");
const fs = require("fs");
const { getChangedFiles } = require("./src/getChangedFiles");

/**
 * Gets called for unchecked errors.
 *
 * @param error
 */
const handleError = (error) => {
  console.error(error);
  core.setFailed(`Unhandled error: ${error}`);
};

/**
 * Loop over all files and fill list.
 *
 * @param {[string]} directories
 * @returns {[string]}
 */
const getAllFiles = (directories) => {
  let list = [];
  directories.forEach((directory) => {
    const allFiles = fs.readdirSync(directory);
    allFiles.forEach((filePath) => {
      list.push(`${directory}/${filePath}`);
    });
  });
  return list;
};

/**
 * Checks changed files against relevant directories.
 *
 * @param changedFiles
 * @param directories
 * @returns {boolean}
 */
const hasRelevantFilesInDirectories = (changedFiles, directories) =>
  changedFiles.length &&
  changedFiles
    .split(",")
    .some((file) => directories.some((directory) => file.includes(directory)));

/**
 * Main action function.
 *
 * @returns {Promise<void>}
 */
const main = async () => {
  // Get all inputs or fall back to defaults.
  const repoToken = core.getInput("github-token", { required: true });
  const debug = core.getInput("debug");
  // const changedFiles = core.getInput("changed-files");
  const isFuzzySearch = core.getInput("fuzzy-search");
  // Get the directories array from input. The first element is the projects markdown directory and the second one is the images one.
  const directories = core.getMultilineInput("directories") || DEFAULT_FOLDERS;
  const forceCheck = core.getInput("force-check");

  // Create a octokit reporter.
  const reporter = initOctokit(repoToken, debug);

  const { addedModifiedFormatted: changedFiles } = await getChangedFiles(
    reporter,
    repoToken,
    debug
  );

  // Only continue if any relevant files have changed.
  if (
    forceCheck ||
    (changedFiles.length &&
      hasRelevantFilesInDirectories(changedFiles, directories))
  ) {
    const changedFilesArray = forceCheck
      ? getAllFiles(directories)
      : changedFiles.split(",");

    // Get all the valid markdown extensions or fall back to defaults.
    const markdownExtensions =
      core.getMultilineInput("markdown-extensions") ||
      DEFAULT_MARKDOWN_EXTENSIONS;

    // Get all the valid image extensions or fall back to defaults.
    const imageExtensions =
      core.getMultilineInput("image-extensions") || DEFAULT_IMAGE_EXTENSIONS;

    const extensionReplacements = {
      MARKDOWN_EXTENSIONS: markdownExtensions,
      IMAGE_EXTENSIONS: imageExtensions,
    };

    // Check if all markdown files have valid extensions.
    core.notice(`Testing markdown extensions...`);
    const mdExtensionResult = testExtensions(
      markdownExtensions,
      changedFilesArray,
      directories[0] // markdown directory
    );
    // Show errors if any and flag the action as failed.
    if (mdExtensionResult.status !== STATUS.VALID) {
      // Create an error comment for invalid project file extensions.
      await reporterComment(
        repoToken,
        debug,
        mdExtensionResult,
        extensionReplacements,
        reporter
      );
      core.error(JSON.stringify(mdExtensionResult));
      core.setFailed(JSON.stringify(mdExtensionResult));
    }

    // Check if all image files have valid extensions.
    core.notice(`Testing image extensions...`);
    const imgExtensionResult = testExtensions(
      imageExtensions,
      changedFilesArray,
      directories[1] // image directory
    );
    if (imgExtensionResult.status !== STATUS.VALID) {
      // Create an error comment for invalid image extensions.
      await reporterComment(
        repoToken,
        debug,
        imgExtensionResult,
        extensionReplacements,
        reporter
      );
      core.error(JSON.stringify(imgExtensionResult));
      core.setFailed(JSON.stringify(imgExtensionResult));
    }

    // Check if all markdown files have valid tags.
    core.notice("Testing Markdown Frontmatter...");
    const markdownResult = testFrontmatter(
      markdownExtensions,
      changedFilesArray,
      directories[0]
    );
    if (markdownResult.status !== STATUS.VALID) {
      // Create an error comment for invalid files or their Markdown content.
      await reporterComment(repoToken, debug, markdownResult, {}, reporter);
      core.error(JSON.stringify(markdownResult));
      core.setFailed(JSON.stringify(markdownResult));
    }

    // Check projects duplication.
    core.notice(`Testing project duplication...`);
    const duplicationResult = testDuplication(
      mdExtensionResult.validFiles,
      markdownExtensions,
      directories[0],
      isFuzzySearch
    );
    if (duplicationResult.status !== STATUS.VALID) {
      // Create an error comment for duplicate files.
      await reporterComment(repoToken, debug, duplicationResult, {}, reporter);
      core.error(JSON.stringify(duplicationResult));
      core.setFailed(JSON.stringify(duplicationResult));
    }

    // Check if all logo files are in correct format and ratio.
    core.notice("Testing Logo Files...");
    const logoResult = testLogo(imageExtensions, mdExtensionResult.validFiles);
    if (logoResult.status !== STATUS.VALID) {
      // Create an error comment for invalid logo files.
      await reporterComment(repoToken, debug, logoResult, {}, reporter);
      core.error(JSON.stringify(logoResult));
      core.setFailed(JSON.stringify(logoResult));
    }

    const combinedResult = {
      ...mdExtensionResult,
      ...imgExtensionResult,
      ...markdownResult,
      ...duplicationResult,
      ...logoResult,
    };

    const combinedStatus =
      mdExtensionResult.status === STATUS.VALID &&
      imgExtensionResult.status === STATUS.VALID &&
      markdownResult.status === STATUS.VALID &&
      duplicationResult.status === STATUS.VALID &&
      logoResult.status === STATUS.VALID;

    combinedResult.status = combinedStatus ? STATUS.VALID : STATUS.INVALID;

    if (combinedStatus === STATUS.VALID) {
      // Add success comment.
      await reporterComment(repoToken, debug, combinedResult, {}, reporter);
    }

    core.notice(
      `Result: ${JSON.stringify({
        ...combinedResult,
        changedFilesArray,
      })}`
    );
    core.setOutput(
      "changed",
      JSON.stringify({
        ...combinedResult,
        logoResult,
      })
    );
  } else {
    // Create an error comment.
    await reporterComment(
      repoToken,
      debug,
      { errors: [{ error: ERRORS.NO_FILES_CHANGED }] },
      {},
      reporter
    );
    core.setFailed("No files changed!");
  }
};

process.on("unhandledRejection", handleError);
main().catch(handleError);
