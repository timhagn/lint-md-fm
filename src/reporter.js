const core = require("@actions/core");
const { context, getOctokit } = require("@actions/github");

const initReporter = () => {
  const token = core.getInput("github-token", { required: true });
  const debug = core.getInput("debug");

  const opts = {};
  if (debug === "true") opts.log = console;

  return getOctokit(token, opts);
};

const reporterComment = async (results, reporter = null) => {
  let github;
  if (!reporter) {
    github = initReporter();
  } else {
    github = reporter;
  }

  await github.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: "👋 Thanks for reporting!",
  });
};

module.exports = { initReporter, reporterComment };
