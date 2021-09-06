const core = require("@actions/core");
// const github = require("@actions/github");
// const exec = require("@actions/exec");
const { testExtensions } = require("./src/testExtensions");
const { STATUS } = require("./src/constants");
const { testFrontmatter } = require("./src/testFrontmatter");

try {
  const changedFiles = core.getInput("changed-files");
  const directories = core.getMultilineInput("directories");
  const markdownExtensions = core.getMultilineInput("markdown-extensions");
  const imageExtensions = core.getMultilineInput("image-extensions");
  const extensions = [...markdownExtensions, ...imageExtensions];

  if (changedFiles.length) {
    core.notice('Testing extensions...')
    const extensionResult = testExtensions(
      extensions,
      changedFiles,
      directories
    );
    if (extensionResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(extensionResult));
      core.setFailed(JSON.stringify(extensionResult));
    }

    core.notice('Testing Markdown Frontmatter...')
    const markdownResult = testFrontmatter(
      markdownExtensions,
      changedFiles,
      directories
    );

    if (markdownResult.status !== STATUS.VALID) {
      core.error(JSON.stringify(markdownResult));
      core.setFailed(JSON.stringify(markdownResult));
    }

    core.setOutput("changed", JSON.stringify(extensionResult));
  } else {
    core.setFailed("No files changed!");
  }
} catch (error) {
  core.setFailed(error.message);
}
