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
        if (categories.some((cat) => CATEGORIES.indexOf(cat) < 0)) {
          result.errors.push(ERRORS.CATEGORY_INVALID);
        }
      } else {
        result.errors.push(ERRORS.CATEGORY);
      }

      if (!parsed.data.slug) {
        result.errors.push(ERRORS.SLUG);
      }

      if (!parsed.data.date) {
        result.errors.push(ERRORS.DATE);
      }

      if (!parsed.data.title) {
        result.errors.push(ERRORS.TITLE);
      }

      if (!parsed.data.logline) {
        result.errors.push(ERRORS.LOGLINE);
      }

      if (!parsed.data.cta) {
        result.errors.push(ERRORS.CTA);
      }

      if (!parsed.data.logo) {
        result.errors.push(ERRORS.LOGO);
      } else {
        // Logo path should not include white space.
        if (parsed.data.logo.includes(" ")) {
          result.errors.push(ERRORS.LOGO_INVALID);
        }
      }

      if (!parsed.data.status) {
        result.errors.push(ERRORS.STATUS);
      }
    } else {
      result.errors.push(ERRORS.DATA_INVALID);
    }

    // Set result status to Invalid if there's any error
    if (result.errors.length > 0) {
      result.status = STATUS.INVALID;
    }
  } catch (e) {
    // Catch exceptions when parsing the markdown
    result.status = STATUS.INVALID;
    result.errors.push(ERRORS.DATA_INVALID);
  }

  return result;
}

exports.checkMarkdown = checkMarkdown;
