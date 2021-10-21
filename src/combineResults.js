const { STATUS } = require("./constants");

const combineResults = ({
  mdExtensionResult,
  imgExtensionResult,
  markdownResult,
  duplicationResult,
  logoResult,
}) => {
  const combinedResult = {
    status: "",
    validFiles: [],
    errors: [],
  };

  const combinedStatus =
    mdExtensionResult.status === STATUS.VALID &&
    imgExtensionResult.status === STATUS.VALID &&
    markdownResult.status === STATUS.VALID &&
    duplicationResult.status === STATUS.VALID &&
    logoResult.status === STATUS.VALID;

  combinedResult.status = combinedStatus ? STATUS.VALID : STATUS.INVALID;

  combinedResult["validFiles"] = [
    ...(mdExtensionResult.validFiles ? mdExtensionResult.validFiles : []),
    ...(imgExtensionResult.validFiles ? imgExtensionResult.validFiles : []),
    ...(markdownResult.validFiles ? markdownResult.validFiles : []),
    ...(duplicationResult.validFiles ? duplicationResult.validFiles : []),
    ...(logoResult.validFiles ? logoResult.validFiles : []),
  ];

  combinedResult["errors"] = [
    ...(mdExtensionResult.errors ? mdExtensionResult.errors : []),
    ...(imgExtensionResult.errors ? imgExtensionResult.errors : []),
    ...(markdownResult.errors ? markdownResult.errors : []),
    ...(duplicationResult.errors ? duplicationResult.errors : []),
    ...(logoResult.errors ? logoResult.errors : []),
  ];

  return combinedResult;
};

module.exports = { combineResults };
