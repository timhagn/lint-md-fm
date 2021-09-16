const { testFrontmatter } = require("../testFrontmatter");
const { DEFAULT_MARKDOWN_EXTENSIONS } = require("../constants");

test("check Frontmatter from file for invalid data", () => {
  const changedFiles = ["testFiles/invalid_data.md"];
  const directory = "testFiles";
  const frontmatterErrors = testFrontmatter(
    DEFAULT_MARKDOWN_EXTENSIONS,
    changedFiles,
    directory
  );
  expect(frontmatterErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "DATA_INVALID",
      "file": "testFiles/invalid_data.md",
    },
  ],
  "status": "INVALID",
}
`);
});

test("check Frontmatter from file for missing tags", () => {
  const changedFiles = ["testFiles/missing_tags.md"];
  const directory = "testFiles";
  const frontmatterErrors = testFrontmatter(
    DEFAULT_MARKDOWN_EXTENSIONS,
    changedFiles,
    directory
  );
  expect(frontmatterErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "CATEGORY_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "DATE_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "TITLE_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "LOGLINE_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "CTA_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "LOGO_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
    Object {
      "error": "STATUS_NOT_EXIST",
      "file": "testFiles/missing_tags.md",
    },
  ],
  "status": "INVALID",
}
`);
});
