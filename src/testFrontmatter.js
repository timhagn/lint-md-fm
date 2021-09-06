const path = require("path");
const fs = require("fs");

const { STATUS } = require("./constants");
const { checkMarkdown } = require("./MarkdownLinter");

/**
 * Loops over all files in all directories and checks Markdown Frontmatter.
 *
 * @param markdownExtensions
 * @param changedFiles
 * @param directories
 * @returns {{errors: *[], status: string}}
 */
const testFrontmatter = (markdownExtensions, changedFiles, directories) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  directories.forEach((directory) => {
    changedFiles.forEach((filePath) => {
      if (filePath.includes(directory)) {
        const extension = path.extname(filePath);
        if (markdownExtensions.includes(extension)) {
          const markdownData = fs.readFileSync(filePath, "utf8");
          const markdownResult = checkMarkdown(markdownData);
          result.status = markdownResult.status;
          result.errors.push({ ...markdownResult.errors, file: filePath });
        }
      }
    });
  });

  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testFrontmatter,
};
