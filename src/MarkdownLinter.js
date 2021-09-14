const matter = require("gray-matter");

const { STATUS, ERRORS, CATEGORIES } = require("./constants");

/**
 * Validate a single markdown file content.
 *
 * @param markdown
 * @returns {{errors: *[], status: string}}
 */
function checkMarkdown(markdown) {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  try {
    // Parse the markdown using "gray-matter" package.
    const parsed = matter(markdown);
    // Continue only if the markdown is valid.
    if (parsed.data) {
      // Check all the required tags

      if (parsed.data.category) {
        // Check if all the categories are valid
        const categories = parsed.data.category
          .split(",")
          .map((cat) => cat.trim().toLowerCase());
        let invalidCategories = [];
        categories.forEach((cat) => {
          if (CATEGORIES.indexOf(cat) < 0) {
            invalidCategories.push(cat); // Grab all invalid categories
          }
        });
        if (invalidCategories.length > 0) {
          // include invalid categories in the error.
          result.errors.push({
            code: ERRORS.CATEGORY_INVALID,
            values: invalidCategories,
          });
        }
      } else {
        result.errors.push({ code: ERRORS.CATEGORY });
      }

      if (!parsed.data.slug) {
        result.errors.push({ code: ERRORS.SLUG });
      }

      if (!parsed.data.date) {
        result.errors.push({ code: ERRORS.DATE });
      }

      if (!parsed.data.title) {
        result.errors.push({ code: ERRORS.TITLE });
      }

      if (!parsed.data.logline) {
        result.errors.push({ code: ERRORS.LOGLINE });
      }

      if (!parsed.data.cta) {
        result.errors.push({ code: ERRORS.CTA });
      }

      if (!parsed.data.logo) {
        result.errors.push({ code: ERRORS.LOGO });
      } else {
        // Logo path should not include white space.
        if (parsed.data.logo.includes(" ")) {
          result.errors.push({ code: ERRORS.LOGO_INVALID });
        }
      }

      if (!parsed.data.status) {
        result.errors.push({ code: ERRORS.STATUS });
      }
    } else {
      result.errors.push({ code: ERRORS.DATA_INVALID });
    }

    // Set result status to Invalid if there's any error
    if (result.errors.length > 0) {
      result.status = STATUS.INVALID;
    }
  } catch (e) {
    // Catch exceptions when parsing the markdown
    result.status = STATUS.INVALID;
    result.errors.push({ code: ERRORS.DATA_INVALID });
  }

  return result;
}

exports.checkMarkdown = checkMarkdown;
