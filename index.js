const core = require("@actions/core");
const fs = require("fs");
const {
  STATUS,
  ERRORS,
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("./src/constants");
const { reporterComment, initOctokit } = require("./src/reporter");
const { getChangedFiles } = require("./src/getChangedFiles");
const { runLinterActions } = require("./src/runLinterActions");
const { combineResults } = require("./src/combineResults");
const { getInvalidFiles } = require("./src/ReporterMessageCreator");

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

    // Run all linting tests.
    const returnedResults = runLinterActions(
      changedFilesArray,
      directories,
      markdownExtensions,
      imageExtensions,
      isFuzzySearch,
      core.notice
    );

    // Combine results from all linting tests.
    const combinedResult = combineResults(returnedResults);

    if (combinedResult.status === STATUS.VALID) {
      // Add success comment.
      await reporterComment(repoToken, debug, combinedResult, {}, reporter);
    } else {
      // Create error comments for invalid results.
      await reporterComment(
        repoToken,
        debug,
        combinedResult,
        extensionReplacements,
        reporter
      );
      core.error(JSON.stringify(combinedResult));
      core.setFailed(JSON.stringify(combinedResult));
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
        validFiles: combinedResult.validFiles,
        invalidFiles: getInvalidFiles(combinedResult),
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
