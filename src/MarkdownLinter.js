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
    error: null,
    message: ''
  };
  if (parsed.data) {
    if (parsed.data.category) {
      if (CATEGORIES.indexOf(parsed.data.category) < 0) {
        result = {
          status: STATUS.INVALID,
          error: ERRORS.CATEGORY_INVALID,
          message: `"${parsed.data.category}" is not a valid category.`
        };
      }
    } else {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.CATEGORY,
        message: 'The category tag is missing.'
      };
    }

    if (!parsed.data.slug) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.SLUG,
        message: 'The slug tag is missing.'
      };
    }

    if (!parsed.data.date) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.DATE,
        message: 'The date tag is missing.'
      };
    }

    if (!parsed.data.title) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.TITLE,
        message: 'The title tag is missing.'
      };
    }

    if (!parsed.data.logline) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.LOGLINE,
        message: 'The logline tag is missing.'
      };
    }

    if (!parsed.data.cta) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.CTA,
        message: 'The cta tag is missing.'
      };
    }

    if (!parsed.data.logo) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.LOGO,
        message: 'The logo tag is missing.'
      };
    }

    if (!parsed.data.status) {
      result = {
        status: STATUS.INVALID,
        error: ERRORS.STATUS,
        message: 'The status tag is missing.'
      };
    }
  } else {
    result = {
      status: STATUS.INVALID,
      error: ERRORS.DATA_INVALID,
      message: 'Markdown is in invalid format.'
    }
  }

  return result;
}

exports.checkMarkdown = checkMarkdown;
