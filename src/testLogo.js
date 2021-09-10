const path = require("path");
const fs = require("fs");
const matter = require('gray-matter');
const probe = require('probe-image-size');

const { STATUS, ERRORS } = require("./constants");

const getLogoPath = (filePath) => {
  const markdownData = fs.readFileSync(filePath, "utf8");
  const parsed = matter(markdownData);
  let logoPath = '';
  if (parsed.data && parsed.data.logo) {
    logoPath = parsed.data.logo.slice(1);       // remove "/" at the beginning of the image path
  }
  return logoPath;
}

/**
 * Check logo file name & format
 *
 * @param extensions
 * @param logoPath
 * @returns {{error: string}}
 */
const checkLogoFile = (extensions, logoPath) => {
  let result = {
    error: null
  };

  // Check logo error
  if (!fs.existsSync(logoPath)) {
    // logo file doesn't exist
    result.error = ERRORS.LOGO_FILE;
  } else {
    const extension = path.extname(logoPath).toLowerCase();
    if (extensions.indexOf(extension) < 0) {
      result.error = ERRORS.LOGO_FORMAT;
    } else {
      const data = fs.readFileSync(logoPath);
      const meta = probe.sync(data);
      const ext = extension.slice(1);
      if (meta.type === ext || meta.mime.includes(ext)) {
        const ratio = meta.height / meta.width;
        if (ratio < 0.9 || ratio > 1.1) {
          result.error = ERRORS.LOGO_SIZE;
        }
      } else {
        result.error = ERRORS.LOGO_FORMAT;
      }
    }
  }
  return result;
}

/**
 * Loops over all files in a directory and checks Logos.
 *
 * @param extensions
 * @param changedFiles
 * @returns {{errors: *[], status: string}}
 */
const testLogo = (extensions, changedFiles) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  changedFiles.forEach((filePath) => {
    // Grab logo filename
    const logoPath = getLogoPath(filePath);
    const logoCheckResult = checkLogoFile(extensions, logoPath);
    if (logoCheckResult.error) {
      result.errors.push({error: logoCheckResult.error, file: logoPath});
    }
  });

  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testLogo,
};
