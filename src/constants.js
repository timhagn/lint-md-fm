const DEFAULT_MARKDOWN_EXTENSIONS = [".md", ".mdx"];
const DEFAULT_IMAGE_EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];
const DEFAULT_FOLDERS = ["img, projects"]

const STATUS = {
  VALID: "VALID",
  INVALID: "INVALID",
};

const ERRORS = {
  EXTENSION_INVALID: "EXTENSION_IS_INVALID",
};

module.exports = {
  DEFAULT_FOLDERS,
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
  STATUS,
  ERRORS,
};
