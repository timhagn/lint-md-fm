const { STATUS } = require("./constants");
const { testExtensions } = require("./testExtensions");
const { testFrontmatter } = require("./testFrontmatter");
const { testDuplication } = require("./testDuplication");
const { testLogo } = require("./testLogo");

const runLinterActions = (
  changedFilesArray,
  directories,
  markdownExtensions,
  imageExtensions,
  isFuzzySearch,
  logger
) => {
  // Check if all markdown files have valid extensions.
  logger(`Testing markdown extensions...`);
  const mdExtensionResult = testExtensions(
    markdownExtensions,
    changedFilesArray,
    directories[0] // markdown directory
  );
  // Show errors if any and flag the action as failed.
  if (mdExtensionResult.status !== STATUS.VALID) {
    // Create an error comment for invalid project file extensions.
    logger(JSON.stringify(mdExtensionResult));
  }

  // Check if all image files have valid extensions.
  logger(`Testing image extensions...`);
  const imgExtensionResult = testExtensions(
    imageExtensions,
    changedFilesArray,
    directories[1] // image directory
  );
  if (imgExtensionResult.status !== STATUS.VALID) {
    // Create an error comment for invalid image extensions.
    logger(JSON.stringify(imgExtensionResult));
  }

  // Check if all markdown files have valid tags.
  logger("Testing Markdown Frontmatter...");
  const markdownResult = testFrontmatter(
    markdownExtensions,
    changedFilesArray,
    directories[0]
  );
  if (markdownResult.status !== STATUS.VALID) {
    logger(JSON.stringify(markdownResult));
  }

  // Check projects duplication.
  logger(`Testing project duplication...`);
  const duplicationResult = testDuplication(
    mdExtensionResult.validFiles,
    markdownExtensions,
    directories[0],
    isFuzzySearch
  );
  if (duplicationResult.status !== STATUS.VALID) {
    // Create an error comment for duplicate files.
    logger(JSON.stringify(duplicationResult));
  }

  // Check if all logo files are in correct format and ratio.
  logger("Testing Logo Files...");
  const logoResult = testLogo(imageExtensions, mdExtensionResult.validFiles);
  if (logoResult.status !== STATUS.VALID) {
    // Create an error comment for invalid logo files.
    logger(JSON.stringify(logoResult));
  }
  return {
    mdExtensionResult,
    imgExtensionResult,
    markdownResult,
    duplicationResult,
    logoResult,
  };
};

module.exports = { runLinterActions };
