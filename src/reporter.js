const core = require("@actions/core");
const github = require("@actions/github");

const initReporter = () => {
  const token = core.getInput("github-token", { required: true });
  const debug = core.getInput("debug");

  const opts = {};
  if (debug === "true") opts.log = console;

  return github.getOctokit(token, opts);
};

const reporterComment = async (results, reporter = null) => {
  let octokit;
  if (!reporter) {
    octokit = initReporter();
  } else {
    octokit = reporter;
  }
  const context = octokit.context;

  core.notice(`Commenting results... ${JSON.stringify(context)}`);
  const result = await octokit.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: "👋 Thanks for reporting!",
  });
  core.notice(result);
};

module.exports = { initReporter, reporterComment };
