const { testFrontmatter } = require("../testFrontmatter");
const { DEFAULT_MARKDOWN_EXTENSIONS } = require("../constants");

test("check Frontmatter from file", () => {
  const changedFiles = ["testFiles/solanamonkeybusiness.md"];
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
      "file": "testFiles/solanamonkeybusiness.md",
    },
  ],
  "status": "INVALID",
}
`);
});
