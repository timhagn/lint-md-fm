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
  changedFiles.forEach((filePath) => {
    // check markdown files in the specified directory
    if (filePath.includes(directory)) {
      const extension = path.extname(filePath);
      if (markdownExtensions.includes(extension)) {
        const markdownData = fs.readFileSync(filePath, "utf8");
        const markdownResult = checkMarkdown(markdownData);
        let errors = markdownResult.errors || [];
        if (markdownResult.logo) {
          // Check logo error
          if (!fs.existsSync(markdownResult.logo.slice(1))) {    // remove "/" at the beginning of the image path
            // logo file doesn't exist
            errors.push(ERRORS.LOGO_FILE);
          }
        }
        if (errors.length > 0) {
          // Grab markdown syntax errors
          result.errors.push({ errors, file: filePath });
        }
      }
    }
  });

  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testFrontmatter,
};
