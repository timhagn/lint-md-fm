/**
 * Generates a markdown error text for invalid extensions.
 *
 * @returns {string}
 */
const extensionIsInvalid = ({
  MARKDOWN_EXTENSIONS,
  IMAGE_EXTENSIONS,
  INVALID_FILES,
}) =>
  `
## ⚠️ Extensions Invalid!

**The extension of one or more of your committed files is invalid!**  

For your project files they should have one of these: **${MARKDOWN_EXTENSIONS}**    
For your logo images they should have one of these: **${IMAGE_EXTENSIONS}**  

The following files have invalid extensions:  
**${INVALID_FILES}**
  `;

/**
 * Returns a basic markdown error for empty commits.
 *
 * @returns {string}
 */
const noFilesChanged = () => `
## ⚠️ No files changed

Looks like you didn't change any files of relevance.  
Make sure that you add project and / or image files 
to your commit before pushing it!
`;

const projectAlreadyExists = ({ INVALID_FILES }) => `
## ⚠️ Duplicate Project!

**The project(s) you are trying to add does already exist(s)!**

The following files created duplication errors:  
${INVALID_FILES}
`;

const dataInvalid = ({ INVALID_FILES }) => `
## ⚠️ Markdown data Invalid!

**The content of one or more of your committed Markdown files is invalid!**

Check if you correctly closed all strings and suchlike!

The following files had invalid data:  
**${INVALID_FILES}**
`;

const missingTags = ({ INVALID_FILES }) => `
## ⚠️ Markdown has missing Tags!

**One or more of your committed Markdown files have missing tags!**

Be sure to check for & add them!

The following files had missing tags:  
${INVALID_FILES}
`;

const MARKDOWN_CONTENTS = {
  NO_FILES_CHANGED: noFilesChanged,
  EXTENSION_IS_INVALID: extensionIsInvalid,
  PROJECT_ALREADY_EXIST: projectAlreadyExists,
  DATA_INVALID: dataInvalid,
  COMBINED_MISSING_TAGS: missingTags,
};

module.exports = { MARKDOWN_CONTENTS };
