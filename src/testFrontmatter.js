const path = require("path");
const fs = require("fs");

const { STATUS } = require("./constants");
const { checkMarkdown } = require("./MarkdownLinter");

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
          result.errors = [...result.errors, ...markdownResult.errors];
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
