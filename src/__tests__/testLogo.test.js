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
      "logo": "testImages/logo_file.svg",
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
      "logo": "testImages/logo_size.svg",
      "width": 300,
    },
  ],
  "status": "INVALID",
}
`);
});

test("check logo file for invalid format (no extension)", () => {
  const changedFiles = ["testFiles/logo_format_no_ext.md"];
  const logoErrors = testLogo(DEFAULT_IMAGE_EXTENSIONS, changedFiles);
  expect(logoErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "INVALID_LOGO_FORMAT",
      "ext": "",
      "file": "testFiles/logo_format_no_ext.md",
      "logo": "testImages/apeshit",
    },
  ],
  "status": "INVALID",
}
`);
});

test("check logo file for invalid format (svg instead of png)", () => {
  const changedFiles = ["testFiles/logo_format.md"];
  const logoErrors = testLogo(DEFAULT_IMAGE_EXTENSIONS, changedFiles);
  expect(logoErrors).toMatchInlineSnapshot(`
Object {
  "errors": Array [
    Object {
      "error": "INVALID_LOGO_FORMAT",
      "ext": "svg",
      "file": "testFiles/logo_format.md",
      "fileType": "png",
      "logo": "testImages/apeshit.svg",
    },
  ],
  "status": "INVALID",
}
`);
});
