const core = require("@actions/core");
const github = require("@actions/github");

try {
  const changedFiles = core.getInput("CHANGED_FILES");
  core.setFailed(JSON.stringify(changedFiles));
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.debug(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
