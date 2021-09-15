const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const probe = require("probe-image-size");

const { STATUS, ERRORS } = require("./constants");

/**
 * Parse markdown and grab the logo path.
 *
 * @param filePath
 * @returns {string}
 */
const getLogoPath = (filePath) => {
  const markdownData = fs.readFileSync(filePath, "utf8");
  const parsed = matter(markdownData);
  let logoPath = "";
  if (parsed.data && parsed.data.logo) {
    logoPath = parsed.data.logo.slice(1); // remove "/" at the beginning of the image path.
  }
  return logoPath;
};

/**
 * Check logo file name & format.
 *
 * @param extensions
 * @param logoPath
 * @returns {{error: null}}
 */
const checkLogoFile = (extensions, logoPath) => {
  let result = {
    error: null,
  };

  // Check logo error.
  if (!fs.existsSync(logoPath)) {
    // logo file doesn't exist.
    result.error = ERRORS.LOGO_FILE;
  } else {
    const extension = path.extname(logoPath).toLowerCase();
    if (extensions.indexOf(extension) < 0) {
      // Logo file extension is not valid.
      result.error = ERRORS.LOGO_FORMAT;
    } else {
      const data = fs.readFileSync(logoPath);
      const meta = probe.sync(data); // Grab meta information of the logo. See https://www.npmjs.com/package/probe-image-size
      const ext = extension.slice(1); // Remove "." from the extension string.
      // Check if the extension matches the file format. Works for all svg/png/jpg/jpeg extensions.
      if (meta.type === ext || meta.mime.includes(ext)) {
        const ratio = meta.height / meta.width;
        // Check the logo image ratio
        if (ratio < 0.9 || ratio > 1.1) {
          result.error = ERRORS.LOGO_SIZE;
        }
      } else {
        result.error = ERRORS.LOGO_FORMAT;
      }
    }
  }
  return result;
};

/**
 * Loops over all files in a directory and checks Logos.
 *
 * @param extensions            // Valid image extensions.
 * @param changedFiles          // Changed markdown files that are already validated in a previous step.
 * @returns {{errors: *[], status: string}}
 */
const testLogo = (extensions, changedFiles) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  changedFiles.forEach((filePath) => {
    // Grab logo filename.
    const logoPath = getLogoPath(filePath); // Grab logo file path.
    const logoCheckResult = checkLogoFile(extensions, logoPath); // Grab the logo validation result.
    if (logoCheckResult.error) {
      result.errors.push({ error: logoCheckResult.error, file: logoPath });
    }
  });

  // Set result status to Invalid if there's any error.
  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testLogo,
};
