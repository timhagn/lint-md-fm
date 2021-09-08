const matter = require('gray-matter');

const { STATUS, ERRORS, CATEGORIES } = require("./constants");

function checkMarkdown(markdown) {
  let result = {
    status: STATUS.VALID,
    logo: '',
    errors: []
  };
  try {
    const parsed = matter(markdown);
    if (parsed.data) {
      result.logo = parsed.data.logo;
      if (parsed.data.category) {
        const categories = parsed.data.category
                            .split(',')
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
        if (parsed.data.logo.includes(' ')) {
          result.errors.push(ERRORS.LOGO_INVALID);
        }
      }

      if (!parsed.data.status) {
        result.errors.push(ERRORS.STATUS);
      }
    } else {
      result.errors.push(ERRORS.DATA_INVALID);
    }

    if (result.errors.length > 0) {
      result.status = STATUS.INVALID;
    }
  } catch (e) {
    result.status = STATUS.INVALID;
    result.errors.push(ERRORS.DATA_INVALID);
  }

  return result;
}

exports.checkMarkdown = checkMarkdown;
