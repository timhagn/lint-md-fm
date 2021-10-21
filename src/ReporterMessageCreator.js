const { MARKDOWN_CONTENTS } = require("../msgMd");
const {
  ERRORS,
  COMBINED_MISSING_TAG_ERRORS,
  COMBINED_LOGO_ERRORS,
} = require("./constants");

/**
 * Checks if there are any errors in result set.
 *
 * @param results
 * @returns {*}
 */
const hasErrors = (results) => results.errors && results.errors.length;

/**
 * Get the first error message from results to switch.
 *
 * @param results
 * @returns {string|*}
 */
const getFirstError = (results) => {
  if (hasErrors(results)) {
    return results.errors[0].error;
  }
  return "";
};

/**
 * Returns all unique invalid Files.
 *
 * @param results
 * @returns {*[]|*}
 */
const getInvalidFiles = (results) => {
  if (results.errors) {
    return results.errors.reduce((allFiles, { file }) => {
      if (!allFiles.includes(file)) {
        allFiles.push(file);
      }
      return allFiles;
    }, []);
  }
  return [];
};

/**
 * Returns all invalid files combined.
 *
 * @param results
 * @returns {string|*}
 */
const getInvalidFilesString = (results) => {
  if (results.errors) {
    return getInvalidFiles(results).join("   ");
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
      .join("\n");
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
      .join("\n");
  }
  return "";
};

/**
 * Returns a string with a list of files with invalid logo tags.
 *
 * @param results
 * @returns {string|*}
 */
const getInvalidLogoFilesString = (results) => {
  if (results.errors) {
    return results.errors
      .reduce((accumulatedErrors, { error, file, logo }) => {
        if (error === ERRORS.LOGO_INVALID) {
          const invalidLogoErrorMessage = `**${file}** had an invalid logo tag **${logo}**`;
          accumulatedErrors.push(invalidLogoErrorMessage);
        }
        return accumulatedErrors;
      }, [])
      .join("\n");
  }
  return "";
};

/**
 * Returns a string with a list of files with invalid categories.
 *
 * @param results
 * @returns {string|*}
 */
const getInvalidCategoriesFilesString = (results) => {
  if (results.errors) {
    return results.errors
      .reduce((accumulatedErrors, { error, file, values }) => {
        if (error === ERRORS.CATEGORY_INVALID) {
          const invalidCategoriesErrorMessage = `**${file}** had the following invalid categories **${values.join(
            ", "
          )}**`;
          accumulatedErrors.push(invalidCategoriesErrorMessage);
        }
        return accumulatedErrors;
      }, [])
      .join("\n");
  }
  return "";
};

/**
 * Returns a string with a list of files with invalid categories.
 *
 * @param results
 * @returns {string|*}
 */
const getLogoErrorsFilesString = (results) => {
  if (results.errors) {
    return results.errors
      .reduce(
        (
          accumulatedErrors,
          { error, file, logo, width, height, ext, fileType }
        ) => {
          if (error === ERRORS.LOGO_FILE) {
            const logoExistenceErrorMessage = `**${file}** had a missing logo file: **${logo}**`;
            accumulatedErrors.push(logoExistenceErrorMessage);
          }
          if (error === ERRORS.LOGO_SIZE) {
            const logoSizeErrorMessage = `**${file}** had a logo file with a wrong ratio, **${logo}** - ratio ${(
              height / width
            ).toPrecision(2)}`;
            accumulatedErrors.push(logoSizeErrorMessage);
          }
          if (error === ERRORS.LOGO_FORMAT) {
            if (ext === "") {
              const logoFormatExtErrorMessage = `**${file}** had a logo file without extension, **${logo}**`;
              accumulatedErrors.push(logoFormatExtErrorMessage);
            } else {
              const logoFormatExtErrorMessage = `**${file}** had a logo file with a wrong extension (${ext}), **${logo}** is of type ${fileType}`;
              accumulatedErrors.push(logoFormatExtErrorMessage);
            }
          }
          return accumulatedErrors;
        },
        []
      )
      .join("\n");
  }
  return "";
};

/**
 * Creates a single error message to be combined afterwards.
 *
 * @param currentError
 * @param results
 * @param replacements
 * @returns {string}
 */
const createSingleErrorMessage = (currentError, results, replacements) => {
  switch (true) {
    case currentError === ERRORS.NO_FILES_CHANGED:
      return MARKDOWN_CONTENTS[currentError]();
    case currentError === ERRORS.EXTENSION_INVALID:
      const allExtensionReplacements = {
        ...replacements,
        INVALID_FILES: getInvalidFilesString(results),
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
    case currentError === ERRORS.CATEGORY_INVALID:
      const allInvalidCategoryFilesReplacements = {
        INVALID_FILES: getInvalidCategoriesFilesString(results),
      };
      return MARKDOWN_CONTENTS[currentError](
        allInvalidCategoryFilesReplacements
      );
    case currentError === ERRORS.LOGO_INVALID:
      const allInvalidLogoFilesReplacements = {
        INVALID_FILES: getInvalidLogoFilesString(results),
      };
      return MARKDOWN_CONTENTS[currentError](allInvalidLogoFilesReplacements);
    case COMBINED_LOGO_ERRORS.includes(currentError):
      const allLogoErrorsFilesReplacements = {
        INVALID_FILES: getLogoErrorsFilesString(results),
      };
      return MARKDOWN_CONTENTS["COMBINED_LOGO_ERRORS"](
        allLogoErrorsFilesReplacements
      );
    default:
      return MARKDOWN_CONTENTS["ALL_OK"]();
  }
};

/**
 * Parses the resulting errors and generates comments accordingly.
 *
 * @param results
 * @param replacements
 * @returns {string|*}
 */
const createMessageFromResults = (results, replacements = {}) => {
  // First check if AOK.
  const currentError = getFirstError(results);
  if (!hasErrors(results) || currentError === "") {
    return createSingleErrorMessage(currentError, replacements);
  }

  // Setup duplicate message prevention.
  let checkedForInvalidExtension = false;
  let checkedForProjectDuplication = false;
  let checkedForInvalidFiles = false;
  let checkedForMissingTags = false;
  let checkedForInvalidCategories = false;
  let checkedForInvalidLogoFiles = false;
  let checkedForLogoErrors = false;

  // Else loop over errors & combine message.
  return results.errors
    .reduce((allMessages, { error: currentErrorInResultSet }) => {
      let createMessage;
      switch (true) {
        case currentErrorInResultSet === ERRORS.EXTENSION_INVALID &&
          !checkedForInvalidExtension:
          createMessage = true;
          checkedForInvalidExtension = true;
          break;
        case currentErrorInResultSet === ERRORS.PROJECT_DUPLICATION &&
          !checkedForProjectDuplication:
          createMessage = true;
          checkedForProjectDuplication = true;
          break;
        case currentErrorInResultSet === ERRORS.DATA_INVALID &&
          !checkedForInvalidFiles:
          createMessage = true;
          checkedForInvalidFiles = true;
          break;
        case Object.keys(COMBINED_MISSING_TAG_ERRORS).includes(
          currentErrorInResultSet
        ) && !checkedForMissingTags:
          createMessage = true;
          checkedForMissingTags = true;
          break;
        case currentErrorInResultSet === ERRORS.CATEGORY_INVALID &&
          !checkedForInvalidCategories:
          createMessage = true;
          checkedForInvalidCategories = true;
          break;
        case currentErrorInResultSet === ERRORS.LOGO_INVALID &&
          !checkedForInvalidLogoFiles:
          createMessage = true;
          checkedForInvalidCategories = true;
          break;
        case COMBINED_LOGO_ERRORS.includes(currentErrorInResultSet) &&
          !checkedForLogoErrors:
          createMessage = true;
          checkedForLogoErrors = true;
          break;
        default:
          createMessage =
            currentErrorInResultSet === ERRORS.NO_FILES_CHANGED ||
            currentError === "";
      }
      if (createMessage) {
        const currentMessage = createSingleErrorMessage(
          currentErrorInResultSet,
          results,
          replacements
        );
        allMessages.push(currentMessage);
      }
      return allMessages;
    }, [])
    .join(`\n`);
};

module.exports = { createMessageFromResults, getInvalidFiles };
