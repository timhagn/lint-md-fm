const { createMessageFromResults } = require("../ReporterMessageCreator");
const { runLinterActions } = require("../runLinterActions");
const { combineResults } = require("../combineResults");
const {
  DEFAULT_MARKDOWN_EXTENSIONS,
  DEFAULT_IMAGE_EXTENSIONS,
} = require("../constants");

test("check for AOK", () => {
  const allOK = {
    status: "VALID",
    validFiles: ["img/sodi.png"],
    errors: [],
    changedFilesArray: ["img/sodi.png", "projects/sodi.md"],
  };
  const resultingMessage = createMessageFromResults(allOK);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ✅ Project files checked and OK.

Please give the community and us some time to check it out before it gets merged!

Thanks for adding it!
"
`);
});

test("check Frontmatter from file for invalid Frontmatter data", () => {
  const missingTagsErrors = {
    errors: [
      {
        error: "DATA_INVALID",
        file: "testFiles/invalid_frontmatter_data.md",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(missingTagsErrors);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Markdown data Invalid!

**The content of one or more of your committed Markdown files is invalid!**

Check if you correctly closed all strings and suchlike, as well as having
encapsulated the Frontmatter data by \`---\` before and after!

The following files had invalid data:  
**testFiles/invalid_frontmatter_data.md**
"
`);
});

test("check Frontmatter from file for invalid data", () => {
  const missingTagsErrors = {
    errors: [
      {
        error: "CATEGORY_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "DATE_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "TITLE_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "LOGLINE_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "CTA_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "LOGO_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
      {
        error: "STATUS_NOT_EXIST",
        file: "testFiles/missing_tags.md",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(missingTagsErrors);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Markdown has missing Tags!

**One or more of your committed Markdown files have missing tags!**

Be sure to check for & add them!

The following files had missing tags:  
**testFiles/missing_tags.md** misses the following tags: **category, date, title, logline, cta, logo, status**
"
`);
});

test("check Frontmatter from file for invalid categories", () => {
  const invalidCategories = {
    errors: [
      {
        error: "CATEGORY_INVALID",
        file: "testFiles/category_invalid.md",
        values: ["nfts", "test"],
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidCategories);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Markdown has invalid Categories!

**One or more of your committed Markdown files have invalid categories!**

Be sure to check for & fix them!

The following files had invalid categories:  
**testFiles/category_invalid.md** had the following invalid categories **nfts, test**
"
`);
});

test("check Frontmatter from file for invalid logo tags", () => {
  const invalidLogos = {
    errors: [
      {
        error: "INVALID_LOGO_NAME",
        file: "testFiles/logo_invalid.md",
        logo: "/img/Pixel Penguins.svg",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidLogos);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Markdown has invalid Logo tags!

**One or more of your committed Markdown files have invalid logo tags!**

Be sure they don't contain whitespaces or non web-safe characters!

The following files had invalid logo tags:  
**testFiles/logo_invalid.md** had an invalid logo tag **/img/Pixel Penguins.svg**
"
`);
});

test("check if logo non existent", () => {
  const nonExistentLogoFile = {
    errors: [
      {
        error: "LOGO_FILE_NOT_EXIST",
        file: "testFiles/logo_file.md",
        logo: "testFiles/logo_file.svg",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(nonExistentLogoFile);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/logo_file.md** had a missing logo file: **testFiles/logo_file.svg**
"
`);
});

test("check if logo has invalid size", () => {
  const invalidLogoSize = {
    errors: [
      {
        error: "INVALID_LOGO_SIZE",
        file: "testFiles/logo_size.md",
        height: 508,
        logo: "testFiles/Museoftheday.svg",
        width: 300,
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidLogoSize);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/logo_size.md** had a logo file with a wrong ratio, **testFiles/Museoftheday.svg** - ratio 1.7
"
`);
});

test("check if logo has invalid format (no extension)", () => {
  const invalidExtensionLogoFile = {
    errors: [
      {
        error: "INVALID_LOGO_FORMAT",
        ext: "",
        file: "testFiles/logo_format_no_ext.md",
        logo: "testFiles/apeshit",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidExtensionLogoFile);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/logo_format_no_ext.md** had a logo file without extension, **testFiles/apeshit**
"
`);
});

test("check if logo has invalid format (file type)", () => {
  const invalidFileTypeLogoFile = {
    errors: [
      {
        error: "INVALID_LOGO_FORMAT",
        ext: "svg",
        file: "testFiles/logo_format.md",
        fileType: "png",
        logo: "testFiles/apeshit.svg",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidFileTypeLogoFile);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/logo_format.md** had a logo file with a wrong extension (svg), **testFiles/apeshit.svg** is of type png
"
`);
});

test("check for multiple errors", () => {
  const invalidCategories = {
    errors: [
      {
        error: "CATEGORY_INVALID",
        file: "testFiles/category_invalid.md",
        values: ["nfts", "test"],
      },
      {
        error: "INVALID_LOGO_FORMAT",
        ext: "",
        file: "testFiles/logo_format_no_ext.md",
        logo: "testFiles/apeshit",
      },
    ],
    status: "INVALID",
  };
  const resultingMessage = createMessageFromResults(invalidCategories);
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Markdown has invalid Categories!

**One or more of your committed Markdown files have invalid categories!**

Be sure to check for & fix them!

The following files had invalid categories:  
**testFiles/category_invalid.md** had the following invalid categories **nfts, test**


## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/logo_format_no_ext.md** had a logo file without extension, **testFiles/apeshit**
"
`);
});

test("check for multiple combined errors from runLinterActions()", () => {
  const extensionReplacements = {
    MARKDOWN_EXTENSIONS: DEFAULT_MARKDOWN_EXTENSIONS,
    IMAGE_EXTENSIONS: DEFAULT_IMAGE_EXTENSIONS,
  };
  const changedFiles = ["testFiles/invalid_data.md"];
  const directories = ["testFiles", "testFiles"];

  const returnedResults = runLinterActions(
    changedFiles,
    directories,
    DEFAULT_MARKDOWN_EXTENSIONS,
    DEFAULT_IMAGE_EXTENSIONS,
    false,
    console.log
  );

  const combinedResult = combineResults(returnedResults);

  const resultingMessage = createMessageFromResults(
    combinedResult,
    extensionReplacements
  );
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ⚠️ Extensions Invalid!

**The extension of one or more of your committed files is invalid!**  

For your project files they should have one of these: **.md,.mdx**    
For your logo images they should have one of these: **.svg,.png,.jpg,.jpeg**  

The following files have invalid extensions:  
**testFiles/invalid_data.md**
  

## ⚠️ Markdown data Invalid!

**The content of one or more of your committed Markdown files is invalid!**

Check if you correctly closed all strings and suchlike, as well as having
encapsulated the Frontmatter data by \`---\` before and after!

The following files had invalid data:  
**testFiles/invalid_data.md**


## ⚠️ Markdown has missing Tags!

**One or more of your committed Markdown files have missing tags!**

Be sure to check for & add them!

The following files had missing tags:  
**testFiles/invalid_data.md** misses the following tags: **slug**


## ⚠️ Project has invalid Logo!

**One or more of your committed Projects have invalid logo or missing logos!**

Be sure to add them to you commit, in the correct aspect ratio &
the correct file type / extension!

The following files had invalid or missing logos:  
**testFiles/invalid_data.md** had a missing logo file: ****
"
`);
});

test("check for AOK with all_valid files from runLinterActions()", () => {
  const extensionReplacements = {
    MARKDOWN_EXTENSIONS: DEFAULT_MARKDOWN_EXTENSIONS,
    IMAGE_EXTENSIONS: DEFAULT_IMAGE_EXTENSIONS,
  };
  const changedFiles = ["testFiles/all_valid.md", "testImages/all_valid.png"];
  const directories = ["testFiles", "testImages"];

  const returnedResults = runLinterActions(
    changedFiles,
    directories,
    DEFAULT_MARKDOWN_EXTENSIONS,
    DEFAULT_IMAGE_EXTENSIONS,
    false,
    console.log
  );

  const combinedResult = combineResults(returnedResults);

  const resultingMessage = createMessageFromResults(
    combinedResult,
    extensionReplacements
  );
  expect(resultingMessage).toMatchInlineSnapshot(`
"
## ✅ Project files checked and OK.

Please give the community and us some time to check it out before it gets merged!

Thanks for adding it!
"
`);
});
