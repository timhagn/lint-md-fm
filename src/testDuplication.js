const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const Fuse = require("fuse.js");

const { STATUS, ERRORS } = require("./constants");

/**
 * Loop over the markdown directory and grabs all the existing slugs by parsing the files.
 * 
 * @param {[string]} extensions 
 * @param {string} directory 
 * @returns {{list: [{slug, filePath}]}}
 */
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

/**
 * 
 * @param slugList            Existing slugs list
 * @param slug                slug of the new project
 * @param filePath            Path of the new project markdown
 * @param isFuzzySearch       Indicate if the fuzzy search is enabled
 * @returns                   Array of duplicate projects
 */
const checkDuplication = (slugList, slug, filePath, isFuzzySearch) => {
  let result = [];

  if (isFuzzySearch) {
    const fuse = new Fuse(slugList, {
      includeScore: true,
      threshold: 0.2,
      keys: ["slug"],
    });
    const duplications = fuse.search(slug);     // Grab all matches using fuse.js

    duplications.forEach((old) => {
      // Exclude the new project
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
 * @param changedFiles Valid changed markdown files from the previous step.
 * @param markdownExtensions
 * @param directory  Markdown directory
 * @param isFuzzySearch Parameter to indicate if fuzzy search is enabled
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
  const slugList = getSlugList(markdownExtensions, directory);          // Grab all slugs from the project directory
  // Loop over all the valid changed markdown files
  changedFiles.forEach((filePath) => {
    const markdownData = fs.readFileSync(filePath, "utf8");
    const parsed = matter(markdownData);
    if (parsed.data && parsed.data.slug) {
      const slug = parsed.data.slug;
      // Grab the duplication check result
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

  // Set result status to Invalid if there's any error
  if (result.errors.length > 0) {
    result.status = STATUS.INVALID;
  }

  return result;
};

module.exports = {
  testDuplication,
};
