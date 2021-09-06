const core = require("@actions/core");
// const github = require("@actions/github");
// const exec = require("@actions/exec");
const { testExtensions } = require("./src/testExtensions");
const { STATUS } = require("./src/constants");

try {
  const changedFiles = core.getInput("changed-files");
  const directories = core.getMultilineInput("directories");
  const markdownExtensions = core.getMultilineInput("markdown-extensions");
  const imageExtensions = core.getMultilineInput("image-extensions");
  const extensions = [...markdownExtensions, ...imageExtensions];
  if (changedFiles.length) {
    const extensionResult = testExtensions(
      extensions,
      changedFiles,
      directories
    );
    if (extensionResult.status !== STATUS.VALID) {
      core.setFailed(JSON.stringify(extensionResult));
    }
    core.setOutput("changed", JSON.stringify(extensionResult));
  } else {
    core.setFailed("No files changed!");
  }
} catch (error) {
  core.setFailed(error.message);
}
