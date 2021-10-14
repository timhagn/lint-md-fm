const core = require("@actions/core");
const github = require("@actions/github");
const { HttpClient } = require("@actions/http-client");
const { createMessageFromResults } = require("./ReporterMessageCreator");

/**
 * Get all Pull Requests of current repo.
 *
 * @param params
 * @returns {Promise<unknown>}
 */
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

/**
 * Extract issue number from Pull Request List as a fallback.
 *
 * @param commitPullsList
 * @returns {*|null}
 */
const getIssueNumberFromCommitPullsList = (commitPullsList) =>
  commitPullsList.length ? commitPullsList[0].number : null;

/**
 * Check for already existing comment in PR to prevent duplicate posting.
 *
 * @param message
 * @param comments
 * @returns {*}
 */
const isMessagePresent = (message, comments) => {
  const cleanRe = new RegExp("\\R|\\s", "g");
  const messageClean = message.replace(cleanRe, "");

  return comments.some(
    ({ body }) => body.replace(cleanRe, "") === messageClean
  );
};

/**
 * Initialize octokit.
 *
 * @param token
 * @param debug
 * @returns {InstanceType<typeof GitHub>}
 */
const initOctokit = (token, debug) => {
  const opts = {};
  if (debug === "true") opts.log = console;

  return github.getOctokit(token, opts);
};

/**
 * Posts a comment for the results.
 *
 * @param repoToken
 * @param debug
 * @param results
 * @param extensionReplacements
 * @param reporter
 * @returns {Promise<void>}
 */
const reporterComment = async (
  repoToken,
  debug,
  results,
  extensionReplacements,
  reporter = null
) => {
  // Do we have an existing reporter?
  let octokit;
  if (!reporter) {
    octokit = initOctokit(repoToken, debug);
  } else {
    octokit = reporter;
  }

  // Get current issue / PR info.
  const {
    payload: { pull_request: pullRequest, issue, repository },
    sha: commitSha,
  } = github.context;

  if (!repository) {
    core.info("unable to determine repository from request type");
    core.setOutput("comment-created", "false");
    return;
  }

  // Extract data about issue / PR.
  const { full_name: repoFullName } = repository;
  const [owner, repo] = repoFullName.split("/");

  // Get issue number from issue, PR or try to extract it form all Pull requests.
  let issueNumber;
  if (issue && issue.number) {
    issueNumber = issue.number;
  } else if (pullRequest && pullRequest.number) {
    issueNumber = pullRequest.number;
  } else {
    // If this is not a pull request, attempt to find a PR matching the sha
    const commitPullsList = await listCommitPulls({
      repoToken,
      owner,
      repo,
      commitSha,
    });
    issueNumber =
      commitPullsList && getIssueNumberFromCommitPullsList(commitPullsList);
  }

  // Create message from errors or return success message.
  const message = createMessageFromResults(results, extensionReplacements);
  if (issueNumber) {
    // Check to see if comment is existing & post it if not.
    const { data: comments } = await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: issueNumber,
    });
    if (!isMessagePresent(message, comments)) {
      core.notice(`Commenting results...`);
      const result = await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body: message,
      });
      core.notice(result);
    }
  } else {
    core.notice(
      `No issue number found (PR?), but wanted to create the following comment: ${message}`
    );
  }
};

module.exports = { initOctokit, reporterComment };
