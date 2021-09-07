const DEFAULT_MARKDOWN_EXTENSIONS = [".md", ".mdx"];
const DEFAULT_IMAGE_EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];
const DEFAULT_FOLDERS = ["projects", "img"];

const STATUS = {
  VALID: "VALID",
  INVALID: "INVALID",
};

const ERRORS = {
  EXTENSION_INVALID: "EXTENSION_IS_INVALID",
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

module.exports = {
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
  STATUS,
  ERRORS,
  CATEGORIES,
};
