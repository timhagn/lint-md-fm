const { createMessageFromResults } = require("../ReporterMessageCreator");

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
