const DEFAULT_MARKDOWN_EXTENSIONS = [".md", ".mdx"];
const DEFAULT_IMAGE_EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];
const DEFAULT_FOLDERS = ["projects", "img"];

const STATUS = {
  VALID: "VALID",
  INVALID: "INVALID",
};

// Error codes and strings for each possible error.
const ERRORS = {
  EXTENSION_INVALID: "EXTENSION_IS_INVALID", // Markdown or logo extension is not valid.
  DATA_INVALID: "DATA_INVALID", // Markdown is not in valid format.
  CATEGORY_INVALID: "CATEGORY_INVALID", // Project category is invalid.
  CATEGORY: "CATEGORY_NOT_EXIST", // "category" tag does not exist in the markdown.
  SLUG: "SLUG_NOT_EXIST", // "slug" tag does not exist in the markdown.
  DATE: "DATE_NOT_EXIST", // "date" tag does not exist in the markdown.
  TITLE: "TITLE_NOT_EXIST", // "title" tag does not exist in the markdown.
  LOGLINE: "LOGLINE_NOT_EXIST", // "logline" tag does not exist in the markdown.
  CTA: "CTA_NOT_EXIST", // "cta" tag does not exist in the markdown.
  LOGO: "LOGO_NOT_EXIST", // "logo" tag does not exist in the markdown.
  LOGO_INVALID: "INVALID_LOGO_NAME", // logo value is invalid. e.g. contains white space.
  STATUS: "STATUS_NOT_EXIST", // "state" tag does not exist in the markdown.
  LOGO_FILE: "LOGO_FILE_NOT_EXIST", // logo file does not exist in the img directory.
  LOGO_FORMAT: "INVALID_LOGO_FORMAT", // logo file format does not match the extension.
  LOGO_SIZE: "INVALID_LOGO_SIZE", // logo image size is not in correct ratio.
  PROJECT_DUPLICATION: "PROJECT_ALREADY_EXIST", // Projects with the same slug exist already.
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
