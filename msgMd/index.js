const extensionIsInvalid = ({
  MARKDOWN_EXTENSIONS,
  IMAGE_EXTENSIONS,
  INVALID_FILES,
}) =>
  `
## Extensions Invalid!

**The extension of one or more of your committed files is invalid!**  

For your project files they should have one of these: ${MARKDOWN_EXTENSIONS}.  
For your logo images they should have one of these: ${IMAGE_EXTENSIONS}.  

The following files had invalid extensions:  
${INVALID_FILES}
  `;

const MARKDOWN_CONTENTS = {
  EXTENSION_IS_INVALID: extensionIsInvalid,
};

module.exports = { MARKDOWN_CONTENTS };
