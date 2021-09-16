const { testLogo } = require("../testLogo");
const { DEFAULT_IMAGE_EXTENSIONS } = require("../constants");

test("check Frontmatter from file for non existing logos", () => {
  const changedFiles = ["testFiles/logo_file.md"];
  const logoErrors = testLogo(DEFAULT_IMAGE_EXTENSIONS, changedFiles);
  expect(logoErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "LOGO_FILE_NOT_EXIST",
      "file": "testFiles/logo_file.md",
      "logo": "testFiles/apeshit.svg",
    },
  ],
  "status": "INVALID",
}
`);
});

test("check logo file for invalid size", () => {
  const changedFiles = ["testFiles/logo_size.md"];
  const logoErrors = testLogo(DEFAULT_IMAGE_EXTENSIONS, changedFiles);
  expect(logoErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "INVALID_LOGO_SIZE",
      "file": "testFiles/logo_size.md",
      "height": 508,
      "logo": "testFiles/Museoftheday.svg",
      "width": 300,
    },
  ],
  "status": "INVALID",
}
`);
});

// TODO: write test for LOGO_FORMAT (without ext & wrong one)
