const path = require("path");
const { STATUS, ERRORS } = require("./constants");

/**
 * Loops over all files in a directory and checks their extensions.
 *
 * @param extensions
 * @param changedFiles
 * @param directory
 * @returns {{errors: *[], validFiles: [string], status: string}}
 */
const testExtensions = (extensions, changedFiles, directory) => {
  let result = {
    status: STATUS.VALID,
    validFiles: [],             // Used for logo validation in later stage
    errors: [],
  };
  changedFiles.forEach((filePath) => {
    // Check files in the specific directory only.
    if (filePath.includes(directory)) {
      let extension = path.extname(filePath) || "";
      extension = extension.toLowerCase();
      // Check if a file in the specific directory has a valid extension
      if (extensions.includes(extension)) {
        result.validFiles.push(filePath);
      } else {
        result.errors.push({
          error: ERRORS.EXTENSION_INVALID,
          file: filePath,
        });
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
  testExtensions,
};
