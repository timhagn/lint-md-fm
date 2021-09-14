const DEFAULT_MARKDOWN_EXTENSIONS = [".md", ".mdx"];
const DEFAULT_IMAGE_EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];
const DEFAULT_FOLDERS = ["projects", "img"];

const STATUS = {
  VALID: "VALID",
  INVALID: "INVALID",
};

// Error codes and strings for each possible error.
const ERRORS = {
  EXTENSION_INVALID: "EXTENSION_IS_INVALID",
  DATA_INVALID: "DATA_INVALID",
  CATEGORY_INVALID: "CATEGORY_INVALID",
  CATEGORY: "CATEGORY_NOT_EXIST",
  SLUG: "SLUG_NOT_EXIST",
  DATE: "DATE_NOT_EXIST",
  TITLE: "TITLE_NOT_EXIST",
  LOGLINE: "LOGLINE_NOT_EXIST",
  CTA: "CTA_NOT_EXIST",
  LOGO: "LOGO_NOT_EXIST",
  LOGO_INVALID: "INVALID_LOGO_NAME",
  STATUS: "STATUS_NOT_EXIST",
  LOGO_FILE: "LOGO_FILE_NOT_EXIST",
  LOGO_FORMAT: "INVALID_LOGO_FORMAT",
  LOGO_SIZE: "INVALID_LOGO_SIZE",
  PROJECT_DUPLICATION: "PROJECT_ALREADY_EXIST",
};

// Valid project categories. Used for the "category" tag in the markdown file.
const CATEGORIES = [
  "amm",
  "app",
  "dapp",
  "defi",
  "dex",
  "exchange",
  "explorer",
  "fund",
  "governance",
  "infra",
  "investmentfund",
  "metaplex",
  "nft",
  "oracle",
  "sdk",
  "spl",
  "stablecoin",
  "tools",
  "wallet",
];

module.exports = {
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
  STATUS,
  ERRORS,
  CATEGORIES,
};
