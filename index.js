const core = require("@actions/core");
// const github = require("@actions/github");
// const exec = require("@actions/exec");
const { testExtensions } = require("./src/testExtensions");
const {
  STATUS,
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("./src/constants");
const { testFrontmatter } = require("./src/testFrontmatter");

try {
  // Get all inputs or fall back to defaults.
  const changedFiles = core.getInput("changed-files");
  core.notice(`Files changed before running: ${changedFiles}`);
  const directories = core.getMultilineInput("directories") || DEFAULT_FOLDERS;
  const markdownExtensions =
    core.getMultilineInput("markdown-extensions") ||
    DEFAULT_MARKDOWN_EXTENSIONS;
  const imageExtensions =
    core.getMultilineInput("image-extensions") || DEFAULT_IMAGE_EXTENSIONS;
  const extensions = [...markdownExtensions, ...imageExtensions];

  // Only continue if any files have changed.
  if (changedFiles.length) {
    const changedFilesArray = changedFiles.split(",");
    core.notice(`Testing extensions... ${JSON.stringify(changedFilesArray)} ${changedFiles}`);
    const extensionResult = testExtensions(
      extensions,
      changedFilesArray,
      directories
    );
    if (extensionResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(extensionResult));
      core.setFailed(JSON.stringify(extensionResult));
    }

    core.notice("Testing Markdown Frontmatter...");
    const markdownResult = testFrontmatter(
      markdownExtensions,
      changedFilesArray,
      directories
    );

    if (markdownResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(markdownResult));
      core.setFailed(JSON.stringify(markdownResult));
    }

    core.notice(
      `Result: ${JSON.stringify({ extensionResult, markdownResult })}`
    );
    core.setOutput(
      "changed",
      JSON.stringify({ extensionResult, markdownResult })
    );
  } else {
    core.setFailed("No files changed!");
  }
} catch (error) {
  core.setFailed(error.message);
}
