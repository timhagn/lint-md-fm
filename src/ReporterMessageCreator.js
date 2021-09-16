const { MARKDOWN_CONTENTS } = require("../msgMd");
const { ERRORS, COMBINED_MISSING_TAG_ERRORS } = require("./constants");

// Error codes and strings for each possible error.
// const ERRORS = {
//#   NO_FILES_CHANGED: "NO_FILES_CHANGED", // No relevant files have been changed in the commit.
//#   EXTENSION_INVALID: "EXTENSION_IS_INVALID", // Markdown or logo extension is not valid.
//#   DATA_INVALID: "DATA_INVALID", // Markdown is not in valid format.

//   CATEGORY_INVALID: "CATEGORY_INVALID", // Project category is invalid.
//   LOGO_INVALID: "INVALID_LOGO_NAME", // logo value is invalid. e.g. contains white space.

//   CATEGORY: "CATEGORY_NOT_EXIST", // "category" tag does not exist in the markdown.
//   SLUG: "SLUG_NOT_EXIST", // "slug" tag does not exist in the markdown.
//   DATE: "DATE_NOT_EXIST", // "date" tag does not exist in the markdown.
//   TITLE: "TITLE_NOT_EXIST", // "title" tag does not exist in the markdown.
//   LOGLINE: "LOGLINE_NOT_EXIST", // "logline" tag does not exist in the markdown.
//   CTA: "CTA_NOT_EXIST", // "cta" tag does not exist in the markdown.
//   LOGO: "LOGO_NOT_EXIST", // "logo" tag does not exist in the markdown.
//   STATUS: "STATUS_NOT_EXIST", // "state" tag does not exist in the markdown.

//   LOGO_FILE: "LOGO_FILE_NOT_EXIST", // logo file does not exist in the img directory.
//   LOGO_FORMAT: "INVALID_LOGO_FORMAT", // logo file format does not match the extension.
//   LOGO_SIZE: "INVALID_LOGO_SIZE", // logo image size is not in correct ratio.

//#   PROJECT_DUPLICATION: "PROJECT_ALREADY_EXIST", // Projects with the same slug exist already.
// };

/**
 * Get the first error message from results to switch.
 *
 * @param results
 * @returns {string|*}
 */
const getCurrentError = (results) => {
  if (results.errors && results.errors.length) {
    return results.errors[0].error;
  }
  return "";
};

/**
 * Returns all invalid files combined.
 *
 * @param results
 * @returns {string|*}
 */
const getInvalidFilesString = (results) => {
  if (results.errors) {
    return results.errors.map(({ file }) => file).join("   ");
  }
  return "";
};

/**
 * Returns a string with a list of duplicate files.
 *
 * @param results
 * @returns {string|*}
 */
const getInvalidDuplicateFilesString = (results) => {
  if (results.errors) {
    return results.errors
      .reduce((accumulatedErrors, { error, file, duplicates }) => {
        if (error === ERRORS.PROJECT_DUPLICATION) {
          const duplicationErrorMessage = `**${file}** had the following duplicates **${duplicates.join(
            ", "
          )}**`;
          accumulatedErrors.push(duplicationErrorMessage);
        }
        return accumulatedErrors;
      }, [])
      .join("   ");
  }
  return "";
};

/**
 * Returns a string with a list of files with missing tags.
 *
 * @param results
 * @returns {string|*}
 */
const getMissingTagFilesString = (results) => {
  if (results.errors) {
    const combinedErrorsByFile = results.errors.reduce(
      (accumulatedErrors, { error, file }) => {
        if (Object.keys(COMBINED_MISSING_TAG_ERRORS).includes(error)) {
          if (!accumulatedErrors[file]) {
            accumulatedErrors[file] = [COMBINED_MISSING_TAG_ERRORS[error]];
          } else {
            accumulatedErrors[file].push(COMBINED_MISSING_TAG_ERRORS[error]);
          }
        }
        return accumulatedErrors;
      },
      {}
    );
    return Object.keys(combinedErrorsByFile)
      .map(
        (file) =>
          `**${file}** misses the following tags: **${combinedErrorsByFile[
            file
          ].join(", ")}**`
      )
      .join("   ");
  }
  return "";
};

/**
 * Parses the resulting errors and generates comments accordingly.
 *
 * @param results
 * @param replacements
 * @returns {string|*}
 */
const createMessageFromResults = (results, replacements = {}) => {
  const currentError = getCurrentError(results);
  switch (true) {
    case currentError === ERRORS.NO_FILES_CHANGED:
      return MARKDOWN_CONTENTS[currentError]();
    case currentError === ERRORS.EXTENSION_INVALID:
      const invalidExtensionfileReplacements = getInvalidFilesString(results);
      const allExtensionReplacements = {
        ...replacements,
        INVALID_FILES: invalidExtensionfileReplacements,
      };
      return MARKDOWN_CONTENTS[currentError](allExtensionReplacements);
    case currentError === ERRORS.PROJECT_DUPLICATION:
      const allDuplicateReplacements = {
        INVALID_FILES: getInvalidDuplicateFilesString(results),
      };
      return MARKDOWN_CONTENTS[currentError](allDuplicateReplacements);
    case currentError === ERRORS.DATA_INVALID:
      const allInvalidFilesReplacements = {
        INVALID_FILES: getInvalidFilesString(results),
      };
      return MARKDOWN_CONTENTS[currentError](allInvalidFilesReplacements);
    case Object.keys(COMBINED_MISSING_TAG_ERRORS).includes(currentError):
      const allMissingTagFilesReplacements = {
        INVALID_FILES: getMissingTagFilesString(results),
      };
      return MARKDOWN_CONTENTS["COMBINED_MISSING_TAGS"](
        allMissingTagFilesReplacements
      );
    default:
      return "";
  }
};

module.exports = { createMessageFromResults };
