const core = require("@actions/core");
// const github = require("@actions/github");
// const exec = require("@actions/exec");
const {
  STATUS,
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("./src/constants");
const { testExtensions } = require("./src/testExtensions");
const { testFrontmatter } = require("./src/testFrontmatter");
const { testDuplication } = require("./src/testDuplication");
const { testLogo } = require("./src/testLogo");

try {
  // Get all inputs or fall back to defaults.
  const changedFiles = core.getInput("changed-files");
  const isFuzzySearch = core.getInput("fuzzy-search");

  // Only continue if any files have changed.
  if (changedFiles.length) {
    const changedFilesArray = changedFiles.split(",");
    
    // Get the directories array from input. The first element is the projects markdown directory and the second one is the images one.
    const directories =
      core.getMultilineInput("directories") || DEFAULT_FOLDERS;

    // Get all the valid markdown extensions or fall back to defaults.
    const markdownExtensions =
      core.getMultilineInput("markdown-extensions") ||
      DEFAULT_MARKDOWN_EXTENSIONS;

    // Get all the valid image extensions or fall back to defaults.
    const imageExtensions =
      core.getMultilineInput("image-extensions") || DEFAULT_IMAGE_EXTENSIONS;

    // Check if all markdown files have valid extensions.
    core.notice(`Testing markdown extensions...`);
    const mdExtensionResult = testExtensions(
      markdownExtensions,
      changedFilesArray,
      directories[0]        // markdown directory
    );
    // Show errors if any and flag the action as failed.
    if (mdExtensionResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(mdExtensionResult));
      core.setFailed(JSON.stringify(mdExtensionResult));
    }

    // Check if all image files have valid extensions.
    core.notice(`Testing image extensions...`);
    const imgExtensionResult = testExtensions(
      imageExtensions,
      changedFilesArray,
      directories[1]        // image directory
    );
    if (imgExtensionResult.status !== STATUS.VALID) {
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
      core.error(JSON.stringify(duplicationResult));
      core.setFailed(JSON.stringify(duplicationResult));
    }

    // Check if all logo files are in correct format and ratio.
    core.notice("Testing Logo Files...");
    const logoResult = testLogo(imageExtensions, mdExtensionResult.validFiles);
    if (logoResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(logoResult));
      core.setFailed(JSON.stringify(logoResult));
    }

    core.notice(
      `Result: ${JSON.stringify({
        mdExtensionResult,
        imgExtensionResult,
        markdownResult,
        logoResult,
      })}`
    );
    core.setOutput(
      "changed",
      JSON.stringify({
        mdExtensionResult,
        imgExtensionResult,
        markdownResult,
        logoResult,
      })
    );
  } else {
    core.setFailed("No files changed!");
  }
} catch (error) {
  core.setFailed(error.message);
}
