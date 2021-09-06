const matter = require('gray-matter');

const CATEGORIES = [
  'amm',
  'app',
  'defi',
  'dex',
  'exchange',
  'explorer',
  'governance',
  'infra',
  'oracle',
  'spl',
  'stablecoin',
  'tools',
  'nft',
  'wallet',
  'fund',
  'investmentfund'
];

const STATUS = {
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const ERRORS = {
  DATA_INVALID: 'DATA_INVALID',
  CATEGORY_INVALID: 'CATEGORY_INVALID',
  CATEGORY: 'CATEGORY_NOT_EXIST',
  SLUG: 'SLUG_NOT_EXIST',
  DATE: 'DATE_NOT_EXIST',
  TITLE: 'TITLE_NOT_EXIST',
  LOGLINE: 'LOGLINE_NOT_EXIST',
  CTA: 'CTA_NOT_EXIST',
  LOGO: 'LOGO_NOT_EXIST',
  STATUS: 'STATUS_NOT_EXIST',
};

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
