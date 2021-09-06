const path = require("path");
const { STATUS, ERRORS } = require("./constants");

/**
 * Loops over all files in all directories and checks their extensions.
 *
 * @param extensions
 * @param changedFiles
 * @param directories
 * @returns {{errors: *[], status: string}}
 */
const testExtensions = (extensions, changedFiles, directories) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  directories.forEach((directory) => {
    changedFiles.forEach((filePath) => {
      if (filePath.includes(directory)) {
        const extension = path.extname(filePath);
        if (!extensions.includes(extension)) {
          result.errors.push({
            error: ERRORS.EXTENSION_INVALID,
            file: filePath,
          });
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
  testExtensions,
};
