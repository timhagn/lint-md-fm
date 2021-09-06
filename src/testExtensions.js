const path = require("path");
const { STATUS, ERRORS } = require("./constants");

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
          result.errors.push(ERRORS.EXTENSION_INVALID);
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
