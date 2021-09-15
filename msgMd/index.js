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
## Extensions Invalid!

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
## No files changed

Looks like you didn't change any files of relevance.  
**Make sure that you add files to your commit before pushing it!**
`;

const MARKDOWN_CONTENTS = {
  NO_FILES_CHANGED: noFilesChanged,
  EXTENSION_IS_INVALID: extensionIsInvalid,
};

module.exports = { MARKDOWN_CONTENTS };
