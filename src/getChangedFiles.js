const core = require("@actions/core");
const github = require("@actions/github");
const { initOctokit } = require("./reporter");

const getChangedFiles = async (repoToken, debug) => {
  try {
    const octokit = initOctokit(repoToken, debug);
    const context = github.context;

    const eventName = context.eventName;

    // Define the base and head commits to be extracted from the payload.
    let base;
    let head;

    core.notice(JSON.stringify(context.payload));

    switch (eventName) {
      case "pull_request":
      case "pull_request_target":
        base = context.payload.base_ref;
        head = context.payload.head_ref;
        break;
      case "push":
        base = context.payload.before;
        head = context.payload.after;
        break;
      default:
        core.setFailed(
          `This action only supports pull requests and pushes, ${context.eventName} events are not supported. ` +
            "Please submit an issue on this action's GitHub repo if you believe this in correct."
        );
    }

    // Ensure that the base and head properties are set on the payload.
    if (!base || !head) {
      core.setFailed(
        `The base and head commits are missing from the payload for this ${context.eventName} event. ` +
          "Please submit an issue on this action's GitHub repo."
      );

      // To satisfy TypeScript, even though this is unreachable.
      base = "";
      head = "";
    }

    // Use GitHub's compare two commits API.
    // https://developer.github.com/v3/repos/commits/#compare-two-commits
    const response = await octokit.rest.repos.compareCommits({
      base,
      head,
      owner: context.repo.owner,
      repo: context.repo.repo,
    });

    // Ensure that the request was successful.
    if (response.status !== 200) {
      core.setFailed(
        `The GitHub API for comparing the base and head commits for this ${context.eventName} event returned ${response.status}, expected 200. ` +
          "Please submit an issue on this action's GitHub repo."
      );
    }

    // Ensure that the head commit is ahead of the base commit.
    if (response.data.status !== "ahead") {
      core.setFailed(
        `The head commit for this ${context.eventName} event is not ahead of the base commit. ` +
          "Please submit an issue on this action's GitHub repo."
      );
    }

    const files = response.data.files;

    const all = [],
      added = [],
      modified = [],
      removed = [],
      renamed = [],
      addedModified = [];
    for (const file of files) {
      const filename = file.filename;
      all.push(filename);
      switch (file.status) {
        case "added":
          added.push(filename);
          addedModified.push(filename);
          break;
        case "modified":
          modified.push(filename);
          addedModified.push(filename);
          break;
        case "removed":
          removed.push(filename);
          break;
        case "renamed":
          renamed.push(filename);
          break;
        default:
          core.setFailed(
            `One of your files includes an unsupported file status '${file.status}', expected 'added', 'modified', 'removed', or 'renamed'.`
          );
      }
    }

    const allFormatted = all.join(",");
    const addedFormatted = added.join(",");
    const modifiedFormatted = modified.join(",");
    const removedFormatted = removed.join(",");
    const renamedFormatted = renamed.join(",");
    const addedModifiedFormatted = addedModified.join(",");

    // Log the output values.
    core.info(`All: ${allFormatted}`);
    core.info(`Added: ${addedFormatted}`);
    core.info(`Modified: ${modifiedFormatted}`);
    core.info(`Removed: ${removedFormatted}`);
    core.info(`Renamed: ${renamedFormatted}`);
    core.info(`Added or modified: ${addedModifiedFormatted}`);

    return {
      allFormatted,
      addedFormatted,
      modifiedFormatted,
      removedFormatted,
      renamedFormatted,
      addedModifiedFormatted,
    };
  } catch (error) {
    core.notice(error.message);
  }
};

module.exports = { getChangedFiles };
