const { testFrontmatter } = require("../testFrontmatter");
const {
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("../constants");
const { runLinterActions } = require("../runLinterActions");

test("check runLinterActions() for AOK with all_valid files", () => {
  const changedFiles = ["testFiles/all_valid.md", "testImages/all_valid.png"];
  const directories = ["testFiles", "testImages"];
  const frontmatterErrors = runLinterActions(
    changedFiles,
    directories,
    DEFAULT_MARKDOWN_EXTENSIONS,
    DEFAULT_IMAGE_EXTENSIONS,
    false,
    console.log
  );
  expect(frontmatterErrors).toMatchInlineSnapshot(`
Object {
  "duplicationResult": Object {
    "errors": Array [],
    "status": "VALID",
  },
  "imgExtensionResult": Object {
    "errors": Array [],
    "status": "VALID",
    "validFiles": Array [
      "testImages/all_valid.png",
    ],
  },
  "logoResult": Object {
    "errors": Array [],
    "status": "VALID",
  },
  "markdownResult": Object {
    "errors": Array [],
    "status": "VALID",
  },
  "mdExtensionResult": Object {
    "errors": Array [],
    "status": "VALID",
    "validFiles": Array [
      "testFiles/all_valid.md",
    ],
  },
}
`);
});

test("check runLinterActions() for failing file", () => {
  const changedFiles = ["testFiles/invalid_data.md"];
  const directories = ["testFiles", "testImages"];
  const frontmatterErrors = runLinterActions(
    changedFiles,
    directories,
    DEFAULT_MARKDOWN_EXTENSIONS,
    DEFAULT_IMAGE_EXTENSIONS,
    false,
    console.log
  );
  expect(frontmatterErrors).toMatchInlineSnapshot(`
Object {
  "duplicationResult": Object {
    "errors": Array [
      Object {
        "error": "SLUG_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
    ],
    "status": "INVALID",
  },
  "imgExtensionResult": Object {
    "errors": Array [],
    "status": "VALID",
    "validFiles": Array [],
  },
  "logoResult": Object {
    "errors": Array [
      Object {
        "error": "LOGO_FILE_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
        "logo": "",
      },
    ],
    "status": "INVALID",
  },
  "markdownResult": Object {
    "errors": Array [
      Object {
        "error": "CATEGORY_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "SLUG_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "DATE_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "TITLE_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "LOGLINE_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "CTA_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "LOGO_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
      Object {
        "error": "STATUS_NOT_EXIST",
        "file": "testFiles/invalid_data.md",
      },
    ],
    "status": "INVALID",
  },
  "mdExtensionResult": Object {
    "errors": Array [],
    "status": "VALID",
    "validFiles": Array [
      "testFiles/invalid_data.md",
    ],
  },
}
`);
});
