const core = require("@actions/core");
const github = require("@actions/github");
const exec = require('@actions/exec');

try {
  const changedFiles = core.getInput("changed-files");
  core.setOutput("changed", JSON.stringify(changedFiles));
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2);
  // core.debug(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
