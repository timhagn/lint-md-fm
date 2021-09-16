const path = require("path");
const fs = require("fs");

const { STATUS, ERRORS } = require("./constants");
const { checkMarkdown } = require("./MarkdownLinter");

/**
 * Loops over all files in a directory and checks Markdown Frontmatter.
 *
 * @param markdownExtensions
 * @param changedFiles
 * @param directory
 * @returns {{errors: *[], status: string}}
 */
const testFrontmatter = (markdownExtensions, changedFiles, directory) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };

  // Loop over all the changed files
  changedFiles.forEach((filePath) => {
    // Check files in the specified directory only.
    if (filePath.includes(directory)) {
      const extension = path.extname(filePath);
      // Check files with valid markdown extensions only.
      if (markdownExtensions.includes(extension)) {
        const markdownData = fs.readFileSync(filePath, "utf8"); // Read markdown content from the file.
        const markdownResult = checkMarkdown(markdownData); // Lint the markdown using the Linter.
        if (markdownResult.errors.length > 0) {
          // Grab markdown syntax errors & process them to the common format.
          const processedErrors = markdownResult.errors.map((error) => ({
            error,
            file: filePath,
          }));
          result.errors.push(processedErrors);
        }
      }
    }
  });

  // Set result status to Invalid if there's any error
  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testFrontmatter,
};
