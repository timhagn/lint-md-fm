const core = require("@actions/core");
const github = require("@actions/github");
const { HttpClient } = require("@actions/http-client");

const listCommitPulls = async (params) => {
  const { repoToken, owner, repo, commitSha } = params;

  const http = new HttpClient("http-client-add-pr-comment");

  const additionalHeaders = {
    accept: "application/vnd.github.groot-preview+json",
    authorization: `token ${repoToken}`,
  };

  const body = await http.getJson(
    `https://api.github.com/repos/${owner}/${repo}/commits/${commitSha}/pulls`,
    additionalHeaders
  );

  return body.result;
};

const getIssueNumberFromCommitPullsList = (commitPullsList) =>
  commitPullsList.length ? commitPullsList[0].number : null;

const isMessagePresent = (message, comments) => {
  const cleanRe = new RegExp("\\R|\\s", "g");
  const messageClean = message.replace(cleanRe, "");

  return comments.some(
    ({ body }) => body.replace(cleanRe, "") === messageClean
  );
};

const initReporter = (token, debug) => {
  const opts = {};
  if (debug === "true") opts.log = console;

  return github.getOctokit(token, opts);
};

const reporterComment = async (results, reporter = null) => {
  const token = core.getInput("github-token", { required: true });
  const debug = core.getInput("debug");

  let octokit;
  if (!reporter) {
    octokit = initReporter(token, debug);
  } else {
    octokit = reporter;
  }
  const context = github.context;
  const { sha: commitSha } = context;
  const { owner, repo } = context.repo.owner;
  let issueNumber = context.issue.number;

  if (!issueNumber) {
    // If this is not a pull request, attempt to find a PR matching the sha
    const commitPullsList = await listCommitPulls({
      token,
      owner,
      repo,
      commitSha,
    });
    issueNumber =
      commitPullsList && getIssueNumberFromCommitPullsList(commitPullsList);
  }

  const message = "👋 Thanks for reporting!";
  //
  // const { data: comments } = await octokit.rest.issues.listComments({
  //   owner,
  //   repo,
  //   issue_number: issueNumber,
  // });
  // if (!isMessagePresent(message, comments)) {
    core.notice(`Commenting results... ${JSON.stringify(context)}`);
    const result = await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: message,
    });
    core.notice(result);
  // }
};

module.exports = { initReporter, reporterComment };
