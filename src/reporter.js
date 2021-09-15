const core = require("@actions/core");
const github = require("@actions/github");

const isMessagePresent = (message, comments) => {
  const cleanRe = new RegExp("\\R|\\s", "g");
  const messageClean = message.replace(cleanRe, "");

  return comments.some(
    ({ body }) => body.replace(cleanRe, "") === messageClean
  );
};

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
  const context = github.context;
  const issueNumber = context.issue.number;
  const { owner, repo } = context.repo.owner;

  const message = "👋 Thanks for reporting!";

  const { data: comments } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number: issueNumber,
  });
  if (!isMessagePresent(message, comments)) {
    core.notice(`Commenting results... ${JSON.stringify(context)}`);
    const result = await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: message,
    });
    core.notice(result);
  }
};

module.exports = { initReporter, reporterComment };
