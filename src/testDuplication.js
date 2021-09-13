const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const Fuse = require("fuse.js");

const { STATUS, ERRORS } = require("./constants");

const getSlugList = (extensions, directory) => {
  let list = [];
  const allFiles = fs.readdirSync(directory);
  allFiles.forEach((filePath) => {
    const extension = path.extname(filePath);
    if (extensions.includes(extension)) {
      const markdownData = fs.readFileSync(`${directory}/${filePath}`, "utf8");
      const parsed = matter(markdownData);
      if (parsed.data && parsed.data.slug) {
        list.push({
          slug: parsed.data.slug,
          filePath: `${directory}/${filePath}`,
        });
      }
    }
  });

  return list;
};

const checkDuplication = (slugList, slug, filePath, isFuzzySearch) => {
  let result = [];
  if (isFuzzySearch) {
    const fuse = new Fuse(slugList, {
      includeScore: true,
      threshold: 0.2,
      keys: ["slug"],
    });
    const duplications = fuse.search(slug);

    duplications.forEach((old) => {
      if (old.item.filePath !== filePath) {
        result.push(old.item.filePath);
      }
    });
  } else {
    slugList.forEach((item) => {
      if (item.slug === slug && item.filePath !== filePath) {
        result.push(item.filePath);
      }
    });
  }

  return result;
};

/**
 * Loops over all files in a directory and checks project duplication.
 *
 * @param changedFiles
 * @param markdownExtensions
 * @param directory
 * @param isFuzzySearch
 * @returns {{errors: *[], status: string}}
 */
const testDuplication = (
  changedFiles,
  markdownExtensions,
  directory,
  isFuzzySearch = true
) => {
  let result = {
    status: STATUS.VALID,
    errors: [],
  };
  const slugList = getSlugList(markdownExtensions, directory);
  changedFiles.forEach((filePath) => {
    // check markdown files in the specified directory
    const markdownData = fs.readFileSync(filePath, "utf8");
    const parsed = matter(markdownData);
    if (parsed.data && parsed.data.slug) {
      const slug = parsed.data.slug;
      const checkResult = checkDuplication(
        slugList,
        slug,
        filePath,
        isFuzzySearch
      );
      if (checkResult.length > 0) {
        result.errors.push({
          errors: ERRORS.PROJECT_DUPLICATION,
          file: filePath,
          duplicates: checkResult,
        });
      }
    } else {
      result.errors.push({ errors: ERRORS.SLUG, file: filePath });
    }
  });

  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testDuplication,
};
