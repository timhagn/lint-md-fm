const matter = require('gray-matter');

const { STATUS, ERRORS, CATEGORIES } = require("./constants");

function checkMarkdown(markdown) {
  const parsed = matter(markdown);
  let result = {
    status: STATUS.VALID,
    errors: []
  };
  if (parsed.data) {
    if (parsed.data.category) {
      if (CATEGORIES.indexOf(parsed.data.category) < 0) {
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

  return result;
}

exports.checkMarkdown = checkMarkdown;
