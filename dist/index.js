/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 5330: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (k !== "default" && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.issue = exports.issueCommand = void 0;
      const os = __importStar(__nccwpck_require__(2087));
      const utils_1 = __nccwpck_require__(6733);
      /**
       * Commands
       *
       * Command Format:
       *   ::name key=value,key=value::message
       *
       * Examples:
       *   ::warning::This is the message
       *   ::set-env name=MY_VAR::some value
       */
      function issueCommand(command, properties, message) {
        const cmd = new Command(command, properties, message);
        process.stdout.write(cmd.toString() + os.EOL);
      }
      exports.issueCommand = issueCommand;
      function issue(name, message = "") {
        issueCommand(name, {}, message);
      }
      exports.issue = issue;
      const CMD_STRING = "::";
      class Command {
        constructor(command, properties, message) {
          if (!command) {
            command = "missing.command";
          }
          this.command = command;
          this.properties = properties;
          this.message = message;
        }
        toString() {
          let cmdStr = CMD_STRING + this.command;
          if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += " ";
            let first = true;
            for (const key in this.properties) {
              if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                  if (first) {
                    first = false;
                  } else {
                    cmdStr += ",";
                  }
                  cmdStr += `${key}=${escapeProperty(val)}`;
                }
              }
            }
          }
          cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
          return cmdStr;
        }
      }
      function escapeData(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, "%25")
          .replace(/\r/g, "%0D")
          .replace(/\n/g, "%0A");
      }
      function escapeProperty(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, "%25")
          .replace(/\r/g, "%0D")
          .replace(/\n/g, "%0A")
          .replace(/:/g, "%3A")
          .replace(/,/g, "%2C");
      }
      //# sourceMappingURL=command.js.map

      /***/
    },

    /***/ 743: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (k !== "default" && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      var __awaiter =
        (this && this.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getState =
        exports.saveState =
        exports.group =
        exports.endGroup =
        exports.startGroup =
        exports.info =
        exports.notice =
        exports.warning =
        exports.error =
        exports.debug =
        exports.isDebug =
        exports.setFailed =
        exports.setCommandEcho =
        exports.setOutput =
        exports.getBooleanInput =
        exports.getMultilineInput =
        exports.getInput =
        exports.addPath =
        exports.setSecret =
        exports.exportVariable =
        exports.ExitCode =
          void 0;
      const command_1 = __nccwpck_require__(5330);
      const file_command_1 = __nccwpck_require__(9631);
      const utils_1 = __nccwpck_require__(6733);
      const os = __importStar(__nccwpck_require__(2087));
      const path = __importStar(__nccwpck_require__(5622));
      /**
       * The code to exit an action
       */
      var ExitCode;
      (function (ExitCode) {
        /**
         * A code indicating that the action was successful
         */
        ExitCode[(ExitCode["Success"] = 0)] = "Success";
        /**
         * A code indicating that the action was a failure
         */
        ExitCode[(ExitCode["Failure"] = 1)] = "Failure";
      })((ExitCode = exports.ExitCode || (exports.ExitCode = {})));
      //-----------------------------------------------------------------------
      // Variables
      //-----------------------------------------------------------------------
      /**
       * Sets env variable for this action and future actions in the job
       * @param name the name of the variable to set
       * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function exportVariable(name, val) {
        const convertedVal = utils_1.toCommandValue(val);
        process.env[name] = convertedVal;
        const filePath = process.env["GITHUB_ENV"] || "";
        if (filePath) {
          const delimiter = "_GitHubActionsFileCommandDelimeter_";
          const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
          file_command_1.issueCommand("ENV", commandValue);
        } else {
          command_1.issueCommand("set-env", { name }, convertedVal);
        }
      }
      exports.exportVariable = exportVariable;
      /**
       * Registers a secret which will get masked from logs
       * @param secret value of the secret
       */
      function setSecret(secret) {
        command_1.issueCommand("add-mask", {}, secret);
      }
      exports.setSecret = setSecret;
      /**
       * Prepends inputPath to the PATH (for this action and future actions)
       * @param inputPath
       */
      function addPath(inputPath) {
        const filePath = process.env["GITHUB_PATH"] || "";
        if (filePath) {
          file_command_1.issueCommand("PATH", inputPath);
        } else {
          command_1.issueCommand("add-path", {}, inputPath);
        }
        process.env[
          "PATH"
        ] = `${inputPath}${path.delimiter}${process.env["PATH"]}`;
      }
      exports.addPath = addPath;
      /**
       * Gets the value of an input.
       * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
       * Returns an empty string if the value is not defined.
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   string
       */
      function getInput(name, options) {
        const val =
          process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
        if (options && options.required && !val) {
          throw new Error(`Input required and not supplied: ${name}`);
        }
        if (options && options.trimWhitespace === false) {
          return val;
        }
        return val.trim();
      }
      exports.getInput = getInput;
      /**
       * Gets the values of an multiline input.  Each value is also trimmed.
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   string[]
       *
       */
      function getMultilineInput(name, options) {
        const inputs = getInput(name, options)
          .split("\n")
          .filter((x) => x !== "");
        return inputs;
      }
      exports.getMultilineInput = getMultilineInput;
      /**
       * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
       * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
       * The return value is also in boolean type.
       * ref: https://yaml.org/spec/1.2/spec.html#id2804923
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   boolean
       */
      function getBooleanInput(name, options) {
        const trueValue = ["true", "True", "TRUE"];
        const falseValue = ["false", "False", "FALSE"];
        const val = getInput(name, options);
        if (trueValue.includes(val)) return true;
        if (falseValue.includes(val)) return false;
        throw new TypeError(
          `Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
            `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
        );
      }
      exports.getBooleanInput = getBooleanInput;
      /**
       * Sets the value of an output.
       *
       * @param     name     name of the output to set
       * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function setOutput(name, value) {
        process.stdout.write(os.EOL);
        command_1.issueCommand("set-output", { name }, value);
      }
      exports.setOutput = setOutput;
      /**
       * Enables or disables the echoing of commands into stdout for the rest of the step.
       * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
       *
       */
      function setCommandEcho(enabled) {
        command_1.issue("echo", enabled ? "on" : "off");
      }
      exports.setCommandEcho = setCommandEcho;
      //-----------------------------------------------------------------------
      // Results
      //-----------------------------------------------------------------------
      /**
       * Sets the action status to failed.
       * When the action exits it will be with an exit code of 1
       * @param message add error issue message
       */
      function setFailed(message) {
        process.exitCode = ExitCode.Failure;
        error(message);
      }
      exports.setFailed = setFailed;
      //-----------------------------------------------------------------------
      // Logging Commands
      //-----------------------------------------------------------------------
      /**
       * Gets whether Actions Step Debug is on or not
       */
      function isDebug() {
        return process.env["RUNNER_DEBUG"] === "1";
      }
      exports.isDebug = isDebug;
      /**
       * Writes debug message to user log
       * @param message debug message
       */
      function debug(message) {
        command_1.issueCommand("debug", {}, message);
      }
      exports.debug = debug;
      /**
       * Adds an error issue
       * @param message error issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function error(message, properties = {}) {
        command_1.issueCommand(
          "error",
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        );
      }
      exports.error = error;
      /**
       * Adds a warning issue
       * @param message warning issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function warning(message, properties = {}) {
        command_1.issueCommand(
          "warning",
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        );
      }
      exports.warning = warning;
      /**
       * Adds a notice issue
       * @param message notice issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function notice(message, properties = {}) {
        command_1.issueCommand(
          "notice",
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        );
      }
      exports.notice = notice;
      /**
       * Writes info to log with console.log.
       * @param message info message
       */
      function info(message) {
        process.stdout.write(message + os.EOL);
      }
      exports.info = info;
      /**
       * Begin an output group.
       *
       * Output until the next `groupEnd` will be foldable in this group
       *
       * @param name The name of the output group
       */
      function startGroup(name) {
        command_1.issue("group", name);
      }
      exports.startGroup = startGroup;
      /**
       * End an output group.
       */
      function endGroup() {
        command_1.issue("endgroup");
      }
      exports.endGroup = endGroup;
      /**
       * Wrap an asynchronous function call in a group.
       *
       * Returns the same type as the function itself.
       *
       * @param name The name of the group
       * @param fn The function to wrap in the group
       */
      function group(name, fn) {
        return __awaiter(this, void 0, void 0, function* () {
          startGroup(name);
          let result;
          try {
            result = yield fn();
          } finally {
            endGroup();
          }
          return result;
        });
      }
      exports.group = group;
      //-----------------------------------------------------------------------
      // Wrapper action state
      //-----------------------------------------------------------------------
      /**
       * Saves state for current action, the state can only be retrieved by this action's post job execution.
       *
       * @param     name     name of the state to store
       * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function saveState(name, value) {
        command_1.issueCommand("save-state", { name }, value);
      }
      exports.saveState = saveState;
      /**
       * Gets the value of an state set by this action's main execution.
       *
       * @param     name     name of the state to get
       * @returns   string
       */
      function getState(name) {
        return process.env[`STATE_${name}`] || "";
      }
      exports.getState = getState;
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/ 9631: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      "use strict";

      // For internal use, subject to change.
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (k !== "default" && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.issueCommand = void 0;
      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const fs = __importStar(__nccwpck_require__(5747));
      const os = __importStar(__nccwpck_require__(2087));
      const utils_1 = __nccwpck_require__(6733);
      function issueCommand(command, message) {
        const filePath = process.env[`GITHUB_${command}`];
        if (!filePath) {
          throw new Error(
            `Unable to find environment variable for file command ${command}`
          );
        }
        if (!fs.existsSync(filePath)) {
          throw new Error(`Missing file at path: ${filePath}`);
        }
        fs.appendFileSync(
          filePath,
          `${utils_1.toCommandValue(message)}${os.EOL}`,
          {
            encoding: "utf8",
          }
        );
      }
      exports.issueCommand = issueCommand;
      //# sourceMappingURL=file-command.js.map

      /***/
    },

    /***/ 6733: /***/ (__unused_webpack_module, exports) => {
      "use strict";

      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toCommandProperties = exports.toCommandValue = void 0;
      /**
       * Sanitizes an input into a string so it can be passed into issueCommand safely
       * @param input input to sanitize into a string
       */
      function toCommandValue(input) {
        if (input === null || input === undefined) {
          return "";
        } else if (typeof input === "string" || input instanceof String) {
          return input;
        }
        return JSON.stringify(input);
      }
      exports.toCommandValue = toCommandValue;
      /**
       *
       * @param annotationProperties
       * @returns The command properties to send with the actual annotation command
       * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
       */
      function toCommandProperties(annotationProperties) {
        if (!Object.keys(annotationProperties).length) {
          return {};
        }
        return {
          title: annotationProperties.title,
          line: annotationProperties.startLine,
          endLine: annotationProperties.endLine,
          col: annotationProperties.startColumn,
          endColumn: annotationProperties.endColumn,
        };
      }
      exports.toCommandProperties = toCommandProperties;
      //# sourceMappingURL=utils.js.map

      /***/
    },

    /***/ 2706: /***/ (module, exports, __nccwpck_require__) => {
      /**
       * This is the web browser implementation of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports = module.exports = __nccwpck_require__(6909);
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage =
        "undefined" != typeof chrome && "undefined" != typeof chrome.storage
          ? chrome.storage.local
          : localstorage();

      /**
       * Colors.
       */

      exports.colors = [
        "lightseagreen",
        "forestgreen",
        "goldenrod",
        "dodgerblue",
        "darkorchid",
        "crimson",
      ];

      /**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */

      function useColors() {
        // NB: In an Electron preload script, document will be defined but not fully
        // initialized. Since we know we're in Chrome, we'll just detect this case
        // explicitly
        if (
          typeof window !== "undefined" &&
          window.process &&
          window.process.type === "renderer"
        ) {
          return true;
        }

        // is webkit? http://stackoverflow.com/a/16459606/376773
        // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
        return (
          (typeof document !== "undefined" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          // is firebug? http://stackoverflow.com/a/398120/376773
          (typeof window !== "undefined" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          // is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          // double check webkit in userAgent just in case we are in a worker
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }

      /**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */

      exports.formatters.j = function (v) {
        try {
          return JSON.stringify(v);
        } catch (err) {
          return "[UnexpectedJSONParseError]: " + err.message;
        }
      };

      /**
       * Colorize log arguments if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        var useColors = this.useColors;

        args[0] =
          (useColors ? "%c" : "") +
          this.namespace +
          (useColors ? " %c" : " ") +
          args[0] +
          (useColors ? "%c " : " ") +
          "+" +
          exports.humanize(this.diff);

        if (!useColors) return;

        var c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");

        // the final "%c" is somewhat tricky, because there could be other
        // arguments passed either before or after the %c, so we need to
        // figure out the correct index to insert the CSS into
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function (match) {
          if ("%%" === match) return;
          index++;
          if ("%c" === match) {
            // we only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
          }
        });

        args.splice(lastC, 0, c);
      }

      /**
       * Invokes `console.log()` when available.
       * No-op when `console.log` is not a "function".
       *
       * @api public
       */

      function log() {
        // this hackery is required for IE8/9, where
        // the `console.log` function doesn't have 'apply'
        return (
          "object" === typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }

      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        try {
          if (null == namespaces) {
            exports.storage.removeItem("debug");
          } else {
            exports.storage.debug = namespaces;
          }
        } catch (e) {}
      }

      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        var r;
        try {
          r = exports.storage.debug;
        } catch (e) {}

        // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }

        return r;
      }

      /**
       * Enable namespaces listed in `localStorage.debug` initially.
       */

      exports.enable(load());

      /**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */

      function localstorage() {
        try {
          return window.localStorage;
        } catch (e) {}
      }

      /***/
    },

    /***/ 6909: /***/ (module, exports, __nccwpck_require__) => {
      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports =
        module.exports =
        createDebug.debug =
        createDebug["default"] =
          createDebug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = __nccwpck_require__(9189);

      /**
       * The currently active debug mode names, and names to skip.
       */

      exports.names = [];
      exports.skips = [];

      /**
       * Map of special "%n" handling functions, for the debug "format" argument.
       *
       * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
       */

      exports.formatters = {};

      /**
       * Previous log timestamp.
       */

      var prevTime;

      /**
       * Select a color.
       * @param {String} namespace
       * @return {Number}
       * @api private
       */

      function selectColor(namespace) {
        var hash = 0,
          i;

        for (i in namespace) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }

        return exports.colors[Math.abs(hash) % exports.colors.length];
      }

      /**
       * Create a debugger with the given `namespace`.
       *
       * @param {String} namespace
       * @return {Function}
       * @api public
       */

      function createDebug(namespace) {
        function debug() {
          // disabled?
          if (!debug.enabled) return;

          var self = debug;

          // set `diff` timestamp
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;

          // turn the `arguments` into a proper Array
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }

          args[0] = exports.coerce(args[0]);

          if ("string" !== typeof args[0]) {
            // anything else let's inspect with %O
            args.unshift("%O");
          }

          // apply any `formatters` transformations
          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === "%%") return match;
            index++;
            var formatter = exports.formatters[format];
            if ("function" === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val);

              // now we need to remove `args[index]` since it's inlined in the `format`
              args.splice(index, 1);
              index--;
            }
            return match;
          });

          // apply env-specific formatting (colors, etc.)
          exports.formatArgs.call(self, args);

          var logFn = debug.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.enabled = exports.enabled(namespace);
        debug.useColors = exports.useColors();
        debug.color = selectColor(namespace);

        // env-specific initialization logic for debug instances
        if ("function" === typeof exports.init) {
          exports.init(debug);
        }

        return debug;
      }

      /**
       * Enables a debug mode by namespaces. This can include modes
       * separated by a colon and wildcards.
       *
       * @param {String} namespaces
       * @api public
       */

      function enable(namespaces) {
        exports.save(namespaces);

        exports.names = [];
        exports.skips = [];

        var split = (typeof namespaces === "string" ? namespaces : "").split(
          /[\s,]+/
        );
        var len = split.length;

        for (var i = 0; i < len; i++) {
          if (!split[i]) continue; // ignore empty strings
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            exports.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }

      /**
       * Disable debug output.
       *
       * @api public
       */

      function disable() {
        exports.enable("");
      }

      /**
       * Returns true if the given mode name is enabled, false otherwise.
       *
       * @param {String} name
       * @return {Boolean}
       * @api public
       */

      function enabled(name) {
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }

      /**
       * Coerce `val`.
       *
       * @param {Mixed} val
       * @return {Mixed}
       * @api private
       */

      function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
      }

      /***/
    },

    /***/ 5102: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      /**
       * Detect Electron renderer process, which is node, but we should
       * treat as a browser.
       */

      if (typeof process !== "undefined" && process.type === "renderer") {
        module.exports = __nccwpck_require__(2706);
      } else {
        module.exports = __nccwpck_require__(5924);
      }

      /***/
    },

    /***/ 5924: /***/ (module, exports, __nccwpck_require__) => {
      /**
       * Module dependencies.
       */

      var tty = __nccwpck_require__(3867);
      var util = __nccwpck_require__(1669);

      /**
       * This is the Node.js implementation of `debug()`.
       *
       * Expose `debug()` as the module.
       */

      exports = module.exports = __nccwpck_require__(6909);
      exports.init = init;
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;

      /**
       * Colors.
       */

      exports.colors = [6, 2, 3, 4, 5, 1];

      /**
       * Build up the default `inspectOpts` object from the environment variables.
       *
       *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
       */

      exports.inspectOpts = Object.keys(process.env)
        .filter(function (key) {
          return /^debug_/i.test(key);
        })
        .reduce(function (obj, key) {
          // camel-case
          var prop = key
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, function (_, k) {
              return k.toUpperCase();
            });

          // coerce string value into JS value
          var val = process.env[key];
          if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
          else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
          else if (val === "null") val = null;
          else val = Number(val);

          obj[prop] = val;
          return obj;
        }, {});

      /**
       * The file descriptor to write the `debug()` calls to.
       * Set the `DEBUG_FD` env variable to override with another value. i.e.:
       *
       *   $ DEBUG_FD=3 node script.js 3>debug.log
       */

      var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

      if (1 !== fd && 2 !== fd) {
        util.deprecate(function () {},
        "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
      }

      var stream =
        1 === fd
          ? process.stdout
          : 2 === fd
          ? process.stderr
          : createWritableStdioStream(fd);

      /**
       * Is stdout a TTY? Colored output is enabled when `true`.
       */

      function useColors() {
        return "colors" in exports.inspectOpts
          ? Boolean(exports.inspectOpts.colors)
          : tty.isatty(fd);
      }

      /**
       * Map %o to `util.inspect()`, all on a single line.
       */

      exports.formatters.o = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util
          .inspect(v, this.inspectOpts)
          .split("\n")
          .map(function (str) {
            return str.trim();
          })
          .join(" ");
      };

      /**
       * Map %o to `util.inspect()`, allowing multiple lines if needed.
       */

      exports.formatters.O = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts);
      };

      /**
       * Adds ANSI color escape codes if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        var name = this.namespace;
        var useColors = this.useColors;

        if (useColors) {
          var c = this.color;
          var prefix = "  \u001b[3" + c + ";1m" + name + " " + "\u001b[0m";

          args[0] = prefix + args[0].split("\n").join("\n" + prefix);
          args.push(
            "\u001b[3" + c + "m+" + exports.humanize(this.diff) + "\u001b[0m"
          );
        } else {
          args[0] = new Date().toUTCString() + " " + name + " " + args[0];
        }
      }

      /**
       * Invokes `util.format()` with the specified arguments and writes to `stream`.
       */

      function log() {
        return stream.write(util.format.apply(util, arguments) + "\n");
      }

      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        if (null == namespaces) {
          // If you set a process.env field to null or undefined, it gets cast to the
          // string 'null' or 'undefined'. Just delete instead.
          delete process.env.DEBUG;
        } else {
          process.env.DEBUG = namespaces;
        }
      }

      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        return process.env.DEBUG;
      }

      /**
       * Copied from `node/src/node.js`.
       *
       * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
       * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
       */

      function createWritableStdioStream(fd) {
        var stream;
        var tty_wrap = process.binding("tty_wrap");

        // Note stream._type is used for test-module-load-list.js

        switch (tty_wrap.guessHandleType(fd)) {
          case "TTY":
            stream = new tty.WriteStream(fd);
            stream._type = "tty";

            // Hack to have stream not keep the event loop alive.
            // See https://github.com/joyent/node/issues/1726
            if (stream._handle && stream._handle.unref) {
              stream._handle.unref();
            }
            break;

          case "FILE":
            var fs = __nccwpck_require__(5747);
            stream = new fs.SyncWriteStream(fd, { autoClose: false });
            stream._type = "fs";
            break;

          case "PIPE":
          case "TCP":
            var net = __nccwpck_require__(1631);
            stream = new net.Socket({
              fd: fd,
              readable: false,
              writable: true,
            });

            // FIXME Should probably have an option in net.Socket to create a
            // stream from an existing fd which is writable only. But for now
            // we'll just add this hack and set the `readable` member to false.
            // Test: ./node test/fixtures/echo.js < /etc/passwd
            stream.readable = false;
            stream.read = null;
            stream._type = "pipe";

            // FIXME Hack to have stream not keep the event loop alive.
            // See https://github.com/joyent/node/issues/1726
            if (stream._handle && stream._handle.unref) {
              stream._handle.unref();
            }
            break;

          default:
            // Probably an error on in uv_guess_handle()
            throw new Error("Implement me. Unknown stream file type!");
        }

        // For supporting legacy API we put the FD here.
        stream.fd = fd;

        stream._isStdio = true;

        return stream;
      }

      /**
       * Init logic for `debug` instances.
       *
       * Create a new `inspectOpts` object in case `useColors` is set
       * differently for a particular `debug` instance.
       */

      function init(debug) {
        debug.inspectOpts = {};

        var keys = Object.keys(exports.inspectOpts);
        for (var i = 0; i < keys.length; i++) {
          debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
        }
      }

      /**
       * Enable namespaces listed in `process.env.DEBUG` initially.
       */

      exports.enable(load());

      /***/
    },

    /***/ 9856: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var isObject = __nccwpck_require__(3050);

      module.exports = function extend(o /*, objects*/) {
        if (!isObject(o)) {
          o = {};
        }

        var len = arguments.length;
        for (var i = 1; i < len; i++) {
          var obj = arguments[i];

          if (isObject(obj)) {
            assign(o, obj);
          }
        }
        return o;
      };

      function assign(a, b) {
        for (var key in b) {
          if (hasOwn(b, key)) {
            a[key] = b[key];
          }
        }
      }

      /**
       * Returns true if the given `key` is an own property of `obj`.
       */

      function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      /***/
    },

    /***/ 3038: /***/ (module) => {
      "use strict";
      /**
       * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
       *
       * Copyright (c) 2021 Kiro Risk (http://kiro.me)
       * All Rights Reserved. Apache Software License 2.0
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       */

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function (obj) {
            return typeof obj;
          };
        } else {
          _typeof = function (obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            );
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              );
            });
          }
        }

        return target;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true,
          },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          );
          return true;
        } catch (e) {
          return false;
        }
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
            result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _unsupportedIterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (
          n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }

      function isArray(value) {
        return !Array.isArray
          ? getTag(value) === "[object Array]"
          : Array.isArray(value);
      } // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js

      var INFINITY = 1 / 0;
      function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == "string") {
          return value;
        }

        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function isString(value) {
        return typeof value === "string";
      }
      function isNumber(value) {
        return typeof value === "number";
      } // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js

      function isBoolean(value) {
        return (
          value === true ||
          value === false ||
          (isObjectLike(value) && getTag(value) == "[object Boolean]")
        );
      }
      function isObject(value) {
        return _typeof(value) === "object";
      } // Checks if `value` is object-like.

      function isObjectLike(value) {
        return isObject(value) && value !== null;
      }
      function isDefined(value) {
        return value !== undefined && value !== null;
      }
      function isBlank(value) {
        return !value.trim().length;
      } // Gets the `toStringTag` of `value`.
      // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js

      function getTag(value) {
        return value == null
          ? value === undefined
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(value);
      }

      var EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
      var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
      var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY =
        function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key) {
          return "Invalid value for key ".concat(key);
        };
      var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE(max) {
        return "Pattern length exceeds max of ".concat(max, ".");
      };
      var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY(name) {
        return "Missing ".concat(name, " property in key");
      };
      var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE(key) {
        return "Property 'weight' in key '".concat(
          key,
          "' must be a positive integer"
        );
      };

      var hasOwn = Object.prototype.hasOwnProperty;

      var KeyStore = /*#__PURE__*/ (function () {
        function KeyStore(keys) {
          var _this = this;

          _classCallCheck(this, KeyStore);

          this._keys = [];
          this._keyMap = {};
          var totalWeight = 0;
          keys.forEach(function (key) {
            var obj = createKey(key);
            totalWeight += obj.weight;

            _this._keys.push(obj);

            _this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
          }); // Normalize weights so that their sum is equal to 1

          this._keys.forEach(function (key) {
            key.weight /= totalWeight;
          });
        }

        _createClass(KeyStore, [
          {
            key: "get",
            value: function get(keyId) {
              return this._keyMap[keyId];
            },
          },
          {
            key: "keys",
            value: function keys() {
              return this._keys;
            },
          },
          {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this._keys);
            },
          },
        ]);

        return KeyStore;
      })();
      function createKey(key) {
        var path = null;
        var id = null;
        var src = null;
        var weight = 1;

        if (isString(key) || isArray(key)) {
          src = key;
          path = createKeyPath(key);
          id = createKeyId(key);
        } else {
          if (!hasOwn.call(key, "name")) {
            throw new Error(MISSING_KEY_PROPERTY("name"));
          }

          var name = key.name;
          src = name;

          if (hasOwn.call(key, "weight")) {
            weight = key.weight;

            if (weight <= 0) {
              throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
            }
          }

          path = createKeyPath(name);
          id = createKeyId(name);
        }

        return {
          path: path,
          id: id,
          weight: weight,
          src: src,
        };
      }
      function createKeyPath(key) {
        return isArray(key) ? key : key.split(".");
      }
      function createKeyId(key) {
        return isArray(key) ? key.join(".") : key;
      }

      function get(obj, path) {
        var list = [];
        var arr = false;

        var deepGet = function deepGet(obj, path, index) {
          if (!isDefined(obj)) {
            return;
          }

          if (!path[index]) {
            // If there's no path left, we've arrived at the object we care about.
            list.push(obj);
          } else {
            var key = path[index];
            var value = obj[key];

            if (!isDefined(value)) {
              return;
            } // If we're at the last value in the path, and if it's a string/number/bool,
            // add it to the list

            if (
              index === path.length - 1 &&
              (isString(value) || isNumber(value) || isBoolean(value))
            ) {
              list.push(toString(value));
            } else if (isArray(value)) {
              arr = true; // Search each item in the array.

              for (var i = 0, len = value.length; i < len; i += 1) {
                deepGet(value[i], path, index + 1);
              }
            } else if (path.length) {
              // An object. Recurse further.
              deepGet(value, path, index + 1);
            }
          }
        }; // Backwards compatibility (since path used to be a string)

        deepGet(obj, isString(path) ? path.split(".") : path, 0);
        return arr ? list : list[0];
      }

      var MatchOptions = {
        // Whether the matches should be included in the result set. When `true`, each record in the result
        // set will include the indices of the matched characters.
        // These can consequently be used for highlighting purposes.
        includeMatches: false,
        // When `true`, the matching function will continue to the end of a search pattern even if
        // a perfect match has already been located in the string.
        findAllMatches: false,
        // Minimum number of characters that must be matched before a result is considered a match
        minMatchCharLength: 1,
      };
      var BasicOptions = {
        // When `true`, the algorithm continues searching to the end of the input even if a perfect
        // match is found before the end of the same input.
        isCaseSensitive: false,
        // When true, the matching function will continue to the end of a search pattern even if
        includeScore: false,
        // List of properties that will be searched. This also supports nested properties.
        keys: [],
        // Whether to sort the result list, by score
        shouldSort: true,
        // Default sort function: sort by ascending score, ascending index
        sortFn: function sortFn(a, b) {
          return a.score === b.score
            ? a.idx < b.idx
              ? -1
              : 1
            : a.score < b.score
            ? -1
            : 1;
        },
      };
      var FuzzyOptions = {
        // Approximately where in the text is the pattern expected to be found?
        location: 0,
        // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
        // (of both letters and location), a threshold of '1.0' would match anything.
        threshold: 0.6,
        // Determines how close the match must be to the fuzzy location (specified above).
        // An exact letter match which is 'distance' characters away from the fuzzy location
        // would score as a complete mismatch. A distance of '0' requires the match be at
        // the exact location specified, a threshold of '1000' would require a perfect match
        // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
        distance: 100,
      };
      var AdvancedOptions = {
        // When `true`, it enables the use of unix-like search commands
        useExtendedSearch: false,
        // The get function to use when fetching an object's properties.
        // The default will search nested paths *ie foo.bar.baz*
        getFn: get,
        // When `true`, search will ignore `location` and `distance`, so it won't matter
        // where in the string the pattern appears.
        // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
        ignoreLocation: false,
        // When `true`, the calculation for the relevance score (used for sorting) will
        // ignore the field-length norm.
        // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
        ignoreFieldNorm: false,
      };
      var Config = _objectSpread2(
        {},
        BasicOptions,
        {},
        MatchOptions,
        {},
        FuzzyOptions,
        {},
        AdvancedOptions
      );

      var SPACE = /[^ ]+/g; // Field-length norm: the shorter the field, the higher the weight.
      // Set to 3 decimals to reduce index size.

      function norm() {
        var mantissa =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var cache = new Map();
        var m = Math.pow(10, mantissa);
        return {
          get: function get(value) {
            var numTokens = value.match(SPACE).length;

            if (cache.has(numTokens)) {
              return cache.get(numTokens);
            }

            var norm = 1 / Math.sqrt(numTokens); // In place of `toFixed(mantissa)`, for faster computation

            var n = parseFloat(Math.round(norm * m) / m);
            cache.set(numTokens, n);
            return n;
          },
          clear: function clear() {
            cache.clear();
          },
        };
      }

      var FuseIndex = /*#__PURE__*/ (function () {
        function FuseIndex() {
          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            _ref$getFn = _ref.getFn,
            getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn;

          _classCallCheck(this, FuseIndex);

          this.norm = norm(3);
          this.getFn = getFn;
          this.isCreated = false;
          this.setIndexRecords();
        }

        _createClass(FuseIndex, [
          {
            key: "setSources",
            value: function setSources() {
              var docs =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              this.docs = docs;
            },
          },
          {
            key: "setIndexRecords",
            value: function setIndexRecords() {
              var records =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              this.records = records;
            },
          },
          {
            key: "setKeys",
            value: function setKeys() {
              var _this = this;

              var keys =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : [];
              this.keys = keys;
              this._keysMap = {};
              keys.forEach(function (key, idx) {
                _this._keysMap[key.id] = idx;
              });
            },
          },
          {
            key: "create",
            value: function create() {
              var _this2 = this;

              if (this.isCreated || !this.docs.length) {
                return;
              }

              this.isCreated = true; // List is Array<String>

              if (isString(this.docs[0])) {
                this.docs.forEach(function (doc, docIndex) {
                  _this2._addString(doc, docIndex);
                });
              } else {
                // List is Array<Object>
                this.docs.forEach(function (doc, docIndex) {
                  _this2._addObject(doc, docIndex);
                });
              }

              this.norm.clear();
            }, // Adds a doc to the end of the index
          },
          {
            key: "add",
            value: function add(doc) {
              var idx = this.size();

              if (isString(doc)) {
                this._addString(doc, idx);
              } else {
                this._addObject(doc, idx);
              }
            }, // Removes the doc at the specified index of the index
          },
          {
            key: "removeAt",
            value: function removeAt(idx) {
              this.records.splice(idx, 1); // Change ref index of every subsquent doc

              for (var i = idx, len = this.size(); i < len; i += 1) {
                this.records[i].i -= 1;
              }
            },
          },
          {
            key: "getValueForItemAtKeyId",
            value: function getValueForItemAtKeyId(item, keyId) {
              return item[this._keysMap[keyId]];
            },
          },
          {
            key: "size",
            value: function size() {
              return this.records.length;
            },
          },
          {
            key: "_addString",
            value: function _addString(doc, docIndex) {
              if (!isDefined(doc) || isBlank(doc)) {
                return;
              }

              var record = {
                v: doc,
                i: docIndex,
                n: this.norm.get(doc),
              };
              this.records.push(record);
            },
          },
          {
            key: "_addObject",
            value: function _addObject(doc, docIndex) {
              var _this3 = this;

              var record = {
                i: docIndex,
                $: {},
              }; // Iterate over every key (i.e, path), and fetch the value at that key

              this.keys.forEach(function (key, keyIndex) {
                // console.log(key)
                var value = _this3.getFn(doc, key.path);

                if (!isDefined(value)) {
                  return;
                }

                if (isArray(value)) {
                  (function () {
                    var subRecords = [];
                    var stack = [
                      {
                        nestedArrIndex: -1,
                        value: value,
                      },
                    ];

                    while (stack.length) {
                      var _stack$pop = stack.pop(),
                        nestedArrIndex = _stack$pop.nestedArrIndex,
                        _value = _stack$pop.value;

                      if (!isDefined(_value)) {
                        continue;
                      }

                      if (isString(_value) && !isBlank(_value)) {
                        var subRecord = {
                          v: _value,
                          i: nestedArrIndex,
                          n: _this3.norm.get(_value),
                        };
                        subRecords.push(subRecord);
                      } else if (isArray(_value)) {
                        _value.forEach(function (item, k) {
                          stack.push({
                            nestedArrIndex: k,
                            value: item,
                          });
                        });
                      }
                    }

                    record.$[keyIndex] = subRecords;
                  })();
                } else if (!isBlank(value)) {
                  var subRecord = {
                    v: value,
                    n: _this3.norm.get(value),
                  };
                  record.$[keyIndex] = subRecord;
                }
              });
              this.records.push(record);
            },
          },
          {
            key: "toJSON",
            value: function toJSON() {
              return {
                keys: this.keys,
                records: this.records,
              };
            },
          },
        ]);

        return FuseIndex;
      })();
      function createIndex(keys, docs) {
        var _ref2 =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {},
          _ref2$getFn = _ref2.getFn,
          getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn;

        var myIndex = new FuseIndex({
          getFn: getFn,
        });
        myIndex.setKeys(keys.map(createKey));
        myIndex.setSources(docs);
        myIndex.create();
        return myIndex;
      }
      function parseIndex(data) {
        var _ref3 =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {},
          _ref3$getFn = _ref3.getFn,
          getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn;

        var keys = data.keys,
          records = data.records;
        var myIndex = new FuseIndex({
          getFn: getFn,
        });
        myIndex.setKeys(keys);
        myIndex.setIndexRecords(records);
        return myIndex;
      }

      function computeScore(pattern) {
        var _ref =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {},
          _ref$errors = _ref.errors,
          errors = _ref$errors === void 0 ? 0 : _ref$errors,
          _ref$currentLocation = _ref.currentLocation,
          currentLocation =
            _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
          _ref$expectedLocation = _ref.expectedLocation,
          expectedLocation =
            _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$ignoreLocation = _ref.ignoreLocation,
          ignoreLocation =
            _ref$ignoreLocation === void 0
              ? Config.ignoreLocation
              : _ref$ignoreLocation;

        var accuracy = errors / pattern.length;

        if (ignoreLocation) {
          return accuracy;
        }

        var proximity = Math.abs(expectedLocation - currentLocation);

        if (!distance) {
          // Dodge divide by zero error.
          return proximity ? 1.0 : accuracy;
        }

        return accuracy + proximity / distance;
      }

      function convertMaskToIndices() {
        var matchmask =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : [];
        var minMatchCharLength =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : Config.minMatchCharLength;
        var indices = [];
        var start = -1;
        var end = -1;
        var i = 0;

        for (var len = matchmask.length; i < len; i += 1) {
          var match = matchmask[i];

          if (match && start === -1) {
            start = i;
          } else if (!match && start !== -1) {
            end = i - 1;

            if (end - start + 1 >= minMatchCharLength) {
              indices.push([start, end]);
            }

            start = -1;
          }
        } // (i-1 - start) + 1 => i - start

        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
          indices.push([start, i - 1]);
        }

        return indices;
      }

      // Machine word size
      var MAX_BITS = 32;

      function search(text, pattern, patternAlphabet) {
        var _ref =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : {},
          _ref$location = _ref.location,
          location = _ref$location === void 0 ? Config.location : _ref$location,
          _ref$distance = _ref.distance,
          distance = _ref$distance === void 0 ? Config.distance : _ref$distance,
          _ref$threshold = _ref.threshold,
          threshold =
            _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
          _ref$findAllMatches = _ref.findAllMatches,
          findAllMatches =
            _ref$findAllMatches === void 0
              ? Config.findAllMatches
              : _ref$findAllMatches,
          _ref$minMatchCharLeng = _ref.minMatchCharLength,
          minMatchCharLength =
            _ref$minMatchCharLeng === void 0
              ? Config.minMatchCharLength
              : _ref$minMatchCharLeng,
          _ref$includeMatches = _ref.includeMatches,
          includeMatches =
            _ref$includeMatches === void 0
              ? Config.includeMatches
              : _ref$includeMatches,
          _ref$ignoreLocation = _ref.ignoreLocation,
          ignoreLocation =
            _ref$ignoreLocation === void 0
              ? Config.ignoreLocation
              : _ref$ignoreLocation;

        if (pattern.length > MAX_BITS) {
          throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
        }

        var patternLen = pattern.length; // Set starting location at beginning text and initialize the alphabet.

        var textLen = text.length; // Handle the case when location > text.length

        var expectedLocation = Math.max(0, Math.min(location, textLen)); // Highest score beyond which we give up.

        var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

        var bestLocation = expectedLocation; // Performance: only computer matches when the minMatchCharLength > 1
        // OR if `includeMatches` is true.

        var computeMatches = minMatchCharLength > 1 || includeMatches; // A mask of the matches, used for building the indices

        var matchMask = computeMatches ? Array(textLen) : [];
        var index; // Get all exact matches, here for speed up

        while ((index = text.indexOf(pattern, bestLocation)) > -1) {
          var score = computeScore(pattern, {
            currentLocation: index,
            expectedLocation: expectedLocation,
            distance: distance,
            ignoreLocation: ignoreLocation,
          });
          currentThreshold = Math.min(score, currentThreshold);
          bestLocation = index + patternLen;

          if (computeMatches) {
            var i = 0;

            while (i < patternLen) {
              matchMask[index + i] = 1;
              i += 1;
            }
          }
        } // Reset the best location

        bestLocation = -1;
        var lastBitArr = [];
        var finalScore = 1;
        var binMax = patternLen + textLen;
        var mask = 1 << (patternLen - 1);

        for (var _i = 0; _i < patternLen; _i += 1) {
          // Scan for the best match; each iteration allows for one more error.
          // Run a binary search to determine how far from the match location we can stray
          // at this error level.
          var binMin = 0;
          var binMid = binMax;

          while (binMin < binMid) {
            var _score2 = computeScore(pattern, {
              errors: _i,
              currentLocation: expectedLocation + binMid,
              expectedLocation: expectedLocation,
              distance: distance,
              ignoreLocation: ignoreLocation,
            });

            if (_score2 <= currentThreshold) {
              binMin = binMid;
            } else {
              binMax = binMid;
            }

            binMid = Math.floor((binMax - binMin) / 2 + binMin);
          } // Use the result from this iteration as the maximum for the next.

          binMax = binMid;
          var start = Math.max(1, expectedLocation - binMid + 1);
          var finish = findAllMatches
            ? textLen
            : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

          var bitArr = Array(finish + 2);
          bitArr[finish + 1] = (1 << _i) - 1;

          for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];

            if (computeMatches) {
              // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
              matchMask[currentLocation] = +!!charMatch;
            } // First pass: exact match

            bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch; // Subsequent passes: fuzzy match

            if (_i) {
              bitArr[j] |=
                ((lastBitArr[j + 1] | lastBitArr[j]) << 1) |
                1 |
                lastBitArr[j + 1];
            }

            if (bitArr[j] & mask) {
              finalScore = computeScore(pattern, {
                errors: _i,
                currentLocation: currentLocation,
                expectedLocation: expectedLocation,
                distance: distance,
                ignoreLocation: ignoreLocation,
              }); // This match will almost certainly be better than any existing match.
              // But check anyway.

              if (finalScore <= currentThreshold) {
                // Indeed it is
                currentThreshold = finalScore;
                bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

                if (bestLocation <= expectedLocation) {
                  break;
                } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.

                start = Math.max(1, 2 * expectedLocation - bestLocation);
              }
            }
          } // No hope for a (better) match at greater error levels.

          var _score = computeScore(pattern, {
            errors: _i + 1,
            currentLocation: expectedLocation,
            expectedLocation: expectedLocation,
            distance: distance,
            ignoreLocation: ignoreLocation,
          });

          if (_score > currentThreshold) {
            break;
          }

          lastBitArr = bitArr;
        }

        var result = {
          isMatch: bestLocation >= 0,
          // Count exact matches (those with a score of 0) to be "almost" exact
          score: Math.max(0.001, finalScore),
        };

        if (computeMatches) {
          var indices = convertMaskToIndices(matchMask, minMatchCharLength);

          if (!indices.length) {
            result.isMatch = false;
          } else if (includeMatches) {
            result.indices = indices;
          }
        }

        return result;
      }

      function createPatternAlphabet(pattern) {
        var mask = {};

        for (var i = 0, len = pattern.length; i < len; i += 1) {
          var char = pattern.charAt(i);
          mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
        }

        return mask;
      }

      var BitapSearch = /*#__PURE__*/ (function () {
        function BitapSearch(pattern) {
          var _this = this;

          var _ref =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref$location = _ref.location,
            location =
              _ref$location === void 0 ? Config.location : _ref$location,
            _ref$threshold = _ref.threshold,
            threshold =
              _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
            _ref$distance = _ref.distance,
            distance =
              _ref$distance === void 0 ? Config.distance : _ref$distance,
            _ref$includeMatches = _ref.includeMatches,
            includeMatches =
              _ref$includeMatches === void 0
                ? Config.includeMatches
                : _ref$includeMatches,
            _ref$findAllMatches = _ref.findAllMatches,
            findAllMatches =
              _ref$findAllMatches === void 0
                ? Config.findAllMatches
                : _ref$findAllMatches,
            _ref$minMatchCharLeng = _ref.minMatchCharLength,
            minMatchCharLength =
              _ref$minMatchCharLeng === void 0
                ? Config.minMatchCharLength
                : _ref$minMatchCharLeng,
            _ref$isCaseSensitive = _ref.isCaseSensitive,
            isCaseSensitive =
              _ref$isCaseSensitive === void 0
                ? Config.isCaseSensitive
                : _ref$isCaseSensitive,
            _ref$ignoreLocation = _ref.ignoreLocation,
            ignoreLocation =
              _ref$ignoreLocation === void 0
                ? Config.ignoreLocation
                : _ref$ignoreLocation;

          _classCallCheck(this, BitapSearch);

          this.options = {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive,
            ignoreLocation: ignoreLocation,
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.chunks = [];

          if (!this.pattern.length) {
            return;
          }

          var addChunk = function addChunk(pattern, startIndex) {
            _this.chunks.push({
              pattern: pattern,
              alphabet: createPatternAlphabet(pattern),
              startIndex: startIndex,
            });
          };

          var len = this.pattern.length;

          if (len > MAX_BITS) {
            var i = 0;
            var remainder = len % MAX_BITS;
            var end = len - remainder;

            while (i < end) {
              addChunk(this.pattern.substr(i, MAX_BITS), i);
              i += MAX_BITS;
            }

            if (remainder) {
              var startIndex = len - MAX_BITS;
              addChunk(this.pattern.substr(startIndex), startIndex);
            }
          } else {
            addChunk(this.pattern, 0);
          }
        }

        _createClass(BitapSearch, [
          {
            key: "searchIn",
            value: function searchIn(text) {
              var _this$options = this.options,
                isCaseSensitive = _this$options.isCaseSensitive,
                includeMatches = _this$options.includeMatches;

              if (!isCaseSensitive) {
                text = text.toLowerCase();
              } // Exact match

              if (this.pattern === text) {
                var _result = {
                  isMatch: true,
                  score: 0,
                };

                if (includeMatches) {
                  _result.indices = [[0, text.length - 1]];
                }

                return _result;
              } // Otherwise, use Bitap algorithm

              var _this$options2 = this.options,
                location = _this$options2.location,
                distance = _this$options2.distance,
                threshold = _this$options2.threshold,
                findAllMatches = _this$options2.findAllMatches,
                minMatchCharLength = _this$options2.minMatchCharLength,
                ignoreLocation = _this$options2.ignoreLocation;
              var allIndices = [];
              var totalScore = 0;
              var hasMatches = false;
              this.chunks.forEach(function (_ref2) {
                var pattern = _ref2.pattern,
                  alphabet = _ref2.alphabet,
                  startIndex = _ref2.startIndex;

                var _search = search(text, pattern, alphabet, {
                    location: location + startIndex,
                    distance: distance,
                    threshold: threshold,
                    findAllMatches: findAllMatches,
                    minMatchCharLength: minMatchCharLength,
                    includeMatches: includeMatches,
                    ignoreLocation: ignoreLocation,
                  }),
                  isMatch = _search.isMatch,
                  score = _search.score,
                  indices = _search.indices;

                if (isMatch) {
                  hasMatches = true;
                }

                totalScore += score;

                if (isMatch && indices) {
                  allIndices = [].concat(
                    _toConsumableArray(allIndices),
                    _toConsumableArray(indices)
                  );
                }
              });
              var result = {
                isMatch: hasMatches,
                score: hasMatches ? totalScore / this.chunks.length : 1,
              };

              if (hasMatches && includeMatches) {
                result.indices = allIndices;
              }

              return result;
            },
          },
        ]);

        return BitapSearch;
      })();

      var BaseMatch = /*#__PURE__*/ (function () {
        function BaseMatch(pattern) {
          _classCallCheck(this, BaseMatch);

          this.pattern = pattern;
        }

        _createClass(
          BaseMatch,
          [
            {
              key: "search",
              value: function search() /*text*/
              {},
            },
          ],
          [
            {
              key: "isMultiMatch",
              value: function isMultiMatch(pattern) {
                return getMatch(pattern, this.multiRegex);
              },
            },
            {
              key: "isSingleMatch",
              value: function isSingleMatch(pattern) {
                return getMatch(pattern, this.singleRegex);
              },
            },
          ]
        );

        return BaseMatch;
      })();

      function getMatch(pattern, exp) {
        var matches = pattern.match(exp);
        return matches ? matches[1] : null;
      }

      var ExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(ExactMatch, _BaseMatch);

        var _super = _createSuper(ExactMatch);

        function ExactMatch(pattern) {
          _classCallCheck(this, ExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          ExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var isMatch = text === this.pattern;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, this.pattern.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^="(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^=(.*)$/;
              },
            },
          ]
        );

        return ExactMatch;
      })(BaseMatch);

      var InverseExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(InverseExactMatch, _BaseMatch);

        var _super = _createSuper(InverseExactMatch);

        function InverseExactMatch(pattern) {
          _classCallCheck(this, InverseExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          InverseExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var index = text.indexOf(this.pattern);
                var isMatch = index === -1;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "inverse-exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)$/;
              },
            },
          ]
        );

        return InverseExactMatch;
      })(BaseMatch);

      var PrefixExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(PrefixExactMatch, _BaseMatch);

        var _super = _createSuper(PrefixExactMatch);

        function PrefixExactMatch(pattern) {
          _classCallCheck(this, PrefixExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          PrefixExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var isMatch = text.startsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, this.pattern.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "prefix-exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^\^"(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^\^(.*)$/;
              },
            },
          ]
        );

        return PrefixExactMatch;
      })(BaseMatch);

      var InversePrefixExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(InversePrefixExactMatch, _BaseMatch);

        var _super = _createSuper(InversePrefixExactMatch);

        function InversePrefixExactMatch(pattern) {
          _classCallCheck(this, InversePrefixExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          InversePrefixExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var isMatch = !text.startsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "inverse-prefix-exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^!\^"(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^!\^(.*)$/;
              },
            },
          ]
        );

        return InversePrefixExactMatch;
      })(BaseMatch);

      var SuffixExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(SuffixExactMatch, _BaseMatch);

        var _super = _createSuper(SuffixExactMatch);

        function SuffixExactMatch(pattern) {
          _classCallCheck(this, SuffixExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          SuffixExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var isMatch = text.endsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [text.length - this.pattern.length, text.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "suffix-exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"\$$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^(.*)\$$/;
              },
            },
          ]
        );

        return SuffixExactMatch;
      })(BaseMatch);

      var InverseSuffixExactMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(InverseSuffixExactMatch, _BaseMatch);

        var _super = _createSuper(InverseSuffixExactMatch);

        function InverseSuffixExactMatch(pattern) {
          _classCallCheck(this, InverseSuffixExactMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          InverseSuffixExactMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var isMatch = !text.endsWith(this.pattern);
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: [0, text.length - 1],
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "inverse-suffix-exact";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^!"(.*)"\$$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^!(.*)\$$/;
              },
            },
          ]
        );

        return InverseSuffixExactMatch;
      })(BaseMatch);

      var FuzzyMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(FuzzyMatch, _BaseMatch);

        var _super = _createSuper(FuzzyMatch);

        function FuzzyMatch(pattern) {
          var _this;

          var _ref =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref$location = _ref.location,
            location =
              _ref$location === void 0 ? Config.location : _ref$location,
            _ref$threshold = _ref.threshold,
            threshold =
              _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
            _ref$distance = _ref.distance,
            distance =
              _ref$distance === void 0 ? Config.distance : _ref$distance,
            _ref$includeMatches = _ref.includeMatches,
            includeMatches =
              _ref$includeMatches === void 0
                ? Config.includeMatches
                : _ref$includeMatches,
            _ref$findAllMatches = _ref.findAllMatches,
            findAllMatches =
              _ref$findAllMatches === void 0
                ? Config.findAllMatches
                : _ref$findAllMatches,
            _ref$minMatchCharLeng = _ref.minMatchCharLength,
            minMatchCharLength =
              _ref$minMatchCharLeng === void 0
                ? Config.minMatchCharLength
                : _ref$minMatchCharLeng,
            _ref$isCaseSensitive = _ref.isCaseSensitive,
            isCaseSensitive =
              _ref$isCaseSensitive === void 0
                ? Config.isCaseSensitive
                : _ref$isCaseSensitive,
            _ref$ignoreLocation = _ref.ignoreLocation,
            ignoreLocation =
              _ref$ignoreLocation === void 0
                ? Config.ignoreLocation
                : _ref$ignoreLocation;

          _classCallCheck(this, FuzzyMatch);

          _this = _super.call(this, pattern);
          _this._bitapSearch = new BitapSearch(pattern, {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive,
            ignoreLocation: ignoreLocation,
          });
          return _this;
        }

        _createClass(
          FuzzyMatch,
          [
            {
              key: "search",
              value: function search(text) {
                return this._bitapSearch.searchIn(text);
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "fuzzy";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^"(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^(.*)$/;
              },
            },
          ]
        );

        return FuzzyMatch;
      })(BaseMatch);

      var IncludeMatch = /*#__PURE__*/ (function (_BaseMatch) {
        _inherits(IncludeMatch, _BaseMatch);

        var _super = _createSuper(IncludeMatch);

        function IncludeMatch(pattern) {
          _classCallCheck(this, IncludeMatch);

          return _super.call(this, pattern);
        }

        _createClass(
          IncludeMatch,
          [
            {
              key: "search",
              value: function search(text) {
                var location = 0;
                var index;
                var indices = [];
                var patternLen = this.pattern.length; // Get all exact matches

                while ((index = text.indexOf(this.pattern, location)) > -1) {
                  location = index + patternLen;
                  indices.push([index, location - 1]);
                }

                var isMatch = !!indices.length;
                return {
                  isMatch: isMatch,
                  score: isMatch ? 0 : 1,
                  indices: indices,
                };
              },
            },
          ],
          [
            {
              key: "type",
              get: function get() {
                return "include";
              },
            },
            {
              key: "multiRegex",
              get: function get() {
                return /^'"(.*)"$/;
              },
            },
            {
              key: "singleRegex",
              get: function get() {
                return /^'(.*)$/;
              },
            },
          ]
        );

        return IncludeMatch;
      })(BaseMatch);

      var searchers = [
        ExactMatch,
        IncludeMatch,
        PrefixExactMatch,
        InversePrefixExactMatch,
        InverseSuffixExactMatch,
        SuffixExactMatch,
        InverseExactMatch,
        FuzzyMatch,
      ];
      var searchersLen = searchers.length; // Regex to split by spaces, but keep anything in quotes together

      var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
      var OR_TOKEN = "|"; // Return a 2D array representation of the query, for simpler parsing.
      // Example:
      // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]

      function parseQuery(pattern) {
        var options =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        return pattern.split(OR_TOKEN).map(function (item) {
          var query = item
            .trim()
            .split(SPACE_RE)
            .filter(function (item) {
              return item && !!item.trim();
            });
          var results = [];

          for (var i = 0, len = query.length; i < len; i += 1) {
            var queryItem = query[i]; // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)

            var found = false;
            var idx = -1;

            while (!found && ++idx < searchersLen) {
              var searcher = searchers[idx];
              var token = searcher.isMultiMatch(queryItem);

              if (token) {
                results.push(new searcher(token, options));
                found = true;
              }
            }

            if (found) {
              continue;
            } // 2. Handle single query matches (i.e, once that are *not* quoted)

            idx = -1;

            while (++idx < searchersLen) {
              var _searcher = searchers[idx];

              var _token = _searcher.isSingleMatch(queryItem);

              if (_token) {
                results.push(new _searcher(_token, options));
                break;
              }
            }
          }

          return results;
        });
      }

      // to a singl match

      var MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
      /**
       * Command-like searching
       * ======================
       *
       * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
       * search in a given text.
       *
       * Search syntax:
       *
       * | Token       | Match type                 | Description                            |
       * | ----------- | -------------------------- | -------------------------------------- |
       * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
       * | `=scheme`   | exact-match                | Items that are `scheme`                |
       * | `'python`   | include-match              | Items that include `python`            |
       * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
       * | `^java`     | prefix-exact-match         | Items that start with `java`           |
       * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
       * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
       * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
       *
       * A single pipe character acts as an OR operator. For example, the following
       * query matches entries that start with `core` and end with either`go`, `rb`,
       * or`py`.
       *
       * ```
       * ^core go$ | rb$ | py$
       * ```
       */

      var ExtendedSearch = /*#__PURE__*/ (function () {
        function ExtendedSearch(pattern) {
          var _ref =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref$isCaseSensitive = _ref.isCaseSensitive,
            isCaseSensitive =
              _ref$isCaseSensitive === void 0
                ? Config.isCaseSensitive
                : _ref$isCaseSensitive,
            _ref$includeMatches = _ref.includeMatches,
            includeMatches =
              _ref$includeMatches === void 0
                ? Config.includeMatches
                : _ref$includeMatches,
            _ref$minMatchCharLeng = _ref.minMatchCharLength,
            minMatchCharLength =
              _ref$minMatchCharLeng === void 0
                ? Config.minMatchCharLength
                : _ref$minMatchCharLeng,
            _ref$ignoreLocation = _ref.ignoreLocation,
            ignoreLocation =
              _ref$ignoreLocation === void 0
                ? Config.ignoreLocation
                : _ref$ignoreLocation,
            _ref$findAllMatches = _ref.findAllMatches,
            findAllMatches =
              _ref$findAllMatches === void 0
                ? Config.findAllMatches
                : _ref$findAllMatches,
            _ref$location = _ref.location,
            location =
              _ref$location === void 0 ? Config.location : _ref$location,
            _ref$threshold = _ref.threshold,
            threshold =
              _ref$threshold === void 0 ? Config.threshold : _ref$threshold,
            _ref$distance = _ref.distance,
            distance =
              _ref$distance === void 0 ? Config.distance : _ref$distance;

          _classCallCheck(this, ExtendedSearch);

          this.query = null;
          this.options = {
            isCaseSensitive: isCaseSensitive,
            includeMatches: includeMatches,
            minMatchCharLength: minMatchCharLength,
            findAllMatches: findAllMatches,
            ignoreLocation: ignoreLocation,
            location: location,
            threshold: threshold,
            distance: distance,
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.query = parseQuery(this.pattern, this.options);
        }

        _createClass(
          ExtendedSearch,
          [
            {
              key: "searchIn",
              value: function searchIn(text) {
                var query = this.query;

                if (!query) {
                  return {
                    isMatch: false,
                    score: 1,
                  };
                }

                var _this$options = this.options,
                  includeMatches = _this$options.includeMatches,
                  isCaseSensitive = _this$options.isCaseSensitive;
                text = isCaseSensitive ? text : text.toLowerCase();
                var numMatches = 0;
                var allIndices = [];
                var totalScore = 0; // ORs

                for (var i = 0, qLen = query.length; i < qLen; i += 1) {
                  var searchers = query[i]; // Reset indices

                  allIndices.length = 0;
                  numMatches = 0; // ANDs

                  for (var j = 0, pLen = searchers.length; j < pLen; j += 1) {
                    var searcher = searchers[j];

                    var _searcher$search = searcher.search(text),
                      isMatch = _searcher$search.isMatch,
                      indices = _searcher$search.indices,
                      score = _searcher$search.score;

                    if (isMatch) {
                      numMatches += 1;
                      totalScore += score;

                      if (includeMatches) {
                        var type = searcher.constructor.type;

                        if (MultiMatchSet.has(type)) {
                          allIndices = [].concat(
                            _toConsumableArray(allIndices),
                            _toConsumableArray(indices)
                          );
                        } else {
                          allIndices.push(indices);
                        }
                      }
                    } else {
                      totalScore = 0;
                      numMatches = 0;
                      allIndices.length = 0;
                      break;
                    }
                  } // OR condition, so if TRUE, return

                  if (numMatches) {
                    var result = {
                      isMatch: true,
                      score: totalScore / numMatches,
                    };

                    if (includeMatches) {
                      result.indices = allIndices;
                    }

                    return result;
                  }
                } // Nothing was matched

                return {
                  isMatch: false,
                  score: 1,
                };
              },
            },
          ],
          [
            {
              key: "condition",
              value: function condition(_, options) {
                return options.useExtendedSearch;
              },
            },
          ]
        );

        return ExtendedSearch;
      })();

      var registeredSearchers = [];
      function register() {
        registeredSearchers.push.apply(registeredSearchers, arguments);
      }
      function createSearcher(pattern, options) {
        for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
          var searcherClass = registeredSearchers[i];

          if (searcherClass.condition(pattern, options)) {
            return new searcherClass(pattern, options);
          }
        }

        return new BitapSearch(pattern, options);
      }

      var LogicalOperator = {
        AND: "$and",
        OR: "$or",
      };
      var KeyType = {
        PATH: "$path",
        PATTERN: "$val",
      };

      var isExpression = function isExpression(query) {
        return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
      };

      var isPath = function isPath(query) {
        return !!query[KeyType.PATH];
      };

      var isLeaf = function isLeaf(query) {
        return !isArray(query) && isObject(query) && !isExpression(query);
      };

      var convertToExplicit = function convertToExplicit(query) {
        return _defineProperty(
          {},
          LogicalOperator.AND,
          Object.keys(query).map(function (key) {
            return _defineProperty({}, key, query[key]);
          })
        );
      }; // When `auto` is `true`, the parse function will infer and initialize and add
      // the appropriate `Searcher` instance

      function parse(query, options) {
        var _ref3 =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {},
          _ref3$auto = _ref3.auto,
          auto = _ref3$auto === void 0 ? true : _ref3$auto;

        var next = function next(query) {
          var keys = Object.keys(query);
          var isQueryPath = isPath(query);

          if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
            return next(convertToExplicit(query));
          }

          if (isLeaf(query)) {
            var key = isQueryPath ? query[KeyType.PATH] : keys[0];
            var pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

            if (!isString(pattern)) {
              throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            }

            var obj = {
              keyId: createKeyId(key),
              pattern: pattern,
            };

            if (auto) {
              obj.searcher = createSearcher(pattern, options);
            }

            return obj;
          }

          var node = {
            children: [],
            operator: keys[0],
          };
          keys.forEach(function (key) {
            var value = query[key];

            if (isArray(value)) {
              value.forEach(function (item) {
                node.children.push(next(item));
              });
            }
          });
          return node;
        };

        if (!isExpression(query)) {
          query = convertToExplicit(query);
        }

        return next(query);
      }

      function computeScore$1(results, _ref) {
        var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm,
          ignoreFieldNorm =
            _ref$ignoreFieldNorm === void 0
              ? Config.ignoreFieldNorm
              : _ref$ignoreFieldNorm;
        results.forEach(function (result) {
          var totalScore = 1;
          result.matches.forEach(function (_ref2) {
            var key = _ref2.key,
              norm = _ref2.norm,
              score = _ref2.score;
            var weight = key ? key.weight : null;
            totalScore *= Math.pow(
              score === 0 && weight ? Number.EPSILON : score,
              (weight || 1) * (ignoreFieldNorm ? 1 : norm)
            );
          });
          result.score = totalScore;
        });
      }

      function transformMatches(result, data) {
        var matches = result.matches;
        data.matches = [];

        if (!isDefined(matches)) {
          return;
        }

        matches.forEach(function (match) {
          if (!isDefined(match.indices) || !match.indices.length) {
            return;
          }

          var indices = match.indices,
            value = match.value;
          var obj = {
            indices: indices,
            value: value,
          };

          if (match.key) {
            obj.key = match.key.src;
          }

          if (match.idx > -1) {
            obj.refIndex = match.idx;
          }

          data.matches.push(obj);
        });
      }

      function transformScore(result, data) {
        data.score = result.score;
      }

      function format(results, docs) {
        var _ref =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {},
          _ref$includeMatches = _ref.includeMatches,
          includeMatches =
            _ref$includeMatches === void 0
              ? Config.includeMatches
              : _ref$includeMatches,
          _ref$includeScore = _ref.includeScore,
          includeScore =
            _ref$includeScore === void 0
              ? Config.includeScore
              : _ref$includeScore;

        var transformers = [];
        if (includeMatches) transformers.push(transformMatches);
        if (includeScore) transformers.push(transformScore);
        return results.map(function (result) {
          var idx = result.idx;
          var data = {
            item: docs[idx],
            refIndex: idx,
          };

          if (transformers.length) {
            transformers.forEach(function (transformer) {
              transformer(result, data);
            });
          }

          return data;
        });
      }

      var Fuse = /*#__PURE__*/ (function () {
        function Fuse(docs) {
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var index = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, Fuse);

          this.options = _objectSpread2({}, Config, {}, options);

          if (this.options.useExtendedSearch && !true) {
            throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
          }

          this._keyStore = new KeyStore(this.options.keys);
          this.setCollection(docs, index);
        }

        _createClass(Fuse, [
          {
            key: "setCollection",
            value: function setCollection(docs, index) {
              this._docs = docs;

              if (index && !(index instanceof FuseIndex)) {
                throw new Error(INCORRECT_INDEX_TYPE);
              }

              this._myIndex =
                index ||
                createIndex(this.options.keys, this._docs, {
                  getFn: this.options.getFn,
                });
            },
          },
          {
            key: "add",
            value: function add(doc) {
              if (!isDefined(doc)) {
                return;
              }

              this._docs.push(doc);

              this._myIndex.add(doc);
            },
          },
          {
            key: "remove",
            value: function remove() {
              var predicate =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : function () {
                      return (
                        /* doc, idx */
                        false
                      );
                    };
              var results = [];

              for (var i = 0, len = this._docs.length; i < len; i += 1) {
                var doc = this._docs[i];

                if (predicate(doc, i)) {
                  this.removeAt(i);
                  i -= 1;
                  len -= 1;
                  results.push(doc);
                }
              }

              return results;
            },
          },
          {
            key: "removeAt",
            value: function removeAt(idx) {
              this._docs.splice(idx, 1);

              this._myIndex.removeAt(idx);
            },
          },
          {
            key: "getIndex",
            value: function getIndex() {
              return this._myIndex;
            },
          },
          {
            key: "search",
            value: function search(query) {
              var _ref =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {},
                _ref$limit = _ref.limit,
                limit = _ref$limit === void 0 ? -1 : _ref$limit;

              var _this$options = this.options,
                includeMatches = _this$options.includeMatches,
                includeScore = _this$options.includeScore,
                shouldSort = _this$options.shouldSort,
                sortFn = _this$options.sortFn,
                ignoreFieldNorm = _this$options.ignoreFieldNorm;
              var results = isString(query)
                ? isString(this._docs[0])
                  ? this._searchStringList(query)
                  : this._searchObjectList(query)
                : this._searchLogical(query);
              computeScore$1(results, {
                ignoreFieldNorm: ignoreFieldNorm,
              });

              if (shouldSort) {
                results.sort(sortFn);
              }

              if (isNumber(limit) && limit > -1) {
                results = results.slice(0, limit);
              }

              return format(results, this._docs, {
                includeMatches: includeMatches,
                includeScore: includeScore,
              });
            },
          },
          {
            key: "_searchStringList",
            value: function _searchStringList(query) {
              var searcher = createSearcher(query, this.options);
              var records = this._myIndex.records;
              var results = []; // Iterate over every string in the index

              records.forEach(function (_ref2) {
                var text = _ref2.v,
                  idx = _ref2.i,
                  norm = _ref2.n;

                if (!isDefined(text)) {
                  return;
                }

                var _searcher$searchIn = searcher.searchIn(text),
                  isMatch = _searcher$searchIn.isMatch,
                  score = _searcher$searchIn.score,
                  indices = _searcher$searchIn.indices;

                if (isMatch) {
                  results.push({
                    item: text,
                    idx: idx,
                    matches: [
                      {
                        score: score,
                        value: text,
                        norm: norm,
                        indices: indices,
                      },
                    ],
                  });
                }
              });
              return results;
            },
          },
          {
            key: "_searchLogical",
            value: function _searchLogical(query) {
              var _this = this;

              var expression = parse(query, this.options);

              var evaluate = function evaluate(node, item, idx) {
                if (!node.children) {
                  var keyId = node.keyId,
                    searcher = node.searcher;

                  var matches = _this._findMatches({
                    key: _this._keyStore.get(keyId),
                    value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher: searcher,
                  });

                  if (matches && matches.length) {
                    return [
                      {
                        idx: idx,
                        item: item,
                        matches: matches,
                      },
                    ];
                  }

                  return [];
                }
                /*eslint indent: [2, 2, {"SwitchCase": 1}]*/

                switch (node.operator) {
                  case LogicalOperator.AND: {
                    var res = [];

                    for (
                      var i = 0, len = node.children.length;
                      i < len;
                      i += 1
                    ) {
                      var child = node.children[i];
                      var result = evaluate(child, item, idx);

                      if (result.length) {
                        res.push.apply(res, _toConsumableArray(result));
                      } else {
                        return [];
                      }
                    }

                    return res;
                  }

                  case LogicalOperator.OR: {
                    var _res = [];

                    for (
                      var _i = 0, _len = node.children.length;
                      _i < _len;
                      _i += 1
                    ) {
                      var _child = node.children[_i];

                      var _result = evaluate(_child, item, idx);

                      if (_result.length) {
                        _res.push.apply(_res, _toConsumableArray(_result));

                        break;
                      }
                    }

                    return _res;
                  }
                }
              };

              var records = this._myIndex.records;
              var resultMap = {};
              var results = [];
              records.forEach(function (_ref3) {
                var item = _ref3.$,
                  idx = _ref3.i;

                if (isDefined(item)) {
                  var expResults = evaluate(expression, item, idx);

                  if (expResults.length) {
                    // Dedupe when adding
                    if (!resultMap[idx]) {
                      resultMap[idx] = {
                        idx: idx,
                        item: item,
                        matches: [],
                      };
                      results.push(resultMap[idx]);
                    }

                    expResults.forEach(function (_ref4) {
                      var _resultMap$idx$matche;

                      var matches = _ref4.matches;

                      (_resultMap$idx$matche =
                        resultMap[idx].matches).push.apply(
                        _resultMap$idx$matche,
                        _toConsumableArray(matches)
                      );
                    });
                  }
                }
              });
              return results;
            },
          },
          {
            key: "_searchObjectList",
            value: function _searchObjectList(query) {
              var _this2 = this;

              var searcher = createSearcher(query, this.options);
              var _this$_myIndex = this._myIndex,
                keys = _this$_myIndex.keys,
                records = _this$_myIndex.records;
              var results = []; // List is Array<Object>

              records.forEach(function (_ref5) {
                var item = _ref5.$,
                  idx = _ref5.i;

                if (!isDefined(item)) {
                  return;
                }

                var matches = []; // Iterate over every key (i.e, path), and fetch the value at that key

                keys.forEach(function (key, keyIndex) {
                  matches.push.apply(
                    matches,
                    _toConsumableArray(
                      _this2._findMatches({
                        key: key,
                        value: item[keyIndex],
                        searcher: searcher,
                      })
                    )
                  );
                });

                if (matches.length) {
                  results.push({
                    idx: idx,
                    item: item,
                    matches: matches,
                  });
                }
              });
              return results;
            },
          },
          {
            key: "_findMatches",
            value: function _findMatches(_ref6) {
              var key = _ref6.key,
                value = _ref6.value,
                searcher = _ref6.searcher;

              if (!isDefined(value)) {
                return [];
              }

              var matches = [];

              if (isArray(value)) {
                value.forEach(function (_ref7) {
                  var text = _ref7.v,
                    idx = _ref7.i,
                    norm = _ref7.n;

                  if (!isDefined(text)) {
                    return;
                  }

                  var _searcher$searchIn2 = searcher.searchIn(text),
                    isMatch = _searcher$searchIn2.isMatch,
                    score = _searcher$searchIn2.score,
                    indices = _searcher$searchIn2.indices;

                  if (isMatch) {
                    matches.push({
                      score: score,
                      key: key,
                      value: text,
                      idx: idx,
                      norm: norm,
                      indices: indices,
                    });
                  }
                });
              } else {
                var text = value.v,
                  norm = value.n;

                var _searcher$searchIn3 = searcher.searchIn(text),
                  isMatch = _searcher$searchIn3.isMatch,
                  score = _searcher$searchIn3.score,
                  indices = _searcher$searchIn3.indices;

                if (isMatch) {
                  matches.push({
                    score: score,
                    key: key,
                    value: text,
                    norm: norm,
                    indices: indices,
                  });
                }
              }

              return matches;
            },
          },
        ]);

        return Fuse;
      })();

      Fuse.version = "6.4.6";
      Fuse.createIndex = createIndex;
      Fuse.parseIndex = parseIndex;
      Fuse.config = Config;

      {
        Fuse.parseQuery = parse;
      }

      {
        register(ExtendedSearch);
      }

      module.exports = Fuse;

      /***/
    },

    /***/ 8989: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const fs = __nccwpck_require__(5747);
      const sections = __nccwpck_require__(9846);
      const defaults = __nccwpck_require__(8742);
      const stringify = __nccwpck_require__(2107);
      const excerpt = __nccwpck_require__(2158);
      const engines = __nccwpck_require__(5412);
      const toFile = __nccwpck_require__(3435);
      const parse = __nccwpck_require__(1162);
      const utils = __nccwpck_require__(1735);

      /**
       * Takes a string or object with `content` property, extracts
       * and parses front-matter from the string, then returns an object
       * with `data`, `content` and other [useful properties](#returned-object).
       *
       * ```js
       * const matter = require('gray-matter');
       * console.log(matter('---\ntitle: Home\n---\nOther stuff'));
       * //=> { data: { title: 'Home'}, content: 'Other stuff' }
       * ```
       * @param {Object|String} `input` String, or object with `content` string
       * @param {Object} `options`
       * @return {Object}
       * @api public
       */

      function matter(input, options) {
        if (input === "") {
          return { data: {}, content: input, excerpt: "", orig: input };
        }

        let file = toFile(input);
        const cached = matter.cache[file.content];

        if (!options) {
          if (cached) {
            file = Object.assign({}, cached);
            file.orig = cached.orig;
            return file;
          }

          // only cache if there are no options passed. if we cache when options
          // are passed, we would need to also cache options values, which would
          // negate any performance benefits of caching
          matter.cache[file.content] = file;
        }

        return parseMatter(file, options);
      }

      /**
       * Parse front matter
       */

      function parseMatter(file, options) {
        const opts = defaults(options);
        const open = opts.delimiters[0];
        const close = "\n" + opts.delimiters[1];
        let str = file.content;

        if (opts.language) {
          file.language = opts.language;
        }

        // get the length of the opening delimiter
        const openLen = open.length;
        if (!utils.startsWith(str, open, openLen)) {
          excerpt(file, opts);
          return file;
        }

        // if the next character after the opening delimiter is
        // a character from the delimiter, then it's not a front-
        // matter delimiter
        if (str.charAt(openLen) === open.slice(-1)) {
          return file;
        }

        // strip the opening delimiter
        str = str.slice(openLen);
        const len = str.length;

        // use the language defined after first delimiter, if it exists
        const language = matter.language(str, opts);
        if (language.name) {
          file.language = language.name;
          str = str.slice(language.raw.length);
        }

        // get the index of the closing delimiter
        let closeIndex = str.indexOf(close);
        if (closeIndex === -1) {
          closeIndex = len;
        }

        // get the raw front-matter block
        file.matter = str.slice(0, closeIndex);

        const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
        if (block === "") {
          file.isEmpty = true;
          file.empty = file.content;
          file.data = {};
        } else {
          // create file.data by parsing the raw file.matter block
          file.data = parse(file.language, file.matter, opts);
        }

        // update file.content
        if (closeIndex === len) {
          file.content = "";
        } else {
          file.content = str.slice(closeIndex + close.length);
          if (file.content[0] === "\r") {
            file.content = file.content.slice(1);
          }
          if (file.content[0] === "\n") {
            file.content = file.content.slice(1);
          }
        }

        excerpt(file, opts);

        if (opts.sections === true || typeof opts.section === "function") {
          sections(file, opts.section);
        }
        return file;
      }

      /**
       * Expose engines
       */

      matter.engines = engines;

      /**
       * Stringify an object to YAML or the specified language, and
       * append it to the given string. By default, only YAML and JSON
       * can be stringified. See the [engines](#engines) section to learn
       * how to stringify other languages.
       *
       * ```js
       * console.log(matter.stringify('foo bar baz', {title: 'Home'}));
       * // results in:
       * // ---
       * // title: Home
       * // ---
       * // foo bar baz
       * ```
       * @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
       * @param {Object} `data` Front matter to stringify.
       * @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
       * @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
       * @api public
       */

      matter.stringify = function (file, data, options) {
        if (typeof file === "string") file = matter(file, options);
        return stringify(file, data, options);
      };

      /**
       * Synchronously read a file from the file system and parse
       * front matter. Returns the same object as the [main function](#matter).
       *
       * ```js
       * const file = matter.read('./content/blog-post.md');
       * ```
       * @param {String} `filepath` file path of the file to read.
       * @param {Object} `options` [Options](#options) to pass to gray-matter.
       * @return {Object} Returns [an object](#returned-object) with `data` and `content`
       * @api public
       */

      matter.read = function (filepath, options) {
        const str = fs.readFileSync(filepath, "utf8");
        const file = matter(str, options);
        file.path = filepath;
        return file;
      };

      /**
       * Returns true if the given `string` has front matter.
       * @param  {String} `string`
       * @param  {Object} `options`
       * @return {Boolean} True if front matter exists.
       * @api public
       */

      matter.test = function (str, options) {
        return utils.startsWith(str, defaults(options).delimiters[0]);
      };

      /**
       * Detect the language to use, if one is defined after the
       * first front-matter delimiter.
       * @param  {String} `string`
       * @param  {Object} `options`
       * @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
       */

      matter.language = function (str, options) {
        const opts = defaults(options);
        const open = opts.delimiters[0];

        if (matter.test(str)) {
          str = str.slice(open.length);
        }

        const language = str.slice(0, str.search(/\r?\n/));
        return {
          raw: language,
          name: language ? language.trim() : "",
        };
      };

      /**
       * Expose `matter`
       */

      matter.cache = {};
      matter.clearCache = function () {
        matter.cache = {};
      };
      module.exports = matter;

      /***/
    },

    /***/ 8742: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const engines = __nccwpck_require__(5412);
      const utils = __nccwpck_require__(1735);

      module.exports = function (options) {
        const opts = Object.assign({}, options);

        // ensure that delimiters are an array
        opts.delimiters = utils.arrayify(
          opts.delims || opts.delimiters || "---"
        );
        if (opts.delimiters.length === 1) {
          opts.delimiters.push(opts.delimiters[0]);
        }

        opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
        opts.engines = Object.assign({}, engines, opts.parsers, opts.engines);
        return opts;
      };

      /***/
    },

    /***/ 2656: /***/ (module) => {
      "use strict";

      module.exports = function (name, options) {
        let engine = options.engines[name] || options.engines[aliase(name)];
        if (typeof engine === "undefined") {
          throw new Error(
            'gray-matter engine "' + name + '" is not registered'
          );
        }
        if (typeof engine === "function") {
          engine = { parse: engine };
        }
        return engine;
      };

      function aliase(name) {
        switch (name.toLowerCase()) {
          case "js":
          case "javascript":
            return "javascript";
          case "coffee":
          case "coffeescript":
          case "cson":
            return "coffee";
          case "yaml":
          case "yml":
            return "yaml";
          default: {
            return name;
          }
        }
      }

      /***/
    },

    /***/ 5412: /***/ (module, exports, __nccwpck_require__) => {
      "use strict";

      const yaml = __nccwpck_require__(5025);

      /**
       * Default engines
       */

      const engines = (exports = module.exports);

      /**
       * YAML
       */

      engines.yaml = {
        parse: yaml.safeLoad.bind(yaml),
        stringify: yaml.safeDump.bind(yaml),
      };

      /**
       * JSON
       */

      engines.json = {
        parse: JSON.parse.bind(JSON),
        stringify: function (obj, options) {
          const opts = Object.assign({ replacer: null, space: 2 }, options);
          return JSON.stringify(obj, opts.replacer, opts.space);
        },
      };

      /**
       * JavaScript
       */

      engines.javascript = {
        parse: function parse(str, options, wrap) {
          /* eslint no-eval: 0 */
          try {
            if (wrap !== false) {
              str = "(function() {\nreturn " + str.trim() + ";\n}());";
            }
            return eval(str) || {};
          } catch (err) {
            if (
              wrap !== false &&
              /(unexpected|identifier)/i.test(err.message)
            ) {
              return parse(str, options, false);
            }
            throw new SyntaxError(err);
          }
        },
        stringify: function () {
          throw new Error("stringifying JavaScript is not supported");
        },
      };

      /***/
    },

    /***/ 2158: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const defaults = __nccwpck_require__(8742);

      module.exports = function (file, options) {
        const opts = defaults(options);

        if (file.data == null) {
          file.data = {};
        }

        if (typeof opts.excerpt === "function") {
          return opts.excerpt(file, opts);
        }

        const sep = file.data.excerpt_separator || opts.excerpt_separator;
        if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
          return file;
        }

        const delimiter =
          typeof opts.excerpt === "string"
            ? opts.excerpt
            : sep || opts.delimiters[0];

        // if enabled, get the excerpt defined after front-matter
        const idx = file.content.indexOf(delimiter);
        if (idx !== -1) {
          file.excerpt = file.content.slice(0, idx);
        }

        return file;
      };

      /***/
    },

    /***/ 1162: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const getEngine = __nccwpck_require__(2656);
      const defaults = __nccwpck_require__(8742);

      module.exports = function (language, str, options) {
        const opts = defaults(options);
        const engine = getEngine(language, opts);
        if (typeof engine.parse !== "function") {
          throw new TypeError(
            'expected "' + language + '.parse" to be a function'
          );
        }
        return engine.parse(str, opts);
      };

      /***/
    },

    /***/ 2107: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const typeOf = __nccwpck_require__(6626);
      const getEngine = __nccwpck_require__(2656);
      const defaults = __nccwpck_require__(8742);

      module.exports = function (file, data, options) {
        if (data == null && options == null) {
          switch (typeOf(file)) {
            case "object":
              data = file.data;
              options = {};
              break;
            case "string":
              return file;
            default: {
              throw new TypeError("expected file to be a string or object");
            }
          }
        }

        const str = file.content;
        const opts = defaults(options);
        if (data == null) {
          if (!opts.data) return file;
          data = opts.data;
        }

        const language = file.language || opts.language;
        const engine = getEngine(language, opts);
        if (typeof engine.stringify !== "function") {
          throw new TypeError(
            'expected "' + language + '.stringify" to be a function'
          );
        }

        data = Object.assign({}, file.data, data);
        const open = opts.delimiters[0];
        const close = opts.delimiters[1];
        const matter = engine.stringify(data, options).trim();
        let buf = "";

        if (matter !== "{}") {
          buf = newline(open) + newline(matter) + newline(close);
        }

        if (typeof file.excerpt === "string" && file.excerpt !== "") {
          if (str.indexOf(file.excerpt.trim()) === -1) {
            buf += newline(file.excerpt) + newline(close);
          }
        }

        return buf + newline(str);
      };

      function newline(str) {
        return str.slice(-1) !== "\n" ? str + "\n" : str;
      }

      /***/
    },

    /***/ 3435: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const typeOf = __nccwpck_require__(6626);
      const stringify = __nccwpck_require__(2107);
      const utils = __nccwpck_require__(1735);

      /**
       * Normalize the given value to ensure an object is returned
       * with the expected properties.
       */

      module.exports = function (file) {
        if (typeOf(file) !== "object") {
          file = { content: file };
        }

        if (typeOf(file.data) !== "object") {
          file.data = {};
        }

        // if file was passed as an object, ensure that
        // "file.content" is set
        if (file.contents && file.content == null) {
          file.content = file.contents;
        }

        // set non-enumerable properties on the file object
        utils.define(file, "orig", utils.toBuffer(file.content));
        utils.define(file, "language", file.language || "");
        utils.define(file, "matter", file.matter || "");
        utils.define(file, "stringify", function (data, options) {
          if (options && options.language) {
            file.language = options.language;
          }
          return stringify(file, data, options);
        });

        // strip BOM and ensure that "file.content" is a string
        file.content = utils.toString(file.content);
        file.isEmpty = false;
        file.excerpt = "";
        return file;
      };

      /***/
    },

    /***/ 1735: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      const stripBom = __nccwpck_require__(1574);
      const typeOf = __nccwpck_require__(6626);

      exports.define = function (obj, key, val) {
        Reflect.defineProperty(obj, key, {
          enumerable: false,
          configurable: true,
          writable: true,
          value: val,
        });
      };

      /**
       * Returns true if `val` is a buffer
       */

      exports.isBuffer = function (val) {
        return typeOf(val) === "buffer";
      };

      /**
       * Returns true if `val` is an object
       */

      exports.isObject = function (val) {
        return typeOf(val) === "object";
      };

      /**
       * Cast `input` to a buffer
       */

      exports.toBuffer = function (input) {
        return typeof input === "string" ? Buffer.from(input) : input;
      };

      /**
       * Cast `val` to a string.
       */

      exports.toString = function (input) {
        if (exports.isBuffer(input)) return stripBom(String(input));
        if (typeof input !== "string") {
          throw new TypeError("expected input to be a string or buffer");
        }
        return stripBom(input);
      };

      /**
       * Cast `val` to an array.
       */

      exports.arrayify = function (val) {
        return val ? (Array.isArray(val) ? val : [val]) : [];
      };

      /**
       * Returns true if `str` starts with `substr`.
       */

      exports.startsWith = function (str, substr, len) {
        if (typeof len !== "number") len = substr.length;
        return str.slice(0, len) === substr;
      };

      /***/
    },

    /***/ 5003: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(3846).Buffer;

      // Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
      // Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
      // To save memory and loading time, we read table files only when requested.

      exports._dbcs = DBCSCodec;

      var UNASSIGNED = -1,
        GB18030_CODE = -2,
        SEQ_START = -10,
        NODE_START = -1000,
        UNASSIGNED_NODE = new Array(0x100),
        DEF_CHAR = -1;

      for (var i = 0; i < 0x100; i++) UNASSIGNED_NODE[i] = UNASSIGNED;

      // Class DBCSCodec reads and initializes mapping tables.
      function DBCSCodec(codecOptions, iconv) {
        this.encodingName = codecOptions.encodingName;
        if (!codecOptions)
          throw new Error("DBCS codec is called without the data.");
        if (!codecOptions.table)
          throw new Error("Encoding '" + this.encodingName + "' has no data.");

        // Load tables.
        var mappingTable = codecOptions.table();

        // Decode tables: MBCS -> Unicode.

        // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
        // Trie root is decodeTables[0].
        // Values: >=  0 -> unicode character code. can be > 0xFFFF
        //         == UNASSIGNED -> unknown/unassigned sequence.
        //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
        //         <= NODE_START -> index of the next node in our trie to process next byte.
        //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
        this.decodeTables = [];
        this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.

        // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here.
        this.decodeTableSeq = [];

        // Actual mapping tables consist of chunks. Use them to fill up decode tables.
        for (var i = 0; i < mappingTable.length; i++)
          this._addDecodeChunk(mappingTable[i]);

        this.defaultCharUnicode = iconv.defaultCharUnicode;

        // Encode tables: Unicode -> DBCS.

        // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
        // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
        // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
        //         == UNASSIGNED -> no conversion found. Output a default char.
        //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
        this.encodeTable = [];

        // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
        // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
        // means end of sequence (needed when one sequence is a strict subsequence of another).
        // Objects are kept separately from encodeTable to increase performance.
        this.encodeTableSeq = [];

        // Some chars can be decoded, but need not be encoded.
        var skipEncodeChars = {};
        if (codecOptions.encodeSkipVals)
          for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
            var val = codecOptions.encodeSkipVals[i];
            if (typeof val === "number") skipEncodeChars[val] = true;
            else
              for (var j = val.from; j <= val.to; j++)
                skipEncodeChars[j] = true;
          }

        // Use decode trie to recursively fill out encode tables.
        this._fillEncodeTable(0, 0, skipEncodeChars);

        // Add more encoding pairs when needed.
        if (codecOptions.encodeAdd) {
          for (var uChar in codecOptions.encodeAdd)
            if (
              Object.prototype.hasOwnProperty.call(
                codecOptions.encodeAdd,
                uChar
              )
            )
              this._setEncodeChar(
                uChar.charCodeAt(0),
                codecOptions.encodeAdd[uChar]
              );
        }

        this.defCharSB =
          this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
        if (this.defCharSB === UNASSIGNED)
          this.defCharSB = this.encodeTable[0]["?"];
        if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);

        // Load & create GB18030 tables when needed.
        if (typeof codecOptions.gb18030 === "function") {
          this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.

          // Add GB18030 decode tables.
          var thirdByteNodeIdx = this.decodeTables.length;
          var thirdByteNode = (this.decodeTables[thirdByteNodeIdx] =
            UNASSIGNED_NODE.slice(0));

          var fourthByteNodeIdx = this.decodeTables.length;
          var fourthByteNode = (this.decodeTables[fourthByteNodeIdx] =
            UNASSIGNED_NODE.slice(0));

          for (var i = 0x81; i <= 0xfe; i++) {
            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
            var secondByteNode = this.decodeTables[secondByteNodeIdx];
            for (var j = 0x30; j <= 0x39; j++)
              secondByteNode[j] = NODE_START - thirdByteNodeIdx;
          }
          for (var i = 0x81; i <= 0xfe; i++)
            thirdByteNode[i] = NODE_START - fourthByteNodeIdx;
          for (var i = 0x30; i <= 0x39; i++) fourthByteNode[i] = GB18030_CODE;
        }
      }

      DBCSCodec.prototype.encoder = DBCSEncoder;
      DBCSCodec.prototype.decoder = DBCSDecoder;

      // Decoder helpers
      DBCSCodec.prototype._getDecodeTrieNode = function (addr) {
        var bytes = [];
        for (; addr > 0; addr >>= 8) bytes.push(addr & 0xff);
        if (bytes.length == 0) bytes.push(0);

        var node = this.decodeTables[0];
        for (var i = bytes.length - 1; i > 0; i--) {
          // Traverse nodes deeper into the trie.
          var val = node[bytes[i]];

          if (val == UNASSIGNED) {
            // Create new node.
            node[bytes[i]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push((node = UNASSIGNED_NODE.slice(0)));
          } else if (val <= NODE_START) {
            // Existing node.
            node = this.decodeTables[NODE_START - val];
          } else
            throw new Error(
              "Overwrite byte in " +
                this.encodingName +
                ", addr: " +
                addr.toString(16)
            );
        }
        return node;
      };

      DBCSCodec.prototype._addDecodeChunk = function (chunk) {
        // First element of chunk is the hex mbcs code where we start.
        var curAddr = parseInt(chunk[0], 16);

        // Choose the decoding node where we'll write our chars.
        var writeTable = this._getDecodeTrieNode(curAddr);
        curAddr = curAddr & 0xff;

        // Write all other elements of the chunk to the table.
        for (var k = 1; k < chunk.length; k++) {
          var part = chunk[k];
          if (typeof part === "string") {
            // String, write as-is.
            for (var l = 0; l < part.length; ) {
              var code = part.charCodeAt(l++);
              if (0xd800 <= code && code < 0xdc00) {
                // Decode surrogate
                var codeTrail = part.charCodeAt(l++);
                if (0xdc00 <= codeTrail && codeTrail < 0xe000)
                  writeTable[curAddr++] =
                    0x10000 + (code - 0xd800) * 0x400 + (codeTrail - 0xdc00);
                else
                  throw new Error(
                    "Incorrect surrogate pair in " +
                      this.encodingName +
                      " at chunk " +
                      chunk[0]
                  );
              } else if (0x0ff0 < code && code <= 0x0fff) {
                // Character sequence (our own encoding used)
                var len = 0xfff - code + 2;
                var seq = [];
                for (var m = 0; m < len; m++) seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.

                writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                this.decodeTableSeq.push(seq);
              } else writeTable[curAddr++] = code; // Basic char
            }
          } else if (typeof part === "number") {
            // Integer, meaning increasing sequence starting with prev character.
            var charCode = writeTable[curAddr - 1] + 1;
            for (var l = 0; l < part; l++) writeTable[curAddr++] = charCode++;
          } else
            throw new Error(
              "Incorrect type '" +
                typeof part +
                "' given in " +
                this.encodingName +
                " at chunk " +
                chunk[0]
            );
        }
        if (curAddr > 0xff)
          throw new Error(
            "Incorrect chunk in " +
              this.encodingName +
              " at addr " +
              chunk[0] +
              ": too long" +
              curAddr
          );
      };

      // Encoder helpers
      DBCSCodec.prototype._getEncodeBucket = function (uCode) {
        var high = uCode >> 8; // This could be > 0xFF because of astral characters.
        if (this.encodeTable[high] === undefined)
          this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
        return this.encodeTable[high];
      };

      DBCSCodec.prototype._setEncodeChar = function (uCode, dbcsCode) {
        var bucket = this._getEncodeBucket(uCode);
        var low = uCode & 0xff;
        if (bucket[low] <= SEQ_START)
          this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode;
        // There's already a sequence, set a single-char subsequence of it.
        else if (bucket[low] == UNASSIGNED) bucket[low] = dbcsCode;
      };

      DBCSCodec.prototype._setEncodeSequence = function (seq, dbcsCode) {
        // Get the root of character tree according to first character of the sequence.
        var uCode = seq[0];
        var bucket = this._getEncodeBucket(uCode);
        var low = uCode & 0xff;

        var node;
        if (bucket[low] <= SEQ_START) {
          // There's already a sequence with  - use it.
          node = this.encodeTableSeq[SEQ_START - bucket[low]];
        } else {
          // There was no sequence object - allocate a new one.
          node = {};
          if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
          bucket[low] = SEQ_START - this.encodeTableSeq.length;
          this.encodeTableSeq.push(node);
        }

        // Traverse the character tree, allocating new nodes as needed.
        for (var j = 1; j < seq.length - 1; j++) {
          var oldVal = node[uCode];
          if (typeof oldVal === "object") node = oldVal;
          else {
            node = node[uCode] = {};
            if (oldVal !== undefined) node[DEF_CHAR] = oldVal;
          }
        }

        // Set the leaf to given dbcsCode.
        uCode = seq[seq.length - 1];
        node[uCode] = dbcsCode;
      };

      DBCSCodec.prototype._fillEncodeTable = function (
        nodeIdx,
        prefix,
        skipEncodeChars
      ) {
        var node = this.decodeTables[nodeIdx];
        for (var i = 0; i < 0x100; i++) {
          var uCode = node[i];
          var mbCode = prefix + i;
          if (skipEncodeChars[mbCode]) continue;

          if (uCode >= 0) this._setEncodeChar(uCode, mbCode);
          else if (uCode <= NODE_START)
            this._fillEncodeTable(
              NODE_START - uCode,
              mbCode << 8,
              skipEncodeChars
            );
          else if (uCode <= SEQ_START)
            this._setEncodeSequence(
              this.decodeTableSeq[SEQ_START - uCode],
              mbCode
            );
        }
      };

      // == Encoder ==================================================================

      function DBCSEncoder(options, codec) {
        // Encoder state
        this.leadSurrogate = -1;
        this.seqObj = undefined;

        // Static data
        this.encodeTable = codec.encodeTable;
        this.encodeTableSeq = codec.encodeTableSeq;
        this.defaultCharSingleByte = codec.defCharSB;
        this.gb18030 = codec.gb18030;
      }

      DBCSEncoder.prototype.write = function (str) {
        var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)),
          leadSurrogate = this.leadSurrogate,
          seqObj = this.seqObj,
          nextChar = -1,
          i = 0,
          j = 0;

        while (true) {
          // 0. Get next character.
          if (nextChar === -1) {
            if (i == str.length) break;
            var uCode = str.charCodeAt(i++);
          } else {
            var uCode = nextChar;
            nextChar = -1;
          }

          // 1. Handle surrogates.
          if (0xd800 <= uCode && uCode < 0xe000) {
            // Char is one of surrogates.
            if (uCode < 0xdc00) {
              // We've got lead surrogate.
              if (leadSurrogate === -1) {
                leadSurrogate = uCode;
                continue;
              } else {
                leadSurrogate = uCode;
                // Double lead surrogate found.
                uCode = UNASSIGNED;
              }
            } else {
              // We've got trail surrogate.
              if (leadSurrogate !== -1) {
                uCode =
                  0x10000 + (leadSurrogate - 0xd800) * 0x400 + (uCode - 0xdc00);
                leadSurrogate = -1;
              } else {
                // Incomplete surrogate pair - only trail surrogate found.
                uCode = UNASSIGNED;
              }
            }
          } else if (leadSurrogate !== -1) {
            // Incomplete surrogate pair - only lead surrogate found.
            nextChar = uCode;
            uCode = UNASSIGNED; // Write an error, then current char.
            leadSurrogate = -1;
          }

          // 2. Convert uCode character.
          var dbcsCode = UNASSIGNED;
          if (seqObj !== undefined && uCode != UNASSIGNED) {
            // We are in the middle of the sequence
            var resCode = seqObj[uCode];
            if (typeof resCode === "object") {
              // Sequence continues.
              seqObj = resCode;
              continue;
            } else if (typeof resCode == "number") {
              // Sequence finished. Write it.
              dbcsCode = resCode;
            } else if (resCode == undefined) {
              // Current character is not part of the sequence.

              // Try default character for this sequence
              resCode = seqObj[DEF_CHAR];
              if (resCode !== undefined) {
                dbcsCode = resCode; // Found. Write it.
                nextChar = uCode; // Current character will be written too in the next iteration.
              } else {
                // TODO: What if we have no default? (resCode == undefined)
                // Then, we should write first char of the sequence as-is and try the rest recursively.
                // Didn't do it for now because no encoding has this situation yet.
                // Currently, just skip the sequence and write current char.
              }
            }
            seqObj = undefined;
          } else if (uCode >= 0) {
            // Regular character
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== undefined) dbcsCode = subtable[uCode & 0xff];

            if (dbcsCode <= SEQ_START) {
              // Sequence start
              seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
              continue;
            }

            if (dbcsCode == UNASSIGNED && this.gb18030) {
              // Use GB18030 algorithm to find character(s) to write.
              var idx = findIdx(this.gb18030.uChars, uCode);
              if (idx != -1) {
                var dbcsCode =
                  this.gb18030.gbChars[idx] +
                  (uCode - this.gb18030.uChars[idx]);
                newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600);
                dbcsCode = dbcsCode % 12600;
                newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260);
                dbcsCode = dbcsCode % 1260;
                newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10);
                dbcsCode = dbcsCode % 10;
                newBuf[j++] = 0x30 + dbcsCode;
                continue;
              }
            }
          }

          // 3. Write dbcsCode character.
          if (dbcsCode === UNASSIGNED) dbcsCode = this.defaultCharSingleByte;

          if (dbcsCode < 0x100) {
            newBuf[j++] = dbcsCode;
          } else if (dbcsCode < 0x10000) {
            newBuf[j++] = dbcsCode >> 8; // high byte
            newBuf[j++] = dbcsCode & 0xff; // low byte
          } else {
            newBuf[j++] = dbcsCode >> 16;
            newBuf[j++] = (dbcsCode >> 8) & 0xff;
            newBuf[j++] = dbcsCode & 0xff;
          }
        }

        this.seqObj = seqObj;
        this.leadSurrogate = leadSurrogate;
        return newBuf.slice(0, j);
      };

      DBCSEncoder.prototype.end = function () {
        if (this.leadSurrogate === -1 && this.seqObj === undefined) return; // All clean. Most often case.

        var newBuf = Buffer.alloc(10),
          j = 0;

        if (this.seqObj) {
          // We're in the sequence.
          var dbcsCode = this.seqObj[DEF_CHAR];
          if (dbcsCode !== undefined) {
            // Write beginning of the sequence.
            if (dbcsCode < 0x100) {
              newBuf[j++] = dbcsCode;
            } else {
              newBuf[j++] = dbcsCode >> 8; // high byte
              newBuf[j++] = dbcsCode & 0xff; // low byte
            }
          } else {
            // See todo above.
          }
          this.seqObj = undefined;
        }

        if (this.leadSurrogate !== -1) {
          // Incomplete surrogate pair - only lead surrogate found.
          newBuf[j++] = this.defaultCharSingleByte;
          this.leadSurrogate = -1;
        }

        return newBuf.slice(0, j);
      };

      // Export for testing
      DBCSEncoder.prototype.findIdx = findIdx;

      // == Decoder ==================================================================

      function DBCSDecoder(options, codec) {
        // Decoder state
        this.nodeIdx = 0;
        this.prevBuf = Buffer.alloc(0);

        // Static data
        this.decodeTables = codec.decodeTables;
        this.decodeTableSeq = codec.decodeTableSeq;
        this.defaultCharUnicode = codec.defaultCharUnicode;
        this.gb18030 = codec.gb18030;
      }

      DBCSDecoder.prototype.write = function (buf) {
        var newBuf = Buffer.alloc(buf.length * 2),
          nodeIdx = this.nodeIdx,
          prevBuf = this.prevBuf,
          prevBufOffset = this.prevBuf.length,
          seqStart = -this.prevBuf.length, // idx of the start of current parsed sequence.
          uCode;

        if (prevBufOffset > 0)
          // Make prev buf overlap a little to make it easier to slice later.
          prevBuf = Buffer.concat([prevBuf, buf.slice(0, 10)]);

        for (var i = 0, j = 0; i < buf.length; i++) {
          var curByte = i >= 0 ? buf[i] : prevBuf[i + prevBufOffset];

          // Lookup in current trie node.
          var uCode = this.decodeTables[nodeIdx][curByte];

          if (uCode >= 0) {
            // Normal character, just use it.
          } else if (uCode === UNASSIGNED) {
            // Unknown char.
            // TODO: Callback with seq.
            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).
            uCode = this.defaultCharUnicode.charCodeAt(0);
          } else if (uCode === GB18030_CODE) {
            var curSeq =
              seqStart >= 0
                ? buf.slice(seqStart, i + 1)
                : prevBuf.slice(
                    seqStart + prevBufOffset,
                    i + 1 + prevBufOffset
                  );
            var ptr =
              (curSeq[0] - 0x81) * 12600 +
              (curSeq[1] - 0x30) * 1260 +
              (curSeq[2] - 0x81) * 10 +
              (curSeq[3] - 0x30);
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
          } else if (uCode <= NODE_START) {
            // Go to next trie node.
            nodeIdx = NODE_START - uCode;
            continue;
          } else if (uCode <= SEQ_START) {
            // Output a sequence of chars.
            var seq = this.decodeTableSeq[SEQ_START - uCode];
            for (var k = 0; k < seq.length - 1; k++) {
              uCode = seq[k];
              newBuf[j++] = uCode & 0xff;
              newBuf[j++] = uCode >> 8;
            }
            uCode = seq[seq.length - 1];
          } else
            throw new Error(
              "iconv-lite internal error: invalid decoding table value " +
                uCode +
                " at " +
                nodeIdx +
                "/" +
                curByte
            );

          // Write the character to buffer, handling higher planes using surrogate pair.
          if (uCode > 0xffff) {
            uCode -= 0x10000;
            var uCodeLead = 0xd800 + Math.floor(uCode / 0x400);
            newBuf[j++] = uCodeLead & 0xff;
            newBuf[j++] = uCodeLead >> 8;

            uCode = 0xdc00 + (uCode % 0x400);
          }
          newBuf[j++] = uCode & 0xff;
          newBuf[j++] = uCode >> 8;

          // Reset trie node.
          nodeIdx = 0;
          seqStart = i + 1;
        }

        this.nodeIdx = nodeIdx;
        this.prevBuf =
          seqStart >= 0
            ? buf.slice(seqStart)
            : prevBuf.slice(seqStart + prevBufOffset);
        return newBuf.slice(0, j).toString("ucs2");
      };

      DBCSDecoder.prototype.end = function () {
        var ret = "";

        // Try to parse all remaining chars.
        while (this.prevBuf.length > 0) {
          // Skip 1 character in the buffer.
          ret += this.defaultCharUnicode;
          var buf = this.prevBuf.slice(1);

          // Parse remaining as usual.
          this.prevBuf = Buffer.alloc(0);
          this.nodeIdx = 0;
          if (buf.length > 0) ret += this.write(buf);
        }

        this.nodeIdx = 0;
        return ret;
      };

      // Binary search for GB18030. Returns largest i such that table[i] <= val.
      function findIdx(table, val) {
        if (table[0] > val) return -1;

        var l = 0,
          r = table.length;
        while (l < r - 1) {
          // always table[l] <= val < table[r]
          var mid = l + Math.floor((r - l + 1) / 2);
          if (table[mid] <= val) l = mid;
          else r = mid;
        }
        return l;
      }

      /***/
    },

    /***/ 2219: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      // Description of supported double byte encodings and aliases.
      // Tables are not require()-d until they are needed to speed up library load.
      // require()-s are direct to support Browserify.

      module.exports = {
        // == Japanese/ShiftJIS ====================================================
        // All japanese encodings are based on JIS X set of standards:
        // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
        // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes.
        //              Has several variations in 1978, 1983, 1990 and 1997.
        // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
        // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
        //              2 planes, first is superset of 0208, second - revised 0212.
        //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

        // Byte encodings are:
        //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
        //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
        //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
        //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
        //               0x00-0x7F       - lower part of 0201
        //               0x8E, 0xA1-0xDF - upper part of 0201
        //               (0xA1-0xFE)x2   - 0208 plane (94x94).
        //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
        //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
        //               Used as-is in ISO2022 family.
        //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII,
        //                0201-1976 Roman, 0208-1978, 0208-1983.
        //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
        //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
        //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
        //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
        //
        // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
        //
        // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

        shiftjis: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(4108);
          },
          encodeAdd: { "\u00a5": 0x5c, "\u203E": 0x7e },
          encodeSkipVals: [{ from: 0xed40, to: 0xf940 }],
        },
        csshiftjis: "shiftjis",
        mskanji: "shiftjis",
        sjis: "shiftjis",
        windows31j: "shiftjis",
        ms31j: "shiftjis",
        xsjis: "shiftjis",
        windows932: "shiftjis",
        ms932: "shiftjis",
        932: "shiftjis",
        cp932: "shiftjis",

        eucjp: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(2417);
          },
          encodeAdd: { "\u00a5": 0x5c, "\u203E": 0x7e },
        },

        // TODO: KDDI extension to Shift_JIS
        // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
        // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.

        // == Chinese/GBK ==========================================================
        // http://en.wikipedia.org/wiki/GBK
        // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

        // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
        gb2312: "cp936",
        gb231280: "cp936",
        gb23121980: "cp936",
        csgb2312: "cp936",
        csiso58gb231280: "cp936",
        euccn: "cp936",

        // Microsoft's CP936 is a subset and approximation of GBK.
        windows936: "cp936",
        ms936: "cp936",
        936: "cp936",
        cp936: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(7803);
          },
        },

        // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
        gbk: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(7803).concat(__nccwpck_require__(7419));
          },
        },
        xgbk: "gbk",
        isoir58: "gbk",

        // GB18030 is an algorithmic extension of GBK.
        // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
        // http://icu-project.org/docs/papers/gb18030.html
        // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
        // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
        gb18030: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(7803).concat(__nccwpck_require__(7419));
          },
          gb18030: function () {
            return __nccwpck_require__(6351);
          },
          encodeSkipVals: [0x80],
          encodeAdd: { "€": 0xa2e3 },
        },

        chinese: "gb18030",

        // == Korean ===============================================================
        // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
        windows949: "cp949",
        ms949: "cp949",
        949: "cp949",
        cp949: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(7013);
          },
        },

        cseuckr: "cp949",
        csksc56011987: "cp949",
        euckr: "cp949",
        isoir149: "cp949",
        korean: "cp949",
        ksc56011987: "cp949",
        ksc56011989: "cp949",
        ksc5601: "cp949",

        // == Big5/Taiwan/Hong Kong ================================================
        // There are lots of tables for Big5 and cp950. Please see the following links for history:
        // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
        // Variations, in roughly number of defined chars:
        //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
        //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
        //  * Big5-2003 (Taiwan standard) almost superset of cp950.
        //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
        //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard.
        //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
        //    Plus, it has 4 combining sequences.
        //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
        //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
        //    Implementations are not consistent within browsers; sometimes labeled as just big5.
        //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
        //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
        //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
        //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
        //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
        //
        // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
        // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

        windows950: "cp950",
        ms950: "cp950",
        950: "cp950",
        cp950: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(3104);
          },
        },

        // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
        big5: "big5hkscs",
        big5hkscs: {
          type: "_dbcs",
          table: function () {
            return __nccwpck_require__(3104).concat(__nccwpck_require__(3612));
          },
          encodeSkipVals: [0xa2cc],
        },

        cnbig5: "big5hkscs",
        csbig5: "big5hkscs",
        xxbig5: "big5hkscs",
      };

      /***/
    },

    /***/ 1950: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      // Update this array if you add/rename/remove files in this directory.
      // We support Browserify by skipping automatic module discovery and requiring modules directly.
      var modules = [
        __nccwpck_require__(238),
        __nccwpck_require__(8684),
        __nccwpck_require__(5913),
        __nccwpck_require__(1659),
        __nccwpck_require__(3651),
        __nccwpck_require__(6830),
        __nccwpck_require__(5003),
        __nccwpck_require__(2219),
      ];

      // Put all encoding/alias/codec definitions to single object and export it.
      for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        for (var enc in module)
          if (Object.prototype.hasOwnProperty.call(module, enc))
            exports[enc] = module[enc];
      }

      /***/
    },

    /***/ 238: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(3846).Buffer;

      // Export Node.js internal encodings.

      module.exports = {
        // Encodings
        utf8: { type: "_internal", bomAware: true },
        cesu8: { type: "_internal", bomAware: true },
        unicode11utf8: "utf8",

        ucs2: { type: "_internal", bomAware: true },
        utf16le: "ucs2",

        binary: { type: "_internal" },
        base64: { type: "_internal" },
        hex: { type: "_internal" },

        // Codec.
        _internal: InternalCodec,
      };

      //------------------------------------------------------------------------------

      function InternalCodec(codecOptions, iconv) {
        this.enc = codecOptions.encodingName;
        this.bomAware = codecOptions.bomAware;

        if (this.enc === "base64") this.encoder = InternalEncoderBase64;
        else if (this.enc === "cesu8") {
          this.enc = "utf8"; // Use utf8 for decoding.
          this.encoder = InternalEncoderCesu8;

          // Add decoder for versions of Node not supporting CESU-8
          if (Buffer.from("eda0bdedb2a9", "hex").toString() !== "💩") {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv.defaultCharUnicode;
          }
        }
      }

      InternalCodec.prototype.encoder = InternalEncoder;
      InternalCodec.prototype.decoder = InternalDecoder;

      //------------------------------------------------------------------------------

      // We use node.js internal decoder. Its signature is the same as ours.
      var StringDecoder = __nccwpck_require__(4304).StringDecoder;

      if (!StringDecoder.prototype.end)
        // Node v0.8 doesn't have this method.
        StringDecoder.prototype.end = function () {};

      function InternalDecoder(options, codec) {
        StringDecoder.call(this, codec.enc);
      }

      InternalDecoder.prototype = StringDecoder.prototype;

      //------------------------------------------------------------------------------
      // Encoder is mostly trivial

      function InternalEncoder(options, codec) {
        this.enc = codec.enc;
      }

      InternalEncoder.prototype.write = function (str) {
        return Buffer.from(str, this.enc);
      };

      InternalEncoder.prototype.end = function () {};

      //------------------------------------------------------------------------------
      // Except base64 encoder, which must keep its state.

      function InternalEncoderBase64(options, codec) {
        this.prevStr = "";
      }

      InternalEncoderBase64.prototype.write = function (str) {
        str = this.prevStr + str;
        var completeQuads = str.length - (str.length % 4);
        this.prevStr = str.slice(completeQuads);
        str = str.slice(0, completeQuads);

        return Buffer.from(str, "base64");
      };

      InternalEncoderBase64.prototype.end = function () {
        return Buffer.from(this.prevStr, "base64");
      };

      //------------------------------------------------------------------------------
      // CESU-8 encoder is also special.

      function InternalEncoderCesu8(options, codec) {}

      InternalEncoderCesu8.prototype.write = function (str) {
        var buf = Buffer.alloc(str.length * 3),
          bufIdx = 0;
        for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
          // Naive implementation, but it works because CESU-8 is especially easy
          // to convert from UTF-16 (which all JS strings are encoded in).
          if (charCode < 0x80) buf[bufIdx++] = charCode;
          else if (charCode < 0x800) {
            buf[bufIdx++] = 0xc0 + (charCode >>> 6);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          } else {
            // charCode will always be < 0x10000 in javascript.
            buf[bufIdx++] = 0xe0 + (charCode >>> 12);
            buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          }
        }
        return buf.slice(0, bufIdx);
      };

      InternalEncoderCesu8.prototype.end = function () {};

      //------------------------------------------------------------------------------
      // CESU-8 decoder is not implemented in Node v4.0+

      function InternalDecoderCesu8(options, codec) {
        this.acc = 0;
        this.contBytes = 0;
        this.accBytes = 0;
        this.defaultCharUnicode = codec.defaultCharUnicode;
      }

      InternalDecoderCesu8.prototype.write = function (buf) {
        var acc = this.acc,
          contBytes = this.contBytes,
          accBytes = this.accBytes,
          res = "";
        for (var i = 0; i < buf.length; i++) {
          var curByte = buf[i];
          if ((curByte & 0xc0) !== 0x80) {
            // Leading byte
            if (contBytes > 0) {
              // Previous code is invalid
              res += this.defaultCharUnicode;
              contBytes = 0;
            }

            if (curByte < 0x80) {
              // Single-byte code
              res += String.fromCharCode(curByte);
            } else if (curByte < 0xe0) {
              // Two-byte code
              acc = curByte & 0x1f;
              contBytes = 1;
              accBytes = 1;
            } else if (curByte < 0xf0) {
              // Three-byte code
              acc = curByte & 0x0f;
              contBytes = 2;
              accBytes = 1;
            } else {
              // Four or more are not supported for CESU-8.
              res += this.defaultCharUnicode;
            }
          } else {
            // Continuation byte
            if (contBytes > 0) {
              // We're waiting for it.
              acc = (acc << 6) | (curByte & 0x3f);
              contBytes--;
              accBytes++;
              if (contBytes === 0) {
                // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                if (accBytes === 2 && acc < 0x80 && acc > 0)
                  res += this.defaultCharUnicode;
                else if (accBytes === 3 && acc < 0x800)
                  res += this.defaultCharUnicode;
                // Actually add character.
                else res += String.fromCharCode(acc);
              }
            } else {
              // Unexpected continuation byte
              res += this.defaultCharUnicode;
            }
          }
        }
        this.acc = acc;
        this.contBytes = contBytes;
        this.accBytes = accBytes;
        return res;
      };

      InternalDecoderCesu8.prototype.end = function () {
        var res = 0;
        if (this.contBytes > 0) res += this.defaultCharUnicode;
        return res;
      };

      /***/
    },

    /***/ 1659: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(3846).Buffer;

      // Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
      // correspond to encoded bytes (if 128 - then lower half is ASCII).

      exports._sbcs = SBCSCodec;
      function SBCSCodec(codecOptions, iconv) {
        if (!codecOptions)
          throw new Error("SBCS codec is called without the data.");

        // Prepare char buffer for decoding.
        if (
          !codecOptions.chars ||
          (codecOptions.chars.length !== 128 &&
            codecOptions.chars.length !== 256)
        )
          throw new Error(
            "Encoding '" +
              codecOptions.type +
              "' has incorrect 'chars' (must be of len 128 or 256)"
          );

        if (codecOptions.chars.length === 128) {
          var asciiString = "";
          for (var i = 0; i < 128; i++) asciiString += String.fromCharCode(i);
          codecOptions.chars = asciiString + codecOptions.chars;
        }

        this.decodeBuf = Buffer.from(codecOptions.chars, "ucs2");

        // Encoding buffer.
        var encodeBuf = Buffer.alloc(
          65536,
          iconv.defaultCharSingleByte.charCodeAt(0)
        );

        for (var i = 0; i < codecOptions.chars.length; i++)
          encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

        this.encodeBuf = encodeBuf;
      }

      SBCSCodec.prototype.encoder = SBCSEncoder;
      SBCSCodec.prototype.decoder = SBCSDecoder;

      function SBCSEncoder(options, codec) {
        this.encodeBuf = codec.encodeBuf;
      }

      SBCSEncoder.prototype.write = function (str) {
        var buf = Buffer.alloc(str.length);
        for (var i = 0; i < str.length; i++)
          buf[i] = this.encodeBuf[str.charCodeAt(i)];

        return buf;
      };

      SBCSEncoder.prototype.end = function () {};

      function SBCSDecoder(options, codec) {
        this.decodeBuf = codec.decodeBuf;
      }

      SBCSDecoder.prototype.write = function (buf) {
        // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
        var decodeBuf = this.decodeBuf;
        var newBuf = Buffer.alloc(buf.length * 2);
        var idx1 = 0,
          idx2 = 0;
        for (var i = 0; i < buf.length; i++) {
          idx1 = buf[i] * 2;
          idx2 = i * 2;
          newBuf[idx2] = decodeBuf[idx1];
          newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
        }
        return newBuf.toString("ucs2");
      };

      SBCSDecoder.prototype.end = function () {};

      /***/
    },

    /***/ 6830: /***/ (module) => {
      "use strict";

      // Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
      module.exports = {
        437: "cp437",
        737: "cp737",
        775: "cp775",
        850: "cp850",
        852: "cp852",
        855: "cp855",
        856: "cp856",
        857: "cp857",
        858: "cp858",
        860: "cp860",
        861: "cp861",
        862: "cp862",
        863: "cp863",
        864: "cp864",
        865: "cp865",
        866: "cp866",
        869: "cp869",
        874: "windows874",
        922: "cp922",
        1046: "cp1046",
        1124: "cp1124",
        1125: "cp1125",
        1129: "cp1129",
        1133: "cp1133",
        1161: "cp1161",
        1162: "cp1162",
        1163: "cp1163",
        1250: "windows1250",
        1251: "windows1251",
        1252: "windows1252",
        1253: "windows1253",
        1254: "windows1254",
        1255: "windows1255",
        1256: "windows1256",
        1257: "windows1257",
        1258: "windows1258",
        28591: "iso88591",
        28592: "iso88592",
        28593: "iso88593",
        28594: "iso88594",
        28595: "iso88595",
        28596: "iso88596",
        28597: "iso88597",
        28598: "iso88598",
        28599: "iso88599",
        28600: "iso885910",
        28601: "iso885911",
        28603: "iso885913",
        28604: "iso885914",
        28605: "iso885915",
        28606: "iso885916",
        windows874: {
          type: "_sbcs",
          chars:
            "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        win874: "windows874",
        cp874: "windows874",
        windows1250: {
          type: "_sbcs",
          chars:
            "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",
        },
        win1250: "windows1250",
        cp1250: "windows1250",
        windows1251: {
          type: "_sbcs",
          chars:
            "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        win1251: "windows1251",
        cp1251: "windows1251",
        windows1252: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        win1252: "windows1252",
        cp1252: "windows1252",
        windows1253: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",
        },
        win1253: "windows1253",
        cp1253: "windows1253",
        windows1254: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",
        },
        win1254: "windows1254",
        cp1254: "windows1254",
        windows1255: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",
        },
        win1255: "windows1255",
        cp1255: "windows1255",
        windows1256: {
          type: "_sbcs",
          chars:
            "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے",
        },
        win1256: "windows1256",
        cp1256: "windows1256",
        windows1257: {
          type: "_sbcs",
          chars:
            "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙",
        },
        win1257: "windows1257",
        cp1257: "windows1257",
        windows1258: {
          type: "_sbcs",
          chars:
            "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        win1258: "windows1258",
        cp1258: "windows1258",
        iso88591: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        cp28591: "iso88591",
        iso88592: {
          type: "_sbcs",
          chars:
            " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",
        },
        cp28592: "iso88592",
        iso88593: {
          type: "_sbcs",
          chars:
            " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙",
        },
        cp28593: "iso88593",
        iso88594: {
          type: "_sbcs",
          chars:
            " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙",
        },
        cp28594: "iso88594",
        iso88595: {
          type: "_sbcs",
          chars:
            " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ",
        },
        cp28595: "iso88595",
        iso88596: {
          type: "_sbcs",
          chars:
            " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������",
        },
        cp28596: "iso88596",
        iso88597: {
          type: "_sbcs",
          chars:
            " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",
        },
        cp28597: "iso88597",
        iso88598: {
          type: "_sbcs",
          chars:
            " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",
        },
        cp28598: "iso88598",
        iso88599: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",
        },
        cp28599: "iso88599",
        iso885910: {
          type: "_sbcs",
          chars:
            " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ",
        },
        cp28600: "iso885910",
        iso885911: {
          type: "_sbcs",
          chars:
            " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        cp28601: "iso885911",
        iso885913: {
          type: "_sbcs",
          chars:
            " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’",
        },
        cp28603: "iso885913",
        iso885914: {
          type: "_sbcs",
          chars:
            " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ",
        },
        cp28604: "iso885914",
        iso885915: {
          type: "_sbcs",
          chars:
            " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        cp28605: "iso885915",
        iso885916: {
          type: "_sbcs",
          chars:
            " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ",
        },
        cp28606: "iso885916",
        cp437: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm437: "cp437",
        csibm437: "cp437",
        cp737: {
          type: "_sbcs",
          chars:
            "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ",
        },
        ibm737: "cp737",
        csibm737: "cp737",
        cp775: {
          type: "_sbcs",
          chars:
            "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ ",
        },
        ibm775: "cp775",
        csibm775: "cp775",
        cp850: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm850: "cp850",
        csibm850: "cp850",
        cp852: {
          type: "_sbcs",
          chars:
            "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ",
        },
        ibm852: "cp852",
        csibm852: "cp852",
        cp855: {
          type: "_sbcs",
          chars:
            "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ ",
        },
        ibm855: "cp855",
        csibm855: "cp855",
        cp856: {
          type: "_sbcs",
          chars:
            "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm856: "cp856",
        csibm856: "cp856",
        cp857: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ",
        },
        ibm857: "cp857",
        csibm857: "cp857",
        cp858: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",
        },
        ibm858: "cp858",
        csibm858: "cp858",
        cp860: {
          type: "_sbcs",
          chars:
            "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm860: "cp860",
        csibm860: "cp860",
        cp861: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm861: "cp861",
        csibm861: "cp861",
        cp862: {
          type: "_sbcs",
          chars:
            "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm862: "cp862",
        csibm862: "cp862",
        cp863: {
          type: "_sbcs",
          chars:
            "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm863: "cp863",
        csibm863: "cp863",
        cp864: {
          type: "_sbcs",
          chars:
            "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�",
        },
        ibm864: "cp864",
        csibm864: "cp864",
        cp865: {
          type: "_sbcs",
          chars:
            "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },
        ibm865: "cp865",
        csibm865: "cp865",
        cp866: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ",
        },
        ibm866: "cp866",
        csibm866: "cp866",
        cp869: {
          type: "_sbcs",
          chars:
            "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ ",
        },
        ibm869: "cp869",
        csibm869: "cp869",
        cp922: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ",
        },
        ibm922: "cp922",
        csibm922: "cp922",
        cp1046: {
          type: "_sbcs",
          chars:
            "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�",
        },
        ibm1046: "cp1046",
        csibm1046: "cp1046",
        cp1124: {
          type: "_sbcs",
          chars:
            " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ",
        },
        ibm1124: "cp1124",
        csibm1124: "cp1124",
        cp1125: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ ",
        },
        ibm1125: "cp1125",
        csibm1125: "cp1125",
        cp1129: {
          type: "_sbcs",
          chars:
            " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        ibm1129: "cp1129",
        csibm1129: "cp1129",
        cp1133: {
          type: "_sbcs",
          chars:
            " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�",
        },
        ibm1133: "cp1133",
        csibm1133: "cp1133",
        cp1161: {
          type: "_sbcs",
          chars:
            "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ ",
        },
        ibm1161: "cp1161",
        csibm1161: "cp1161",
        cp1162: {
          type: "_sbcs",
          chars:
            "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
        ibm1162: "cp1162",
        csibm1162: "cp1162",
        cp1163: {
          type: "_sbcs",
          chars:
            " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",
        },
        ibm1163: "cp1163",
        csibm1163: "cp1163",
        maccroatian: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
        },
        maccyrillic: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",
        },
        macgreek: {
          type: "_sbcs",
          chars:
            "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�",
        },
        maciceland: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macroman: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macromania: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macthai: {
          type: "_sbcs",
          chars:
            "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����",
        },
        macturkish: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ",
        },
        macukraine: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",
        },
        koi8r: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8u: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8ru: {
          type: "_sbcs",
          chars:
            "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        koi8t: {
          type: "_sbcs",
          chars:
            "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ",
        },
        armscii8: {
          type: "_sbcs",
          chars:
            " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�",
        },
        rk1048: {
          type: "_sbcs",
          chars:
            "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        tcvn: {
          type: "_sbcs",
          chars:
            "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ",
        },
        georgianacademy: {
          type: "_sbcs",
          chars:
            "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        georgianps: {
          type: "_sbcs",
          chars:
            "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",
        },
        pt154: {
          type: "_sbcs",
          chars:
            "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",
        },
        viscii: {
          type: "_sbcs",
          chars:
            "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ",
        },
        iso646cn: {
          type: "_sbcs",
          chars:
            "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������",
        },
        iso646jp: {
          type: "_sbcs",
          chars:
            "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������",
        },
        hproman8: {
          type: "_sbcs",
          chars:
            " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�",
        },
        macintosh: {
          type: "_sbcs",
          chars:
            "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
        },
        ascii: {
          type: "_sbcs",
          chars:
            "��������������������������������������������������������������������������������������������������������������������������������",
        },
        tis620: {
          type: "_sbcs",
          chars:
            "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",
        },
      };

      /***/
    },

    /***/ 3651: /***/ (module) => {
      "use strict";

      // Manually added data to be used by sbcs codec in addition to generated one.

      module.exports = {
        // Not supported by iconv, not sure why.
        10029: "maccenteuro",
        maccenteuro: {
          type: "_sbcs",
          chars:
            "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
        },

        808: "cp808",
        ibm808: "cp808",
        cp808: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ ",
        },

        mik: {
          type: "_sbcs",
          chars:
            "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",
        },

        // Aliases of generated encodings.
        ascii8bit: "ascii",
        usascii: "ascii",
        ansix34: "ascii",
        ansix341968: "ascii",
        ansix341986: "ascii",
        csascii: "ascii",
        cp367: "ascii",
        ibm367: "ascii",
        isoir6: "ascii",
        iso646us: "ascii",
        iso646irv: "ascii",
        us: "ascii",

        latin1: "iso88591",
        latin2: "iso88592",
        latin3: "iso88593",
        latin4: "iso88594",
        latin5: "iso88599",
        latin6: "iso885910",
        latin7: "iso885913",
        latin8: "iso885914",
        latin9: "iso885915",
        latin10: "iso885916",

        csisolatin1: "iso88591",
        csisolatin2: "iso88592",
        csisolatin3: "iso88593",
        csisolatin4: "iso88594",
        csisolatincyrillic: "iso88595",
        csisolatinarabic: "iso88596",
        csisolatingreek: "iso88597",
        csisolatinhebrew: "iso88598",
        csisolatin5: "iso88599",
        csisolatin6: "iso885910",

        l1: "iso88591",
        l2: "iso88592",
        l3: "iso88593",
        l4: "iso88594",
        l5: "iso88599",
        l6: "iso885910",
        l7: "iso885913",
        l8: "iso885914",
        l9: "iso885915",
        l10: "iso885916",

        isoir14: "iso646jp",
        isoir57: "iso646cn",
        isoir100: "iso88591",
        isoir101: "iso88592",
        isoir109: "iso88593",
        isoir110: "iso88594",
        isoir144: "iso88595",
        isoir127: "iso88596",
        isoir126: "iso88597",
        isoir138: "iso88598",
        isoir148: "iso88599",
        isoir157: "iso885910",
        isoir166: "tis620",
        isoir179: "iso885913",
        isoir199: "iso885914",
        isoir203: "iso885915",
        isoir226: "iso885916",

        cp819: "iso88591",
        ibm819: "iso88591",

        cyrillic: "iso88595",

        arabic: "iso88596",
        arabic8: "iso88596",
        ecma114: "iso88596",
        asmo708: "iso88596",

        greek: "iso88597",
        greek8: "iso88597",
        ecma118: "iso88597",
        elot928: "iso88597",

        hebrew: "iso88598",
        hebrew8: "iso88598",

        turkish: "iso88599",
        turkish8: "iso88599",

        thai: "iso885911",
        thai8: "iso885911",

        celtic: "iso885914",
        celtic8: "iso885914",
        isoceltic: "iso885914",

        tis6200: "tis620",
        tis62025291: "tis620",
        tis62025330: "tis620",

        10000: "macroman",
        10006: "macgreek",
        10007: "maccyrillic",
        10079: "maciceland",
        10081: "macturkish",

        cspc8codepage437: "cp437",
        cspc775baltic: "cp775",
        cspc850multilingual: "cp850",
        cspcp852: "cp852",
        cspc862latinhebrew: "cp862",
        cpgr: "cp869",

        msee: "cp1250",
        mscyrl: "cp1251",
        msansi: "cp1252",
        msgreek: "cp1253",
        msturk: "cp1254",
        mshebr: "cp1255",
        msarab: "cp1256",
        winbaltrim: "cp1257",

        cp20866: "koi8r",
        20866: "koi8r",
        ibm878: "koi8r",
        cskoi8r: "koi8r",

        cp21866: "koi8u",
        21866: "koi8u",
        ibm1168: "koi8u",

        strk10482002: "rk1048",

        tcvn5712: "tcvn",
        tcvn57121: "tcvn",

        gb198880: "iso646cn",
        cn: "iso646cn",

        csiso14jisc6220ro: "iso646jp",
        jisc62201969ro: "iso646jp",
        jp: "iso646jp",

        cshproman8: "hproman8",
        r8: "hproman8",
        roman8: "hproman8",
        xroman8: "hproman8",
        ibm1051: "hproman8",

        mac: "macintosh",
        csmacintosh: "macintosh",
      };

      /***/
    },

    /***/ 8684: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(3846).Buffer;

      // Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js

      // == UTF16-BE codec. ==========================================================

      exports.utf16be = Utf16BECodec;
      function Utf16BECodec() {}

      Utf16BECodec.prototype.encoder = Utf16BEEncoder;
      Utf16BECodec.prototype.decoder = Utf16BEDecoder;
      Utf16BECodec.prototype.bomAware = true;

      // -- Encoding

      function Utf16BEEncoder() {}

      Utf16BEEncoder.prototype.write = function (str) {
        var buf = Buffer.from(str, "ucs2");
        for (var i = 0; i < buf.length; i += 2) {
          var tmp = buf[i];
          buf[i] = buf[i + 1];
          buf[i + 1] = tmp;
        }
        return buf;
      };

      Utf16BEEncoder.prototype.end = function () {};

      // -- Decoding

      function Utf16BEDecoder() {
        this.overflowByte = -1;
      }

      Utf16BEDecoder.prototype.write = function (buf) {
        if (buf.length == 0) return "";

        var buf2 = Buffer.alloc(buf.length + 1),
          i = 0,
          j = 0;

        if (this.overflowByte !== -1) {
          buf2[0] = buf[0];
          buf2[1] = this.overflowByte;
          i = 1;
          j = 2;
        }

        for (; i < buf.length - 1; i += 2, j += 2) {
          buf2[j] = buf[i + 1];
          buf2[j + 1] = buf[i];
        }

        this.overflowByte = i == buf.length - 1 ? buf[buf.length - 1] : -1;

        return buf2.slice(0, j).toString("ucs2");
      };

      Utf16BEDecoder.prototype.end = function () {};

      // == UTF-16 codec =============================================================
      // Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
      // Defaults to UTF-16LE, as it's prevalent and default in Node.
      // http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
      // Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});

      // Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).

      exports.utf16 = Utf16Codec;
      function Utf16Codec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      Utf16Codec.prototype.encoder = Utf16Encoder;
      Utf16Codec.prototype.decoder = Utf16Decoder;

      // -- Encoding (pass-through)

      function Utf16Encoder(options, codec) {
        options = options || {};
        if (options.addBOM === undefined) options.addBOM = true;
        this.encoder = codec.iconv.getEncoder("utf-16le", options);
      }

      Utf16Encoder.prototype.write = function (str) {
        return this.encoder.write(str);
      };

      Utf16Encoder.prototype.end = function () {
        return this.encoder.end();
      };

      // -- Decoding

      function Utf16Decoder(options, codec) {
        this.decoder = null;
        this.initialBytes = [];
        this.initialBytesLen = 0;

        this.options = options || {};
        this.iconv = codec.iconv;
      }

      Utf16Decoder.prototype.write = function (buf) {
        if (!this.decoder) {
          // Codec is not chosen yet. Accumulate initial bytes.
          this.initialBytes.push(buf);
          this.initialBytesLen += buf.length;

          if (this.initialBytesLen < 16)
            // We need more bytes to use space heuristic (see below)
            return "";

          // We have enough bytes -> detect endianness.
          var buf = Buffer.concat(this.initialBytes),
            encoding = detectEncoding(buf, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);
          this.initialBytes.length = this.initialBytesLen = 0;
        }

        return this.decoder.write(buf);
      };

      Utf16Decoder.prototype.end = function () {
        if (!this.decoder) {
          var buf = Buffer.concat(this.initialBytes),
            encoding = detectEncoding(buf, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);

          var res = this.decoder.write(buf),
            trail = this.decoder.end();

          return trail ? res + trail : res;
        }
        return this.decoder.end();
      };

      function detectEncoding(buf, defaultEncoding) {
        var enc = defaultEncoding || "utf-16le";

        if (buf.length >= 2) {
          // Check BOM.
          if (buf[0] == 0xfe && buf[1] == 0xff)
            // UTF-16BE BOM
            enc = "utf-16be";
          else if (buf[0] == 0xff && buf[1] == 0xfe)
            // UTF-16LE BOM
            enc = "utf-16le";
          else {
            // No BOM found. Try to deduce encoding from initial content.
            // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
            // So, we count ASCII as if it was LE or BE, and decide from that.
            var asciiCharsLE = 0,
              asciiCharsBE = 0, // Counts of chars in both positions
              _len = Math.min(buf.length - (buf.length % 2), 64); // Len is always even.

            for (var i = 0; i < _len; i += 2) {
              if (buf[i] === 0 && buf[i + 1] !== 0) asciiCharsBE++;
              if (buf[i] !== 0 && buf[i + 1] === 0) asciiCharsLE++;
            }

            if (asciiCharsBE > asciiCharsLE) enc = "utf-16be";
            else if (asciiCharsBE < asciiCharsLE) enc = "utf-16le";
          }
        }

        return enc;
      }

      /***/
    },

    /***/ 5913: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(3846).Buffer;

      // UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
      // See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3

      exports.utf7 = Utf7Codec;
      exports.unicode11utf7 = "utf7"; // Alias UNICODE-1-1-UTF-7
      function Utf7Codec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      Utf7Codec.prototype.encoder = Utf7Encoder;
      Utf7Codec.prototype.decoder = Utf7Decoder;
      Utf7Codec.prototype.bomAware = true;

      // -- Encoding

      var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

      function Utf7Encoder(options, codec) {
        this.iconv = codec.iconv;
      }

      Utf7Encoder.prototype.write = function (str) {
        // Naive implementation.
        // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
        return Buffer.from(
          str.replace(
            nonDirectChars,
            function (chunk) {
              return (
                "+" +
                (chunk === "+"
                  ? ""
                  : this.iconv
                      .encode(chunk, "utf16-be")
                      .toString("base64")
                      .replace(/=+$/, "")) +
                "-"
              );
            }.bind(this)
          )
        );
      };

      Utf7Encoder.prototype.end = function () {};

      // -- Decoding

      function Utf7Decoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = "";
      }

      var base64Regex = /[A-Za-z0-9\/+]/;
      var base64Chars = [];
      for (var i = 0; i < 256; i++)
        base64Chars[i] = base64Regex.test(String.fromCharCode(i));

      var plusChar = "+".charCodeAt(0),
        minusChar = "-".charCodeAt(0),
        andChar = "&".charCodeAt(0);

      Utf7Decoder.prototype.write = function (buf) {
        var res = "",
          lastI = 0,
          inBase64 = this.inBase64,
          base64Accum = this.base64Accum;

        // The decoder is more involved as we must handle chunks in stream.

        for (var i = 0; i < buf.length; i++) {
          if (!inBase64) {
            // We're in direct mode.
            // Write direct chars until '+'
            if (buf[i] == plusChar) {
              res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
              lastI = i + 1;
              inBase64 = true;
            }
          } else {
            // We decode base64.
            if (!base64Chars[buf[i]]) {
              // Base64 ended.
              if (i == lastI && buf[i] == minusChar) {
                // "+-" -> "+"
                res += "+";
              } else {
                var b64str = base64Accum + buf.slice(lastI, i).toString();
                res += this.iconv.decode(
                  Buffer.from(b64str, "base64"),
                  "utf16-be"
                );
              }

              if (buf[i] != minusChar)
                // Minus is absorbed after base64.
                i--;

              lastI = i + 1;
              inBase64 = false;
              base64Accum = "";
            }
          }
        }

        if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
        } else {
          var b64str = base64Accum + buf.slice(lastI).toString();

          var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
          b64str = b64str.slice(0, canBeDecoded);

          res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
        }

        this.inBase64 = inBase64;
        this.base64Accum = base64Accum;

        return res;
      };

      Utf7Decoder.prototype.end = function () {
        var res = "";
        if (this.inBase64 && this.base64Accum.length > 0)
          res = this.iconv.decode(
            Buffer.from(this.base64Accum, "base64"),
            "utf16-be"
          );

        this.inBase64 = false;
        this.base64Accum = "";
        return res;
      };

      // UTF-7-IMAP codec.
      // RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
      // Differences:
      //  * Base64 part is started by "&" instead of "+"
      //  * Direct characters are 0x20-0x7E, except "&" (0x26)
      //  * In Base64, "," is used instead of "/"
      //  * Base64 must not be used to represent direct characters.
      //  * No implicit shift back from Base64 (should always end with '-')
      //  * String must end in non-shifted position.
      //  * "-&" while in base64 is not allowed.

      exports.utf7imap = Utf7IMAPCodec;
      function Utf7IMAPCodec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
      Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
      Utf7IMAPCodec.prototype.bomAware = true;

      // -- Encoding

      function Utf7IMAPEncoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = Buffer.alloc(6);
        this.base64AccumIdx = 0;
      }

      Utf7IMAPEncoder.prototype.write = function (str) {
        var inBase64 = this.inBase64,
          base64Accum = this.base64Accum,
          base64AccumIdx = this.base64AccumIdx,
          buf = Buffer.alloc(str.length * 5 + 10),
          bufIdx = 0;

        for (var i = 0; i < str.length; i++) {
          var uChar = str.charCodeAt(i);
          if (0x20 <= uChar && uChar <= 0x7e) {
            // Direct character or '&'.
            if (inBase64) {
              if (base64AccumIdx > 0) {
                bufIdx += buf.write(
                  base64Accum
                    .slice(0, base64AccumIdx)
                    .toString("base64")
                    .replace(/\//g, ",")
                    .replace(/=+$/, ""),
                  bufIdx
                );
                base64AccumIdx = 0;
              }

              buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
              inBase64 = false;
            }

            if (!inBase64) {
              buf[bufIdx++] = uChar; // Write direct character

              if (uChar === andChar)
                // Ampersand -> '&-'
                buf[bufIdx++] = minusChar;
            }
          } else {
            // Non-direct character
            if (!inBase64) {
              buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
              inBase64 = true;
            }
            if (inBase64) {
              base64Accum[base64AccumIdx++] = uChar >> 8;
              base64Accum[base64AccumIdx++] = uChar & 0xff;

              if (base64AccumIdx == base64Accum.length) {
                bufIdx += buf.write(
                  base64Accum.toString("base64").replace(/\//g, ","),
                  bufIdx
                );
                base64AccumIdx = 0;
              }
            }
          }
        }

        this.inBase64 = inBase64;
        this.base64AccumIdx = base64AccumIdx;

        return buf.slice(0, bufIdx);
      };

      Utf7IMAPEncoder.prototype.end = function () {
        var buf = Buffer.alloc(10),
          bufIdx = 0;
        if (this.inBase64) {
          if (this.base64AccumIdx > 0) {
            bufIdx += buf.write(
              this.base64Accum
                .slice(0, this.base64AccumIdx)
                .toString("base64")
                .replace(/\//g, ",")
                .replace(/=+$/, ""),
              bufIdx
            );
            this.base64AccumIdx = 0;
          }

          buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
          this.inBase64 = false;
        }

        return buf.slice(0, bufIdx);
      };

      // -- Decoding

      function Utf7IMAPDecoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = "";
      }

      var base64IMAPChars = base64Chars.slice();
      base64IMAPChars[",".charCodeAt(0)] = true;

      Utf7IMAPDecoder.prototype.write = function (buf) {
        var res = "",
          lastI = 0,
          inBase64 = this.inBase64,
          base64Accum = this.base64Accum;

        // The decoder is more involved as we must handle chunks in stream.
        // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

        for (var i = 0; i < buf.length; i++) {
          if (!inBase64) {
            // We're in direct mode.
            // Write direct chars until '&'
            if (buf[i] == andChar) {
              res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
              lastI = i + 1;
              inBase64 = true;
            }
          } else {
            // We decode base64.
            if (!base64IMAPChars[buf[i]]) {
              // Base64 ended.
              if (i == lastI && buf[i] == minusChar) {
                // "&-" -> "&"
                res += "&";
              } else {
                var b64str =
                  base64Accum +
                  buf.slice(lastI, i).toString().replace(/,/g, "/");
                res += this.iconv.decode(
                  Buffer.from(b64str, "base64"),
                  "utf16-be"
                );
              }

              if (buf[i] != minusChar)
                // Minus may be absorbed after base64.
                i--;

              lastI = i + 1;
              inBase64 = false;
              base64Accum = "";
            }
          }
        }

        if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
        } else {
          var b64str =
            base64Accum + buf.slice(lastI).toString().replace(/,/g, "/");

          var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
          b64str = b64str.slice(0, canBeDecoded);

          res += this.iconv.decode(Buffer.from(b64str, "base64"), "utf16-be");
        }

        this.inBase64 = inBase64;
        this.base64Accum = base64Accum;

        return res;
      };

      Utf7IMAPDecoder.prototype.end = function () {
        var res = "";
        if (this.inBase64 && this.base64Accum.length > 0)
          res = this.iconv.decode(
            Buffer.from(this.base64Accum, "base64"),
            "utf16-be"
          );

        this.inBase64 = false;
        this.base64Accum = "";
        return res;
      };

      /***/
    },

    /***/ 6340: /***/ (__unused_webpack_module, exports) => {
      "use strict";

      var BOMChar = "\uFEFF";

      exports.PrependBOM = PrependBOMWrapper;
      function PrependBOMWrapper(encoder, options) {
        this.encoder = encoder;
        this.addBOM = true;
      }

      PrependBOMWrapper.prototype.write = function (str) {
        if (this.addBOM) {
          str = BOMChar + str;
          this.addBOM = false;
        }

        return this.encoder.write(str);
      };

      PrependBOMWrapper.prototype.end = function () {
        return this.encoder.end();
      };

      //------------------------------------------------------------------------------

      exports.StripBOM = StripBOMWrapper;
      function StripBOMWrapper(decoder, options) {
        this.decoder = decoder;
        this.pass = false;
        this.options = options || {};
      }

      StripBOMWrapper.prototype.write = function (buf) {
        var res = this.decoder.write(buf);
        if (this.pass || !res) return res;

        if (res[0] === BOMChar) {
          res = res.slice(1);
          if (typeof this.options.stripBOM === "function")
            this.options.stripBOM();
        }

        this.pass = true;
        return res;
      };

      StripBOMWrapper.prototype.end = function () {
        return this.decoder.end();
      };

      /***/
    },

    /***/ 183: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(4293).Buffer;
      // Note: not polyfilled with safer-buffer on a purpose, as overrides Buffer

      // == Extend Node primitives to use iconv-lite =================================

      module.exports = function (iconv) {
        var original = undefined; // Place to keep original methods.

        // Node authors rewrote Buffer internals to make it compatible with
        // Uint8Array and we cannot patch key functions since then.
        // Note: this does use older Buffer API on a purpose
        iconv.supportsNodeEncodingsExtension = !(
          Buffer.from || new Buffer(0) instanceof Uint8Array
        );

        iconv.extendNodeEncodings = function extendNodeEncodings() {
          if (original) return;
          original = {};

          if (!iconv.supportsNodeEncodingsExtension) {
            console.error(
              "ACTION NEEDED: require('iconv-lite').extendNodeEncodings() is not supported in your version of Node"
            );
            console.error(
              "See more info at https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility"
            );
            return;
          }

          var nodeNativeEncodings = {
            hex: true,
            utf8: true,
            "utf-8": true,
            ascii: true,
            binary: true,
            base64: true,
            ucs2: true,
            "ucs-2": true,
            utf16le: true,
            "utf-16le": true,
          };

          Buffer.isNativeEncoding = function (enc) {
            return enc && nodeNativeEncodings[enc.toLowerCase()];
          };

          // -- SlowBuffer -----------------------------------------------------------
          var SlowBuffer = __nccwpck_require__(4293).SlowBuffer;

          original.SlowBufferToString = SlowBuffer.prototype.toString;
          SlowBuffer.prototype.toString = function (encoding, start, end) {
            encoding = String(encoding || "utf8").toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
              return original.SlowBufferToString.call(
                this,
                encoding,
                start,
                end
              );

            // Otherwise, use our decoding method.
            if (typeof start == "undefined") start = 0;
            if (typeof end == "undefined") end = this.length;
            return iconv.decode(this.slice(start, end), encoding);
          };

          original.SlowBufferWrite = SlowBuffer.prototype.write;
          SlowBuffer.prototype.write = function (
            string,
            offset,
            length,
            encoding
          ) {
            // Support both (string, offset, length, encoding)
            // and the legacy (string, encoding, offset, length)
            if (isFinite(offset)) {
              if (!isFinite(length)) {
                encoding = length;
                length = undefined;
              }
            } else {
              // legacy
              var swap = encoding;
              encoding = offset;
              offset = length;
              length = swap;
            }

            offset = +offset || 0;
            var remaining = this.length - offset;
            if (!length) {
              length = remaining;
            } else {
              length = +length;
              if (length > remaining) {
                length = remaining;
              }
            }
            encoding = String(encoding || "utf8").toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
              return original.SlowBufferWrite.call(
                this,
                string,
                offset,
                length,
                encoding
              );

            if (string.length > 0 && (length < 0 || offset < 0))
              throw new RangeError("attempt to write beyond buffer bounds");

            // Otherwise, use our encoding method.
            var buf = iconv.encode(string, encoding);
            if (buf.length < length) length = buf.length;
            buf.copy(this, offset, 0, length);
            return length;
          };

          // -- Buffer ---------------------------------------------------------------

          original.BufferIsEncoding = Buffer.isEncoding;
          Buffer.isEncoding = function (encoding) {
            return (
              Buffer.isNativeEncoding(encoding) ||
              iconv.encodingExists(encoding)
            );
          };

          original.BufferByteLength = Buffer.byteLength;
          Buffer.byteLength = SlowBuffer.byteLength = function (str, encoding) {
            encoding = String(encoding || "utf8").toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
              return original.BufferByteLength.call(this, str, encoding);

            // Slow, I know, but we don't have a better way yet.
            return iconv.encode(str, encoding).length;
          };

          original.BufferToString = Buffer.prototype.toString;
          Buffer.prototype.toString = function (encoding, start, end) {
            encoding = String(encoding || "utf8").toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
              return original.BufferToString.call(this, encoding, start, end);

            // Otherwise, use our decoding method.
            if (typeof start == "undefined") start = 0;
            if (typeof end == "undefined") end = this.length;
            return iconv.decode(this.slice(start, end), encoding);
          };

          original.BufferWrite = Buffer.prototype.write;
          Buffer.prototype.write = function (string, offset, length, encoding) {
            var _offset = offset,
              _length = length,
              _encoding = encoding;
            // Support both (string, offset, length, encoding)
            // and the legacy (string, encoding, offset, length)
            if (isFinite(offset)) {
              if (!isFinite(length)) {
                encoding = length;
                length = undefined;
              }
            } else {
              // legacy
              var swap = encoding;
              encoding = offset;
              offset = length;
              length = swap;
            }

            encoding = String(encoding || "utf8").toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
              return original.BufferWrite.call(
                this,
                string,
                _offset,
                _length,
                _encoding
              );

            offset = +offset || 0;
            var remaining = this.length - offset;
            if (!length) {
              length = remaining;
            } else {
              length = +length;
              if (length > remaining) {
                length = remaining;
              }
            }

            if (string.length > 0 && (length < 0 || offset < 0))
              throw new RangeError("attempt to write beyond buffer bounds");

            // Otherwise, use our encoding method.
            var buf = iconv.encode(string, encoding);
            if (buf.length < length) length = buf.length;
            buf.copy(this, offset, 0, length);
            return length;

            // TODO: Set _charsWritten.
          };

          // -- Readable -------------------------------------------------------------
          if (iconv.supportsStreams) {
            var Readable = __nccwpck_require__(2413).Readable;

            original.ReadableSetEncoding = Readable.prototype.setEncoding;
            Readable.prototype.setEncoding = function setEncoding(
              enc,
              options
            ) {
              // Use our own decoder, it has the same interface.
              // We cannot use original function as it doesn't handle BOM-s.
              this._readableState.decoder = iconv.getDecoder(enc, options);
              this._readableState.encoding = enc;
            };

            Readable.prototype.collect = iconv._collect;
          }
        };

        // Remove iconv-lite Node primitive extensions.
        iconv.undoExtendNodeEncodings = function undoExtendNodeEncodings() {
          if (!iconv.supportsNodeEncodingsExtension) return;
          if (!original)
            throw new Error(
              "require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called."
            );

          delete Buffer.isNativeEncoding;

          var SlowBuffer = __nccwpck_require__(4293).SlowBuffer;

          SlowBuffer.prototype.toString = original.SlowBufferToString;
          SlowBuffer.prototype.write = original.SlowBufferWrite;

          Buffer.isEncoding = original.BufferIsEncoding;
          Buffer.byteLength = original.BufferByteLength;
          Buffer.prototype.toString = original.BufferToString;
          Buffer.prototype.write = original.BufferWrite;

          if (iconv.supportsStreams) {
            var Readable = __nccwpck_require__(2413).Readable;

            Readable.prototype.setEncoding = original.ReadableSetEncoding;
            delete Readable.prototype.collect;
          }

          original = undefined;
        };
      };

      /***/
    },

    /***/ 9453: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      // Some environments don't have global Buffer (e.g. React Native).
      // Solution would be installing npm modules "buffer" and "stream" explicitly.
      var Buffer = __nccwpck_require__(3846).Buffer;

      var bomHandling = __nccwpck_require__(6340),
        iconv = module.exports;

      // All codecs and aliases are kept here, keyed by encoding name/alias.
      // They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
      iconv.encodings = null;

      // Characters emitted in case of error.
      iconv.defaultCharUnicode = "�";
      iconv.defaultCharSingleByte = "?";

      // Public API.
      iconv.encode = function encode(str, encoding, options) {
        str = "" + (str || ""); // Ensure string.

        var encoder = iconv.getEncoder(encoding, options);

        var res = encoder.write(str);
        var trail = encoder.end();

        return trail && trail.length > 0 ? Buffer.concat([res, trail]) : res;
      };

      iconv.decode = function decode(buf, encoding, options) {
        if (typeof buf === "string") {
          if (!iconv.skipDecodeWarning) {
            console.error(
              "Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"
            );
            iconv.skipDecodeWarning = true;
          }

          buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
        }

        var decoder = iconv.getDecoder(encoding, options);

        var res = decoder.write(buf);
        var trail = decoder.end();

        return trail ? res + trail : res;
      };

      iconv.encodingExists = function encodingExists(enc) {
        try {
          iconv.getCodec(enc);
          return true;
        } catch (e) {
          return false;
        }
      };

      // Legacy aliases to convert functions
      iconv.toEncoding = iconv.encode;
      iconv.fromEncoding = iconv.decode;

      // Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
      iconv._codecDataCache = {};
      iconv.getCodec = function getCodec(encoding) {
        if (!iconv.encodings) iconv.encodings = __nccwpck_require__(1950); // Lazy load all encoding definitions.

        // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
        var enc = iconv._canonicalizeEncoding(encoding);

        // Traverse iconv.encodings to find actual codec.
        var codecOptions = {};
        while (true) {
          var codec = iconv._codecDataCache[enc];
          if (codec) return codec;

          var codecDef = iconv.encodings[enc];

          switch (typeof codecDef) {
            case "string": // Direct alias to other encoding.
              enc = codecDef;
              break;

            case "object": // Alias with options. Can be layered.
              for (var key in codecDef) codecOptions[key] = codecDef[key];

              if (!codecOptions.encodingName) codecOptions.encodingName = enc;

              enc = codecDef.type;
              break;

            case "function": // Codec itself.
              if (!codecOptions.encodingName) codecOptions.encodingName = enc;

              // The codec function must load all tables and return object with .encoder and .decoder methods.
              // It'll be called only once (for each different options object).
              codec = new codecDef(codecOptions, iconv);

              iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
              return codec;

            default:
              throw new Error(
                "Encoding not recognized: '" +
                  encoding +
                  "' (searched as: '" +
                  enc +
                  "')"
              );
          }
        }
      };

      iconv._canonicalizeEncoding = function (encoding) {
        // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
        return ("" + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
      };

      iconv.getEncoder = function getEncoder(encoding, options) {
        var codec = iconv.getCodec(encoding),
          encoder = new codec.encoder(options, codec);

        if (codec.bomAware && options && options.addBOM)
          encoder = new bomHandling.PrependBOM(encoder, options);

        return encoder;
      };

      iconv.getDecoder = function getDecoder(encoding, options) {
        var codec = iconv.getCodec(encoding),
          decoder = new codec.decoder(options, codec);

        if (codec.bomAware && !(options && options.stripBOM === false))
          decoder = new bomHandling.StripBOM(decoder, options);

        return decoder;
      };

      // Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.
      var nodeVer =
        typeof process !== "undefined" &&
        process.versions &&
        process.versions.node;
      if (nodeVer) {
        // Load streaming support in Node v0.10+
        var nodeVerArr = nodeVer.split(".").map(Number);
        if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) {
          __nccwpck_require__(4000)(iconv);
        }

        // Load Node primitive extensions.
        __nccwpck_require__(183)(iconv);
      }

      if (false) {
      }

      /***/
    },

    /***/ 4000: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Buffer = __nccwpck_require__(4293).Buffer,
        Transform = __nccwpck_require__(2413).Transform;

      // == Exports ==================================================================
      module.exports = function (iconv) {
        // Additional Public API.
        iconv.encodeStream = function encodeStream(encoding, options) {
          return new IconvLiteEncoderStream(
            iconv.getEncoder(encoding, options),
            options
          );
        };

        iconv.decodeStream = function decodeStream(encoding, options) {
          return new IconvLiteDecoderStream(
            iconv.getDecoder(encoding, options),
            options
          );
        };

        iconv.supportsStreams = true;

        // Not published yet.
        iconv.IconvLiteEncoderStream = IconvLiteEncoderStream;
        iconv.IconvLiteDecoderStream = IconvLiteDecoderStream;
        iconv._collect = IconvLiteDecoderStream.prototype.collect;
      };

      // == Encoder stream =======================================================
      function IconvLiteEncoderStream(conv, options) {
        this.conv = conv;
        options = options || {};
        options.decodeStrings = false; // We accept only strings, so we don't need to decode them.
        Transform.call(this, options);
      }

      IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
        constructor: { value: IconvLiteEncoderStream },
      });

      IconvLiteEncoderStream.prototype._transform = function (
        chunk,
        encoding,
        done
      ) {
        if (typeof chunk != "string")
          return done(
            new Error("Iconv encoding stream needs strings as its input.")
          );
        try {
          var res = this.conv.write(chunk);
          if (res && res.length) this.push(res);
          done();
        } catch (e) {
          done(e);
        }
      };

      IconvLiteEncoderStream.prototype._flush = function (done) {
        try {
          var res = this.conv.end();
          if (res && res.length) this.push(res);
          done();
        } catch (e) {
          done(e);
        }
      };

      IconvLiteEncoderStream.prototype.collect = function (cb) {
        var chunks = [];
        this.on("error", cb);
        this.on("data", function (chunk) {
          chunks.push(chunk);
        });
        this.on("end", function () {
          cb(null, Buffer.concat(chunks));
        });
        return this;
      };

      // == Decoder stream =======================================================
      function IconvLiteDecoderStream(conv, options) {
        this.conv = conv;
        options = options || {};
        options.encoding = this.encoding = "utf8"; // We output strings.
        Transform.call(this, options);
      }

      IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
        constructor: { value: IconvLiteDecoderStream },
      });

      IconvLiteDecoderStream.prototype._transform = function (
        chunk,
        encoding,
        done
      ) {
        if (!Buffer.isBuffer(chunk))
          return done(
            new Error("Iconv decoding stream needs buffers as its input.")
          );
        try {
          var res = this.conv.write(chunk);
          if (res && res.length) this.push(res, this.encoding);
          done();
        } catch (e) {
          done(e);
        }
      };

      IconvLiteDecoderStream.prototype._flush = function (done) {
        try {
          var res = this.conv.end();
          if (res && res.length) this.push(res, this.encoding);
          done();
        } catch (e) {
          done(e);
        }
      };

      IconvLiteDecoderStream.prototype.collect = function (cb) {
        var res = "";
        this.on("error", cb);
        this.on("data", function (chunk) {
          res += chunk;
        });
        this.on("end", function () {
          cb(null, res);
        });
        return this;
      };

      /***/
    },

    /***/ 3050: /***/ (module) => {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      module.exports = function isExtendable(val) {
        return (
          typeof val !== "undefined" &&
          val !== null &&
          (typeof val === "object" || typeof val === "function")
        );
      };

      /***/
    },

    /***/ 5025: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var yaml = __nccwpck_require__(7059);

      module.exports = yaml;

      /***/
    },

    /***/ 7059: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var loader = __nccwpck_require__(9242);
      var dumper = __nccwpck_require__(5215);

      function deprecated(name) {
        return function () {
          throw new Error(
            "Function " + name + " is deprecated and cannot be used."
          );
        };
      }

      module.exports.Type = __nccwpck_require__(4254);
      module.exports.Schema = __nccwpck_require__(2216);
      module.exports.FAILSAFE_SCHEMA = __nccwpck_require__(528);
      module.exports.JSON_SCHEMA = __nccwpck_require__(225);
      module.exports.CORE_SCHEMA = __nccwpck_require__(1071);
      module.exports.DEFAULT_SAFE_SCHEMA = __nccwpck_require__(2436);
      module.exports.DEFAULT_FULL_SCHEMA = __nccwpck_require__(1056);
      module.exports.load = loader.load;
      module.exports.loadAll = loader.loadAll;
      module.exports.safeLoad = loader.safeLoad;
      module.exports.safeLoadAll = loader.safeLoadAll;
      module.exports.dump = dumper.dump;
      module.exports.safeDump = dumper.safeDump;
      module.exports.YAMLException = __nccwpck_require__(7537);

      // Deprecated schema names from JS-YAML 2.0.x
      module.exports.MINIMAL_SCHEMA = __nccwpck_require__(528);
      module.exports.SAFE_SCHEMA = __nccwpck_require__(2436);
      module.exports.DEFAULT_SCHEMA = __nccwpck_require__(1056);

      // Deprecated functions from JS-YAML 1.x.x
      module.exports.scan = deprecated("scan");
      module.exports.parse = deprecated("parse");
      module.exports.compose = deprecated("compose");
      module.exports.addConstructor = deprecated("addConstructor");

      /***/
    },

    /***/ 1942: /***/ (module) => {
      "use strict";

      function isNothing(subject) {
        return typeof subject === "undefined" || subject === null;
      }

      function isObject(subject) {
        return typeof subject === "object" && subject !== null;
      }

      function toArray(sequence) {
        if (Array.isArray(sequence)) return sequence;
        else if (isNothing(sequence)) return [];

        return [sequence];
      }

      function extend(target, source) {
        var index, length, key, sourceKeys;

        if (source) {
          sourceKeys = Object.keys(source);

          for (
            index = 0, length = sourceKeys.length;
            index < length;
            index += 1
          ) {
            key = sourceKeys[index];
            target[key] = source[key];
          }
        }

        return target;
      }

      function repeat(string, count) {
        var result = "",
          cycle;

        for (cycle = 0; cycle < count; cycle += 1) {
          result += string;
        }

        return result;
      }

      function isNegativeZero(number) {
        return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
      }

      module.exports.isNothing = isNothing;
      module.exports.isObject = isObject;
      module.exports.toArray = toArray;
      module.exports.repeat = repeat;
      module.exports.isNegativeZero = isNegativeZero;
      module.exports.extend = extend;

      /***/
    },

    /***/ 5215: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /*eslint-disable no-use-before-define*/

      var common = __nccwpck_require__(1942);
      var YAMLException = __nccwpck_require__(7537);
      var DEFAULT_FULL_SCHEMA = __nccwpck_require__(1056);
      var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(2436);

      var _toString = Object.prototype.toString;
      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      var CHAR_TAB = 0x09; /* Tab */
      var CHAR_LINE_FEED = 0x0a; /* LF */
      var CHAR_CARRIAGE_RETURN = 0x0d; /* CR */
      var CHAR_SPACE = 0x20; /* Space */
      var CHAR_EXCLAMATION = 0x21; /* ! */
      var CHAR_DOUBLE_QUOTE = 0x22; /* " */
      var CHAR_SHARP = 0x23; /* # */
      var CHAR_PERCENT = 0x25; /* % */
      var CHAR_AMPERSAND = 0x26; /* & */
      var CHAR_SINGLE_QUOTE = 0x27; /* ' */
      var CHAR_ASTERISK = 0x2a; /* * */
      var CHAR_COMMA = 0x2c; /* , */
      var CHAR_MINUS = 0x2d; /* - */
      var CHAR_COLON = 0x3a; /* : */
      var CHAR_EQUALS = 0x3d; /* = */
      var CHAR_GREATER_THAN = 0x3e; /* > */
      var CHAR_QUESTION = 0x3f; /* ? */
      var CHAR_COMMERCIAL_AT = 0x40; /* @ */
      var CHAR_LEFT_SQUARE_BRACKET = 0x5b; /* [ */
      var CHAR_RIGHT_SQUARE_BRACKET = 0x5d; /* ] */
      var CHAR_GRAVE_ACCENT = 0x60; /* ` */
      var CHAR_LEFT_CURLY_BRACKET = 0x7b; /* { */
      var CHAR_VERTICAL_LINE = 0x7c; /* | */
      var CHAR_RIGHT_CURLY_BRACKET = 0x7d; /* } */

      var ESCAPE_SEQUENCES = {};

      ESCAPE_SEQUENCES[0x00] = "\\0";
      ESCAPE_SEQUENCES[0x07] = "\\a";
      ESCAPE_SEQUENCES[0x08] = "\\b";
      ESCAPE_SEQUENCES[0x09] = "\\t";
      ESCAPE_SEQUENCES[0x0a] = "\\n";
      ESCAPE_SEQUENCES[0x0b] = "\\v";
      ESCAPE_SEQUENCES[0x0c] = "\\f";
      ESCAPE_SEQUENCES[0x0d] = "\\r";
      ESCAPE_SEQUENCES[0x1b] = "\\e";
      ESCAPE_SEQUENCES[0x22] = '\\"';
      ESCAPE_SEQUENCES[0x5c] = "\\\\";
      ESCAPE_SEQUENCES[0x85] = "\\N";
      ESCAPE_SEQUENCES[0xa0] = "\\_";
      ESCAPE_SEQUENCES[0x2028] = "\\L";
      ESCAPE_SEQUENCES[0x2029] = "\\P";

      var DEPRECATED_BOOLEANS_SYNTAX = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF",
      ];

      function compileStyleMap(schema, map) {
        var result, keys, index, length, tag, style, type;

        if (map === null) return {};

        result = {};
        keys = Object.keys(map);

        for (index = 0, length = keys.length; index < length; index += 1) {
          tag = keys[index];
          style = String(map[tag]);

          if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
          }
          type = schema.compiledTypeMap["fallback"][tag];

          if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
          }

          result[tag] = style;
        }

        return result;
      }

      function encodeHex(character) {
        var string, handle, length;

        string = character.toString(16).toUpperCase();

        if (character <= 0xff) {
          handle = "x";
          length = 2;
        } else if (character <= 0xffff) {
          handle = "u";
          length = 4;
        } else if (character <= 0xffffffff) {
          handle = "U";
          length = 8;
        } else {
          throw new YAMLException(
            "code point within a string may not be greater than 0xFFFFFFFF"
          );
        }

        return (
          "\\" + handle + common.repeat("0", length - string.length) + string
        );
      }

      function State(options) {
        this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
        this.indent = Math.max(1, options["indent"] || 2);
        this.noArrayIndent = options["noArrayIndent"] || false;
        this.skipInvalid = options["skipInvalid"] || false;
        this.flowLevel = common.isNothing(options["flowLevel"])
          ? -1
          : options["flowLevel"];
        this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
        this.sortKeys = options["sortKeys"] || false;
        this.lineWidth = options["lineWidth"] || 80;
        this.noRefs = options["noRefs"] || false;
        this.noCompatMode = options["noCompatMode"] || false;
        this.condenseFlow = options["condenseFlow"] || false;

        this.implicitTypes = this.schema.compiledImplicit;
        this.explicitTypes = this.schema.compiledExplicit;

        this.tag = null;
        this.result = "";

        this.duplicates = [];
        this.usedDuplicates = null;
      }

      // Indents every line in a string. Empty lines (\n only) are not indented.
      function indentString(string, spaces) {
        var ind = common.repeat(" ", spaces),
          position = 0,
          next = -1,
          result = "",
          line,
          length = string.length;

        while (position < length) {
          next = string.indexOf("\n", position);
          if (next === -1) {
            line = string.slice(position);
            position = length;
          } else {
            line = string.slice(position, next + 1);
            position = next + 1;
          }

          if (line.length && line !== "\n") result += ind;

          result += line;
        }

        return result;
      }

      function generateNextLine(state, level) {
        return "\n" + common.repeat(" ", state.indent * level);
      }

      function testImplicitResolving(state, str) {
        var index, length, type;

        for (
          index = 0, length = state.implicitTypes.length;
          index < length;
          index += 1
        ) {
          type = state.implicitTypes[index];

          if (type.resolve(str)) {
            return true;
          }
        }

        return false;
      }

      // [33] s-white ::= s-space | s-tab
      function isWhitespace(c) {
        return c === CHAR_SPACE || c === CHAR_TAB;
      }

      // Returns true if the character can be printed without escaping.
      // From YAML 1.2: "any allowed characters known to be non-printable
      // should also be escaped. [However,] This isn’t mandatory"
      // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
      function isPrintable(c) {
        return (
          (0x00020 <= c && c <= 0x00007e) ||
          (0x000a1 <= c && c <= 0x00d7ff && c !== 0x2028 && c !== 0x2029) ||
          (0x0e000 <= c && c <= 0x00fffd && c !== 0xfeff) /* BOM */ ||
          (0x10000 <= c && c <= 0x10ffff)
        );
      }

      // [34] ns-char ::= nb-char - s-white
      // [27] nb-char ::= c-printable - b-char - c-byte-order-mark
      // [26] b-char  ::= b-line-feed | b-carriage-return
      // [24] b-line-feed       ::=     #xA    /* LF */
      // [25] b-carriage-return ::=     #xD    /* CR */
      // [3]  c-byte-order-mark ::=     #xFEFF
      function isNsChar(c) {
        return (
          isPrintable(c) &&
          !isWhitespace(c) &&
          // byte-order-mark
          c !== 0xfeff &&
          // b-char
          c !== CHAR_CARRIAGE_RETURN &&
          c !== CHAR_LINE_FEED
        );
      }

      // Simplified test for values allowed after the first character in plain style.
      function isPlainSafe(c, prev) {
        // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
        // where nb-char ::= c-printable - b-char - c-byte-order-mark.
        return (
          isPrintable(c) &&
          c !== 0xfeff &&
          // - c-flow-indicator
          c !== CHAR_COMMA &&
          c !== CHAR_LEFT_SQUARE_BRACKET &&
          c !== CHAR_RIGHT_SQUARE_BRACKET &&
          c !== CHAR_LEFT_CURLY_BRACKET &&
          c !== CHAR_RIGHT_CURLY_BRACKET &&
          // - ":" - "#"
          // /* An ns-char preceding */ "#"
          c !== CHAR_COLON &&
          (c !== CHAR_SHARP || (prev && isNsChar(prev)))
        );
      }

      // Simplified test for values allowed as the first character in plain style.
      function isPlainSafeFirst(c) {
        // Uses a subset of ns-char - c-indicator
        // where ns-char = nb-char - s-white.
        return (
          isPrintable(c) &&
          c !== 0xfeff &&
          !isWhitespace(c) && // - s-white
          // - (c-indicator ::=
          // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
          c !== CHAR_MINUS &&
          c !== CHAR_QUESTION &&
          c !== CHAR_COLON &&
          c !== CHAR_COMMA &&
          c !== CHAR_LEFT_SQUARE_BRACKET &&
          c !== CHAR_RIGHT_SQUARE_BRACKET &&
          c !== CHAR_LEFT_CURLY_BRACKET &&
          c !== CHAR_RIGHT_CURLY_BRACKET &&
          // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
          c !== CHAR_SHARP &&
          c !== CHAR_AMPERSAND &&
          c !== CHAR_ASTERISK &&
          c !== CHAR_EXCLAMATION &&
          c !== CHAR_VERTICAL_LINE &&
          c !== CHAR_EQUALS &&
          c !== CHAR_GREATER_THAN &&
          c !== CHAR_SINGLE_QUOTE &&
          c !== CHAR_DOUBLE_QUOTE &&
          // | “%” | “@” | “`”)
          c !== CHAR_PERCENT &&
          c !== CHAR_COMMERCIAL_AT &&
          c !== CHAR_GRAVE_ACCENT
        );
      }

      // Determines whether block indentation indicator is required.
      function needIndentIndicator(string) {
        var leadingSpaceRe = /^\n* /;
        return leadingSpaceRe.test(string);
      }

      var STYLE_PLAIN = 1,
        STYLE_SINGLE = 2,
        STYLE_LITERAL = 3,
        STYLE_FOLDED = 4,
        STYLE_DOUBLE = 5;

      // Determines which scalar styles are possible and returns the preferred style.
      // lineWidth = -1 => no limit.
      // Pre-conditions: str.length > 0.
      // Post-conditions:
      //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
      //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
      //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
      function chooseScalarStyle(
        string,
        singleLineOnly,
        indentPerLevel,
        lineWidth,
        testAmbiguousType
      ) {
        var i;
        var char, prev_char;
        var hasLineBreak = false;
        var hasFoldableLine = false; // only checked if shouldTrackWidth
        var shouldTrackWidth = lineWidth !== -1;
        var previousLineBreak = -1; // count the first line correctly
        var plain =
          isPlainSafeFirst(string.charCodeAt(0)) &&
          !isWhitespace(string.charCodeAt(string.length - 1));

        if (singleLineOnly) {
          // Case: no block styles.
          // Check for disallowed characters to rule out plain and single.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
          }
        } else {
          // Case: block styles permitted.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i);
            if (char === CHAR_LINE_FEED) {
              hasLineBreak = true;
              // Check if any line can be folded.
              if (shouldTrackWidth) {
                hasFoldableLine =
                  hasFoldableLine ||
                  // Foldable line = too long, and not more-indented.
                  (i - previousLineBreak - 1 > lineWidth &&
                    string[previousLineBreak + 1] !== " ");
                previousLineBreak = i;
              }
            } else if (!isPrintable(char)) {
              return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
          }
          // in case the end is missing a \n
          hasFoldableLine =
            hasFoldableLine ||
            (shouldTrackWidth &&
              i - previousLineBreak - 1 > lineWidth &&
              string[previousLineBreak + 1] !== " ");
        }
        // Although every style can represent \n without escaping, prefer block styles
        // for multiline, since they're more readable and they don't add empty lines.
        // Also prefer folding a super-long line.
        if (!hasLineBreak && !hasFoldableLine) {
          // Strings interpretable as another type have to be quoted;
          // e.g. the string 'true' vs. the boolean true.
          return plain && !testAmbiguousType(string)
            ? STYLE_PLAIN
            : STYLE_SINGLE;
        }
        // Edge case: block indentation indicator can only have one digit.
        if (indentPerLevel > 9 && needIndentIndicator(string)) {
          return STYLE_DOUBLE;
        }
        // At this point we know block styles are valid.
        // Prefer literal style unless we want to fold.
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
      }

      // Note: line breaking/folding is implemented for only the folded style.
      // NB. We drop the last trailing newline (if any) of a returned block scalar
      //  since the dumper adds its own newline. This always works:
      //    • No ending newline => unaffected; already using strip "-" chomping.
      //    • Ending newline    => removed then restored.
      //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
      function writeScalar(state, string, level, iskey) {
        state.dump = (function () {
          if (string.length === 0) {
            return "''";
          }
          if (
            !state.noCompatMode &&
            DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1
          ) {
            return "'" + string + "'";
          }

          var indent = state.indent * Math.max(1, level); // no 0-indent scalars
          // As indentation gets deeper, let the width decrease monotonically
          // to the lower bound min(state.lineWidth, 40).
          // Note that this implies
          //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
          //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
          // This behaves better than a constant minimum width which disallows narrower options,
          // or an indent threshold which causes the width to suddenly increase.
          var lineWidth =
            state.lineWidth === -1
              ? -1
              : Math.max(
                  Math.min(state.lineWidth, 40),
                  state.lineWidth - indent
                );

          // Without knowing if keys are implicit/explicit, assume implicit for safety.
          var singleLineOnly =
            iskey ||
            // No block styles in flow mode.
            (state.flowLevel > -1 && level >= state.flowLevel);
          function testAmbiguity(string) {
            return testImplicitResolving(state, string);
          }

          switch (
            chooseScalarStyle(
              string,
              singleLineOnly,
              state.indent,
              lineWidth,
              testAmbiguity
            )
          ) {
            case STYLE_PLAIN:
              return string;
            case STYLE_SINGLE:
              return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
              return (
                "|" +
                blockHeader(string, state.indent) +
                dropEndingNewline(indentString(string, indent))
              );
            case STYLE_FOLDED:
              return (
                ">" +
                blockHeader(string, state.indent) +
                dropEndingNewline(
                  indentString(foldString(string, lineWidth), indent)
                )
              );
            case STYLE_DOUBLE:
              return '"' + escapeString(string, lineWidth) + '"';
            default:
              throw new YAMLException("impossible error: invalid scalar style");
          }
        })();
      }

      // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
      function blockHeader(string, indentPerLevel) {
        var indentIndicator = needIndentIndicator(string)
          ? String(indentPerLevel)
          : "";

        // note the special case: the string '\n' counts as a "trailing" empty line.
        var clip = string[string.length - 1] === "\n";
        var keep =
          clip && (string[string.length - 2] === "\n" || string === "\n");
        var chomp = keep ? "+" : clip ? "" : "-";

        return indentIndicator + chomp + "\n";
      }

      // (See the note for writeScalar.)
      function dropEndingNewline(string) {
        return string[string.length - 1] === "\n"
          ? string.slice(0, -1)
          : string;
      }

      // Note: a long line without a suitable break point will exceed the width limit.
      // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
      function foldString(string, width) {
        // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
        // unless they're before or after a more-indented line, or at the very
        // beginning or end, in which case $k$ maps to $k$.
        // Therefore, parse each chunk as newline(s) followed by a content line.
        var lineRe = /(\n+)([^\n]*)/g;

        // first line (possibly an empty line)
        var result = (function () {
          var nextLF = string.indexOf("\n");
          nextLF = nextLF !== -1 ? nextLF : string.length;
          lineRe.lastIndex = nextLF;
          return foldLine(string.slice(0, nextLF), width);
        })();
        // If we haven't reached the first content line yet, don't add an extra \n.
        var prevMoreIndented = string[0] === "\n" || string[0] === " ";
        var moreIndented;

        // rest of the lines
        var match;
        while ((match = lineRe.exec(string))) {
          var prefix = match[1],
            line = match[2];
          moreIndented = line[0] === " ";
          result +=
            prefix +
            (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") +
            foldLine(line, width);
          prevMoreIndented = moreIndented;
        }

        return result;
      }

      // Greedy line breaking.
      // Picks the longest line under the limit each time,
      // otherwise settles for the shortest line over the limit.
      // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
      function foldLine(line, width) {
        if (line === "" || line[0] === " ") return line;

        // Since a more-indented line adds a \n, breaks can't be followed by a space.
        var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
        var match;
        // start is an inclusive index. end, curr, and next are exclusive.
        var start = 0,
          end,
          curr = 0,
          next = 0;
        var result = "";

        // Invariants: 0 <= start <= length-1.
        //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
        // Inside the loop:
        //   A match implies length >= 2, so curr and next are <= length-2.
        while ((match = breakRe.exec(line))) {
          next = match.index;
          // maintain invariant: curr - start <= width
          if (next - start > width) {
            end = curr > start ? curr : next; // derive end <= length-2
            result += "\n" + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1; // derive start <= length-1
          }
          curr = next;
        }

        // By the invariants, start <= length-1, so there is something left over.
        // It is either the whole string or a part starting from non-whitespace.
        result += "\n";
        // Insert a break if the remainder is too long and there is a break available.
        if (line.length - start > width && curr > start) {
          result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
        } else {
          result += line.slice(start);
        }

        return result.slice(1); // drop extra \n joiner
      }

      // Escapes a double-quoted string.
      function escapeString(string) {
        var result = "";
        var char, nextChar;
        var escapeSeq;

        for (var i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
          if (char >= 0xd800 && char <= 0xdbff /* high surrogate */) {
            nextChar = string.charCodeAt(i + 1);
            if (nextChar >= 0xdc00 && nextChar <= 0xdfff /* low surrogate */) {
              // Combine the surrogate pair and store it escaped.
              result += encodeHex(
                (char - 0xd800) * 0x400 + nextChar - 0xdc00 + 0x10000
              );
              // Advance index one extra since we already used that char here.
              i++;
              continue;
            }
          }
          escapeSeq = ESCAPE_SEQUENCES[char];
          result +=
            !escapeSeq && isPrintable(char)
              ? string[i]
              : escapeSeq || encodeHex(char);
        }

        return result;
      }

      function writeFlowSequence(state, level, object) {
        var _result = "",
          _tag = state.tag,
          index,
          length;

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level, object[index], false, false)) {
            if (index !== 0) _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
          }
        }

        state.tag = _tag;
        state.dump = "[" + _result + "]";
      }

      function writeBlockSequence(state, level, object, compact) {
        var _result = "",
          _tag = state.tag,
          index,
          length;

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level + 1, object[index], true, true)) {
            if (!compact || index !== 0) {
              _result += generateNextLine(state, level);
            }

            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              _result += "-";
            } else {
              _result += "- ";
            }

            _result += state.dump;
          }
        }

        state.tag = _tag;
        state.dump = _result || "[]"; // Empty sequence if no valid values.
      }

      function writeFlowMapping(state, level, object) {
        var _result = "",
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          pairBuffer;

        for (
          index = 0, length = objectKeyList.length;
          index < length;
          index += 1
        ) {
          pairBuffer = "";
          if (index !== 0) pairBuffer += ", ";

          if (state.condenseFlow) pairBuffer += '"';

          objectKey = objectKeyList[index];
          objectValue = object[objectKey];

          if (!writeNode(state, level, objectKey, false, false)) {
            continue; // Skip this pair because of invalid key;
          }

          if (state.dump.length > 1024) pairBuffer += "? ";

          pairBuffer +=
            state.dump +
            (state.condenseFlow ? '"' : "") +
            ":" +
            (state.condenseFlow ? "" : " ");

          if (!writeNode(state, level, objectValue, false, false)) {
            continue; // Skip this pair because of invalid value.
          }

          pairBuffer += state.dump;

          // Both key and value are valid.
          _result += pairBuffer;
        }

        state.tag = _tag;
        state.dump = "{" + _result + "}";
      }

      function writeBlockMapping(state, level, object, compact) {
        var _result = "",
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          explicitPair,
          pairBuffer;

        // Allow sorting keys so that the output file is deterministic
        if (state.sortKeys === true) {
          // Default sorting
          objectKeyList.sort();
        } else if (typeof state.sortKeys === "function") {
          // Custom sort function
          objectKeyList.sort(state.sortKeys);
        } else if (state.sortKeys) {
          // Something is wrong
          throw new YAMLException("sortKeys must be a boolean or a function");
        }

        for (
          index = 0, length = objectKeyList.length;
          index < length;
          index += 1
        ) {
          pairBuffer = "";

          if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level);
          }

          objectKey = objectKeyList[index];
          objectValue = object[objectKey];

          if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; // Skip this pair because of invalid key.
          }

          explicitPair =
            (state.tag !== null && state.tag !== "?") ||
            (state.dump && state.dump.length > 1024);

          if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              pairBuffer += "?";
            } else {
              pairBuffer += "? ";
            }
          }

          pairBuffer += state.dump;

          if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
          }

          if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; // Skip this pair because of invalid value.
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
          } else {
            pairBuffer += ": ";
          }

          pairBuffer += state.dump;

          // Both key and value are valid.
          _result += pairBuffer;
        }

        state.tag = _tag;
        state.dump = _result || "{}"; // Empty mapping if no valid pairs.
      }

      function detectType(state, object, explicit) {
        var _result, typeList, index, length, type, style;

        typeList = explicit ? state.explicitTypes : state.implicitTypes;

        for (index = 0, length = typeList.length; index < length; index += 1) {
          type = typeList[index];

          if (
            (type.instanceOf || type.predicate) &&
            (!type.instanceOf ||
              (typeof object === "object" &&
                object instanceof type.instanceOf)) &&
            (!type.predicate || type.predicate(object))
          ) {
            state.tag = explicit ? type.tag : "?";

            if (type.represent) {
              style = state.styleMap[type.tag] || type.defaultStyle;

              if (_toString.call(type.represent) === "[object Function]") {
                _result = type.represent(object, style);
              } else if (_hasOwnProperty.call(type.represent, style)) {
                _result = type.represent[style](object, style);
              } else {
                throw new YAMLException(
                  "!<" +
                    type.tag +
                    '> tag resolver accepts not "' +
                    style +
                    '" style'
                );
              }

              state.dump = _result;
            }

            return true;
          }
        }

        return false;
      }

      // Serializes `object` and writes it to global `result`.
      // Returns true on success, or false on invalid object.
      //
      function writeNode(state, level, object, block, compact, iskey) {
        state.tag = null;
        state.dump = object;

        if (!detectType(state, object, false)) {
          detectType(state, object, true);
        }

        var type = _toString.call(state.dump);

        if (block) {
          block = state.flowLevel < 0 || state.flowLevel > level;
        }

        var objectOrArray =
            type === "[object Object]" || type === "[object Array]",
          duplicateIndex,
          duplicate;

        if (objectOrArray) {
          duplicateIndex = state.duplicates.indexOf(object);
          duplicate = duplicateIndex !== -1;
        }

        if (
          (state.tag !== null && state.tag !== "?") ||
          duplicate ||
          (state.indent !== 2 && level > 0)
        ) {
          compact = false;
        }

        if (duplicate && state.usedDuplicates[duplicateIndex]) {
          state.dump = "*ref_" + duplicateIndex;
        } else {
          if (
            objectOrArray &&
            duplicate &&
            !state.usedDuplicates[duplicateIndex]
          ) {
            state.usedDuplicates[duplicateIndex] = true;
          }
          if (type === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
              writeBlockMapping(state, level, state.dump, compact);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + state.dump;
              }
            } else {
              writeFlowMapping(state, level, state.dump);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + " " + state.dump;
              }
            }
          } else if (type === "[object Array]") {
            var arrayLevel =
              state.noArrayIndent && level > 0 ? level - 1 : level;
            if (block && state.dump.length !== 0) {
              writeBlockSequence(state, arrayLevel, state.dump, compact);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + state.dump;
              }
            } else {
              writeFlowSequence(state, arrayLevel, state.dump);
              if (duplicate) {
                state.dump = "&ref_" + duplicateIndex + " " + state.dump;
              }
            }
          } else if (type === "[object String]") {
            if (state.tag !== "?") {
              writeScalar(state, state.dump, level, iskey);
            }
          } else {
            if (state.skipInvalid) return false;
            throw new YAMLException(
              "unacceptable kind of an object to dump " + type
            );
          }

          if (state.tag !== null && state.tag !== "?") {
            state.dump = "!<" + state.tag + "> " + state.dump;
          }
        }

        return true;
      }

      function getDuplicateReferences(object, state) {
        var objects = [],
          duplicatesIndexes = [],
          index,
          length;

        inspectNode(object, objects, duplicatesIndexes);

        for (
          index = 0, length = duplicatesIndexes.length;
          index < length;
          index += 1
        ) {
          state.duplicates.push(objects[duplicatesIndexes[index]]);
        }
        state.usedDuplicates = new Array(length);
      }

      function inspectNode(object, objects, duplicatesIndexes) {
        var objectKeyList, index, length;

        if (object !== null && typeof object === "object") {
          index = objects.indexOf(object);
          if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
              duplicatesIndexes.push(index);
            }
          } else {
            objects.push(object);

            if (Array.isArray(object)) {
              for (
                index = 0, length = object.length;
                index < length;
                index += 1
              ) {
                inspectNode(object[index], objects, duplicatesIndexes);
              }
            } else {
              objectKeyList = Object.keys(object);

              for (
                index = 0, length = objectKeyList.length;
                index < length;
                index += 1
              ) {
                inspectNode(
                  object[objectKeyList[index]],
                  objects,
                  duplicatesIndexes
                );
              }
            }
          }
        }
      }

      function dump(input, options) {
        options = options || {};

        var state = new State(options);

        if (!state.noRefs) getDuplicateReferences(input, state);

        if (writeNode(state, 0, input, true, true)) return state.dump + "\n";

        return "";
      }

      function safeDump(input, options) {
        return dump(
          input,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        );
      }

      module.exports.dump = dump;
      module.exports.safeDump = safeDump;

      /***/
    },

    /***/ 7537: /***/ (module) => {
      "use strict";
      // YAML error class. http://stackoverflow.com/questions/8458984
      //

      function YAMLException(reason, mark) {
        // Super constructor
        Error.call(this);

        this.name = "YAMLException";
        this.reason = reason;
        this.mark = mark;
        this.message =
          (this.reason || "(unknown reason)") +
          (this.mark ? " " + this.mark.toString() : "");

        // Include stack trace in error object
        if (Error.captureStackTrace) {
          // Chrome and NodeJS
          Error.captureStackTrace(this, this.constructor);
        } else {
          // FF, IE 10+ and Safari 6+. Fallback for others
          this.stack = new Error().stack || "";
        }
      }

      // Inherit from Error
      YAMLException.prototype = Object.create(Error.prototype);
      YAMLException.prototype.constructor = YAMLException;

      YAMLException.prototype.toString = function toString(compact) {
        var result = this.name + ": ";

        result += this.reason || "(unknown reason)";

        if (!compact && this.mark) {
          result += " " + this.mark.toString();
        }

        return result;
      };

      module.exports = YAMLException;

      /***/
    },

    /***/ 9242: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /*eslint-disable max-len,no-use-before-define*/

      var common = __nccwpck_require__(1942);
      var YAMLException = __nccwpck_require__(7537);
      var Mark = __nccwpck_require__(26);
      var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(2436);
      var DEFAULT_FULL_SCHEMA = __nccwpck_require__(1056);

      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      var CONTEXT_FLOW_IN = 1;
      var CONTEXT_FLOW_OUT = 2;
      var CONTEXT_BLOCK_IN = 3;
      var CONTEXT_BLOCK_OUT = 4;

      var CHOMPING_CLIP = 1;
      var CHOMPING_STRIP = 2;
      var CHOMPING_KEEP = 3;

      var PATTERN_NON_PRINTABLE =
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
      var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
      var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
      var PATTERN_TAG_URI =
        /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

      function _class(obj) {
        return Object.prototype.toString.call(obj);
      }

      function is_EOL(c) {
        return c === 0x0a /* LF */ || c === 0x0d /* CR */;
      }

      function is_WHITE_SPACE(c) {
        return c === 0x09 /* Tab */ || c === 0x20 /* Space */;
      }

      function is_WS_OR_EOL(c) {
        return (
          c === 0x09 /* Tab */ ||
          c === 0x20 /* Space */ ||
          c === 0x0a /* LF */ ||
          c === 0x0d /* CR */
        );
      }

      function is_FLOW_INDICATOR(c) {
        return (
          c === 0x2c /* , */ ||
          c === 0x5b /* [ */ ||
          c === 0x5d /* ] */ ||
          c === 0x7b /* { */ ||
          c === 0x7d /* } */
        );
      }

      function fromHexCode(c) {
        var lc;

        if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
          return c - 0x30;
        }

        /*eslint-disable no-bitwise*/
        lc = c | 0x20;

        if (0x61 /* a */ <= lc && lc <= 0x66 /* f */) {
          return lc - 0x61 + 10;
        }

        return -1;
      }

      function escapedHexLen(c) {
        if (c === 0x78 /* x */) {
          return 2;
        }
        if (c === 0x75 /* u */) {
          return 4;
        }
        if (c === 0x55 /* U */) {
          return 8;
        }
        return 0;
      }

      function fromDecimalCode(c) {
        if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
          return c - 0x30;
        }

        return -1;
      }

      function simpleEscapeSequence(c) {
        /* eslint-disable indent */
        return c === 0x30 /* 0 */
          ? "\x00"
          : c === 0x61 /* a */
          ? "\x07"
          : c === 0x62 /* b */
          ? "\x08"
          : c === 0x74 /* t */
          ? "\x09"
          : c === 0x09 /* Tab */
          ? "\x09"
          : c === 0x6e /* n */
          ? "\x0A"
          : c === 0x76 /* v */
          ? "\x0B"
          : c === 0x66 /* f */
          ? "\x0C"
          : c === 0x72 /* r */
          ? "\x0D"
          : c === 0x65 /* e */
          ? "\x1B"
          : c === 0x20 /* Space */
          ? " "
          : c === 0x22 /* " */
          ? "\x22"
          : c === 0x2f /* / */
          ? "/"
          : c === 0x5c /* \ */
          ? "\x5C"
          : c === 0x4e /* N */
          ? "\x85"
          : c === 0x5f /* _ */
          ? "\xA0"
          : c === 0x4c /* L */
          ? "\u2028"
          : c === 0x50 /* P */
          ? "\u2029"
          : "";
      }

      function charFromCodepoint(c) {
        if (c <= 0xffff) {
          return String.fromCharCode(c);
        }
        // Encode UTF-16 surrogate pair
        // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
        return String.fromCharCode(
          ((c - 0x010000) >> 10) + 0xd800,
          ((c - 0x010000) & 0x03ff) + 0xdc00
        );
      }

      var simpleEscapeCheck = new Array(256); // integer, for fast access
      var simpleEscapeMap = new Array(256);
      for (var i = 0; i < 256; i++) {
        simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
        simpleEscapeMap[i] = simpleEscapeSequence(i);
      }

      function State(input, options) {
        this.input = input;

        this.filename = options["filename"] || null;
        this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
        this.onWarning = options["onWarning"] || null;
        this.legacy = options["legacy"] || false;
        this.json = options["json"] || false;
        this.listener = options["listener"] || null;

        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;

        this.length = input.length;
        this.position = 0;
        this.line = 0;
        this.lineStart = 0;
        this.lineIndent = 0;

        this.documents = [];

        /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/
      }

      function generateError(state, message) {
        return new YAMLException(
          message,
          new Mark(
            state.filename,
            state.input,
            state.position,
            state.line,
            state.position - state.lineStart
          )
        );
      }

      function throwError(state, message) {
        throw generateError(state, message);
      }

      function throwWarning(state, message) {
        if (state.onWarning) {
          state.onWarning.call(null, generateError(state, message));
        }
      }

      var directiveHandlers = {
        YAML: function handleYamlDirective(state, name, args) {
          var match, major, minor;

          if (state.version !== null) {
            throwError(state, "duplication of %YAML directive");
          }

          if (args.length !== 1) {
            throwError(state, "YAML directive accepts exactly one argument");
          }

          match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

          if (match === null) {
            throwError(state, "ill-formed argument of the YAML directive");
          }

          major = parseInt(match[1], 10);
          minor = parseInt(match[2], 10);

          if (major !== 1) {
            throwError(state, "unacceptable YAML version of the document");
          }

          state.version = args[0];
          state.checkLineBreaks = minor < 2;

          if (minor !== 1 && minor !== 2) {
            throwWarning(state, "unsupported YAML version of the document");
          }
        },

        TAG: function handleTagDirective(state, name, args) {
          var handle, prefix;

          if (args.length !== 2) {
            throwError(state, "TAG directive accepts exactly two arguments");
          }

          handle = args[0];
          prefix = args[1];

          if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(
              state,
              "ill-formed tag handle (first argument) of the TAG directive"
            );
          }

          if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(
              state,
              'there is a previously declared suffix for "' +
                handle +
                '" tag handle'
            );
          }

          if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(
              state,
              "ill-formed tag prefix (second argument) of the TAG directive"
            );
          }

          state.tagMap[handle] = prefix;
        },
      };

      function captureSegment(state, start, end, checkJson) {
        var _position, _length, _character, _result;

        if (start < end) {
          _result = state.input.slice(start, end);

          if (checkJson) {
            for (
              _position = 0, _length = _result.length;
              _position < _length;
              _position += 1
            ) {
              _character = _result.charCodeAt(_position);
              if (
                !(
                  _character === 0x09 ||
                  (0x20 <= _character && _character <= 0x10ffff)
                )
              ) {
                throwError(state, "expected valid JSON character");
              }
            }
          } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, "the stream contains non-printable characters");
          }

          state.result += _result;
        }
      }

      function mergeMappings(state, destination, source, overridableKeys) {
        var sourceKeys, key, index, quantity;

        if (!common.isObject(source)) {
          throwError(
            state,
            "cannot merge mappings; the provided source object is unacceptable"
          );
        }

        sourceKeys = Object.keys(source);

        for (
          index = 0, quantity = sourceKeys.length;
          index < quantity;
          index += 1
        ) {
          key = sourceKeys[index];

          if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
          }
        }
      }

      function storeMappingPair(
        state,
        _result,
        overridableKeys,
        keyTag,
        keyNode,
        valueNode,
        startLine,
        startPos
      ) {
        var index, quantity;

        // The output is a plain object here, so keys can only be strings.
        // We need to convert keyNode to a string, but doing so can hang the process
        // (deeply nested arrays that explode exponentially using aliases).
        if (Array.isArray(keyNode)) {
          keyNode = Array.prototype.slice.call(keyNode);

          for (
            index = 0, quantity = keyNode.length;
            index < quantity;
            index += 1
          ) {
            if (Array.isArray(keyNode[index])) {
              throwError(state, "nested arrays are not supported inside keys");
            }

            if (
              typeof keyNode === "object" &&
              _class(keyNode[index]) === "[object Object]"
            ) {
              keyNode[index] = "[object Object]";
            }
          }
        }

        // Avoid code execution in load() via toString property
        // (still use its own toString for arrays, timestamps,
        // and whatever user schema extensions happen to have @@toStringTag)
        if (
          typeof keyNode === "object" &&
          _class(keyNode) === "[object Object]"
        ) {
          keyNode = "[object Object]";
        }

        keyNode = String(keyNode);

        if (_result === null) {
          _result = {};
        }

        if (keyTag === "tag:yaml.org,2002:merge") {
          if (Array.isArray(valueNode)) {
            for (
              index = 0, quantity = valueNode.length;
              index < quantity;
              index += 1
            ) {
              mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
          } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
          }
        } else {
          if (
            !state.json &&
            !_hasOwnProperty.call(overridableKeys, keyNode) &&
            _hasOwnProperty.call(_result, keyNode)
          ) {
            state.line = startLine || state.line;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
          }
          _result[keyNode] = valueNode;
          delete overridableKeys[keyNode];
        }

        return _result;
      }

      function readLineBreak(state) {
        var ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x0a /* LF */) {
          state.position++;
        } else if (ch === 0x0d /* CR */) {
          state.position++;
          if (state.input.charCodeAt(state.position) === 0x0a /* LF */) {
            state.position++;
          }
        } else {
          throwError(state, "a line break is expected");
        }

        state.line += 1;
        state.lineStart = state.position;
      }

      function skipSeparationSpace(state, allowComments, checkIndent) {
        var lineBreaks = 0,
          ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          if (allowComments && ch === 0x23 /* # */) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0x0a /* LF */ && ch !== 0x0d /* CR */ && ch !== 0);
          }

          if (is_EOL(ch)) {
            readLineBreak(state);

            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;

            while (ch === 0x20 /* Space */) {
              state.lineIndent++;
              ch = state.input.charCodeAt(++state.position);
            }
          } else {
            break;
          }
        }

        if (
          checkIndent !== -1 &&
          lineBreaks !== 0 &&
          state.lineIndent < checkIndent
        ) {
          throwWarning(state, "deficient indentation");
        }

        return lineBreaks;
      }

      function testDocumentSeparator(state) {
        var _position = state.position,
          ch;

        ch = state.input.charCodeAt(_position);

        // Condition state.position === state.lineStart is tested
        // in parent on each call, for efficiency. No needs to test here again.
        if (
          (ch === 0x2d /* - */ || ch === 0x2e) /* . */ &&
          ch === state.input.charCodeAt(_position + 1) &&
          ch === state.input.charCodeAt(_position + 2)
        ) {
          _position += 3;

          ch = state.input.charCodeAt(_position);

          if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
          }
        }

        return false;
      }

      function writeFoldedLines(state, count) {
        if (count === 1) {
          state.result += " ";
        } else if (count > 1) {
          state.result += common.repeat("\n", count - 1);
        }
      }

      function readPlainScalar(state, nodeIndent, withinFlowCollection) {
        var preceding,
          following,
          captureStart,
          captureEnd,
          hasPendingContent,
          _line,
          _lineStart,
          _lineIndent,
          _kind = state.kind,
          _result = state.result,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (
          is_WS_OR_EOL(ch) ||
          is_FLOW_INDICATOR(ch) ||
          ch === 0x23 /* # */ ||
          ch === 0x26 /* & */ ||
          ch === 0x2a /* * */ ||
          ch === 0x21 /* ! */ ||
          ch === 0x7c /* | */ ||
          ch === 0x3e /* > */ ||
          ch === 0x27 /* ' */ ||
          ch === 0x22 /* " */ ||
          ch === 0x25 /* % */ ||
          ch === 0x40 /* @ */ ||
          ch === 0x60 /* ` */
        ) {
          return false;
        }

        if (ch === 0x3f /* ? */ || ch === 0x2d /* - */) {
          following = state.input.charCodeAt(state.position + 1);

          if (
            is_WS_OR_EOL(following) ||
            (withinFlowCollection && is_FLOW_INDICATOR(following))
          ) {
            return false;
          }
        }

        state.kind = "scalar";
        state.result = "";
        captureStart = captureEnd = state.position;
        hasPendingContent = false;

        while (ch !== 0) {
          if (ch === 0x3a /* : */) {
            following = state.input.charCodeAt(state.position + 1);

            if (
              is_WS_OR_EOL(following) ||
              (withinFlowCollection && is_FLOW_INDICATOR(following))
            ) {
              break;
            }
          } else if (ch === 0x23 /* # */) {
            preceding = state.input.charCodeAt(state.position - 1);

            if (is_WS_OR_EOL(preceding)) {
              break;
            }
          } else if (
            (state.position === state.lineStart &&
              testDocumentSeparator(state)) ||
            (withinFlowCollection && is_FLOW_INDICATOR(ch))
          ) {
            break;
          } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);

            if (state.lineIndent >= nodeIndent) {
              hasPendingContent = true;
              ch = state.input.charCodeAt(state.position);
              continue;
            } else {
              state.position = captureEnd;
              state.line = _line;
              state.lineStart = _lineStart;
              state.lineIndent = _lineIndent;
              break;
            }
          }

          if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
          }

          if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
          }

          ch = state.input.charCodeAt(++state.position);
        }

        captureSegment(state, captureStart, captureEnd, false);

        if (state.result) {
          return true;
        }

        state.kind = _kind;
        state.result = _result;
        return false;
      }

      function readSingleQuotedScalar(state, nodeIndent) {
        var ch, captureStart, captureEnd;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x27 /* ' */) {
          return false;
        }

        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x27 /* ' */) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);

            if (ch === 0x27 /* ' */) {
              captureStart = state.position;
              state.position++;
              captureEnd = state.position;
            } else {
              return true;
            }
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(
              state,
              skipSeparationSpace(state, false, nodeIndent)
            );
            captureStart = captureEnd = state.position;
          } else if (
            state.position === state.lineStart &&
            testDocumentSeparator(state)
          ) {
            throwError(
              state,
              "unexpected end of the document within a single quoted scalar"
            );
          } else {
            state.position++;
            captureEnd = state.position;
          }
        }

        throwError(
          state,
          "unexpected end of the stream within a single quoted scalar"
        );
      }

      function readDoubleQuotedScalar(state, nodeIndent) {
        var captureStart, captureEnd, hexLength, hexResult, tmp, ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x22 /* " */) {
          return false;
        }

        state.kind = "scalar";
        state.result = "";
        state.position++;
        captureStart = captureEnd = state.position;

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x22 /* " */) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
          } else if (ch === 0x5c /* \ */) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);

            if (is_EOL(ch)) {
              skipSeparationSpace(state, false, nodeIndent);

              // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
              state.result += simpleEscapeMap[ch];
              state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
              hexLength = tmp;
              hexResult = 0;

              for (; hexLength > 0; hexLength--) {
                ch = state.input.charCodeAt(++state.position);

                if ((tmp = fromHexCode(ch)) >= 0) {
                  hexResult = (hexResult << 4) + tmp;
                } else {
                  throwError(state, "expected hexadecimal character");
                }
              }

              state.result += charFromCodepoint(hexResult);

              state.position++;
            } else {
              throwError(state, "unknown escape sequence");
            }

            captureStart = captureEnd = state.position;
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(
              state,
              skipSeparationSpace(state, false, nodeIndent)
            );
            captureStart = captureEnd = state.position;
          } else if (
            state.position === state.lineStart &&
            testDocumentSeparator(state)
          ) {
            throwError(
              state,
              "unexpected end of the document within a double quoted scalar"
            );
          } else {
            state.position++;
            captureEnd = state.position;
          }
        }

        throwError(
          state,
          "unexpected end of the stream within a double quoted scalar"
        );
      }

      function readFlowCollection(state, nodeIndent) {
        var readNext = true,
          _line,
          _tag = state.tag,
          _result,
          _anchor = state.anchor,
          following,
          terminator,
          isPair,
          isExplicitPair,
          isMapping,
          overridableKeys = {},
          keyNode,
          keyTag,
          valueNode,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x5b /* [ */) {
          terminator = 0x5d; /* ] */
          isMapping = false;
          _result = [];
        } else if (ch === 0x7b /* { */) {
          terminator = 0x7d; /* } */
          isMapping = true;
          _result = {};
        } else {
          return false;
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(++state.position);

        while (ch !== 0) {
          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
          } else if (!readNext) {
            throwError(state, "missed comma between flow collection entries");
          }

          keyTag = keyNode = valueNode = null;
          isPair = isExplicitPair = false;

          if (ch === 0x3f /* ? */) {
            following = state.input.charCodeAt(state.position + 1);

            if (is_WS_OR_EOL(following)) {
              isPair = isExplicitPair = true;
              state.position++;
              skipSeparationSpace(state, true, nodeIndent);
            }
          }

          _line = state.line;
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          keyTag = state.tag;
          keyNode = state.result;
          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if ((isExplicitPair || state.line === _line) && ch === 0x3a /* : */) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
          }

          if (isMapping) {
            storeMappingPair(
              state,
              _result,
              overridableKeys,
              keyTag,
              keyNode,
              valueNode
            );
          } else if (isPair) {
            _result.push(
              storeMappingPair(
                state,
                null,
                overridableKeys,
                keyTag,
                keyNode,
                valueNode
              )
            );
          } else {
            _result.push(keyNode);
          }

          skipSeparationSpace(state, true, nodeIndent);

          ch = state.input.charCodeAt(state.position);

          if (ch === 0x2c /* , */) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
          } else {
            readNext = false;
          }
        }

        throwError(
          state,
          "unexpected end of the stream within a flow collection"
        );
      }

      function readBlockScalar(state, nodeIndent) {
        var captureStart,
          folding,
          chomping = CHOMPING_CLIP,
          didReadContent = false,
          detectedIndent = false,
          textIndent = nodeIndent,
          emptyLines = 0,
          atMoreIndented = false,
          tmp,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch === 0x7c /* | */) {
          folding = false;
        } else if (ch === 0x3e /* > */) {
          folding = true;
        } else {
          return false;
        }

        state.kind = "scalar";
        state.result = "";

        while (ch !== 0) {
          ch = state.input.charCodeAt(++state.position);

          if (ch === 0x2b /* + */ || ch === 0x2d /* - */) {
            if (CHOMPING_CLIP === chomping) {
              chomping = ch === 0x2b /* + */ ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
              throwError(state, "repeat of a chomping mode identifier");
            }
          } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
              throwError(
                state,
                "bad explicit indentation width of a block scalar; it cannot be less than one"
              );
            } else if (!detectedIndent) {
              textIndent = nodeIndent + tmp - 1;
              detectedIndent = true;
            } else {
              throwError(state, "repeat of an indentation width identifier");
            }
          } else {
            break;
          }
        }

        if (is_WHITE_SPACE(ch)) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (is_WHITE_SPACE(ch));

          if (ch === 0x23 /* # */) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (!is_EOL(ch) && ch !== 0);
          }
        }

        while (ch !== 0) {
          readLineBreak(state);
          state.lineIndent = 0;

          ch = state.input.charCodeAt(state.position);

          while (
            (!detectedIndent || state.lineIndent < textIndent) &&
            ch === 0x20 /* Space */
          ) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }

          if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
          }

          if (is_EOL(ch)) {
            emptyLines++;
            continue;
          }

          // End of the scalar.
          if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
              state.result += common.repeat(
                "\n",
                didReadContent ? 1 + emptyLines : emptyLines
              );
            } else if (chomping === CHOMPING_CLIP) {
              if (didReadContent) {
                // i.e. only if the scalar is not empty.
                state.result += "\n";
              }
            }

            // Break this `while` cycle and go to the funciton's epilogue.
            break;
          }

          // Folded style: use fancy rules to handle line breaks.
          if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
              atMoreIndented = true;
              // except for the first content line (cf. Example 8.1)
              state.result += common.repeat(
                "\n",
                didReadContent ? 1 + emptyLines : emptyLines
              );

              // End of more-indented block.
            } else if (atMoreIndented) {
              atMoreIndented = false;
              state.result += common.repeat("\n", emptyLines + 1);

              // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
              if (didReadContent) {
                // i.e. only if we have already read some scalar content.
                state.result += " ";
              }

              // Several line breaks - perceive as different lines.
            } else {
              state.result += common.repeat("\n", emptyLines);
            }

            // Literal style: just add exact number of line breaks between content lines.
          } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat(
              "\n",
              didReadContent ? 1 + emptyLines : emptyLines
            );
          }

          didReadContent = true;
          detectedIndent = true;
          emptyLines = 0;
          captureStart = state.position;

          while (!is_EOL(ch) && ch !== 0) {
            ch = state.input.charCodeAt(++state.position);
          }

          captureSegment(state, captureStart, state.position, false);
        }

        return true;
      }

      function readBlockSequence(state, nodeIndent) {
        var _line,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = [],
          following,
          detected = false,
          ch;

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {
          if (ch !== 0x2d /* - */) {
            break;
          }

          following = state.input.charCodeAt(state.position + 1);

          if (!is_WS_OR_EOL(following)) {
            break;
          }

          detected = true;
          state.position++;

          if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
              _result.push(null);
              ch = state.input.charCodeAt(state.position);
              continue;
            }
          }

          _line = state.line;
          composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
          _result.push(state.result);
          skipSeparationSpace(state, true, -1);

          ch = state.input.charCodeAt(state.position);

          if (
            (state.line === _line || state.lineIndent > nodeIndent) &&
            ch !== 0
          ) {
            throwError(state, "bad indentation of a sequence entry");
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }

        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = "sequence";
          state.result = _result;
          return true;
        }
        return false;
      }

      function readBlockMapping(state, nodeIndent, flowIndent) {
        var following,
          allowCompact,
          _line,
          _pos,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = {},
          overridableKeys = {},
          keyTag = null,
          keyNode = null,
          valueNode = null,
          atExplicitKey = false,
          detected = false,
          ch;

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result;
        }

        ch = state.input.charCodeAt(state.position);

        while (ch !== 0) {
          following = state.input.charCodeAt(state.position + 1);
          _line = state.line; // Save the current line.
          _pos = state.position;

          //
          // Explicit notation case. There are two separate blocks:
          // first for the key (denoted by "?") and second for the value (denoted by ":")
          //
          if (
            (ch === 0x3f /* ? */ || ch === 0x3a /*: */) &&
            is_WS_OR_EOL(following)
          ) {
            if (ch === 0x3f /* ? */) {
              if (atExplicitKey) {
                storeMappingPair(
                  state,
                  _result,
                  overridableKeys,
                  keyTag,
                  keyNode,
                  null
                );
                keyTag = keyNode = valueNode = null;
              }

              detected = true;
              atExplicitKey = true;
              allowCompact = true;
            } else if (atExplicitKey) {
              // i.e. 0x3A/* : */ === character after the explicit key.
              atExplicitKey = false;
              allowCompact = true;
            } else {
              throwError(
                state,
                "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
              );
            }

            state.position += 1;
            ch = following;

            //
            // Implicit notation case. Flow-style node as the key first, then ":", and the value.
            //
          } else if (
            composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)
          ) {
            if (state.line === _line) {
              ch = state.input.charCodeAt(state.position);

              while (is_WHITE_SPACE(ch)) {
                ch = state.input.charCodeAt(++state.position);
              }

              if (ch === 0x3a /* : */) {
                ch = state.input.charCodeAt(++state.position);

                if (!is_WS_OR_EOL(ch)) {
                  throwError(
                    state,
                    "a whitespace character is expected after the key-value separator within a block mapping"
                  );
                }

                if (atExplicitKey) {
                  storeMappingPair(
                    state,
                    _result,
                    overridableKeys,
                    keyTag,
                    keyNode,
                    null
                  );
                  keyTag = keyNode = valueNode = null;
                }

                detected = true;
                atExplicitKey = false;
                allowCompact = false;
                keyTag = state.tag;
                keyNode = state.result;
              } else if (detected) {
                throwError(
                  state,
                  "can not read an implicit mapping pair; a colon is missed"
                );
              } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; // Keep the result of `composeNode`.
              }
            } else if (detected) {
              throwError(
                state,
                "can not read a block mapping entry; a multiline key may not be an implicit key"
              );
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true; // Keep the result of `composeNode`.
            }
          } else {
            break; // Reading is done. Go to the epilogue.
          }

          //
          // Common reading code for both explicit and implicit notations.
          //
          if (state.line === _line || state.lineIndent > nodeIndent) {
            if (
              composeNode(
                state,
                nodeIndent,
                CONTEXT_BLOCK_OUT,
                true,
                allowCompact
              )
            ) {
              if (atExplicitKey) {
                keyNode = state.result;
              } else {
                valueNode = state.result;
              }
            }

            if (!atExplicitKey) {
              storeMappingPair(
                state,
                _result,
                overridableKeys,
                keyTag,
                keyNode,
                valueNode,
                _line,
                _pos
              );
              keyTag = keyNode = valueNode = null;
            }

            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
          }

          if (state.lineIndent > nodeIndent && ch !== 0) {
            throwError(state, "bad indentation of a mapping entry");
          } else if (state.lineIndent < nodeIndent) {
            break;
          }
        }

        //
        // Epilogue.
        //

        // Special case: last mapping's node contains only the key in explicit notation.
        if (atExplicitKey) {
          storeMappingPair(
            state,
            _result,
            overridableKeys,
            keyTag,
            keyNode,
            null
          );
        }

        // Expose the resulting mapping.
        if (detected) {
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = "mapping";
          state.result = _result;
        }

        return detected;
      }

      function readTagProperty(state) {
        var _position,
          isVerbatim = false,
          isNamed = false,
          tagHandle,
          tagName,
          ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x21 /* ! */) return false;

        if (state.tag !== null) {
          throwError(state, "duplication of a tag property");
        }

        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x3c /* < */) {
          isVerbatim = true;
          ch = state.input.charCodeAt(++state.position);
        } else if (ch === 0x21 /* ! */) {
          isNamed = true;
          tagHandle = "!!";
          ch = state.input.charCodeAt(++state.position);
        } else {
          tagHandle = "!";
        }

        _position = state.position;

        if (isVerbatim) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && ch !== 0x3e /* > */);

          if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
          } else {
            throwError(
              state,
              "unexpected end of the stream within a verbatim tag"
            );
          }
        } else {
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            if (ch === 0x21 /* ! */) {
              if (!isNamed) {
                tagHandle = state.input.slice(
                  _position - 1,
                  state.position + 1
                );

                if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                  throwError(
                    state,
                    "named tag handle cannot contain such characters"
                  );
                }

                isNamed = true;
                _position = state.position + 1;
              } else {
                throwError(
                  state,
                  "tag suffix cannot contain exclamation marks"
                );
              }
            }

            ch = state.input.charCodeAt(++state.position);
          }

          tagName = state.input.slice(_position, state.position);

          if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(
              state,
              "tag suffix cannot contain flow indicator characters"
            );
          }
        }

        if (tagName && !PATTERN_TAG_URI.test(tagName)) {
          throwError(
            state,
            "tag name cannot contain such characters: " + tagName
          );
        }

        if (isVerbatim) {
          state.tag = tagName;
        } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
          state.tag = state.tagMap[tagHandle] + tagName;
        } else if (tagHandle === "!") {
          state.tag = "!" + tagName;
        } else if (tagHandle === "!!") {
          state.tag = "tag:yaml.org,2002:" + tagName;
        } else {
          throwError(state, 'undeclared tag handle "' + tagHandle + '"');
        }

        return true;
      }

      function readAnchorProperty(state) {
        var _position, ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x26 /* & */) return false;

        if (state.anchor !== null) {
          throwError(state, "duplication of an anchor property");
        }

        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (state.position === _position) {
          throwError(
            state,
            "name of an anchor node must contain at least one character"
          );
        }

        state.anchor = state.input.slice(_position, state.position);
        return true;
      }

      function readAlias(state) {
        var _position, alias, ch;

        ch = state.input.charCodeAt(state.position);

        if (ch !== 0x2a /* * */) return false;

        ch = state.input.charCodeAt(++state.position);
        _position = state.position;

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (state.position === _position) {
          throwError(
            state,
            "name of an alias node must contain at least one character"
          );
        }

        alias = state.input.slice(_position, state.position);

        if (!_hasOwnProperty.call(state.anchorMap, alias)) {
          throwError(state, 'unidentified alias "' + alias + '"');
        }

        state.result = state.anchorMap[alias];
        skipSeparationSpace(state, true, -1);
        return true;
      }

      function composeNode(
        state,
        parentIndent,
        nodeContext,
        allowToSeek,
        allowCompact
      ) {
        var allowBlockStyles,
          allowBlockScalars,
          allowBlockCollections,
          indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
          atNewLine = false,
          hasContent = false,
          typeIndex,
          typeQuantity,
          type,
          flowIndent,
          blockIndent;

        if (state.listener !== null) {
          state.listener("open", state);
        }

        state.tag = null;
        state.anchor = null;
        state.kind = null;
        state.result = null;

        allowBlockStyles =
          allowBlockScalars =
          allowBlockCollections =
            CONTEXT_BLOCK_OUT === nodeContext ||
            CONTEXT_BLOCK_IN === nodeContext;

        if (allowToSeek) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;

            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          }
        }

        if (indentStatus === 1) {
          while (readTagProperty(state) || readAnchorProperty(state)) {
            if (skipSeparationSpace(state, true, -1)) {
              atNewLine = true;
              allowBlockCollections = allowBlockStyles;

              if (state.lineIndent > parentIndent) {
                indentStatus = 1;
              } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
              } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
              }
            } else {
              allowBlockCollections = false;
            }
          }
        }

        if (allowBlockCollections) {
          allowBlockCollections = atNewLine || allowCompact;
        }

        if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
          if (
            CONTEXT_FLOW_IN === nodeContext ||
            CONTEXT_FLOW_OUT === nodeContext
          ) {
            flowIndent = parentIndent;
          } else {
            flowIndent = parentIndent + 1;
          }

          blockIndent = state.position - state.lineStart;

          if (indentStatus === 1) {
            if (
              (allowBlockCollections &&
                (readBlockSequence(state, blockIndent) ||
                  readBlockMapping(state, blockIndent, flowIndent))) ||
              readFlowCollection(state, flowIndent)
            ) {
              hasContent = true;
            } else {
              if (
                (allowBlockScalars && readBlockScalar(state, flowIndent)) ||
                readSingleQuotedScalar(state, flowIndent) ||
                readDoubleQuotedScalar(state, flowIndent)
              ) {
                hasContent = true;
              } else if (readAlias(state)) {
                hasContent = true;

                if (state.tag !== null || state.anchor !== null) {
                  throwError(
                    state,
                    "alias node should not have any properties"
                  );
                }
              } else if (
                readPlainScalar(
                  state,
                  flowIndent,
                  CONTEXT_FLOW_IN === nodeContext
                )
              ) {
                hasContent = true;

                if (state.tag === null) {
                  state.tag = "?";
                }
              }

              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
            }
          } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent =
              allowBlockCollections && readBlockSequence(state, blockIndent);
          }
        }

        if (state.tag !== null && state.tag !== "!") {
          if (state.tag === "?") {
            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only automatically assigned to plain scalars.
            //
            // We only need to check kind conformity in case user explicitly assigns '?'
            // tag, for example like this: "!<?> [0]"
            //
            if (state.result !== null && state.kind !== "scalar") {
              throwError(
                state,
                'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
                  state.kind +
                  '"'
              );
            }

            for (
              typeIndex = 0, typeQuantity = state.implicitTypes.length;
              typeIndex < typeQuantity;
              typeIndex += 1
            ) {
              type = state.implicitTypes[typeIndex];

              if (type.resolve(state.result)) {
                // `state.result` updated in resolver if matched
                state.result = type.construct(state.result);
                state.tag = type.tag;
                if (state.anchor !== null) {
                  state.anchorMap[state.anchor] = state.result;
                }
                break;
              }
            }
          } else if (
            _hasOwnProperty.call(
              state.typeMap[state.kind || "fallback"],
              state.tag
            )
          ) {
            type = state.typeMap[state.kind || "fallback"][state.tag];

            if (state.result !== null && type.kind !== state.kind) {
              throwError(
                state,
                "unacceptable node kind for !<" +
                  state.tag +
                  '> tag; it should be "' +
                  type.kind +
                  '", not "' +
                  state.kind +
                  '"'
              );
            }

            if (!type.resolve(state.result)) {
              // `state.result` updated in resolver if matched
              throwError(
                state,
                "cannot resolve a node with !<" + state.tag + "> explicit tag"
              );
            } else {
              state.result = type.construct(state.result);
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
            }
          } else {
            throwError(state, "unknown tag !<" + state.tag + ">");
          }
        }

        if (state.listener !== null) {
          state.listener("close", state);
        }
        return state.tag !== null || state.anchor !== null || hasContent;
      }

      function readDocument(state) {
        var documentStart = state.position,
          _position,
          directiveName,
          directiveArgs,
          hasDirectives = false,
          ch;

        state.version = null;
        state.checkLineBreaks = state.legacy;
        state.tagMap = {};
        state.anchorMap = {};

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          skipSeparationSpace(state, true, -1);

          ch = state.input.charCodeAt(state.position);

          if (state.lineIndent > 0 || ch !== 0x25 /* % */) {
            break;
          }

          hasDirectives = true;
          ch = state.input.charCodeAt(++state.position);
          _position = state.position;

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }

          directiveName = state.input.slice(_position, state.position);
          directiveArgs = [];

          if (directiveName.length < 1) {
            throwError(
              state,
              "directive name must not be less than one character in length"
            );
          }

          while (ch !== 0) {
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            if (ch === 0x23 /* # */) {
              do {
                ch = state.input.charCodeAt(++state.position);
              } while (ch !== 0 && !is_EOL(ch));
              break;
            }

            if (is_EOL(ch)) break;

            _position = state.position;

            while (ch !== 0 && !is_WS_OR_EOL(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }

            directiveArgs.push(state.input.slice(_position, state.position));
          }

          if (ch !== 0) readLineBreak(state);

          if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](
              state,
              directiveName,
              directiveArgs
            );
          } else {
            throwWarning(
              state,
              'unknown document directive "' + directiveName + '"'
            );
          }
        }

        skipSeparationSpace(state, true, -1);

        if (
          state.lineIndent === 0 &&
          state.input.charCodeAt(state.position) === 0x2d /* - */ &&
          state.input.charCodeAt(state.position + 1) === 0x2d /* - */ &&
          state.input.charCodeAt(state.position + 2) === 0x2d /* - */
        ) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        } else if (hasDirectives) {
          throwError(state, "directives end mark is expected");
        }

        composeNode(
          state,
          state.lineIndent - 1,
          CONTEXT_BLOCK_OUT,
          false,
          true
        );
        skipSeparationSpace(state, true, -1);

        if (
          state.checkLineBreaks &&
          PATTERN_NON_ASCII_LINE_BREAKS.test(
            state.input.slice(documentStart, state.position)
          )
        ) {
          throwWarning(
            state,
            "non-ASCII line breaks are interpreted as content"
          );
        }

        state.documents.push(state.result);

        if (
          state.position === state.lineStart &&
          testDocumentSeparator(state)
        ) {
          if (state.input.charCodeAt(state.position) === 0x2e /* . */) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
          }
          return;
        }

        if (state.position < state.length - 1) {
          throwError(
            state,
            "end of the stream or a document separator is expected"
          );
        } else {
          return;
        }
      }

      function loadDocuments(input, options) {
        input = String(input);
        options = options || {};

        if (input.length !== 0) {
          // Add tailing `\n` if not exists
          if (
            input.charCodeAt(input.length - 1) !== 0x0a /* LF */ &&
            input.charCodeAt(input.length - 1) !== 0x0d /* CR */
          ) {
            input += "\n";
          }

          // Strip BOM
          if (input.charCodeAt(0) === 0xfeff) {
            input = input.slice(1);
          }
        }

        var state = new State(input, options);

        var nullpos = input.indexOf("\0");

        if (nullpos !== -1) {
          state.position = nullpos;
          throwError(state, "null byte is not allowed in input");
        }

        // Use 0 as string terminator. That significantly simplifies bounds check.
        state.input += "\0";

        while (state.input.charCodeAt(state.position) === 0x20 /* Space */) {
          state.lineIndent += 1;
          state.position += 1;
        }

        while (state.position < state.length - 1) {
          readDocument(state);
        }

        return state.documents;
      }

      function loadAll(input, iterator, options) {
        if (
          iterator !== null &&
          typeof iterator === "object" &&
          typeof options === "undefined"
        ) {
          options = iterator;
          iterator = null;
        }

        var documents = loadDocuments(input, options);

        if (typeof iterator !== "function") {
          return documents;
        }

        for (
          var index = 0, length = documents.length;
          index < length;
          index += 1
        ) {
          iterator(documents[index]);
        }
      }

      function load(input, options) {
        var documents = loadDocuments(input, options);

        if (documents.length === 0) {
          /*eslint-disable no-undefined*/
          return undefined;
        } else if (documents.length === 1) {
          return documents[0];
        }
        throw new YAMLException(
          "expected a single document in the stream, but found more"
        );
      }

      function safeLoadAll(input, iterator, options) {
        if (
          typeof iterator === "object" &&
          iterator !== null &&
          typeof options === "undefined"
        ) {
          options = iterator;
          iterator = null;
        }

        return loadAll(
          input,
          iterator,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        );
      }

      function safeLoad(input, options) {
        return load(
          input,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        );
      }

      module.exports.loadAll = loadAll;
      module.exports.load = load;
      module.exports.safeLoadAll = safeLoadAll;
      module.exports.safeLoad = safeLoad;

      /***/
    },

    /***/ 26: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
      "use strict";

      var common = __nccwpck_require__(1942);

      function Mark(name, buffer, position, line, column) {
        this.name = name;
        this.buffer = buffer;
        this.position = position;
        this.line = line;
        this.column = column;
      }

      Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
        var head, start, tail, end, snippet;

        if (!this.buffer) return null;

        indent = indent || 4;
        maxLength = maxLength || 75;

        head = "";
        start = this.position;

        while (
          start > 0 &&
          "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) ===
            -1
        ) {
          start -= 1;
          if (this.position - start > maxLength / 2 - 1) {
            head = " ... ";
            start += 5;
            break;
          }
        }

        tail = "";
        end = this.position;

        while (
          end < this.buffer.length &&
          "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1
        ) {
          end += 1;
          if (end - this.position > maxLength / 2 - 1) {
            tail = " ... ";
            end -= 5;
            break;
          }
        }

        snippet = this.buffer.slice(start, end);

        return (
          common.repeat(" ", indent) +
          head +
          snippet +
          tail +
          "\n" +
          common.repeat(" ", indent + this.position - start + head.length) +
          "^"
        );
      };

      Mark.prototype.toString = function toString(compact) {
        var snippet,
          where = "";

        if (this.name) {
          where += 'in "' + this.name + '" ';
        }

        where += "at line " + (this.line + 1) + ", column " + (this.column + 1);

        if (!compact) {
          snippet = this.getSnippet();

          if (snippet) {
            where += ":\n" + snippet;
          }
        }

        return where;
      };

      module.exports = Mark;

      /***/
    },

    /***/ 2216: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /*eslint-disable max-len*/

      var common = __nccwpck_require__(1942);
      var YAMLException = __nccwpck_require__(7537);
      var Type = __nccwpck_require__(4254);

      function compileList(schema, name, result) {
        var exclude = [];

        schema.include.forEach(function (includedSchema) {
          result = compileList(includedSchema, name, result);
        });

        schema[name].forEach(function (currentType) {
          result.forEach(function (previousType, previousIndex) {
            if (
              previousType.tag === currentType.tag &&
              previousType.kind === currentType.kind
            ) {
              exclude.push(previousIndex);
            }
          });

          result.push(currentType);
        });

        return result.filter(function (type, index) {
          return exclude.indexOf(index) === -1;
        });
      }

      function compileMap(/* lists... */) {
        var result = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {},
          },
          index,
          length;

        function collectType(type) {
          result[type.kind][type.tag] = result["fallback"][type.tag] = type;
        }

        for (index = 0, length = arguments.length; index < length; index += 1) {
          arguments[index].forEach(collectType);
        }
        return result;
      }

      function Schema(definition) {
        this.include = definition.include || [];
        this.implicit = definition.implicit || [];
        this.explicit = definition.explicit || [];

        this.implicit.forEach(function (type) {
          if (type.loadKind && type.loadKind !== "scalar") {
            throw new YAMLException(
              "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
            );
          }
        });

        this.compiledImplicit = compileList(this, "implicit", []);
        this.compiledExplicit = compileList(this, "explicit", []);
        this.compiledTypeMap = compileMap(
          this.compiledImplicit,
          this.compiledExplicit
        );
      }

      Schema.DEFAULT = null;

      Schema.create = function createSchema() {
        var schemas, types;

        switch (arguments.length) {
          case 1:
            schemas = Schema.DEFAULT;
            types = arguments[0];
            break;

          case 2:
            schemas = arguments[0];
            types = arguments[1];
            break;

          default:
            throw new YAMLException(
              "Wrong number of arguments for Schema.create function"
            );
        }

        schemas = common.toArray(schemas);
        types = common.toArray(types);

        if (
          !schemas.every(function (schema) {
            return schema instanceof Schema;
          })
        ) {
          throw new YAMLException(
            "Specified list of super schemas (or a single Schema object) contains a non-Schema object."
          );
        }

        if (
          !types.every(function (type) {
            return type instanceof Type;
          })
        ) {
          throw new YAMLException(
            "Specified list of YAML types (or a single Type object) contains a non-Type object."
          );
        }

        return new Schema({
          include: schemas,
          explicit: types,
        });
      };

      module.exports = Schema;

      /***/
    },

    /***/ 1071: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Standard YAML's Core schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2804923
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, Core schema has no distinctions from JSON schema is JS-YAML.

      var Schema = __nccwpck_require__(2216);

      module.exports = new Schema({
        include: [__nccwpck_require__(225)],
      });

      /***/
    },

    /***/ 1056: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // JS-YAML's default schema for `load` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on JS-YAML's default safe schema and includes
      // JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
      //
      // Also this schema is used as default base schema at `Schema.create` function.

      var Schema = __nccwpck_require__(2216);

      module.exports = Schema.DEFAULT = new Schema({
        include: [__nccwpck_require__(2436)],
        explicit: [
          __nccwpck_require__(5977),
          __nccwpck_require__(9550),
          __nccwpck_require__(8779),
        ],
      });

      /***/
    },

    /***/ 2436: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // JS-YAML's default schema for `safeLoad` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on standard YAML's Core schema and includes most of
      // extra types described at YAML tag repository. (http://yaml.org/type/)

      var Schema = __nccwpck_require__(2216);

      module.exports = new Schema({
        include: [__nccwpck_require__(1071)],
        implicit: [__nccwpck_require__(8764), __nccwpck_require__(5813)],
        explicit: [
          __nccwpck_require__(808),
          __nccwpck_require__(4637),
          __nccwpck_require__(7802),
          __nccwpck_require__(2586),
        ],
      });

      /***/
    },

    /***/ 528: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Standard YAML's Failsafe schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2802346

      var Schema = __nccwpck_require__(2216);

      module.exports = new Schema({
        explicit: [
          __nccwpck_require__(5953),
          __nccwpck_require__(9446),
          __nccwpck_require__(4592),
        ],
      });

      /***/
    },

    /***/ 225: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Standard YAML's JSON schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2803231
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, this schema is not such strict as defined in the YAML specification.
      // It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.

      var Schema = __nccwpck_require__(2216);

      module.exports = new Schema({
        include: [__nccwpck_require__(528)],
        implicit: [
          __nccwpck_require__(2228),
          __nccwpck_require__(7138),
          __nccwpck_require__(2753),
          __nccwpck_require__(2865),
        ],
      });

      /***/
    },

    /***/ 4254: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var YAMLException = __nccwpck_require__(7537);

      var TYPE_CONSTRUCTOR_OPTIONS = [
        "kind",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "defaultStyle",
        "styleAliases",
      ];

      var YAML_NODE_KINDS = ["scalar", "sequence", "mapping"];

      function compileStyleAliases(map) {
        var result = {};

        if (map !== null) {
          Object.keys(map).forEach(function (style) {
            map[style].forEach(function (alias) {
              result[String(alias)] = style;
            });
          });
        }

        return result;
      }

      function Type(tag, options) {
        options = options || {};

        Object.keys(options).forEach(function (name) {
          if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException(
              'Unknown option "' +
                name +
                '" is met in definition of "' +
                tag +
                '" YAML type.'
            );
          }
        });

        // TODO: Add tag format check.
        this.tag = tag;
        this.kind = options["kind"] || null;
        this.resolve =
          options["resolve"] ||
          function () {
            return true;
          };
        this.construct =
          options["construct"] ||
          function (data) {
            return data;
          };
        this.instanceOf = options["instanceOf"] || null;
        this.predicate = options["predicate"] || null;
        this.represent = options["represent"] || null;
        this.defaultStyle = options["defaultStyle"] || null;
        this.styleAliases = compileStyleAliases(
          options["styleAliases"] || null
        );

        if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
          throw new YAMLException(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              tag +
              '" YAML type.'
          );
        }
      }

      module.exports = Type;

      /***/
    },

    /***/ 808: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /*eslint-disable no-bitwise*/

      var NodeBuffer;

      try {
        // A trick for browserified version, to not include `Buffer` shim
        var _require = require;
        NodeBuffer = _require("buffer").Buffer;
      } catch (__) {}

      var Type = __nccwpck_require__(4254);

      // [ 64, 65, 66 ] -> [ padding, CR, LF ]
      var BASE64_MAP =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";

      function resolveYamlBinary(data) {
        if (data === null) return false;

        var code,
          idx,
          bitlen = 0,
          max = data.length,
          map = BASE64_MAP;

        // Convert one by one.
        for (idx = 0; idx < max; idx++) {
          code = map.indexOf(data.charAt(idx));

          // Skip CR/LF
          if (code > 64) continue;

          // Fail on illegal characters
          if (code < 0) return false;

          bitlen += 6;
        }

        // If there are any bits left, source was corrupted
        return bitlen % 8 === 0;
      }

      function constructYamlBinary(data) {
        var idx,
          tailbits,
          input = data.replace(/[\r\n=]/g, ""), // remove CR/LF & padding to simplify scan
          max = input.length,
          map = BASE64_MAP,
          bits = 0,
          result = [];

        // Collect by 6*4 bits (3 bytes)

        for (idx = 0; idx < max; idx++) {
          if (idx % 4 === 0 && idx) {
            result.push((bits >> 16) & 0xff);
            result.push((bits >> 8) & 0xff);
            result.push(bits & 0xff);
          }

          bits = (bits << 6) | map.indexOf(input.charAt(idx));
        }

        // Dump tail

        tailbits = (max % 4) * 6;

        if (tailbits === 0) {
          result.push((bits >> 16) & 0xff);
          result.push((bits >> 8) & 0xff);
          result.push(bits & 0xff);
        } else if (tailbits === 18) {
          result.push((bits >> 10) & 0xff);
          result.push((bits >> 2) & 0xff);
        } else if (tailbits === 12) {
          result.push((bits >> 4) & 0xff);
        }

        // Wrap into Buffer for NodeJS and leave Array for browser
        if (NodeBuffer) {
          // Support node 6.+ Buffer API when available
          return NodeBuffer.from
            ? NodeBuffer.from(result)
            : new NodeBuffer(result);
        }

        return result;
      }

      function representYamlBinary(object /*, style*/) {
        var result = "",
          bits = 0,
          idx,
          tail,
          max = object.length,
          map = BASE64_MAP;

        // Convert every three bytes to 4 ASCII characters.

        for (idx = 0; idx < max; idx++) {
          if (idx % 3 === 0 && idx) {
            result += map[(bits >> 18) & 0x3f];
            result += map[(bits >> 12) & 0x3f];
            result += map[(bits >> 6) & 0x3f];
            result += map[bits & 0x3f];
          }

          bits = (bits << 8) + object[idx];
        }

        // Dump tail

        tail = max % 3;

        if (tail === 0) {
          result += map[(bits >> 18) & 0x3f];
          result += map[(bits >> 12) & 0x3f];
          result += map[(bits >> 6) & 0x3f];
          result += map[bits & 0x3f];
        } else if (tail === 2) {
          result += map[(bits >> 10) & 0x3f];
          result += map[(bits >> 4) & 0x3f];
          result += map[(bits << 2) & 0x3f];
          result += map[64];
        } else if (tail === 1) {
          result += map[(bits >> 2) & 0x3f];
          result += map[(bits << 4) & 0x3f];
          result += map[64];
          result += map[64];
        }

        return result;
      }

      function isBinary(object) {
        return NodeBuffer && NodeBuffer.isBuffer(object);
      }

      module.exports = new Type("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary,
      });

      /***/
    },

    /***/ 7138: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      function resolveYamlBoolean(data) {
        if (data === null) return false;

        var max = data.length;

        return (
          (max === 4 &&
            (data === "true" || data === "True" || data === "TRUE")) ||
          (max === 5 &&
            (data === "false" || data === "False" || data === "FALSE"))
        );
      }

      function constructYamlBoolean(data) {
        return data === "true" || data === "True" || data === "TRUE";
      }

      function isBoolean(object) {
        return Object.prototype.toString.call(object) === "[object Boolean]";
      }

      module.exports = new Type("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
          lowercase: function (object) {
            return object ? "true" : "false";
          },
          uppercase: function (object) {
            return object ? "TRUE" : "FALSE";
          },
          camelcase: function (object) {
            return object ? "True" : "False";
          },
        },
        defaultStyle: "lowercase",
      });

      /***/
    },

    /***/ 2865: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var common = __nccwpck_require__(1942);
      var Type = __nccwpck_require__(4254);

      var YAML_FLOAT_PATTERN = new RegExp(
        // 2.5e4, 2.5 and integers
        "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" +
          // .2e4, .2
          // special case, seems not from spec
          "|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" +
          // 20:59
          "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" +
          // .inf
          "|[-+]?\\.(?:inf|Inf|INF)" +
          // .nan
          "|\\.(?:nan|NaN|NAN))$"
      );

      function resolveYamlFloat(data) {
        if (data === null) return false;

        if (
          !YAML_FLOAT_PATTERN.test(data) ||
          // Quick hack to not allow integers end with `_`
          // Probably should update regexp & check speed
          data[data.length - 1] === "_"
        ) {
          return false;
        }

        return true;
      }

      function constructYamlFloat(data) {
        var value, sign, base, digits;

        value = data.replace(/_/g, "").toLowerCase();
        sign = value[0] === "-" ? -1 : 1;
        digits = [];

        if ("+-".indexOf(value[0]) >= 0) {
          value = value.slice(1);
        }

        if (value === ".inf") {
          return sign === 1
            ? Number.POSITIVE_INFINITY
            : Number.NEGATIVE_INFINITY;
        } else if (value === ".nan") {
          return NaN;
        } else if (value.indexOf(":") >= 0) {
          value.split(":").forEach(function (v) {
            digits.unshift(parseFloat(v, 10));
          });

          value = 0.0;
          base = 1;

          digits.forEach(function (d) {
            value += d * base;
            base *= 60;
          });

          return sign * value;
        }
        return sign * parseFloat(value, 10);
      }

      var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

      function representYamlFloat(object, style) {
        var res;

        if (isNaN(object)) {
          switch (style) {
            case "lowercase":
              return ".nan";
            case "uppercase":
              return ".NAN";
            case "camelcase":
              return ".NaN";
          }
        } else if (Number.POSITIVE_INFINITY === object) {
          switch (style) {
            case "lowercase":
              return ".inf";
            case "uppercase":
              return ".INF";
            case "camelcase":
              return ".Inf";
          }
        } else if (Number.NEGATIVE_INFINITY === object) {
          switch (style) {
            case "lowercase":
              return "-.inf";
            case "uppercase":
              return "-.INF";
            case "camelcase":
              return "-.Inf";
          }
        } else if (common.isNegativeZero(object)) {
          return "-0.0";
        }

        res = object.toString(10);

        // JS stringifier can build scientific format without dots: 5e-100,
        // while YAML requres dot: 5.e-100. Fix it with simple hack

        return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
      }

      function isFloat(object) {
        return (
          Object.prototype.toString.call(object) === "[object Number]" &&
          (object % 1 !== 0 || common.isNegativeZero(object))
        );
      }

      module.exports = new Type("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: "lowercase",
      });

      /***/
    },

    /***/ 2753: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var common = __nccwpck_require__(1942);
      var Type = __nccwpck_require__(4254);

      function isHexCode(c) {
        return (
          (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) ||
          (0x41 /* A */ <= c && c <= 0x46 /* F */) ||
          (0x61 /* a */ <= c && c <= 0x66 /* f */)
        );
      }

      function isOctCode(c) {
        return 0x30 /* 0 */ <= c && c <= 0x37 /* 7 */;
      }

      function isDecCode(c) {
        return 0x30 /* 0 */ <= c && c <= 0x39 /* 9 */;
      }

      function resolveYamlInteger(data) {
        if (data === null) return false;

        var max = data.length,
          index = 0,
          hasDigits = false,
          ch;

        if (!max) return false;

        ch = data[index];

        // sign
        if (ch === "-" || ch === "+") {
          ch = data[++index];
        }

        if (ch === "0") {
          // 0
          if (index + 1 === max) return true;
          ch = data[++index];

          // base 2, base 8, base 16

          if (ch === "b") {
            // base 2
            index++;

            for (; index < max; index++) {
              ch = data[index];
              if (ch === "_") continue;
              if (ch !== "0" && ch !== "1") return false;
              hasDigits = true;
            }
            return hasDigits && ch !== "_";
          }

          if (ch === "x") {
            // base 16
            index++;

            for (; index < max; index++) {
              ch = data[index];
              if (ch === "_") continue;
              if (!isHexCode(data.charCodeAt(index))) return false;
              hasDigits = true;
            }
            return hasDigits && ch !== "_";
          }

          // base 8
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_") continue;
            if (!isOctCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }

        // base 10 (except 0) or base 60

        // value should not start with `_`;
        if (ch === "_") return false;

        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_") continue;
          if (ch === ":") break;
          if (!isDecCode(data.charCodeAt(index))) {
            return false;
          }
          hasDigits = true;
        }

        // Should have digits and should not end with `_`
        if (!hasDigits || ch === "_") return false;

        // if !base60 - done;
        if (ch !== ":") return true;

        // base60 almost not used, no needs to optimize
        return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
      }

      function constructYamlInteger(data) {
        var value = data,
          sign = 1,
          ch,
          base,
          digits = [];

        if (value.indexOf("_") !== -1) {
          value = value.replace(/_/g, "");
        }

        ch = value[0];

        if (ch === "-" || ch === "+") {
          if (ch === "-") sign = -1;
          value = value.slice(1);
          ch = value[0];
        }

        if (value === "0") return 0;

        if (ch === "0") {
          if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
          if (value[1] === "x") return sign * parseInt(value, 16);
          return sign * parseInt(value, 8);
        }

        if (value.indexOf(":") !== -1) {
          value.split(":").forEach(function (v) {
            digits.unshift(parseInt(v, 10));
          });

          value = 0;
          base = 1;

          digits.forEach(function (d) {
            value += d * base;
            base *= 60;
          });

          return sign * value;
        }

        return sign * parseInt(value, 10);
      }

      function isInteger(object) {
        return (
          Object.prototype.toString.call(object) === "[object Number]" &&
          object % 1 === 0 &&
          !common.isNegativeZero(object)
        );
      }

      module.exports = new Type("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
          binary: function (obj) {
            return obj >= 0
              ? "0b" + obj.toString(2)
              : "-0b" + obj.toString(2).slice(1);
          },
          octal: function (obj) {
            return obj >= 0
              ? "0" + obj.toString(8)
              : "-0" + obj.toString(8).slice(1);
          },
          decimal: function (obj) {
            return obj.toString(10);
          },
          /* eslint-disable max-len */
          hexadecimal: function (obj) {
            return obj >= 0
              ? "0x" + obj.toString(16).toUpperCase()
              : "-0x" + obj.toString(16).toUpperCase().slice(1);
          },
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"],
        },
      });

      /***/
    },

    /***/ 8779: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var esprima;

      // Browserified version does not have esprima
      //
      // 1. For node.js just require module as deps
      // 2. For browser try to require mudule via external AMD system.
      //    If not found - try to fallback to window.esprima. If not
      //    found too - then fail to parse.
      //
      try {
        // workaround to exclude package from browserify list.
        var _require = require;
        esprima = _require("esprima");
      } catch (_) {
        /* eslint-disable no-redeclare */
        /* global window */
        if (typeof window !== "undefined") esprima = window.esprima;
      }

      var Type = __nccwpck_require__(4254);

      function resolveJavascriptFunction(data) {
        if (data === null) return false;

        try {
          var source = "(" + data + ")",
            ast = esprima.parse(source, { range: true });

          if (
            ast.type !== "Program" ||
            ast.body.length !== 1 ||
            ast.body[0].type !== "ExpressionStatement" ||
            (ast.body[0].expression.type !== "ArrowFunctionExpression" &&
              ast.body[0].expression.type !== "FunctionExpression")
          ) {
            return false;
          }

          return true;
        } catch (err) {
          return false;
        }
      }

      function constructJavascriptFunction(data) {
        /*jslint evil:true*/

        var source = "(" + data + ")",
          ast = esprima.parse(source, { range: true }),
          params = [],
          body;

        if (
          ast.type !== "Program" ||
          ast.body.length !== 1 ||
          ast.body[0].type !== "ExpressionStatement" ||
          (ast.body[0].expression.type !== "ArrowFunctionExpression" &&
            ast.body[0].expression.type !== "FunctionExpression")
        ) {
          throw new Error("Failed to resolve function");
        }

        ast.body[0].expression.params.forEach(function (param) {
          params.push(param.name);
        });

        body = ast.body[0].expression.body.range;

        // Esprima's ranges include the first '{' and the last '}' characters on
        // function expressions. So cut them out.
        if (ast.body[0].expression.body.type === "BlockStatement") {
          /*eslint-disable no-new-func*/
          return new Function(params, source.slice(body[0] + 1, body[1] - 1));
        }
        // ES6 arrow functions can omit the BlockStatement. In that case, just return
        // the body.
        /*eslint-disable no-new-func*/
        return new Function(params, "return " + source.slice(body[0], body[1]));
      }

      function representJavascriptFunction(object /*, style*/) {
        return object.toString();
      }

      function isFunction(object) {
        return Object.prototype.toString.call(object) === "[object Function]";
      }

      module.exports = new Type("tag:yaml.org,2002:js/function", {
        kind: "scalar",
        resolve: resolveJavascriptFunction,
        construct: constructJavascriptFunction,
        predicate: isFunction,
        represent: representJavascriptFunction,
      });

      /***/
    },

    /***/ 9550: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      function resolveJavascriptRegExp(data) {
        if (data === null) return false;
        if (data.length === 0) return false;

        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = "";

        // if regexp starts with '/' it can have modifiers and must be properly closed
        // `/foo/gim` - modifiers tail can be maximum 3 chars
        if (regexp[0] === "/") {
          if (tail) modifiers = tail[1];

          if (modifiers.length > 3) return false;
          // if expression starts with /, is should be properly terminated
          if (regexp[regexp.length - modifiers.length - 1] !== "/")
            return false;
        }

        return true;
      }

      function constructJavascriptRegExp(data) {
        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = "";

        // `/foo/gim` - tail can be maximum 4 chars
        if (regexp[0] === "/") {
          if (tail) modifiers = tail[1];
          regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
        }

        return new RegExp(regexp, modifiers);
      }

      function representJavascriptRegExp(object /*, style*/) {
        var result = "/" + object.source + "/";

        if (object.global) result += "g";
        if (object.multiline) result += "m";
        if (object.ignoreCase) result += "i";

        return result;
      }

      function isRegExp(object) {
        return Object.prototype.toString.call(object) === "[object RegExp]";
      }

      module.exports = new Type("tag:yaml.org,2002:js/regexp", {
        kind: "scalar",
        resolve: resolveJavascriptRegExp,
        construct: constructJavascriptRegExp,
        predicate: isRegExp,
        represent: representJavascriptRegExp,
      });

      /***/
    },

    /***/ 5977: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      function resolveJavascriptUndefined() {
        return true;
      }

      function constructJavascriptUndefined() {
        /*eslint-disable no-undefined*/
        return undefined;
      }

      function representJavascriptUndefined() {
        return "";
      }

      function isUndefined(object) {
        return typeof object === "undefined";
      }

      module.exports = new Type("tag:yaml.org,2002:js/undefined", {
        kind: "scalar",
        resolve: resolveJavascriptUndefined,
        construct: constructJavascriptUndefined,
        predicate: isUndefined,
        represent: representJavascriptUndefined,
      });

      /***/
    },

    /***/ 4592: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      module.exports = new Type("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function (data) {
          return data !== null ? data : {};
        },
      });

      /***/
    },

    /***/ 5813: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      function resolveYamlMerge(data) {
        return data === "<<" || data === null;
      }

      module.exports = new Type("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: resolveYamlMerge,
      });

      /***/
    },

    /***/ 2228: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      function resolveYamlNull(data) {
        if (data === null) return true;

        var max = data.length;

        return (
          (max === 1 && data === "~") ||
          (max === 4 && (data === "null" || data === "Null" || data === "NULL"))
        );
      }

      function constructYamlNull() {
        return null;
      }

      function isNull(object) {
        return object === null;
      }

      module.exports = new Type("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
          canonical: function () {
            return "~";
          },
          lowercase: function () {
            return "null";
          },
          uppercase: function () {
            return "NULL";
          },
          camelcase: function () {
            return "Null";
          },
        },
        defaultStyle: "lowercase",
      });

      /***/
    },

    /***/ 4637: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var _toString = Object.prototype.toString;

      function resolveYamlOmap(data) {
        if (data === null) return true;

        var objectKeys = [],
          index,
          length,
          pair,
          pairKey,
          pairHasKey,
          object = data;

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];
          pairHasKey = false;

          if (_toString.call(pair) !== "[object Object]") return false;

          for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
              if (!pairHasKey) pairHasKey = true;
              else return false;
            }
          }

          if (!pairHasKey) return false;

          if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
          else return false;
        }

        return true;
      }

      function constructYamlOmap(data) {
        return data !== null ? data : [];
      }

      module.exports = new Type("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: resolveYamlOmap,
        construct: constructYamlOmap,
      });

      /***/
    },

    /***/ 7802: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      var _toString = Object.prototype.toString;

      function resolveYamlPairs(data) {
        if (data === null) return true;

        var index,
          length,
          pair,
          keys,
          result,
          object = data;

        result = new Array(object.length);

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];

          if (_toString.call(pair) !== "[object Object]") return false;

          keys = Object.keys(pair);

          if (keys.length !== 1) return false;

          result[index] = [keys[0], pair[keys[0]]];
        }

        return true;
      }

      function constructYamlPairs(data) {
        if (data === null) return [];

        var index,
          length,
          pair,
          keys,
          result,
          object = data;

        result = new Array(object.length);

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index];

          keys = Object.keys(pair);

          result[index] = [keys[0], pair[keys[0]]];
        }

        return result;
      }

      module.exports = new Type("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: resolveYamlPairs,
        construct: constructYamlPairs,
      });

      /***/
    },

    /***/ 9446: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      module.exports = new Type("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function (data) {
          return data !== null ? data : [];
        },
      });

      /***/
    },

    /***/ 2586: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      function resolveYamlSet(data) {
        if (data === null) return true;

        var key,
          object = data;

        for (key in object) {
          if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null) return false;
          }
        }

        return true;
      }

      function constructYamlSet(data) {
        return data !== null ? data : {};
      }

      module.exports = new Type("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: resolveYamlSet,
        construct: constructYamlSet,
      });

      /***/
    },

    /***/ 5953: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      module.exports = new Type("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function (data) {
          return data !== null ? data : "";
        },
      });

      /***/
    },

    /***/ 8764: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Type = __nccwpck_require__(4254);

      var YAML_DATE_REGEXP = new RegExp(
        "^([0-9][0-9][0-9][0-9])" + // [1] year
          "-([0-9][0-9])" + // [2] month
          "-([0-9][0-9])$"
      ); // [3] day

      var YAML_TIMESTAMP_REGEXP = new RegExp(
        "^([0-9][0-9][0-9][0-9])" + // [1] year
          "-([0-9][0-9]?)" + // [2] month
          "-([0-9][0-9]?)" + // [3] day
          "(?:[Tt]|[ \\t]+)" + // ...
          "([0-9][0-9]?)" + // [4] hour
          ":([0-9][0-9])" + // [5] minute
          ":([0-9][0-9])" + // [6] second
          "(?:\\.([0-9]*))?" + // [7] fraction
          "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + // [8] tz [9] tz_sign [10] tz_hour
          "(?::([0-9][0-9]))?))?$"
      ); // [11] tz_minute

      function resolveYamlTimestamp(data) {
        if (data === null) return false;
        if (YAML_DATE_REGEXP.exec(data) !== null) return true;
        if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
        return false;
      }

      function constructYamlTimestamp(data) {
        var match,
          year,
          month,
          day,
          hour,
          minute,
          second,
          fraction = 0,
          delta = null,
          tz_hour,
          tz_minute,
          date;

        match = YAML_DATE_REGEXP.exec(data);
        if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

        if (match === null) throw new Error("Date resolve error");

        // match: [1] year [2] month [3] day

        year = +match[1];
        month = +match[2] - 1; // JS month starts with 0
        day = +match[3];

        if (!match[4]) {
          // no hour
          return new Date(Date.UTC(year, month, day));
        }

        // match: [4] hour [5] minute [6] second [7] fraction

        hour = +match[4];
        minute = +match[5];
        second = +match[6];

        if (match[7]) {
          fraction = match[7].slice(0, 3);
          while (fraction.length < 3) {
            // milli-seconds
            fraction += "0";
          }
          fraction = +fraction;
        }

        // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

        if (match[9]) {
          tz_hour = +match[10];
          tz_minute = +(match[11] || 0);
          delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
          if (match[9] === "-") delta = -delta;
        }

        date = new Date(
          Date.UTC(year, month, day, hour, minute, second, fraction)
        );

        if (delta) date.setTime(date.getTime() - delta);

        return date;
      }

      function representYamlTimestamp(object /*, style*/) {
        return object.toISOString();
      }

      module.exports = new Type("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp,
      });

      /***/
    },

    /***/ 6626: /***/ (module) => {
      var toString = Object.prototype.toString;

      module.exports = function kindOf(val) {
        if (val === void 0) return "undefined";
        if (val === null) return "null";

        var type = typeof val;
        if (type === "boolean") return "boolean";
        if (type === "string") return "string";
        if (type === "number") return "number";
        if (type === "symbol") return "symbol";
        if (type === "function") {
          return isGeneratorFn(val) ? "generatorfunction" : "function";
        }

        if (isArray(val)) return "array";
        if (isBuffer(val)) return "buffer";
        if (isArguments(val)) return "arguments";
        if (isDate(val)) return "date";
        if (isError(val)) return "error";
        if (isRegexp(val)) return "regexp";

        switch (ctorName(val)) {
          case "Symbol":
            return "symbol";
          case "Promise":
            return "promise";

          // Set, Map, WeakSet, WeakMap
          case "WeakMap":
            return "weakmap";
          case "WeakSet":
            return "weakset";
          case "Map":
            return "map";
          case "Set":
            return "set";

          // 8-bit typed arrays
          case "Int8Array":
            return "int8array";
          case "Uint8Array":
            return "uint8array";
          case "Uint8ClampedArray":
            return "uint8clampedarray";

          // 16-bit typed arrays
          case "Int16Array":
            return "int16array";
          case "Uint16Array":
            return "uint16array";

          // 32-bit typed arrays
          case "Int32Array":
            return "int32array";
          case "Uint32Array":
            return "uint32array";
          case "Float32Array":
            return "float32array";
          case "Float64Array":
            return "float64array";
        }

        if (isGeneratorObj(val)) {
          return "generator";
        }

        // Non-plain objects
        type = toString.call(val);
        switch (type) {
          case "[object Object]":
            return "object";
          // iterators
          case "[object Map Iterator]":
            return "mapiterator";
          case "[object Set Iterator]":
            return "setiterator";
          case "[object String Iterator]":
            return "stringiterator";
          case "[object Array Iterator]":
            return "arrayiterator";
        }

        // other
        return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
      };

      function ctorName(val) {
        return typeof val.constructor === "function"
          ? val.constructor.name
          : null;
      }

      function isArray(val) {
        if (Array.isArray) return Array.isArray(val);
        return val instanceof Array;
      }

      function isError(val) {
        return (
          val instanceof Error ||
          (typeof val.message === "string" &&
            val.constructor &&
            typeof val.constructor.stackTraceLimit === "number")
        );
      }

      function isDate(val) {
        if (val instanceof Date) return true;
        return (
          typeof val.toDateString === "function" &&
          typeof val.getDate === "function" &&
          typeof val.setDate === "function"
        );
      }

      function isRegexp(val) {
        if (val instanceof RegExp) return true;
        return (
          typeof val.flags === "string" &&
          typeof val.ignoreCase === "boolean" &&
          typeof val.multiline === "boolean" &&
          typeof val.global === "boolean"
        );
      }

      function isGeneratorFn(name, val) {
        return ctorName(name) === "GeneratorFunction";
      }

      function isGeneratorObj(val) {
        return (
          typeof val.throw === "function" &&
          typeof val.return === "function" &&
          typeof val.next === "function"
        );
      }

      function isArguments(val) {
        try {
          if (
            typeof val.length === "number" &&
            typeof val.callee === "function"
          ) {
            return true;
          }
        } catch (err) {
          if (err.message.indexOf("callee") !== -1) {
            return true;
          }
        }
        return false;
      }

      /**
       * If you need to support Safari 5-7 (8-10 yr-old browser),
       * take a look at https://github.com/feross/is-buffer
       */

      function isBuffer(val) {
        if (val.constructor && typeof val.constructor.isBuffer === "function") {
          return val.constructor.isBuffer(val);
        }
        return false;
      }

      /***/
    },

    /***/ 588: /***/ (module, exports, __nccwpck_require__) => {
      /* module decorator */ module = __nccwpck_require__.nmd(module);
      /**
       * Lodash (Custom Build) <https://lodash.com/>
       * Build: `lodash modularize exports="npm" -o ./`
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */

      /** Used as the size to enable large array optimizations. */
      var LARGE_ARRAY_SIZE = 200;

      /** Used to stand-in for `undefined` hash values. */
      var HASH_UNDEFINED = "__lodash_hash_undefined__";

      /** Used to detect hot functions by number of calls within a span of milliseconds. */
      var HOT_COUNT = 800,
        HOT_SPAN = 16;

      /** Used as references for various `Number` constants. */
      var MAX_SAFE_INTEGER = 9007199254740991;

      /** `Object#toString` result references. */
      var argsTag = "[object Arguments]",
        arrayTag = "[object Array]",
        asyncTag = "[object AsyncFunction]",
        boolTag = "[object Boolean]",
        dateTag = "[object Date]",
        errorTag = "[object Error]",
        funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]",
        mapTag = "[object Map]",
        numberTag = "[object Number]",
        nullTag = "[object Null]",
        objectTag = "[object Object]",
        proxyTag = "[object Proxy]",
        regexpTag = "[object RegExp]",
        setTag = "[object Set]",
        stringTag = "[object String]",
        undefinedTag = "[object Undefined]",
        weakMapTag = "[object WeakMap]";

      var arrayBufferTag = "[object ArrayBuffer]",
        dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]",
        float64Tag = "[object Float64Array]",
        int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]",
        int32Tag = "[object Int32Array]",
        uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]",
        uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]";

      /**
       * Used to match `RegExp`
       * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
       */
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

      /** Used to detect host constructors (Safari). */
      var reIsHostCtor = /^\[object .+?Constructor\]$/;

      /** Used to detect unsigned integer values. */
      var reIsUint = /^(?:0|[1-9]\d*)$/;

      /** Used to identify `toStringTag` values of typed arrays. */
      var typedArrayTags = {};
      typedArrayTags[float32Tag] =
        typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] =
        typedArrayTags[int16Tag] =
        typedArrayTags[int32Tag] =
        typedArrayTags[uint8Tag] =
        typedArrayTags[uint8ClampedTag] =
        typedArrayTags[uint16Tag] =
        typedArrayTags[uint32Tag] =
          true;
      typedArrayTags[argsTag] =
        typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] =
        typedArrayTags[boolTag] =
        typedArrayTags[dataViewTag] =
        typedArrayTags[dateTag] =
        typedArrayTags[errorTag] =
        typedArrayTags[funcTag] =
        typedArrayTags[mapTag] =
        typedArrayTags[numberTag] =
        typedArrayTags[objectTag] =
        typedArrayTags[regexpTag] =
        typedArrayTags[setTag] =
        typedArrayTags[stringTag] =
        typedArrayTags[weakMapTag] =
          false;

      /** Detect free variable `global` from Node.js. */
      var freeGlobal =
        typeof global == "object" &&
        global &&
        global.Object === Object &&
        global;

      /** Detect free variable `self`. */
      var freeSelf =
        typeof self == "object" && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      var root = freeGlobal || freeSelf || Function("return this")();

      /** Detect free variable `exports`. */
      var freeExports = true && exports && !exports.nodeType && exports;

      /** Detect free variable `module`. */
      var freeModule =
        freeExports &&
        "object" == "object" &&
        module &&
        !module.nodeType &&
        module;

      /** Detect the popular CommonJS extension `module.exports`. */
      var moduleExports = freeModule && freeModule.exports === freeExports;

      /** Detect free variable `process` from Node.js. */
      var freeProcess = moduleExports && freeGlobal.process;

      /** Used to access faster Node.js helpers. */
      var nodeUtil = (function () {
        try {
          // Use `util.types` for Node.js 10+.
          var types =
            freeModule &&
            freeModule.require &&
            freeModule.require("util").types;

          if (types) {
            return types;
          }

          // Legacy `process.binding('util')` for Node.js < 10.
          return (
            freeProcess && freeProcess.binding && freeProcess.binding("util")
          );
        } catch (e) {}
      })();

      /* Node.js helper references. */
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

      /**
       * A faster alternative to `Function#apply`, this function invokes `func`
       * with the `this` binding of `thisArg` and the arguments of `args`.
       *
       * @private
       * @param {Function} func The function to invoke.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} args The arguments to invoke `func` with.
       * @returns {*} Returns the result of `func`.
       */
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }

      /**
       * The base implementation of `_.times` without support for iteratee shorthands
       * or max array length checks.
       *
       * @private
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       */
      function baseTimes(n, iteratee) {
        var index = -1,
          result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }

      /**
       * The base implementation of `_.unary` without support for storing metadata.
       *
       * @private
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       */
      function baseUnary(func) {
        return function (value) {
          return func(value);
        };
      }

      /**
       * Gets the value at `key` of `object`.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function getValue(object, key) {
        return object == null ? undefined : object[key];
      }

      /**
       * Creates a unary function that invokes `func` with its argument transformed.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {Function} transform The argument transform.
       * @returns {Function} Returns the new function.
       */
      function overArg(func, transform) {
        return function (arg) {
          return func(transform(arg));
        };
      }

      /** Used for built-in method references. */
      var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

      /** Used to detect overreaching core-js shims. */
      var coreJsData = root["__core-js_shared__"];

      /** Used to resolve the decompiled source of functions. */
      var funcToString = funcProto.toString;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /** Used to detect methods masquerading as native. */
      var maskSrcKey = (function () {
        var uid = /[^.]+$/.exec(
          (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
        );
        return uid ? "Symbol(src)_1." + uid : "";
      })();

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /** Used to infer the `Object` constructor. */
      var objectCtorString = funcToString.call(Object);

      /** Used to detect if a method is native. */
      var reIsNative = RegExp(
        "^" +
          funcToString
            .call(hasOwnProperty)
            .replace(reRegExpChar, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );

      /** Built-in value references. */
      var Buffer = moduleExports ? root.Buffer : undefined,
        Symbol = root.Symbol,
        Uint8Array = root.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      var defineProperty = (function () {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {}
      })();

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeMax = Math.max,
        nativeNow = Date.now;

      /* Built-in method references that are verified to be native. */
      var Map = getNative(root, "Map"),
        nativeCreate = getNative(Object, "create");

      /**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} proto The object to inherit from.
       * @returns {Object} Returns the new object.
       */
      var baseCreate = (function () {
        function object() {}
        return function (proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = undefined;
          return result;
        };
      })();

      /**
       * Creates a hash object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function Hash(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      /**
       * Removes all key-value entries from the hash.
       *
       * @private
       * @name clear
       * @memberOf Hash
       */
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }

      /**
       * Removes `key` and its value from the hash.
       *
       * @private
       * @name delete
       * @memberOf Hash
       * @param {Object} hash The hash to modify.
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }

      /**
       * Gets the hash value for `key`.
       *
       * @private
       * @name get
       * @memberOf Hash
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
      }

      /**
       * Checks if a hash value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Hash
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate
          ? data[key] !== undefined
          : hasOwnProperty.call(data, key);
      }

      /**
       * Sets the hash `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Hash
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the hash instance.
       */
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] =
          nativeCreate && value === undefined ? HASH_UNDEFINED : value;
        return this;
      }

      // Add methods to `Hash`.
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;

      /**
       * Creates an list cache object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function ListCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      /**
       * Removes all key-value entries from the list cache.
       *
       * @private
       * @name clear
       * @memberOf ListCache
       */
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }

      /**
       * Removes `key` and its value from the list cache.
       *
       * @private
       * @name delete
       * @memberOf ListCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function listCacheDelete(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }

      /**
       * Gets the list cache value for `key`.
       *
       * @private
       * @name get
       * @memberOf ListCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function listCacheGet(key) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        return index < 0 ? undefined : data[index][1];
      }

      /**
       * Checks if a list cache value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf ListCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }

      /**
       * Sets the list cache `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf ListCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the list cache instance.
       */
      function listCacheSet(key, value) {
        var data = this.__data__,
          index = assocIndexOf(data, key);

        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }

      // Add methods to `ListCache`.
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;

      /**
       * Creates a map cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function MapCache(entries) {
        var index = -1,
          length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }

      /**
       * Removes all key-value entries from the map.
       *
       * @private
       * @name clear
       * @memberOf MapCache
       */
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash(),
          map: new (Map || ListCache)(),
          string: new Hash(),
        };
      }

      /**
       * Removes `key` and its value from the map.
       *
       * @private
       * @name delete
       * @memberOf MapCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }

      /**
       * Gets the map value for `key`.
       *
       * @private
       * @name get
       * @memberOf MapCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }

      /**
       * Checks if a map value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf MapCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }

      /**
       * Sets the map `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf MapCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the map cache instance.
       */
      function mapCacheSet(key, value) {
        var data = getMapData(this, key),
          size = data.size;

        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }

      // Add methods to `MapCache`.
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;

      /**
       * Creates a stack cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */
      function Stack(entries) {
        var data = (this.__data__ = new ListCache(entries));
        this.size = data.size;
      }

      /**
       * Removes all key-value entries from the stack.
       *
       * @private
       * @name clear
       * @memberOf Stack
       */
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }

      /**
       * Removes `key` and its value from the stack.
       *
       * @private
       * @name delete
       * @memberOf Stack
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */
      function stackDelete(key) {
        var data = this.__data__,
          result = data["delete"](key);

        this.size = data.size;
        return result;
      }

      /**
       * Gets the stack value for `key`.
       *
       * @private
       * @name get
       * @memberOf Stack
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */
      function stackGet(key) {
        return this.__data__.get(key);
      }

      /**
       * Checks if a stack value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Stack
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */
      function stackHas(key) {
        return this.__data__.has(key);
      }

      /**
       * Sets the stack `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Stack
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the stack cache instance.
       */
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }

      // Add methods to `Stack`.
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;

      /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

        for (var key in value) {
          if (
            (inherited || hasOwnProperty.call(value, key)) &&
            !(
              skipIndexes &&
              // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" ||
                // Node.js 0.10 has enumerable non-index properties on buffers.
                (isBuff && (key == "offset" || key == "parent")) ||
                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                (isType &&
                  (key == "buffer" ||
                    key == "byteLength" ||
                    key == "byteOffset")) ||
                // Skip index properties.
                isIndex(key, length))
            )
          ) {
            result.push(key);
          }
        }
        return result;
      }

      /**
       * This function is like `assignValue` except that it doesn't assign
       * `undefined` values.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */
      function assignMergeValue(object, key, value) {
        if (
          (value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))
        ) {
          baseAssignValue(object, key, value);
        }
      }

      /**
       * Assigns `value` to `key` of `object` if the existing value is not equivalent
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (
          !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))
        ) {
          baseAssignValue(object, key, value);
        }
      }

      /**
       * Gets the index at which the `key` is found in `array` of key-value pairs.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} key The key to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }

      /**
       * The base implementation of `assignValue` and `assignMergeValue` without
       * value checks.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true,
          });
        } else {
          object[key] = value;
        }
      }

      /**
       * The base implementation of `baseForOwn` which iterates over `object`
       * properties returned by `keysFunc` and invokes `iteratee` for each property.
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */
      var baseFor = createBaseFor();

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value)
          ? getRawTag(value)
          : objectToString(value);
      }

      /**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      /**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }

      /**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */
      function baseIsTypedArray(value) {
        return (
          isObjectLike(value) &&
          isLength(value.length) &&
          !!typedArrayTags[baseGetTag(value)]
        );
      }

      /**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object),
          result = [];

        for (var key in object) {
          if (
            !(
              key == "constructor" &&
              (isProto || !hasOwnProperty.call(object, key))
            )
          ) {
            result.push(key);
          }
        }
        return result;
      }

      /**
       * The base implementation of `_.merge` without support for multiple sources.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} [customizer] The function to customize merged values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(
          source,
          function (srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(
                object,
                source,
                key,
                srcIndex,
                baseMerge,
                customizer,
                stack
              );
            } else {
              var newValue = customizer
                ? customizer(
                    safeGet(object, key),
                    srcValue,
                    key + "",
                    object,
                    source,
                    stack
                  )
                : undefined;

              if (newValue === undefined) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          },
          keysIn
        );
      }

      /**
       * A specialized version of `baseMerge` for arrays and objects which performs
       * deep merges and tracks traversed objects enabling objects with circular
       * references to be merged.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {string} key The key of the value to merge.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} mergeFunc The function to merge values.
       * @param {Function} [customizer] The function to customize assigned values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */
      function baseMergeDeep(
        object,
        source,
        key,
        srcIndex,
        mergeFunc,
        customizer,
        stack
      ) {
        var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer
          ? customizer(objValue, srcValue, key + "", object, source, stack)
          : undefined;

        var isCommon = newValue === undefined;

        if (isCommon) {
          var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          // Recursively merge objects and arrays (susceptible to call stack limits).
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }

      /**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }

      /**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var baseSetToString = !defineProperty
        ? identity
        : function (func, string) {
            return defineProperty(func, "toString", {
              configurable: true,
              enumerable: false,
              value: constant(string),
              writable: true,
            });
          };

      /**
       * Creates a clone of  `buffer`.
       *
       * @private
       * @param {Buffer} buffer The buffer to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Buffer} Returns the cloned buffer.
       */
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length,
          result = allocUnsafe
            ? allocUnsafe(length)
            : new buffer.constructor(length);

        buffer.copy(result);
        return result;
      }

      /**
       * Creates a clone of `arrayBuffer`.
       *
       * @private
       * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
       * @returns {ArrayBuffer} Returns the cloned array buffer.
       */
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result).set(new Uint8Array(arrayBuffer));
        return result;
      }

      /**
       * Creates a clone of `typedArray`.
       *
       * @private
       * @param {Object} typedArray The typed array to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned typed array.
       */
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep
          ? cloneArrayBuffer(typedArray.buffer)
          : typedArray.buffer;
        return new typedArray.constructor(
          buffer,
          typedArray.byteOffset,
          typedArray.length
        );
      }

      /**
       * Copies the values of `source` to `array`.
       *
       * @private
       * @param {Array} source The array to copy values from.
       * @param {Array} [array=[]] The array to copy values to.
       * @returns {Array} Returns `array`.
       */
      function copyArray(source, array) {
        var index = -1,
          length = source.length;

        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }

      /**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property identifiers to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @param {Function} [customizer] The function to customize copied values.
       * @returns {Object} Returns `object`.
       */
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});

        var index = -1,
          length = props.length;

        while (++index < length) {
          var key = props[index];

          var newValue = customizer
            ? customizer(object[key], source[key], key, object, source)
            : undefined;

          if (newValue === undefined) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }

      /**
       * Creates a function like `_.assign`.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @returns {Function} Returns the new assigner function.
       */
      function createAssigner(assigner) {
        return baseRest(function (object, sources) {
          var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

          customizer =
            assigner.length > 3 && typeof customizer == "function"
              ? (length--, customizer)
              : undefined;

          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }

      /**
       * Creates a base function for methods like `_.forIn` and `_.forOwn`.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */
      function createBaseFor(fromRight) {
        return function (object, iteratee, keysFunc) {
          var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }

      /**
       * Gets the data for `map`.
       *
       * @private
       * @param {Object} map The map to query.
       * @param {string} key The reference key.
       * @returns {*} Returns the map data.
       */
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key)
          ? data[typeof key == "string" ? "string" : "hash"]
          : data.map;
      }

      /**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined;
      }

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      /**
       * Initializes an object clone.
       *
       * @private
       * @param {Object} object The object to clone.
       * @returns {Object} Returns the initialized clone.
       */
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object)
          ? baseCreate(getPrototype(object))
          : {};
      }

      /**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;

        return (
          !!length &&
          (type == "number" || (type != "symbol" && reIsUint.test(value))) &&
          value > -1 &&
          value % 1 == 0 &&
          value < length
        );
      }

      /**
       * Checks if the given arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
       *  else `false`.
       */
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (
          type == "number"
            ? isArrayLike(object) && isIndex(index, object.length)
            : type == "string" && index in object
        ) {
          return eq(object[index], value);
        }
        return false;
      }

      /**
       * Checks if `value` is suitable for use as unique object key.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
       */
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" ||
          type == "number" ||
          type == "symbol" ||
          type == "boolean"
          ? value !== "__proto__"
          : value === null;
      }

      /**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }

      /**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */
      function isPrototype(value) {
        var Ctor = value && value.constructor,
          proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;

        return value === proto;
      }

      /**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      /**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */
      function overRest(func, start, transform) {
        start = nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function () {
          var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }

      /**
       * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }

        if (key == "__proto__") {
          return;
        }

        return object[key];
      }

      /**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */
      var setToString = shortOut(baseSetToString);

      /**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */
      function shortOut(func) {
        var count = 0,
          lastCalled = 0;

        return function () {
          var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined, arguments);
        };
      }

      /**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {}
          try {
            return func + "";
          } catch (e) {}
        }
        return "";
      }

      /**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }

      /**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */
      var isArguments = baseIsArguments(
        (function () {
          return arguments;
        })()
      )
        ? baseIsArguments
        : function (value) {
            return (
              isObjectLike(value) &&
              hasOwnProperty.call(value, "callee") &&
              !propertyIsEnumerable.call(value, "callee")
            );
          };

      /**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */
      var isArray = Array.isArray;

      /**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      /**
       * This method is like `_.isArrayLike` except that it also checks if `value`
       * is an object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array-like object,
       *  else `false`.
       * @example
       *
       * _.isArrayLikeObject([1, 2, 3]);
       * // => true
       *
       * _.isArrayLikeObject(document.body.children);
       * // => true
       *
       * _.isArrayLikeObject('abc');
       * // => false
       *
       * _.isArrayLikeObject(_.noop);
       * // => false
       */
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }

      /**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */
      var isBuffer = nativeIsBuffer || stubFalse;

      /**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return (
          tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
        );
      }

      /**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */
      function isLength(value) {
        return (
          typeof value == "number" &&
          value > -1 &&
          value % 1 == 0 &&
          value <= MAX_SAFE_INTEGER
        );
      }

      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }

      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }

      /**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * @static
       * @memberOf _
       * @since 0.8.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor =
          hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return (
          typeof Ctor == "function" &&
          Ctor instanceof Ctor &&
          funcToString.call(Ctor) == objectCtorString
        );
      }

      /**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */
      var isTypedArray = nodeIsTypedArray
        ? baseUnary(nodeIsTypedArray)
        : baseIsTypedArray;

      /**
       * Converts `value` to a plain object flattening inherited enumerable string
       * keyed properties of `value` to own properties of the plain object.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Object} Returns the converted plain object.
       * @example
       *
       * function Foo() {
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.assign({ 'a': 1 }, new Foo);
       * // => { 'a': 1, 'b': 2 }
       *
       * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
       * // => { 'a': 1, 'b': 2, 'c': 3 }
       */
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }

      /**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */
      function keysIn(object) {
        return isArrayLike(object)
          ? arrayLikeKeys(object, true)
          : baseKeysIn(object);
      }

      /**
       * This method is like `_.assign` except that it recursively merges own and
       * inherited enumerable string keyed properties of source objects into the
       * destination object. Source properties that resolve to `undefined` are
       * skipped if a destination value exists. Array and plain object properties
       * are merged recursively. Other objects and value types are overridden by
       * assignment. Source objects are applied from left to right. Subsequent
       * sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {
       *   'a': [{ 'b': 2 }, { 'd': 4 }]
       * };
       *
       * var other = {
       *   'a': [{ 'c': 3 }, { 'e': 5 }]
       * };
       *
       * _.merge(object, other);
       * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
       */
      var merge = createAssigner(function (object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });

      /**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */
      function constant(value) {
        return function () {
          return value;
        };
      }

      /**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */
      function identity(value) {
        return value;
      }

      /**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */
      function stubFalse() {
        return false;
      }

      module.exports = merge;

      /***/
    },

    /***/ 9189: /***/ (module) => {
      /**
       * Helpers.
       */

      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;

      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(val)
        );
      };

      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match =
          /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
            str
          );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return undefined;
        }
      }

      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtShort(ms) {
        if (ms >= d) {
          return Math.round(ms / d) + "d";
        }
        if (ms >= h) {
          return Math.round(ms / h) + "h";
        }
        if (ms >= m) {
          return Math.round(ms / m) + "m";
        }
        if (ms >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }

      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtLong(ms) {
        return (
          plural(ms, d, "day") ||
          plural(ms, h, "hour") ||
          plural(ms, m, "minute") ||
          plural(ms, s, "second") ||
          ms + " ms"
        );
      }

      /**
       * Pluralization helper.
       */

      function plural(ms, n, name) {
        if (ms < n) {
          return;
        }
        if (ms < n * 1.5) {
          return Math.floor(ms / n) + " " + name;
        }
        return Math.ceil(ms / n) + " " + name + "s";
      }

      /***/
    },

    /***/ 3441: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      var createHash = __nccwpck_require__(6417).createHash;

      function get_header(header, credentials, opts) {
        var type = header.split(" ")[0],
          user = credentials[0],
          pass = credentials[1];

        if (type == "Digest") {
          return digest.generate(header, user, pass, opts.method, opts.path);
        } else if (type == "Basic") {
          return basic(user, pass);
        }
      }

      ////////////////////
      // basic

      function md5(string) {
        return createHash("md5").update(string).digest("hex");
      }

      function basic(user, pass) {
        var str = typeof pass == "undefined" ? user : [user, pass].join(":");
        return "Basic " + Buffer.from(str).toString("base64");
      }

      ////////////////////
      // digest
      // logic inspired from https://github.com/simme/node-http-digest-client

      var digest = {};

      digest.parse_header = function (header) {
        var challenge = {},
          matches = header.match(
            /([a-z0-9_-]+)="?([a-z0-9_=\/\.@\s-\+)()]+)"?/gi
          );

        for (var i = 0, l = matches.length; i < l; i++) {
          var parts = matches[i].split("="),
            key = parts.shift(),
            val = parts.join("=").replace(/^"/, "").replace(/"$/, "");

          challenge[key] = val;
        }

        return challenge;
      };

      digest.update_nc = function (nc) {
        var max = 99999999;
        nc++;

        if (nc > max) nc = 1;

        var padding = new Array(8).join("0") + "";
        nc = nc + "";
        return padding.substr(0, 8 - nc.length) + nc;
      };

      digest.generate = function (header, user, pass, method, path) {
        var nc = 1,
          cnonce = null,
          challenge = digest.parse_header(header);

        var ha1 = md5(user + ":" + challenge.realm + ":" + pass),
          ha2 = md5(method.toUpperCase() + ":" + path),
          resp = [ha1, challenge.nonce];

        if (typeof challenge.qop === "string") {
          cnonce = md5(Math.random().toString(36)).substr(0, 8);
          nc = digest.update_nc(nc);
          resp = resp.concat(nc, cnonce);
          resp = resp.concat(challenge.qop, ha2);
        } else {
          resp = resp.concat(ha2);
        }

        var params = {
          uri: path,
          realm: challenge.realm,
          nonce: challenge.nonce,
          username: user,
          response: md5(resp.join(":")),
        };

        if (challenge.qop) {
          params.qop = challenge.qop;
        }

        if (challenge.opaque) {
          params.opaque = challenge.opaque;
        }

        if (cnonce) {
          params.nc = nc;
          params.cnonce = cnonce;
        }

        header = [];
        for (var k in params) header.push(k + '="' + params[k] + '"');

        return "Digest " + header.join(", ");
      };

      module.exports = {
        header: get_header,
        basic: basic,
        digest: digest.generate,
      };

      /***/
    },

    /***/ 5990: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      //  Simple cookie handling implementation based on the standard RFC 6265.
      //
      //  This module just has two functionalities:
      //    - Parse a set-cookie-header as a key value object
      //    - Write a cookie-string from a key value object
      //
      //  All cookie attributes are ignored.

      var unescape = __nccwpck_require__(1191).unescape;

      var COOKIE_PAIR = /^([^=\s]+)\s*=\s*("?)\s*(.*)\s*\2\s*$/;
      var EXCLUDED_CHARS = /[\x00-\x1F\x7F\x3B\x3B\s\"\,\\"%]/g;
      var TRAILING_SEMICOLON = /\x3B+$/;
      var SEP_SEMICOLON = /\s*\x3B\s*/;

      // i know these should be 'const', but I'd like to keep
      // supporting earlier node.js versions as long as I can. :)

      var KEY_INDEX = 1; // index of key from COOKIE_PAIR match
      var VALUE_INDEX = 3; // index of value from COOKIE_PAIR match

      // Returns a copy str trimmed and without trainling semicolon.
      function cleanCookieString(str) {
        return str.trim().replace(/\x3B+$/, "");
      }

      function getFirstPair(str) {
        var index = str.indexOf("\x3B");
        return index === -1 ? str : str.substr(0, index);
      }

      // Returns a encoded copy of str based on RFC6265 S4.1.1.
      function encodeCookieComponent(str) {
        return str.toString().replace(EXCLUDED_CHARS, encodeURIComponent);
      }

      // Parses a set-cookie-string based on the standard defined in RFC6265 S4.1.1.
      function parseSetCookieString(str) {
        str = cleanCookieString(str);
        str = getFirstPair(str);

        var res = COOKIE_PAIR.exec(str);
        if (!res || !res[VALUE_INDEX]) return null;

        return {
          name: unescape(res[KEY_INDEX]),
          value: unescape(res[VALUE_INDEX]),
        };
      }

      // Parses a set-cookie-header and returns a key/value object.
      // Each key represents the name of a cookie.
      function parseSetCookieHeader(header) {
        if (!header) return {};
        header = Array.isArray(header) ? header : [header];

        return header.reduce(function (res, str) {
          var cookie = parseSetCookieString(str);
          if (cookie) res[cookie.name] = cookie.value;
          return res;
        }, {});
      }

      // Writes a set-cookie-string based on the standard definded in RFC6265 S4.1.1.
      function writeCookieString(obj) {
        return Object.keys(obj).reduce(function (str, name) {
          var encodedName = encodeCookieComponent(name);
          var encodedValue = encodeCookieComponent(obj[name]);
          str += (str ? "; " : "") + encodedName + "=" + encodedValue;
          return str;
        }, "");
      }

      // returns a key/val object from an array of cookie strings
      exports.read = parseSetCookieHeader;

      // writes a cookie string header
      exports.write = writeCookieString;

      /***/
    },

    /***/ 6206: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      var iconv,
        inherits = __nccwpck_require__(1669).inherits,
        stream = __nccwpck_require__(2413);

      var regex = /(?:charset|encoding)\s*=\s*['"]? *([\w\-]+)/i;

      inherits(StreamDecoder, stream.Transform);

      function StreamDecoder(charset) {
        if (!(this instanceof StreamDecoder)) return new StreamDecoder(charset);

        stream.Transform.call(this, charset);
        this.charset = charset;
        this.parsed_chunk = false;
      }

      StreamDecoder.prototype._transform = function (chunk, encoding, done) {
        var res, found;

        // try get charset from chunk, just once
        if (this.charset == "utf8" && !this.parsed_chunk) {
          this.parsed_chunk = true;

          var matches = regex.exec(chunk.toString());
          if (matches) {
            found = matches[1].toLowerCase();
            this.charset = found == "utf-8" ? "utf8" : found;
          }
        }

        try {
          res = iconv.decode(chunk, this.charset);
        } catch (e) {
          // something went wrong, just return original chunk
          res = chunk;
        }

        this.push(res);
        done();
      };

      module.exports = function (charset) {
        try {
          if (!iconv) iconv = __nccwpck_require__(9453);
        } catch (e) {
          /* iconv not found */
        }

        if (iconv) return new StreamDecoder(charset);
        else return new stream.PassThrough();
      };

      /***/
    },

    /***/ 8049: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      var readFile = __nccwpck_require__(5747).readFile,
        basename = __nccwpck_require__(5622).basename;

      exports.build = function (data, boundary, callback) {
        if (typeof data != "object" || typeof data.pipe == "function")
          return callback(
            new Error("Multipart builder expects data as key/val object.")
          );

        var body = "",
          object = flatten(data),
          count = Object.keys(object).length;

        if (count === 0)
          return callback(new Error("Empty multipart body. Invalid data."));

        function done(err, section) {
          if (err) return callback(err);
          if (section) body += section;
          --count || callback(null, body + "--" + boundary + "--");
        }

        for (var key in object) {
          var value = object[key];
          if (value === null || typeof value == "undefined") {
            done();
          } else if (Buffer.isBuffer(value)) {
            var part = {
              buffer: value,
              content_type: "application/octet-stream",
            };
            generate_part(key, part, boundary, done);
          } else {
            var part =
              value.buffer || value.file || value.content_type
                ? value
                : { value: value };
            generate_part(key, part, boundary, done);
          }
        }
      };

      function generate_part(name, part, boundary, callback) {
        var return_part = "--" + boundary + "\r\n";
        return_part += 'Content-Disposition: form-data; name="' + name + '"';

        function append(data, filename) {
          if (data) {
            var binary = part.content_type.indexOf("text") == -1;
            return_part +=
              '; filename="' + encodeURIComponent(filename) + '"\r\n';
            if (binary) return_part += "Content-Transfer-Encoding: binary\r\n";
            return_part += "Content-Type: " + part.content_type + "\r\n\r\n";
            return_part += binary
              ? data.toString("binary")
              : data.toString("utf8");
          }

          callback(null, return_part + "\r\n");
        }

        if ((part.file || part.buffer) && part.content_type) {
          var filename = part.filename
            ? part.filename
            : part.file
            ? basename(part.file)
            : name;
          if (part.buffer) return append(part.buffer, filename);

          readFile(part.file, function (err, data) {
            if (err) return callback(err);
            append(data, filename);
          });
        } else {
          if (typeof part.value == "object")
            return callback(
              new Error("Object received for " + name + ", expected string.")
            );

          if (part.content_type) {
            return_part += "\r\n";
            return_part += "Content-Type: " + part.content_type;
          }

          return_part += "\r\n\r\n";
          return_part += Buffer.from(String(part.value), "utf8").toString(
            "binary"
          );
          append();
        }
      }

      // flattens nested objects for multipart body
      function flatten(object, into, prefix) {
        into = into || {};

        for (var key in object) {
          var prefix_key = prefix ? prefix + "[" + key + "]" : key;
          var prop = object[key];

          if (
            prop &&
            typeof prop === "object" &&
            !(prop.buffer || prop.file || prop.content_type)
          )
            flatten(prop, into, prefix_key);
          else into[prefix_key] = prop;
        }

        return into;
      }

      /***/
    },

    /***/ 7761: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      //////////////////////////////////////////
      // Needle -- HTTP Client for Node.js
      // Written by Tomás Pollak <tomas@forkhq.com>
      // (c) 2012-2020 - Fork Ltd.
      // MIT Licensed
      //////////////////////////////////////////

      var fs = __nccwpck_require__(5747),
        http = __nccwpck_require__(8605),
        https = __nccwpck_require__(7211),
        url = __nccwpck_require__(8835),
        stream = __nccwpck_require__(2413),
        debug = __nccwpck_require__(3475)("needle"),
        stringify = __nccwpck_require__(1544) /* .build */.J,
        multipart = __nccwpck_require__(8049),
        auth = __nccwpck_require__(3441),
        cookies = __nccwpck_require__(5990),
        parsers = __nccwpck_require__(193),
        decoder = __nccwpck_require__(6206);

      //////////////////////////////////////////
      // variabilia

      var version = __nccwpck_require__(1075) /* .version */.i8;

      var user_agent = "Needle/" + version;
      user_agent +=
        " (Node.js " +
        process.version +
        "; " +
        process.platform +
        " " +
        process.arch +
        ")";

      var tls_options =
        "agent pfx key passphrase cert ca ciphers rejectUnauthorized secureProtocol checkServerIdentity family";

      // older versions of node (< 0.11.4) prevent the runtime from exiting
      // because of connections in keep-alive state. so if this is the case
      // we'll default new requests to set a Connection: close header.
      var close_by_default =
        !http.Agent || http.Agent.defaultMaxSockets != Infinity;

      // see if we have Object.assign. otherwise fall back to util._extend
      var extend = Object.assign
        ? Object.assign
        : __nccwpck_require__(1669)._extend;

      // these are the status codes that Needle interprets as redirects.
      var redirect_codes = [301, 302, 303, 307, 308];

      //////////////////////////////////////////
      // decompressors for gzip/deflate/br bodies

      function bind_opts(fn, options) {
        return fn.bind(null, options);
      }

      var decompressors = {};

      try {
        var zlib = __nccwpck_require__(8761);

        // Enable Z_SYNC_FLUSH to avoid Z_BUF_ERROR errors (Node PR #2595)
        var zlib_options = {
          flush: zlib.Z_SYNC_FLUSH,
          finishFlush: zlib.Z_SYNC_FLUSH,
        };

        var br_options = {
          flush: zlib.BROTLI_OPERATION_FLUSH,
          finishFlush: zlib.BROTLI_OPERATION_FLUSH,
        };

        decompressors["x-deflate"] = bind_opts(zlib.Inflate, zlib_options);
        decompressors["deflate"] = bind_opts(zlib.Inflate, zlib_options);
        decompressors["x-gzip"] = bind_opts(zlib.Gunzip, zlib_options);
        decompressors["gzip"] = bind_opts(zlib.Gunzip, zlib_options);
        if (typeof zlib.BrotliDecompress === "function") {
          decompressors["br"] = bind_opts(zlib.BrotliDecompress, br_options);
        }
      } catch (e) {
        /* zlib not available */
      }

      //////////////////////////////////////////
      // options and aliases

      var defaults = {
        // data
        boundary: "--------------------NODENEEDLEHTTPCLIENT",
        encoding: "utf8",
        parse_response: "all", // same as true. valid options: 'json', 'xml' or false/null
        proxy: null,

        // headers
        headers: {},
        accept: "*/*",
        user_agent: user_agent,

        // numbers
        open_timeout: 10000,
        response_timeout: 0,
        read_timeout: 0,
        follow_max: 0,
        stream_length: -1,

        // booleans
        compressed: false,
        decode_response: true,
        parse_cookies: true,
        follow_set_cookies: false,
        follow_set_referer: false,
        follow_keep_method: false,
        follow_if_same_host: false,
        follow_if_same_protocol: false,
        follow_if_same_location: false,
      };

      var aliased = {
        options: {
          decode: "decode_response",
          parse: "parse_response",
          timeout: "open_timeout",
          follow: "follow_max",
        },
        inverted: {},
      };

      // only once, invert aliased keys so we can get passed options.
      Object.keys(aliased.options).map(function (k) {
        var value = aliased.options[k];
        aliased.inverted[value] = k;
      });

      //////////////////////////////////////////
      // helpers

      function keys_by_type(type) {
        return Object.keys(defaults)
          .map(function (el) {
            if (defaults[el] !== null && defaults[el].constructor == type)
              return el;
          })
          .filter(function (el) {
            return el;
          });
      }

      function parse_content_type(header) {
        if (!header || header === "") return {};

        var found,
          charset = "utf8",
          arr = header.split(";");

        if (arr.length > 1 && (found = arr[1].match(/charset=(.+)/)))
          charset = found[1];

        return { type: arr[0], charset: charset };
      }

      function is_stream(obj) {
        return typeof obj.pipe === "function";
      }

      function get_stream_length(stream, given_length, cb) {
        if (given_length > 0) return cb(given_length);

        if (
          stream.end !== void 0 &&
          stream.end !== Infinity &&
          stream.start !== void 0
        )
          return cb(stream.end + 1 - (stream.start || 0));

        fs.stat(stream.path, function (err, stat) {
          cb(stat ? stat.size - (stream.start || 0) : null);
        });
      }

      function resolve_url(href, base) {
        if (url.URL) return new url.URL(href, base);

        // older Node version (< v6.13)
        return url.resolve(base, href);
      }

      function pump_streams(streams, cb) {
        if (stream.pipeline)
          return stream.pipeline.apply(null, streams.concat(cb));

        var tmp = streams.shift();
        while (streams.length) {
          tmp = tmp.pipe(streams.shift());
          tmp.once("error", function (e) {
            cb && cb(e);
            cb = null;
          });
        }
      }

      //////////////////////////////////////////
      // the main act

      function Needle(method, uri, data, options, callback) {
        // if (!(this instanceof Needle)) {
        //   return new Needle(method, uri, data, options, callback);
        // }

        if (typeof uri !== "string")
          throw new TypeError("URL must be a string, not " + uri);

        this.method = method.toLowerCase();
        this.uri = uri;
        this.data = data;

        if (typeof options == "function") {
          this.callback = options;
          this.options = {};
        } else {
          this.callback = callback;
          this.options = options;
        }
      }

      Needle.prototype.setup = function (uri, options) {
        function get_option(key, fallback) {
          // if original is in options, return that value
          if (typeof options[key] != "undefined") return options[key];

          // otherwise, return value from alias or fallback/undefined
          return typeof options[aliased.inverted[key]] != "undefined"
            ? options[aliased.inverted[key]]
            : fallback;
        }

        function check_value(expected, key) {
          var value = get_option(key),
            type = typeof value;

          if (type != "undefined" && type != expected)
            throw new TypeError(
              type + " received for " + key + ", but expected a " + expected
            );

          return type == expected ? value : defaults[key];
        }

        //////////////////////////////////////////////////
        // the basics

        var config = {
          http_opts: {
            localAddress: get_option("localAddress", undefined),
            lookup: get_option("lookup", undefined),
          }, // passed later to http.request() directly
          headers: {},
          output: options.output,
          proxy: get_option("proxy", defaults.proxy),
          parser: get_option("parse_response", defaults.parse_response),
          encoding:
            options.encoding ||
            (options.multipart ? "binary" : defaults.encoding),
        };

        keys_by_type(Boolean).forEach(function (key) {
          config[key] = check_value("boolean", key);
        });

        keys_by_type(Number).forEach(function (key) {
          config[key] = check_value("number", key);
        });

        // populate http_opts with given TLS options
        tls_options.split(" ").forEach(function (key) {
          if (typeof options[key] != "undefined") {
            config.http_opts[key] = options[key];
            if (typeof options.agent == "undefined")
              config.http_opts.agent = false; // otherwise tls options are skipped
          }
        });

        //////////////////////////////////////////////////
        // headers, cookies

        for (var key in defaults.headers)
          config.headers[key] = defaults.headers[key];

        config.headers["accept"] = options.accept || defaults.accept;
        config.headers["user-agent"] =
          options.user_agent || defaults.user_agent;

        if (options.content_type)
          config.headers["content-type"] = options.content_type;

        // set connection header if opts.connection was passed, or if node < 0.11.4 (close)
        if (options.connection || close_by_default)
          config.headers["connection"] = options.connection || "close";

        if (
          (options.compressed || defaults.compressed) &&
          typeof zlib != "undefined"
        )
          config.headers["accept-encoding"] = decompressors["br"]
            ? "gzip, deflate, br"
            : "gzip, deflate";

        if (options.cookies)
          config.headers["cookie"] = cookies.write(options.cookies);

        //////////////////////////////////////////////////
        // basic/digest auth

        if (uri.match(/[^\/]@/)) {
          // url contains user:pass@host, so parse it.
          var parts = (url.parse(uri).auth || "").split(":");
          options.username = parts[0];
          options.password = parts[1];
        }

        if (options.username) {
          if (
            options.auth &&
            (options.auth == "auto" || options.auth == "digest")
          ) {
            config.credentials = [options.username, options.password];
          } else {
            config.headers["authorization"] = auth.basic(
              options.username,
              options.password
            );
          }
        }

        // if proxy is present, set auth header from either url or proxy_user option.
        if (config.proxy) {
          if (config.proxy.indexOf("http") === -1)
            config.proxy = "http://" + config.proxy;

          if (config.proxy.indexOf("@") !== -1) {
            var proxy = (url.parse(config.proxy).auth || "").split(":");
            options.proxy_user = proxy[0];
            options.proxy_pass = proxy[1];
          }

          if (options.proxy_user)
            config.headers["proxy-authorization"] = auth.basic(
              options.proxy_user,
              options.proxy_pass
            );
        }

        // now that all our headers are set, overwrite them if instructed.
        for (var h in options.headers)
          config.headers[h.toLowerCase()] = options.headers[h];

        config.uri_modifier = get_option("uri_modifier", null);

        return config;
      };

      Needle.prototype.start = function () {
        var out = new stream.PassThrough({ objectMode: false }),
          uri = this.uri,
          data = this.data,
          method = this.method,
          callback =
            typeof this.options == "function" ? this.options : this.callback,
          options = this.options || {};

        // if no 'http' is found on URL, prepend it.
        if (uri.indexOf("http") === -1)
          uri = uri.replace(/^(\/\/)?/, "http://");

        var self = this,
          body,
          waiting = false,
          config = this.setup(uri, options);

        // unless options.json was set to false, assume boss also wants JSON if content-type matches.
        var json =
          options.json ||
          (options.json !== false &&
            config.headers["content-type"] == "application/json");

        if (data) {
          if (options.multipart) {
            // boss says we do multipart. so we do it.
            var boundary = options.boundary || defaults.boundary;

            waiting = true;
            multipart.build(data, boundary, function (err, parts) {
              if (err) throw err;

              config.headers["content-type"] =
                "multipart/form-data; boundary=" + boundary;
              next(parts);
            });
          } else if (is_stream(data)) {
            if (method == "get")
              throw new Error(
                "Refusing to pipe() a stream via GET. Did you mean .post?"
              );

            if (
              config.stream_length > 0 ||
              (config.stream_length === 0 && data.path)
            ) {
              // ok, let's get the stream's length and set it as the content-length header.
              // this prevents some servers from cutting us off before all the data is sent.
              waiting = true;
              get_stream_length(data, config.stream_length, function (length) {
                data.length = length;
                next(data);
              });
            } else {
              // if the boss doesn't want us to get the stream's length, or if it doesn't
              // have a file descriptor for that purpose, then just head on.
              body = data;
            }
          } else if (Buffer.isBuffer(data)) {
            body = data; // use the raw buffer as request body.
          } else if (method == "get" && !json) {
            // append the data to the URI as a querystring.
            uri = uri.replace(/\?.*|$/, "?" + stringify(data));
          } else {
            // string or object data, no multipart.

            // if string, leave it as it is, otherwise, stringify.
            body =
              typeof data === "string"
                ? data
                : json
                ? JSON.stringify(data)
                : stringify(data);

            // ensure we have a buffer so bytecount is correct.
            body = Buffer.from(body, config.encoding);
          }
        }

        function next(body) {
          if (body) {
            if (body.length) config.headers["content-length"] = body.length;

            // if no content-type was passed, determine if json or not.
            if (!config.headers["content-type"]) {
              config.headers["content-type"] = json
                ? "application/json; charset=utf-8"
                : "application/x-www-form-urlencoded"; // no charset says W3 spec.
            }
          }

          // unless a specific accept header was set, assume json: true wants JSON back.
          if (
            options.json &&
            !options.accept &&
            !(options.headers || {}).accept
          )
            config.headers["accept"] = "application/json";

          self.send_request(1, method, uri, config, body, out, callback);
        }

        if (!waiting) next(body);
        return out;
      };

      Needle.prototype.get_request_opts = function (method, uri, config) {
        var opts = config.http_opts,
          proxy = config.proxy,
          remote = proxy ? url.parse(proxy) : url.parse(uri);

        opts.protocol = remote.protocol;
        opts.host = remote.hostname;
        opts.port = remote.port || (remote.protocol == "https:" ? 443 : 80);
        opts.path = proxy ? uri : remote.pathname + (remote.search || "");
        opts.method = method;
        opts.headers = config.headers;

        if (!opts.headers["host"]) {
          // if using proxy, make sure the host header shows the final destination
          var target = proxy ? url.parse(uri) : remote;
          opts.headers["host"] = target.hostname;

          // and if a non standard port was passed, append it to the port header
          if (target.port && [80, 443].indexOf(target.port) === -1) {
            opts.headers["host"] += ":" + target.port;
          }
        }

        return opts;
      };

      Needle.prototype.should_follow = function (location, config, original) {
        if (!location) return false;

        // returns true if location contains matching property (host or protocol)
        function matches(property) {
          var property = original[property];
          return location.indexOf(property) !== -1;
        }

        // first, check whether the requested location is actually different from the original
        if (!config.follow_if_same_location && location === original)
          return false;

        if (config.follow_if_same_host && !matches("host")) return false; // host does not match, so not following

        if (config.follow_if_same_protocol && !matches("protocol"))
          return false; // procotol does not match, so not following

        return true;
      };

      Needle.prototype.send_request = function (
        count,
        method,
        uri,
        config,
        post_data,
        out,
        callback
      ) {
        if (typeof config.uri_modifier === "function") {
          var modified_uri = config.uri_modifier(uri);
          debug("Modifying request URI", uri + " => " + modified_uri);
          uri = modified_uri;
        }

        var request,
          timer,
          returned = 0,
          self = this,
          request_opts = this.get_request_opts(method, uri, config),
          protocol = request_opts.protocol == "https:" ? https : http;

        function done(err, resp) {
          if (returned++ > 0) return debug("Already finished, stopping here.");

          if (timer) clearTimeout(timer);
          request.removeListener("error", had_error);
          out.done = true;

          if (callback)
            return callback(err, resp, resp ? resp.body : undefined);

          // NOTE: this event used to be called 'end', but the behaviour was confusing
          // when errors ocurred, because the stream would still emit an 'end' event.
          out.emit("done", err);

          // trigger the 'done' event on streams we're being piped to, if any
          var pipes = out._readableState.pipes || [];
          if (!pipes.forEach) pipes = [pipes];
          pipes.forEach(function (st) {
            st.emit("done", err);
          });
        }

        function had_error(err) {
          debug("Request error", err);
          out.emit("err", err);
          done(err || new Error("Unknown error when making request."));
        }

        function set_timeout(type, milisecs) {
          if (timer) clearTimeout(timer);
          if (milisecs <= 0) return;

          timer = setTimeout(function () {
            out.emit("timeout", type);
            request.abort();
            // also invoke done() to terminate job on read_timeout
            if (type == "read") done(new Error(type + " timeout"));
          }, milisecs);
        }

        // handle errors on the underlying socket, that may be closed while writing
        // for an example case, see test/long_string_spec.js. we make sure this
        // scenario ocurred by verifying the socket's writable & destroyed states.
        function on_socket_end() {
          if (returned && !this.writable && this.destroyed === false) {
            this.destroy();
            had_error(new Error("Remote end closed socket abruptly."));
          }
        }

        debug("Making request #" + count, request_opts);
        request = protocol.request(request_opts, function (resp) {
          var headers = resp.headers;
          debug("Got response", resp.statusCode, headers);
          out.emit("response", resp);

          set_timeout("read", config.read_timeout);

          // if we got cookies, parse them unless we were instructed not to. make sure to include any
          // cookies that might have been set on previous redirects.
          if (
            config.parse_cookies &&
            (headers["set-cookie"] || config.previous_resp_cookies)
          ) {
            resp.cookies = extend(
              config.previous_resp_cookies || {},
              cookies.read(headers["set-cookie"])
            );
            debug("Got cookies", resp.cookies);
          }

          // if redirect code is found, determine if we should follow it according to the given options.
          if (
            redirect_codes.indexOf(resp.statusCode) !== -1 &&
            self.should_follow(headers.location, config, uri)
          ) {
            // clear timer before following redirects to prevent unexpected setTimeout consequence
            clearTimeout(timer);

            if (count <= config.follow_max) {
              out.emit("redirect", headers.location);

              // unless 'follow_keep_method' is true, rewrite the request to GET before continuing.
              if (!config.follow_keep_method) {
                method = "GET";
                post_data = null;
                delete config.headers["content-length"]; // in case the original was a multipart POST request.
              }

              // if follow_set_cookies is true, insert cookies in the next request's headers.
              // we set both the original request cookies plus any response cookies we might have received.
              if (config.follow_set_cookies) {
                var request_cookies = cookies.read(config.headers["cookie"]);
                config.previous_resp_cookies = resp.cookies;
                if (
                  Object.keys(request_cookies).length ||
                  Object.keys(resp.cookies || {}).length
                ) {
                  config.headers["cookie"] = cookies.write(
                    extend(request_cookies, resp.cookies)
                  );
                }
              } else if (config.headers["cookie"]) {
                debug(
                  "Clearing original request cookie",
                  config.headers["cookie"]
                );
                delete config.headers["cookie"];
              }

              if (config.follow_set_referer)
                config.headers["referer"] = encodeURI(uri); // the original, not the destination URL.

              config.headers["host"] = null; // clear previous Host header to avoid conflicts.

              var redirect_url = resolve_url(headers.location, uri);
              debug("Redirecting to " + redirect_url.toString());
              return self.send_request(
                ++count,
                method,
                redirect_url.toString(),
                config,
                post_data,
                out,
                callback
              );
            } else if (config.follow_max > 0) {
              return done(
                new Error(
                  "Max redirects reached. Possible loop in: " + headers.location
                )
              );
            }
          }

          // if auth is requested and credentials were not passed, resend request, provided we have user/pass.
          if (
            resp.statusCode == 401 &&
            headers["www-authenticate"] &&
            config.credentials
          ) {
            if (!config.headers["authorization"]) {
              // only if authentication hasn't been sent
              var auth_header = auth.header(
                headers["www-authenticate"],
                config.credentials,
                request_opts
              );

              if (auth_header) {
                config.headers["authorization"] = auth_header;
                return self.send_request(
                  count,
                  method,
                  uri,
                  config,
                  post_data,
                  out,
                  callback
                );
              }
            }
          }

          // ok, so we got a valid (non-redirect & authorized) response. let's notify the stream guys.
          out.emit("header", resp.statusCode, headers);
          out.emit("headers", headers);

          var pipeline = [],
            mime = parse_content_type(headers["content-type"]),
            text_response =
              mime.type &&
              (mime.type.indexOf("text/") != -1 ||
                !!mime.type.match(/(\/|\+)(xml|json)$/));

          // To start, if our body is compressed and we're able to inflate it, do it.
          if (
            headers["content-encoding"] &&
            decompressors[headers["content-encoding"]]
          ) {
            var decompressor = decompressors[headers["content-encoding"]]();

            // make sure we catch errors triggered by the decompressor.
            decompressor.on("error", had_error);
            pipeline.push(decompressor);
          }

          // If parse is enabled and we have a parser for it, then go for it.
          if (config.parser && parsers[mime.type]) {
            // If a specific parser was requested, make sure we don't parse other types.
            var parser_name = config.parser.toString().toLowerCase();
            if (
              ["xml", "json"].indexOf(parser_name) == -1 ||
              parsers[mime.type].name == parser_name
            ) {
              // OK, so either we're parsing all content types or the one requested matches.
              out.parser = parsers[mime.type].name;
              pipeline.push(parsers[mime.type].fn());

              // Set objectMode on out stream to improve performance.
              out._writableState.objectMode = true;
              out._readableState.objectMode = true;
            }

            // If we're not parsing, and unless decoding was disabled, we'll try
            // decoding non UTF-8 bodies to UTF-8, using the iconv-lite library.
          } else if (text_response && config.decode_response && mime.charset) {
            pipeline.push(decoder(mime.charset));
          }

          // And `out` is the stream we finally push the decoded/parsed output to.
          pipeline.push(out);

          // Now, release the kraken!
          pump_streams([resp].concat(pipeline), function (err) {
            if (err) debug(err);

            // on node v8.x, if an error ocurrs on the receiving end,
            // then we want to abort the request to avoid having dangling sockets
            if (err && err.message == "write after end") request.destroy();
          });

          // If the user has requested and output file, pipe the output stream to it.
          // In stream mode, we will still get the response stream to play with.
          if (config.output && resp.statusCode == 200) {
            // for some reason, simply piping resp to the writable stream doesn't
            // work all the time (stream gets cut in the middle with no warning).
            // so we'll manually need to do the readable/write(chunk) trick.
            var file = fs.createWriteStream(config.output);
            file.on("error", had_error);

            out.on("end", function () {
              if (file.writable) file.end();
            });

            file.on("close", function () {
              delete out.file;
            });

            out.on("readable", function () {
              var chunk;
              while ((chunk = this.read()) !== null) {
                if (file.writable) file.write(chunk);

                // if callback was requested, also push it to resp.body
                if (resp.body) resp.body.push(chunk);
              }
            });

            out.file = file;
          }

          // Only aggregate the full body if a callback was requested.
          if (callback) {
            resp.raw = [];
            resp.body = [];
            resp.bytes = 0;

            // Gather and count the amount of (raw) bytes using a PassThrough stream.
            var clean_pipe = new stream.PassThrough();

            clean_pipe.on("readable", function () {
              var chunk;
              while ((chunk = this.read()) != null) {
                resp.bytes += chunk.length;
                resp.raw.push(chunk);
              }
            });

            pump_streams([resp, clean_pipe], function (err) {
              if (err) debug(err);
            });

            // Listen on the 'readable' event to aggregate the chunks, but only if
            // file output wasn't requested. Otherwise we'd have two stream readers.
            if (!config.output || resp.statusCode != 200) {
              out.on("readable", function () {
                var chunk;
                while ((chunk = this.read()) !== null) {
                  // We're either pushing buffers or objects, never strings.
                  if (typeof chunk == "string") chunk = Buffer.from(chunk);

                  // Push all chunks to resp.body. We'll bind them in resp.end().
                  resp.body.push(chunk);
                }
              });
            }
          }

          // And set the .body property once all data is in.
          out.on("end", function () {
            if (resp.body) {
              // callback mode

              // we want to be able to access to the raw data later, so keep a reference.
              resp.raw = Buffer.concat(resp.raw);

              // if parse was successful, we should have an array with one object
              if (
                resp.body[0] !== undefined &&
                !Buffer.isBuffer(resp.body[0])
              ) {
                // that's our body right there.
                resp.body = resp.body[0];

                // set the parser property on our response. we may want to check.
                if (out.parser) resp.parser = out.parser;
              } else {
                // we got one or several buffers. string or binary.
                resp.body = Buffer.concat(resp.body);

                // if we're here and parsed is true, it means we tried to but it didn't work.
                // so given that we got a text response, let's stringify it.
                if (text_response || out.parser) {
                  resp.body = resp.body.toString();
                }
              }
            }

            // if an output file is being written to, make sure the callback
            // is triggered after all data has been written to it.
            if (out.file) {
              out.file.on("close", function () {
                done(null, resp);
              });
            } else {
              // elvis has left the building.
              done(null, resp);
            }
          });

          // out.on('error', function(err) {
          //   had_error(err);
          //   if (err.code == 'ERR_STREAM_DESTROYED' || err.code == 'ERR_STREAM_PREMATURE_CLOSE') {
          //     request.abort();
          //   }
          // })
        }); // end request call

        // unless open_timeout was disabled, set a timeout to abort the request.
        set_timeout("open", config.open_timeout);

        // handle errors on the request object. things might get bumpy.
        request.on("error", had_error);

        // make sure timer is cleared if request is aborted (issue #257)
        request.once("abort", function () {
          if (timer) clearTimeout(timer);
        });

        // handle socket 'end' event to ensure we don't get delayed EPIPE errors.
        request.once("socket", function (socket) {
          if (socket.connecting) {
            socket.once("connect", function () {
              set_timeout("response", config.response_timeout);
            });
          } else {
            set_timeout("response", config.response_timeout);
          }

          // socket.once('close', function(e) {
          //   console.log('socket closed!', e);
          // })

          if (!socket.on_socket_end) {
            socket.on_socket_end = on_socket_end;
            socket.once("end", function () {
              process.nextTick(on_socket_end.bind(socket));
            });
          }
        });

        if (post_data) {
          if (is_stream(post_data)) {
            pump_streams([post_data, request], function (err) {
              if (err) debug(err);
            });
          } else {
            request.write(post_data, config.encoding);
            request.end();
          }
        } else {
          request.end();
        }

        out.abort = function () {
          request.abort();
        }; // easier access
        out.request = request;
        return out;
      };

      //////////////////////////////////////////
      // exports

      if (typeof Promise !== "undefined") {
        module.exports = function () {
          var verb,
            args = [].slice.call(arguments);

          if (args[0].match(/\.|\//))
            // first argument looks like a URL
            verb = args.length > 2 ? "post" : "get";
          else verb = args.shift();

          if (verb.match(/get|head/i) && args.length == 2)
            args.splice(1, 0, null); // assume no data if head/get with two args (url, options)

          return new Promise(function (resolve, reject) {
            module.exports.request(
              verb,
              args[0],
              args[1],
              args[2],
              function (err, resp) {
                return err ? reject(err) : resolve(resp);
              }
            );
          });
        };
      }

      module.exports.version = version;

      module.exports.defaults = function (obj) {
        for (var key in obj) {
          var target_key = aliased.options[key] || key;

          if (
            defaults.hasOwnProperty(target_key) &&
            typeof obj[key] != "undefined"
          ) {
            if (target_key != "parse_response" && target_key != "proxy") {
              // ensure type matches the original, except for proxy/parse_response that can be null/bool or string
              var valid_type = defaults[target_key].constructor.name;

              if (obj[key].constructor.name != valid_type)
                throw new TypeError(
                  "Invalid type for " + key + ", should be " + valid_type
                );
            }
            defaults[target_key] = obj[key];
          } else {
            throw new Error("Invalid property for defaults:" + target_key);
          }
        }

        return defaults;
      };

      "head get".split(" ").forEach(function (method) {
        module.exports[method] = function (uri, options, callback) {
          return new Needle(method, uri, null, options, callback).start();
        };
      });

      "post put patch delete".split(" ").forEach(function (method) {
        module.exports[method] = function (uri, data, options, callback) {
          return new Needle(method, uri, data, options, callback).start();
        };
      });

      module.exports.request = function (method, uri, data, opts, callback) {
        return new Needle(method, uri, data, opts, callback).start();
      };

      /***/
    },

    /***/ 193: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      //////////////////////////////////////////
      // Defines mappings between content-type
      // and the appropriate parsers.
      //////////////////////////////////////////

      var Transform = __nccwpck_require__(2413).Transform;
      var sax = __nccwpck_require__(9009);

      function parseXML(str, cb) {
        var obj,
          current,
          parser = sax.parser(true, { trim: true, lowercase: true });
        parser.onerror = parser.onend = done;

        function done(err) {
          parser.onerror = parser.onend = function () {};
          cb(err, obj);
        }

        function newElement(name, attributes) {
          return {
            name: name || "",
            value: "",
            attributes: attributes || {},
            children: [],
          };
        }

        parser.oncdata = parser.ontext = function (t) {
          if (current) current.value += t;
        };

        parser.onopentag = function (node) {
          var element = newElement(node.name, node.attributes);
          if (current) {
            element.parent = current;
            current.children.push(element);
          } else {
            // root object
            obj = element;
          }

          current = element;
        };

        parser.onclosetag = function () {
          if (typeof current.parent !== "undefined") {
            var just_closed = current;
            current = current.parent;
            delete just_closed.parent;
          }
        };

        parser.write(str).close();
      }

      function parserFactory(name, fn) {
        function parser() {
          var chunks = [],
            stream = new Transform({ objectMode: true });

          // Buffer all our data
          stream._transform = function (chunk, encoding, done) {
            chunks.push(chunk);
            done();
          };

          // And call the parser when all is there.
          stream._flush = function (done) {
            var self = this,
              data = Buffer.concat(chunks);

            try {
              fn(data, function (err, result) {
                if (err) throw err;
                self.push(result);
              });
            } catch (err) {
              self.push(data); // just pass the original data
            } finally {
              done();
            }
          };

          return stream;
        }

        return { fn: parser, name: name };
      }

      var parsers = {};

      function buildParser(name, types, fn) {
        var parser = parserFactory(name, fn);
        types.forEach(function (type) {
          parsers[type] = parser;
        });
      }

      buildParser(
        "json",
        ["application/json", "text/javascript", "application/vnd.api+json"],
        function (buffer, cb) {
          var err, data;
          try {
            data = JSON.parse(buffer);
          } catch (e) {
            err = e;
          }
          cb(err, data);
        }
      );

      buildParser(
        "xml",
        [
          "text/xml",
          "application/xml",
          "application/rdf+xml",
          "application/rss+xml",
          "application/atom+xml",
        ],
        function (buffer, cb) {
          parseXML(buffer.toString(), function (err, obj) {
            cb(err, obj);
          });
        }
      );

      module.exports = parsers;
      module.exports.use = buildParser;

      /***/
    },

    /***/ 1544: /***/ (__unused_webpack_module, exports) => {
      // based on the qs module, but handles null objects as expected
      // fixes by Tomas Pollak.

      var toString = Object.prototype.toString;

      function stringify(obj, prefix) {
        if (prefix && (obj === null || typeof obj == "undefined")) {
          return prefix + "=";
        } else if (toString.call(obj) == "[object Array]") {
          return stringifyArray(obj, prefix);
        } else if (toString.call(obj) == "[object Object]") {
          return stringifyObject(obj, prefix);
        } else if (toString.call(obj) == "[object Date]") {
          return obj.toISOString();
        } else if (prefix) {
          // string inside array or hash
          return prefix + "=" + encodeURIComponent(String(obj));
        } else if (String(obj).indexOf("=") !== -1) {
          // string with equal sign
          return String(obj);
        } else {
          throw new TypeError("Cannot build a querystring out of: " + obj);
        }
      }

      function stringifyArray(arr, prefix) {
        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
          if (prefix) ret.push(stringify(arr[i], prefix + "[]"));
          else ret.push(stringify(arr[i]));
        }

        return ret.join("&");
      }

      function stringifyObject(obj, prefix) {
        var ret = [];

        Object.keys(obj).forEach(function (key) {
          ret.push(
            stringify(
              obj[key],
              prefix
                ? prefix + "[" + encodeURIComponent(key) + "]"
                : encodeURIComponent(key)
            )
          );
        });

        return ret.join("&");
      }

      exports.J = stringify;

      /***/
    },

    /***/ 2463: /***/ (module, exports, __nccwpck_require__) => {
      "use strict";

      function _typeof(obj) {
        if (
          typeof Symbol === "function" &&
          typeof Symbol.iterator === "symbol"
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === "function" &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      /* eslint-env browser */

      /**
       * This is the web browser implementation of `debug()`.
       */
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      /**
       * Colors.
       */

      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ];
      /**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */
      // eslint-disable-next-line complexity

      function useColors() {
        // NB: In an Electron preload script, document will be defined but not fully
        // initialized. Since we know we're in Chrome, we'll just detect this case
        // explicitly
        if (
          typeof window !== "undefined" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
        ) {
          return true;
        } // Internet Explorer and Edge do not support colors.

        if (
          typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        ) {
          return false;
        } // Is webkit? http://stackoverflow.com/a/16459606/376773
        // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632

        return (
          (typeof document !== "undefined" &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) || // Is firebug? http://stackoverflow.com/a/398120/376773
          (typeof window !== "undefined" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) || // Is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) || // Double check webkit in userAgent just in case we are in a worker
          (typeof navigator !== "undefined" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }
      /**
       * Colorize log arguments if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        args[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          args[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          module.exports.humanize(this.diff);

        if (!this.useColors) {
          return;
        }

        var c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit"); // The final "%c" is somewhat tricky, because there could be other
        // arguments passed either before or after the %c, so we need to
        // figure out the correct index to insert the CSS into

        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, function (match) {
          if (match === "%%") {
            return;
          }

          index++;

          if (match === "%c") {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      /**
       * Invokes `console.log()` when available.
       * No-op when `console.log` is not a "function".
       *
       * @api public
       */

      function log() {
        var _console;

        // This hackery is required for IE8/9, where
        // the `console.log` function doesn't have 'apply'
        return (
          (typeof console === "undefined" ? "undefined" : _typeof(console)) ===
            "object" &&
          console.log &&
          (_console = console).log.apply(_console, arguments)
        );
      }
      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
          // Swallow
          // XXX (@Qix-) should we be logging these?
        }
      }
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        var r;

        try {
          r = exports.storage.getItem("debug");
        } catch (error) {} // Swallow
        // XXX (@Qix-) should we be logging these?
        // If debug isn't set in LS, and we're in Electron, try to load $DEBUG

        if (!r && typeof process !== "undefined" && "env" in process) {
          r = process.env.DEBUG;
        }

        return r;
      }
      /**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */

      function localstorage() {
        try {
          // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
          // The Browser also has localStorage in the global context.
          return localStorage;
        } catch (error) {
          // Swallow
          // XXX (@Qix-) should we be logging these?
        }
      }

      module.exports = __nccwpck_require__(4418)(exports);
      var formatters = module.exports.formatters;
      /**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */

      formatters.j = function (v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };

      /***/
    },

    /***/ 4418: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       */
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = __nccwpck_require__(9978);
        Object.keys(env).forEach(function (key) {
          createDebug[key] = env[key];
        });
        /**
         * Active `debug` instances.
         */

        createDebug.instances = [];
        /**
         * The currently active debug mode names, and names to skip.
         */

        createDebug.names = [];
        createDebug.skips = [];
        /**
         * Map of special "%n" handling functions, for the debug "format" argument.
         *
         * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
         */

        createDebug.formatters = {};
        /**
         * Selects a color for a debug namespace
         * @param {String} namespace The namespace string for the for the debug instance to be colored
         * @return {Number|String} An ANSI color code for the given namespace
         * @api private
         */

        function selectColor(namespace) {
          var hash = 0;

          for (var i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
         * Create a debugger with the given `namespace`.
         *
         * @param {String} namespace
         * @return {Function}
         * @api public
         */

        function createDebug(namespace) {
          var prevTime;

          function debug() {
            // Disabled?
            if (!debug.enabled) {
              return;
            }

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            var self = debug; // Set `diff` timestamp

            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== "string") {
              // Anything else let's inspect with %O
              args.unshift("%O");
            } // Apply any `formatters` transformations

            var index = 0;
            args[0] = args[0].replace(
              /%([a-zA-Z%])/g,
              function (match, format) {
                // If we encounter an escaped % then don't increase the array index
                if (match === "%%") {
                  return match;
                }

                index++;
                var formatter = createDebug.formatters[format];

                if (typeof formatter === "function") {
                  var val = args[index];
                  match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                  args.splice(index, 1);
                  index--;
                }

                return match;
              }
            ); // Apply env-specific formatting (colors, etc.)

            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.enabled = createDebug.enabled(namespace);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(namespace);
          debug.destroy = destroy;
          debug.extend = extend; // Debug.formatArgs = formatArgs;
          // debug.rawLog = rawLog;
          // env-specific initialization logic for debug instances

          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }

          createDebug.instances.push(debug);
          return debug;
        }

        function destroy() {
          var index = createDebug.instances.indexOf(this);

          if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
          }

          return false;
        }

        function extend(namespace, delimiter) {
          return createDebug(
            this.namespace +
              (typeof delimiter === "undefined" ? ":" : delimiter) +
              namespace
          );
        }
        /**
         * Enables a debug mode by namespaces. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} namespaces
         * @api public
         */

        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.names = [];
          createDebug.skips = [];
          var i;
          var split = (typeof namespaces === "string" ? namespaces : "").split(
            /[\s,]+/
          );
          var len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              // ignore empty strings
              continue;
            }

            namespaces = split[i].replace(/\*/g, ".*?");

            if (namespaces[0] === "-") {
              createDebug.skips.push(
                new RegExp("^" + namespaces.substr(1) + "$")
              );
            } else {
              createDebug.names.push(new RegExp("^" + namespaces + "$"));
            }
          }

          for (i = 0; i < createDebug.instances.length; i++) {
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
          }
        }
        /**
         * Disable debug output.
         *
         * @api public
         */

        function disable() {
          createDebug.enable("");
        }
        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        function enabled(name) {
          if (name[name.length - 1] === "*") {
            return true;
          }

          var i;
          var len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
         * Coerce `val`.
         *
         * @param {Mixed} val
         * @return {Mixed}
         * @api private
         */

        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;

      /***/
    },

    /***/ 3475: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /**
       * Detect Electron renderer / nwjs process, which is node, but we should
       * treat as a browser.
       */
      if (
        typeof process === "undefined" ||
        process.type === "renderer" ||
        process.browser === true ||
        process.__nwjs
      ) {
        module.exports = __nccwpck_require__(2463);
      } else {
        module.exports = __nccwpck_require__(1126);
      }

      /***/
    },

    /***/ 1126: /***/ (module, exports, __nccwpck_require__) => {
      "use strict";

      /**
       * Module dependencies.
       */
      var tty = __nccwpck_require__(3867);

      var util = __nccwpck_require__(1669);
      /**
       * This is the Node.js implementation of `debug()`.
       */

      exports.init = init;
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      /**
       * Colors.
       */

      exports.colors = [6, 2, 3, 4, 5, 1];

      try {
        // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
        // eslint-disable-next-line import/no-extraneous-dependencies
        var supportsColor = __nccwpck_require__(436);

        if (
          supportsColor &&
          (supportsColor.stderr || supportsColor).level >= 2
        ) {
          exports.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
            63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
            113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
            197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
            214, 215, 220, 221,
          ];
        }
      } catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.

      /**
       * Build up the default `inspectOpts` object from the environment variables.
       *
       *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
       */

      exports.inspectOpts = Object.keys(process.env)
        .filter(function (key) {
          return /^debug_/i.test(key);
        })
        .reduce(function (obj, key) {
          // Camel-case
          var prop = key
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, function (_, k) {
              return k.toUpperCase();
            }); // Coerce string value into JS value

          var val = process.env[key];

          if (/^(yes|on|true|enabled)$/i.test(val)) {
            val = true;
          } else if (/^(no|off|false|disabled)$/i.test(val)) {
            val = false;
          } else if (val === "null") {
            val = null;
          } else {
            val = Number(val);
          }

          obj[prop] = val;
          return obj;
        }, {});
      /**
       * Is stdout a TTY? Colored output is enabled when `true`.
       */

      function useColors() {
        return "colors" in exports.inspectOpts
          ? Boolean(exports.inspectOpts.colors)
          : tty.isatty(process.stderr.fd);
      }
      /**
       * Adds ANSI color escape codes if enabled.
       *
       * @api public
       */

      function formatArgs(args) {
        var name = this.namespace,
          useColors = this.useColors;

        if (useColors) {
          var c = this.color;
          var colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
          var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
          args[0] = prefix + args[0].split("\n").join("\n" + prefix);
          args.push(
            colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m"
          );
        } else {
          args[0] = getDate() + name + " " + args[0];
        }
      }

      function getDate() {
        if (exports.inspectOpts.hideDate) {
          return "";
        }

        return new Date().toISOString() + " ";
      }
      /**
       * Invokes `util.format()` with the specified arguments and writes to stderr.
       */

      function log() {
        return process.stderr.write(util.format.apply(util, arguments) + "\n");
      }
      /**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */

      function save(namespaces) {
        if (namespaces) {
          process.env.DEBUG = namespaces;
        } else {
          // If you set a process.env field to null or undefined, it gets cast to the
          // string 'null' or 'undefined'. Just delete instead.
          delete process.env.DEBUG;
        }
      }
      /**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */

      function load() {
        return process.env.DEBUG;
      }
      /**
       * Init logic for `debug` instances.
       *
       * Create a new `inspectOpts` object in case `useColors` is set
       * differently for a particular `debug` instance.
       */

      function init(debug) {
        debug.inspectOpts = {};
        var keys = Object.keys(exports.inspectOpts);

        for (var i = 0; i < keys.length; i++) {
          debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
        }
      }

      module.exports = __nccwpck_require__(4418)(exports);
      var formatters = module.exports.formatters;
      /**
       * Map %o to `util.inspect()`, all on a single line.
       */

      formatters.o = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util
          .inspect(v, this.inspectOpts)
          .split("\n")
          .map(function (str) {
            return str.trim();
          })
          .join(" ");
      };
      /**
       * Map %O to `util.inspect()`, allowing multiple lines if needed.
       */

      formatters.O = function (v) {
        this.inspectOpts.colors = this.useColors;
        return util.inspect(v, this.inspectOpts);
      };

      /***/
    },

    /***/ 9978: /***/ (module) => {
      /**
       * Helpers.
       */

      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;

      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(val)
        );
      };

      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            str
          );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return undefined;
        }
      }

      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }

      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }

      /**
       * Pluralization helper.
       */

      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }

      /***/
    },

    /***/ 142: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ProbeError = __nccwpck_require__(1252).ProbeError;
      var needle = __nccwpck_require__(7761);
      var lodashMerge = __nccwpck_require__(588);
      var pkg = __nccwpck_require__(2510);
      var probeStream = __nccwpck_require__(7422);
      var URL = __nccwpck_require__(8835).URL;

      var defaultAgent =
        pkg.name +
        "/" +
        pkg.version +
        "(+https://github.com/nodeca/probe-image-size)";

      var defaults = {
        open_timeout: 10000,
        response_timeout: 60000,
        read_timeout: 60000,
        follow_max: 10,
        parse_response: false,
        // Use to ignore bad certificates.
        //rejectUnauthorized: false,
        headers: {
          "User-Agent": defaultAgent,
        },
      };

      module.exports = function probeHttp(src, options) {
        return new Promise(function (resolve, reject) {
          var stream,
            len,
            finalUrl = src;

          try {
            var needleOptions = lodashMerge({}, defaults, options);
            stream = needle.get(src, needleOptions);
          } catch (err) {
            reject(err);
            return;
          }

          stream.on("redirect", function (location) {
            finalUrl = new URL(location, finalUrl).href;
          });

          stream.on("header", function (statusCode, headers) {
            if (statusCode !== 200) {
              reject(
                new ProbeError(
                  "bad status code: " + statusCode,
                  null,
                  statusCode
                )
              );
              stream.request.abort();
              return;
            }

            len = headers["content-length"];
          });

          stream.on("err", function (err) {
            reject(err);
            stream.request.abort();
          });

          probeStream(stream, true)
            .then(function (result) {
              if (len && len.match(/^\d+$/)) result.length = +len;

              result.url = finalUrl;

              resolve(result);
              stream.request.abort();
            })
            .catch(function (err) {
              reject(err);
              stream.request.abort();
            });
        });
      };

      module.exports.parsers = __nccwpck_require__(7186);

      /***/
    },

    /***/ 1752: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var probeStream = __nccwpck_require__(7422);
      var probeHttp = __nccwpck_require__(142);

      /* eslint-disable consistent-return */

      module.exports = function get_image_size(src, options) {
        if (typeof src.on === "function" && typeof src.emit === "function") {
          // looks like an EventEmitter, treating it as a stream
          return probeStream(src, options);
        }

        // HTTP (not stream)
        return probeHttp(src, options || {});
      };

      module.exports.parsers = __nccwpck_require__(7186);
      module.exports.sync = __nccwpck_require__(4970);
      module.exports.Error = __nccwpck_require__(1252).ProbeError;

      /***/
    },

    /***/ 1252: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var Transform = __nccwpck_require__(2413).Transform;
      var streamParser = __nccwpck_require__(2663);

      function ParserStream() {
        Transform.call(this, { readableObjectMode: true });
      }

      // Inherit from Transform
      ParserStream.prototype = Object.create(Transform.prototype);
      ParserStream.prototype.constructor = ParserStream;

      streamParser(ParserStream.prototype);

      exports.xi = ParserStream;

      exports.OF = function (src, start, dest) {
        for (var i = start, j = 0; j < dest.length; ) {
          if (src[i++] !== dest[j++]) return false;
        }
        return true;
      };

      exports.eG = function (str, format) {
        var arr = [],
          i = 0;

        if (format && format === "hex") {
          while (i < str.length) {
            arr.push(parseInt(str.slice(i, i + 2), 16));
            i += 2;
          }
        } else {
          for (; i < str.length; i++) {
            /* eslint-disable no-bitwise */
            arr.push(str.charCodeAt(i) & 0xff);
          }
        }

        return arr;
      };

      exports.mP = function (data, offset) {
        return data[offset] | (data[offset + 1] << 8);
      };

      exports.n8 = function (data, offset) {
        return data[offset + 1] | (data[offset] << 8);
      };

      exports.nm = function (data, offset) {
        return (
          data[offset] |
          (data[offset + 1] << 8) |
          (data[offset + 2] << 16) |
          (data[offset + 3] * 0x1000000)
        );
      };

      exports.Ag = function (data, offset) {
        return (
          data[offset + 3] |
          (data[offset + 2] << 8) |
          (data[offset + 1] << 16) |
          (data[offset] * 0x1000000)
        );
      };

      function ProbeError(message, code, statusCode) {
        Error.call(this);
        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.message = message;
        if (code) this.code = code;
        if (statusCode) this.statusCode = statusCode;
      }

      // Inherit from Error
      ProbeError.prototype = Object.create(Error.prototype);
      ProbeError.prototype.constructor = ProbeError;

      exports.ProbeError = ProbeError;

      /***/
    },

    /***/ 8407: /***/ (module) => {
      "use strict";

      /* eslint-disable no-bitwise */
      /* eslint-disable consistent-return */

      //////////////////////////////////////////////////////////////////////////
      // Helpers
      //
      function error(message, code) {
        var err = new Error(message);
        err.code = code;
        return err;
      }

      function utf8_decode(str) {
        try {
          return decodeURIComponent(escape(str));
        } catch (_) {
          return str;
        }
      }

      //////////////////////////////////////////////////////////////////////////
      // Exif parser
      //
      // Input:
      //  - jpeg_bin:   Uint8Array - jpeg file
      //  - exif_start: Number     - start of TIFF header (after Exif\0\0)
      //  - exif_end:   Number     - end of Exif segment
      //  - on_entry:   Number     - callback
      //
      function ExifParser(jpeg_bin, exif_start, exif_end) {
        // Uint8Array, exif without signature (which isn't included in offsets)
        this.input = jpeg_bin.subarray(exif_start, exif_end);

        // offset correction for `on_entry` callback
        this.start = exif_start;

        // Check TIFF header (includes byte alignment and first IFD offset)
        var sig = String.fromCharCode.apply(null, this.input.subarray(0, 4));

        if (sig !== "II\x2A\0" && sig !== "MM\0\x2A") {
          throw error("invalid TIFF signature", "EBADDATA");
        }

        // true if motorola (big endian) byte alignment, false if intel
        this.big_endian = sig[0] === "M";
      }

      ExifParser.prototype.each = function (on_entry) {
        // allow premature exit
        this.aborted = false;

        var offset = this.read_uint32(4);

        this.ifds_to_read = [
          {
            id: 0,
            offset: offset,
          },
        ];

        while (this.ifds_to_read.length > 0 && !this.aborted) {
          var i = this.ifds_to_read.shift();
          if (!i.offset) continue;
          this.scan_ifd(i.id, i.offset, on_entry);
        }
      };

      ExifParser.prototype.read_uint16 = function (offset) {
        var d = this.input;
        if (offset + 2 > d.length) throw error("unexpected EOF", "EBADDATA");

        return this.big_endian
          ? d[offset] * 0x100 + d[offset + 1]
          : d[offset] + d[offset + 1] * 0x100;
      };

      ExifParser.prototype.read_uint32 = function (offset) {
        var d = this.input;
        if (offset + 4 > d.length) throw error("unexpected EOF", "EBADDATA");

        return this.big_endian
          ? d[offset] * 0x1000000 +
              d[offset + 1] * 0x10000 +
              d[offset + 2] * 0x100 +
              d[offset + 3]
          : d[offset] +
              d[offset + 1] * 0x100 +
              d[offset + 2] * 0x10000 +
              d[offset + 3] * 0x1000000;
      };

      ExifParser.prototype.is_subifd_link = function (ifd, tag) {
        return (
          (ifd === 0 && tag === 0x8769) || // SubIFD
          (ifd === 0 && tag === 0x8825) || // GPS Info
          (ifd === 0x8769 && tag === 0xa005)
        ); // Interop IFD
      };

      // Returns byte length of a single component of a given format
      //
      ExifParser.prototype.exif_format_length = function (format) {
        switch (format) {
          case 1: // byte
          case 2: // ascii
          case 6: // sbyte
          case 7: // undefined
            return 1;

          case 3: // short
          case 8: // sshort
            return 2;

          case 4: // long
          case 9: // slong
          case 11: // float
            return 4;

          case 5: // rational
          case 10: // srational
          case 12: // double
            return 8;

          default:
            // unknown type
            return 0;
        }
      };

      // Reads Exif data
      //
      ExifParser.prototype.exif_format_read = function (format, offset) {
        var v;

        switch (format) {
          case 1: // byte
          case 2: // ascii
            v = this.input[offset];
            return v;

          case 6: // sbyte
            v = this.input[offset];
            return v | ((v & 0x80) * 0x1fffffe);

          case 3: // short
            v = this.read_uint16(offset);
            return v;

          case 8: // sshort
            v = this.read_uint16(offset);
            return v | ((v & 0x8000) * 0x1fffe);

          case 4: // long
            v = this.read_uint32(offset);
            return v;

          case 9: // slong
            v = this.read_uint32(offset);
            return v | 0;

          case 5: // rational
          case 10: // srational
          case 11: // float
          case 12: // double
            return null; // not implemented

          case 7: // undefined
            return null; // blob

          default:
            // unknown type
            return null;
        }
      };

      ExifParser.prototype.scan_ifd = function (ifd_no, offset, on_entry) {
        var entry_count = this.read_uint16(offset);

        offset += 2;

        for (var i = 0; i < entry_count; i++) {
          var tag = this.read_uint16(offset);
          var format = this.read_uint16(offset + 2);
          var count = this.read_uint32(offset + 4);

          var comp_length = this.exif_format_length(format);
          var data_length = count * comp_length;
          var data_offset =
            data_length <= 4 ? offset + 8 : this.read_uint32(offset + 8);
          var is_subifd_link = false;

          if (data_offset + data_length > this.input.length) {
            throw error("unexpected EOF", "EBADDATA");
          }

          var value = [];
          var comp_offset = data_offset;

          for (var j = 0; j < count; j++, comp_offset += comp_length) {
            var item = this.exif_format_read(format, comp_offset);
            if (item === null) {
              value = null;
              break;
            }
            value.push(item);
          }

          if (Array.isArray(value) && format === 2) {
            value = utf8_decode(String.fromCharCode.apply(null, value));
            if (value && value[value.length - 1] === "\0")
              value = value.slice(0, -1);
          }

          if (this.is_subifd_link(ifd_no, tag)) {
            if (
              Array.isArray(value) &&
              Number.isInteger(value[0]) &&
              value[0] > 0
            ) {
              this.ifds_to_read.push({
                id: tag,
                offset: value[0],
              });
              is_subifd_link = true;
            }
          }

          var entry = {
            is_big_endian: this.big_endian,
            ifd: ifd_no,
            tag: tag,
            format: format,
            count: count,
            entry_offset: offset + this.start,
            data_length: data_length,
            data_offset: data_offset + this.start,
            value: value,
            is_subifd_link: is_subifd_link,
          };

          if (on_entry(entry) === false) {
            this.aborted = true;
            return;
          }

          offset += 12;
        }

        if (ifd_no === 0) {
          this.ifds_to_read.push({
            id: 1,
            offset: this.read_uint32(offset),
          });
        }
      };

      module.exports.ExifParser = ExifParser;

      // returns orientation stored in Exif (1-8), 0 if none was found, -1 if error
      module.exports.get_orientation = function (data) {
        var orientation = 0;
        try {
          new ExifParser(data, 0, data.length).each(function (entry) {
            if (
              entry.ifd === 0 &&
              entry.tag === 0x112 &&
              Array.isArray(entry.value)
            ) {
              orientation = entry.value[0];
              return false;
            }
          });
          return orientation;
        } catch (err) {
          return -1;
        }
      };

      /***/
    },

    /***/ 1306: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Utils used to parse miaf-based files (avif/heic/heif)
      //
      // ISO media file spec:
      // https://web.archive.org/web/20180219054429/http://l.web.umkc.edu/lizhu/teaching/2016sp.video-communication/ref/mp4.pdf
      //
      // ISO image file format spec:
      // https://standards.iso.org/ittf/PubliclyAvailableStandards/c066067_ISO_IEC_23008-12_2017.zip
      //

      /* eslint-disable consistent-return */
      /* eslint-disable no-bitwise */

      var readUInt16BE = __nccwpck_require__(1252) /* .readUInt16BE */.n8;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;

      /*
       * interface Box {
       *   size:       uint32;   // if size == 0, box lasts until EOF
       *   boxtype:    char[4];
       *   largesize?: uint64;   // only if size == 1
       *   usertype?:  char[16]; // only if boxtype == 'uuid'
       * }
       */
      function unbox(data, offset) {
        if (data.length < 4 + offset) return null;

        var size = readUInt32BE(data, offset);

        // size includes first 4 bytes (length)
        if (data.length < size + offset || size < 8) return null;

        // if size === 1, real size is following uint64 (only for big boxes, not needed)
        // if size === 0, real size is until the end of the file (only for big boxes, not needed)

        return {
          boxtype: String.fromCharCode.apply(
            null,
            data.slice(offset + 4, offset + 8)
          ),
          data: data.slice(offset + 8, offset + size),
          end: offset + size,
        };
      }

      module.exports.unbox = unbox;

      // parses `meta` -> `iprp` -> `ipco` box, returns:
      // {
      //   sizes: [ { width, height } ],
      //   transforms: [ { type, value } ]
      // }
      function scan_ipco(data, sandbox) {
        var offset = 0;

        for (;;) {
          var box = unbox(data, offset);
          if (!box) break;

          switch (box.boxtype) {
            case "ispe":
              sandbox.sizes.push({
                width: readUInt32BE(box.data, 4),
                height: readUInt32BE(box.data, 8),
              });
              break;

            case "irot":
              sandbox.transforms.push({
                type: "irot",
                value: box.data[0] & 3,
              });
              break;

            case "imir":
              sandbox.transforms.push({
                type: "imir",
                value: box.data[0] & 1,
              });
              break;
          }

          offset = box.end;
        }
      }

      function readUIntBE(data, offset, size) {
        var result = 0;

        for (var i = 0; i < size; i++) {
          result = result * 256 + (data[offset + i] || 0);
        }

        return result;
      }

      // parses `meta` -> `iloc` box
      function scan_iloc(data, sandbox) {
        var offset_size = (data[4] >> 4) & 0xf;
        var length_size = data[4] & 0xf;
        var base_offset_size = (data[5] >> 4) & 0xf;
        var item_count = readUInt16BE(data, 6);
        var offset = 8;

        for (var i = 0; i < item_count; i++) {
          var item_ID = readUInt16BE(data, offset);
          offset += 2;

          var data_reference_index = readUInt16BE(data, offset);
          offset += 2;

          var base_offset = readUIntBE(data, offset, base_offset_size);
          offset += base_offset_size;

          var extent_count = readUInt16BE(data, offset);
          offset += 2;

          if (data_reference_index === 0 && extent_count === 1) {
            var first_extent_offset = readUIntBE(data, offset, offset_size);
            var first_extent_length = readUIntBE(
              data,
              offset + offset_size,
              length_size
            );
            sandbox.item_loc[item_ID] = {
              length: first_extent_length,
              offset: first_extent_offset + base_offset,
            };
          }

          offset += extent_count * (offset_size + length_size);
        }
      }

      // parses `meta` -> `iinf` box
      function scan_iinf(data, sandbox) {
        var item_count = readUInt16BE(data, 4);
        var offset = 6;

        for (var i = 0; i < item_count; i++) {
          var box = unbox(data, offset);
          if (!box) break;
          if (box.boxtype === "infe") {
            var item_id = readUInt16BE(box.data, 4);
            var item_name = "";

            for (var pos = 8; pos < box.data.length && box.data[pos]; pos++) {
              item_name += String.fromCharCode(box.data[pos]);
            }

            sandbox.item_inf[item_name] = item_id;
          }
          offset = box.end;
        }
      }

      // parses `meta` -> `iprp` box
      function scan_iprp(data, sandbox) {
        var offset = 0;

        for (;;) {
          var box = unbox(data, offset);
          if (!box) break;
          if (box.boxtype === "ipco") scan_ipco(box.data, sandbox);
          offset = box.end;
        }
      }

      // parses `meta` box
      function scan_meta(data, sandbox) {
        var offset = 4; // version + flags

        for (;;) {
          var box = unbox(data, offset);
          if (!box) break;
          if (box.boxtype === "iprp") scan_iprp(box.data, sandbox);
          if (box.boxtype === "iloc") scan_iloc(box.data, sandbox);
          if (box.boxtype === "iinf") scan_iinf(box.data, sandbox);
          offset = box.end;
        }
      }

      // get image with largest single dimension as base
      function getMaxSize(sizes) {
        var maxWidthSize = sizes.reduce(function (a, b) {
          return a.width > b.width ||
            (a.width === b.width && a.height > b.height)
            ? a
            : b;
        });

        var maxHeightSize = sizes.reduce(function (a, b) {
          return a.height > b.height ||
            (a.height === b.height && a.width > b.width)
            ? a
            : b;
        });

        var maxSize;

        if (
          maxWidthSize.width > maxHeightSize.height ||
          (maxWidthSize.width === maxHeightSize.height &&
            maxWidthSize.height > maxHeightSize.width)
        ) {
          maxSize = maxWidthSize;
        } else {
          maxSize = maxHeightSize;
        }

        return maxSize;
      }

      module.exports.readSizeFromMeta = function (data) {
        var sandbox = {
          sizes: [],
          transforms: [],
          item_inf: {},
          item_loc: {},
        };

        scan_meta(data, sandbox);

        if (!sandbox.sizes.length) return;

        var maxSize = getMaxSize(sandbox.sizes);

        var orientation = 1;

        // convert imir/irot to exif orientation
        sandbox.transforms.forEach(function (transform) {
          var rotate_ccw = { 1: 6, 2: 5, 3: 8, 4: 7, 5: 4, 6: 3, 7: 2, 8: 1 };
          var mirror_vert = { 1: 4, 2: 3, 3: 2, 4: 1, 5: 6, 6: 5, 7: 8, 8: 7 };

          if (transform.type === "imir") {
            if (transform.value === 0) {
              // vertical flip
              orientation = mirror_vert[orientation];
            } else {
              // horizontal flip = vertical flip + 180 deg rotation
              orientation = mirror_vert[orientation];
              orientation = rotate_ccw[orientation];
              orientation = rotate_ccw[orientation];
            }
          }

          if (transform.type === "irot") {
            // counter-clockwise rotation 90 deg 0-3 times
            for (var i = 0; i < transform.value; i++) {
              orientation = rotate_ccw[orientation];
            }
          }
        });

        var exif_location = null;

        if (sandbox.item_inf.Exif) {
          exif_location = sandbox.item_loc[sandbox.item_inf.Exif];
        }

        return {
          width: maxSize.width,
          height: maxSize.height,
          orientation: sandbox.transforms.length ? orientation : null,
          variants: sandbox.sizes,
          exif_location: exif_location,
        };
      };

      module.exports.getMimeType = function (data) {
        var brand = String.fromCharCode.apply(null, data.slice(0, 4));
        var compat = {};

        compat[brand] = true;

        for (var i = 8; i < data.length; i += 4) {
          compat[String.fromCharCode.apply(null, data.slice(i, i + 4))] = true;
        }

        // heic and avif are superset of miaf, so they should all list mif1 as compatible
        if (!compat.mif1 && !compat.msf1 && !compat.miaf) return;

        if (brand === "avif" || brand === "avis" || brand === "avio") {
          // `.avifs` and `image/avif-sequence` are removed from spec, all files have single type
          return { type: "avif", mime: "image/avif" };
        }

        // https://nokiatech.github.io/heif/technical.html
        if (brand === "heic" || brand === "heix") {
          return { type: "heic", mime: "image/heic" };
        }

        if (brand === "hevc" || brand === "hevx") {
          return { type: "heic", mime: "image/heic-sequence" };
        }

        if (compat.avif || compat.avis) {
          return { type: "avif", mime: "image/avif" };
        }

        if (
          compat.heic ||
          compat.heix ||
          compat.hevc ||
          compat.hevx ||
          compat.heis
        ) {
          if (compat.msf1) {
            return { type: "heif", mime: "image/heif-sequence" };
          }
          return { type: "heif", mime: "image/heif" };
        }

        return { type: "avif", mime: "image/avif" };
      };

      /***/
    },

    /***/ 8302: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Utils used to parse miaf-based files (avif/heic/heif)
      //
      //  - image collections are not supported (only last size is reported)
      //  - images with metadata encoded after image data are not supported
      //  - images without any `ispe` box are not supported
      //

      /* eslint-disable consistent-return */

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;
      var miaf = __nccwpck_require__(1306);
      var exif = __nccwpck_require__(8407);

      var SIG_FTYP = str2arr("ftyp");

      function safeSkip(parser, count, callback) {
        if (count === 0) {
          // parser._skipBytes throws error if count === 0
          callback();
          return;
        }

        parser._skipBytes(count, callback);
      }

      function readExifOrientation(parser, sandbox, callback) {
        if (
          !sandbox.exif_location ||
          sandbox.exif_location.offset <= sandbox.offset
        ) {
          callback(0);
          return;
        }

        parser._skipBytes(
          sandbox.exif_location.offset - sandbox.offset,
          function () {
            sandbox.offset = sandbox.exif_location.offset;

            parser._bytes(4, function (data) {
              sandbox.offset += 4;
              var sig_offset = readUInt32BE(data, 0);

              safeSkip(parser, sig_offset, function () {
                sandbox.offset += sig_offset;
                var byteCount = sandbox.exif_location.length - sig_offset - 4;

                if (byteCount <= 0) {
                  callback(0);
                  return;
                }

                parser._bytes(byteCount, function (exif_data) {
                  sandbox.offset += byteCount;
                  callback(exif.get_orientation(exif_data));
                });
              });
            });
          }
        );
      }

      // sandbox is a storage for intermediate data retrieved from jpeg while parsing it
      function readAvifSize(parser, sandbox) {
        parser._bytes(8, function (data) {
          sandbox.offset += 8;
          var size = readUInt32BE(data, 0) - 8;
          var type = String.fromCharCode.apply(null, data.slice(4, 8));

          if (type === "mdat") {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          } else if (size < 0) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          } else if (type === "meta" && size > 0) {
            parser._bytes(size, function (data) {
              sandbox.offset += size;
              var imgSize = miaf.readSizeFromMeta(data);

              if (!imgSize) {
                parser._skipBytes(Infinity);
                parser.push(null);
                return;
              }

              var result = {
                width: imgSize.width,
                height: imgSize.height,
                type: sandbox.fileType.type,
                mime: sandbox.fileType.mime,
                wUnits: "px",
                hUnits: "px",
              };

              if (imgSize.variants.length > 1) {
                result.variants = imgSize.variants;
              }

              if (imgSize.orientation) {
                result.orientation = imgSize.orientation;
              }

              sandbox.exif_location = imgSize.exif_location;

              readExifOrientation(parser, sandbox, function (orientation) {
                if (orientation > 0) result.orientation = orientation;

                parser._skipBytes(Infinity);
                parser.push(result);
                parser.push(null);
              });
            });
          } else {
            safeSkip(parser, size, function () {
              sandbox.offset += size;
              readAvifSize(parser, sandbox);
            });
          }
        });
      }

      module.exports = function () {
        var parser = new ParserStream();
        var sandbox = { offset: 0, fileType: null };

        parser._bytes(8, function (data) {
          sandbox.offset += 8;
          if (!sliceEq(data, 4, SIG_FTYP)) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          var size = readUInt32BE(data, 0) - 8;

          if (size <= 0) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          parser._bytes(size, function (data) {
            sandbox.offset += size;
            sandbox.fileType = miaf.getMimeType(data);

            if (!sandbox.fileType) {
              parser._skipBytes(Infinity);
              parser.push(null);
              return;
            }

            readAvifSize(parser, sandbox);
          });
        });

        return parser;
      };

      /***/
    },

    /***/ 3379: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;

      var SIG_BM = str2arr("BM");

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(26, function (data) {
          parser._skipBytes(Infinity);

          if (!sliceEq(data, 0, SIG_BM)) {
            parser.push(null);
            return;
          }

          parser.push({
            width: data.readUInt16LE(18),
            height: data.readUInt16LE(22),
            type: "bmp",
            mime: "image/bmp",
            wUnits: "px",
            hUnits: "px",
          });

          parser.push(null);
        });

        return parser;
      };

      /***/
    },

    /***/ 9411: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;

      var SIG_GIF87a = str2arr("GIF87a");
      var SIG_GIF89a = str2arr("GIF89a");

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(10, function (data) {
          parser._skipBytes(Infinity);

          if (!sliceEq(data, 0, SIG_GIF87a) && !sliceEq(data, 0, SIG_GIF89a)) {
            parser.push(null);
            return;
          }

          parser.push({
            width: data.readUInt16LE(6),
            height: data.readUInt16LE(8),
            type: "gif",
            mime: "image/gif",
            wUnits: "px",
            hUnits: "px",
          });

          parser.push(null);
        });

        return parser;
      };

      /***/
    },

    /***/ 2248: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;

      var HEADER = 0;
      var TYPE_ICO = 1;
      var INDEX_SIZE = 16;

      // Format specification:
      // https://en.wikipedia.org/wiki/ICO_(file_format)#Icon_resource_structure
      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(6, function (data) {
          var header = data.readUInt16LE(0);
          var type = data.readUInt16LE(2);
          var numImages = data.readUInt16LE(4);

          if (header !== HEADER || type !== TYPE_ICO || !numImages) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          parser._bytes(numImages * INDEX_SIZE, function (indexData) {
            parser._skipBytes(Infinity);

            var variants = [];
            var maxSize = { width: 0, height: 0 };

            for (var i = 0; i < numImages; i++) {
              var width = indexData.readUInt8(INDEX_SIZE * i + 0) || 256;
              var height = indexData.readUInt8(INDEX_SIZE * i + 1) || 256;
              var size = { width: width, height: height };
              variants.push(size);

              if (width > maxSize.width || height > maxSize.height) {
                maxSize = size;
              }
            }

            parser.push({
              width: maxSize.width,
              height: maxSize.height,
              variants: variants,
              type: "ico",
              mime: "image/x-icon",
              wUnits: "px",
              hUnits: "px",
            });
            parser.push(null);
          });
        });

        return parser;
      };

      /***/
    },

    /***/ 4114: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var exif = __nccwpck_require__(8407);

      var SIG_EXIF = str2arr("Exif\0\0");

      // part of parseJpegMarker called after skipping initial FF
      function parseJpegMarker_afterFF(parser, callback) {
        parser._bytes(1, function (data) {
          var code = data[0];

          if (code === 0xff) {
            // padding byte, skip it
            parseJpegMarker_afterFF(parser, callback);
            return;
          }

          // standalone markers, according to JPEG 1992,
          // http://www.w3.org/Graphics/JPEG/itu-t81.pdf, see Table B.1
          if ((0xd0 <= code && code <= 0xd9) || code === 0x01) {
            callback(code, 0);
            return;
          }

          // the rest of the unreserved markers
          if (0xc0 <= code && code <= 0xfe) {
            parser._bytes(2, function (length) {
              callback(code, length.readUInt16BE(0) - 2);
            });
            return;
          }

          // unknown markers
          callback();
        });
      }

      function parseJpegMarker(parser, callback) {
        parser._bytes(1, function (data) {
          if (data[0] !== 0xff) {
            // not a JPEG marker
            callback();
            return;
          }

          parseJpegMarker_afterFF(parser, callback);
        });
      }

      // sandbox is a storage for intermediate data retrieved from jpeg while parsing it
      function getJpegSize(parser, sandbox) {
        parseJpegMarker(parser, function (code, length) {
          if (!code || length < 0) {
            // invalid jpeg
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          if (code === 0xd9 /* EOI */ || code === 0xda /* SOS */) {
            // end of the datastream
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          // try to get orientation from Exif segment
          if (code === 0xe1 && length >= 10) {
            parser._bytes(length, function (data) {
              if (sliceEq(data, 0, SIG_EXIF)) {
                sandbox.orientation = exif.get_orientation(
                  data.slice(6, 6 + length)
                );
              }

              getJpegSize(parser, sandbox);
            });
            return;
          }

          if (length <= 0) {
            // e.g. empty comment
            getJpegSize(parser, sandbox);
            return;
          }

          if (
            length >= 5 &&
            0xc0 <= code &&
            code <= 0xcf &&
            code !== 0xc4 &&
            code !== 0xc8 &&
            code !== 0xcc
          ) {
            parser._bytes(length, function (data) {
              parser._skipBytes(Infinity);

              var result = {
                width: data.readUInt16BE(3),
                height: data.readUInt16BE(1),
                type: "jpg",
                mime: "image/jpeg",
                wUnits: "px",
                hUnits: "px",
              };

              if (sandbox.orientation > 0)
                result.orientation = sandbox.orientation;

              parser.push(result);
              parser.push(null);
            });
            return;
          }

          parser._skipBytes(length, function () {
            getJpegSize(parser, sandbox);
          });
        });
      }

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(2, function (data) {
          if (data[0] !== 0xff || data[1] !== 0xd8) {
            // first marker of the file MUST be 0xFFD8
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          getJpegSize(parser, {});
        });

        return parser;
      };

      /***/
    },

    /***/ 3363: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;

      var SIG_PNG = str2arr("\x89PNG\r\n\x1a\n");
      var SIG_IHDR = str2arr("IHDR");

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(24, function (data) {
          parser._skipBytes(Infinity);

          // check PNG signature
          if (!sliceEq(data, 0, SIG_PNG)) {
            parser.push(null);
            return;
          }

          // check that first chunk is IHDR
          if (!sliceEq(data, 12, SIG_IHDR)) {
            parser.push(null);
            return;
          }

          parser.push({
            width: data.readUInt32BE(16),
            height: data.readUInt32BE(20),
            type: "png",
            mime: "image/png",
            wUnits: "px",
            hUnits: "px",
          });

          parser.push(null);
        });

        return parser;
      };

      /***/
    },

    /***/ 8726: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;

      var SIG_8BPS = str2arr("8BPS\x00\x01");

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(6, function (data) {
          // signature + version
          if (!sliceEq(data, 0, SIG_8BPS)) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          parser._bytes(16, function (data) {
            parser._skipBytes(Infinity);

            parser.push({
              width: data.readUInt32BE(12),
              height: data.readUInt32BE(8),
              type: "psd",
              mime: "image/vnd.adobe.photoshop",
              wUnits: "px",
              hUnits: "px",
            });

            parser.push(null);
          });
        });

        return parser;
      };

      /***/
    },

    /***/ 3614: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var Transform = __nccwpck_require__(2413).Transform;

      var STATE_IDENTIFY = 0; // look for '<'
      var STATE_PARSE = 1; // extract width and height from svg tag
      var STATE_IGNORE = 2; // we got all the data we want, skip the rest

      // max size for pre-svg-tag comments plus svg tag itself
      var MAX_DATA_LENGTH = 65536;

      // skip `<?` (comments), `<!` (directives, cdata, doctype),
      // looking for `<svg>` or `<NAMESPACE:svg>`
      var SVG_HEADER_RE = /<[-_.:a-zA-Z0-9][^>]*>/;

      // test if the top level element is svg + optional namespace,
      // used to skip svg embedded in html
      var SVG_TAG_RE = /^<([-_.:a-zA-Z0-9]+:)?svg\s/;

      var SVG_WIDTH_RE = /[^-]\bwidth="([^%]+?)"|[^-]\bwidth='([^%]+?)'/;
      var SVG_HEIGHT_RE = /\bheight="([^%]+?)"|\bheight='([^%]+?)'/;
      var SVG_VIEWBOX_RE = /\bview[bB]ox="(.+?)"|\bview[bB]ox='(.+?)'/;
      var SVG_UNITS_RE = /in$|mm$|cm$|pt$|pc$|px$|em$|ex$/;

      function isWhiteSpace(chr) {
        return chr === 0x20 || chr === 0x09 || chr === 0x0d || chr === 0x0a;
      }

      // Filter NaN, Infinity, < 0
      function isFinitePositive(val) {
        return typeof val === "number" && isFinite(val) && val > 0;
      }

      function svgAttrs(str) {
        var width = str.match(SVG_WIDTH_RE);
        var height = str.match(SVG_HEIGHT_RE);
        var viewbox = str.match(SVG_VIEWBOX_RE);

        return {
          width: width && (width[1] || width[2]),
          height: height && (height[1] || height[2]),
          viewbox: viewbox && (viewbox[1] || viewbox[2]),
        };
      }

      function units(str) {
        if (!SVG_UNITS_RE.test(str)) return "px";

        return str.match(SVG_UNITS_RE)[0];
      }

      function parseSvg(str) {
        // get top level element
        var svgTag = (str.match(SVG_HEADER_RE) || [""])[0];

        // test if top level element is <svg>
        if (!SVG_TAG_RE.test(svgTag)) return;

        var attrs = svgAttrs(svgTag);
        var width = parseFloat(attrs.width);
        var height = parseFloat(attrs.height);

        // Extract from direct values

        if (attrs.width && attrs.height) {
          if (!isFinitePositive(width) || !isFinitePositive(height)) return;

          return {
            width: width,
            height: height,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.width),
            hUnits: units(attrs.height),
          };
        }

        // Extract from viewbox

        var parts = (attrs.viewbox || "").split(" ");
        var viewbox = {
          width: parts[2],
          height: parts[3],
        };
        var vbWidth = parseFloat(viewbox.width);
        var vbHeight = parseFloat(viewbox.height);

        if (!isFinitePositive(vbWidth) || !isFinitePositive(vbHeight)) return;
        if (units(viewbox.width) !== units(viewbox.height)) return;

        var ratio = vbWidth / vbHeight;

        if (attrs.width) {
          if (!isFinitePositive(width)) return;

          return {
            width: width,
            height: width / ratio,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.width),
            hUnits: units(attrs.width),
          };
        }

        if (attrs.height) {
          if (!isFinitePositive(height)) return;

          return {
            width: height * ratio,
            height: height,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.height),
            hUnits: units(attrs.height),
          };
        }

        return {
          width: vbWidth,
          height: vbHeight,
          type: "svg",
          mime: "image/svg+xml",
          wUnits: units(viewbox.width),
          hUnits: units(viewbox.height),
        };
      }

      module.exports = function () {
        var state = STATE_IDENTIFY;
        var data_len = 0;
        var str = "";
        var buf = null; // used to manage first chunk in IDENTIFY

        var parser = new Transform({
          readableObjectMode: true,
          transform: function transform(chunk, encoding, next) {
            switch (state) {
              // identify step is needed to fail fast if the file isn't SVG
              case STATE_IDENTIFY:
                if (buf) {
                  // make sure that first chunk is at least 4 bytes (to do BOM skip later),
                  // last chunk was small
                  chunk = Buffer.concat([buf, chunk]);
                  buf = null;
                }

                if (data_len === 0 && chunk.length < 4) {
                  // make sure that first chunk is at least 4 bytes (to do BOM skip later),
                  // current chunk is small
                  buf = chunk;
                  break;
                }

                var i = 0,
                  max = chunk.length;

                // byte order mark, https://github.com/nodeca/probe-image-size/issues/57
                if (
                  data_len === 0 &&
                  chunk[0] === 0xef &&
                  chunk[1] === 0xbb &&
                  chunk[2] === 0xbf
                )
                  i = 3;

                while (i < max && isWhiteSpace(chunk[i])) i++;

                if (i >= max) {
                  data_len += chunk.length;

                  if (data_len > MAX_DATA_LENGTH) {
                    state = STATE_IGNORE;
                    parser.push(null);
                  }
                } else if (chunk[i] === 0x3c /* < */) {
                  state = STATE_PARSE;
                  return transform(chunk, encoding, next);
                } else {
                  state = STATE_IGNORE;
                  parser.push(null);
                }

                break;

              case STATE_PARSE:
                str += chunk.toString();

                var result = parseSvg(str);

                if (result) {
                  state = STATE_IGNORE;
                  parser.push(result);
                  parser.push(null);
                  break;
                }

                data_len += chunk.length;

                if (data_len > MAX_DATA_LENGTH) {
                  state = STATE_IGNORE;
                  parser.push(null);
                }

                break;
            }

            next();
          },

          flush: function () {
            state = STATE_IGNORE;
            parser.push(null);
          },
        });

        return parser;
      };

      /***/
    },

    /***/ 7103: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;

      var SIG_1 = str2arr("II\x2A\0");
      var SIG_2 = str2arr("MM\0\x2A");

      function readUInt16(buffer, offset, is_big_endian) {
        return is_big_endian
          ? buffer.readUInt16BE(offset)
          : buffer.readUInt16LE(offset);
      }

      function readUInt32(buffer, offset, is_big_endian) {
        return is_big_endian
          ? buffer.readUInt32BE(offset)
          : buffer.readUInt32LE(offset);
      }

      function readIFDValue(data, data_offset, is_big_endian) {
        var type = readUInt16(data, data_offset + 2, is_big_endian);
        var values = readUInt32(data, data_offset + 4, is_big_endian);

        if (values !== 1 || (type !== 3 && type !== 4)) {
          return null;
        }

        if (type === 3) {
          return readUInt16(data, data_offset + 8, is_big_endian);
        }

        return readUInt32(data, data_offset + 8, is_big_endian);
      }

      module.exports = function () {
        var parser = new ParserStream();

        // read header
        parser._bytes(8, function (data) {
          // check TIFF signature
          if (!sliceEq(data, 0, SIG_1) && !sliceEq(data, 0, SIG_2)) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          var is_big_endian = data[0] === 77 /* 'MM' */;
          var count = readUInt32(data, 4, is_big_endian) - 8;

          if (count < 0) {
            parser._skipBytes(Infinity);
            parser.push(null);
            return;
          }

          function safeSkip(parser, count, callback) {
            if (count === 0) {
              // parser._skipBytes throws error if count === 0
              callback();
              return;
            }

            parser._skipBytes(count, callback);
          }

          // skip until IFD
          safeSkip(parser, count, function () {
            // read number of IFD entries
            parser._bytes(2, function (data) {
              var ifd_size = readUInt16(data, 0, is_big_endian) * 12;

              if (ifd_size <= 0) {
                parser._skipBytes(Infinity);
                parser.push(null);
                return;
              }

              // read all IFD entries
              parser._bytes(ifd_size, function (data) {
                parser._skipBytes(Infinity);

                var i, width, height, tag;

                for (i = 0; i < ifd_size; i += 12) {
                  tag = readUInt16(data, i, is_big_endian);

                  if (tag === 256) {
                    width = readIFDValue(data, i, is_big_endian);
                  } else if (tag === 257) {
                    height = readIFDValue(data, i, is_big_endian);
                  }
                }

                if (width && height) {
                  parser.push({
                    width: width,
                    height: height,
                    type: "tiff",
                    mime: "image/tiff",
                    wUnits: "px",
                    hUnits: "px",
                  });
                }

                parser.push(null);
              });
            });
          });
        });

        return parser;
      };

      /***/
    },

    /***/ 5700: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable no-bitwise */
      /* eslint-disable no-use-before-define */

      var ParserStream = __nccwpck_require__(1252) /* .ParserStream */.xi;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var exif = __nccwpck_require__(8407);

      var SIG_RIFF = str2arr("RIFF");
      var SIG_WEBP = str2arr("WEBP");

      function safeSkip(parser, count, callback) {
        if (count === 0) {
          // parser._skipBytes throws error if count === 0
          callback();
          return;
        }

        parser._skipBytes(count, callback);
      }

      function parseVP8(parser, length, sandbox) {
        parser._bytes(10, function (data) {
          // check code block signature
          if (data[3] === 0x9d && data[4] === 0x01 && data[5] === 0x2a) {
            sandbox.result = sandbox.result || {
              width: data.readUInt16LE(6) & 0x3fff,
              height: data.readUInt16LE(8) & 0x3fff,
              type: "webp",
              mime: "image/webp",
              wUnits: "px",
              hUnits: "px",
            };
          }

          safeSkip(parser, length - 10, function () {
            sandbox.offset += length;
            getWebpSize(parser, sandbox);
          });
        });
      }

      function parseVP8L(parser, length, sandbox) {
        parser._bytes(5, function (data) {
          // check code block signature
          if (data[0] === 0x2f) {
            var bits = data.readUInt32LE(1);

            sandbox.result = sandbox.result || {
              width: (bits & 0x3fff) + 1,
              height: ((bits >> 14) & 0x3fff) + 1,
              type: "webp",
              mime: "image/webp",
              wUnits: "px",
              hUnits: "px",
            };
          }

          safeSkip(parser, length - 5, function () {
            sandbox.offset += length;
            getWebpSize(parser, sandbox);
          });
        });
      }

      function parseVP8X(parser, length, sandbox) {
        parser._bytes(10, function (data) {
          sandbox.result = sandbox.result || {
            // TODO: replace with `data.readUIntLE(8, 3) + 1`
            //       when 0.10 support is dropped
            width: ((data[6] << 16) | (data[5] << 8) | data[4]) + 1,
            height: ((data[9] << 16) | (data[8] << 8) | data[7]) + 1,
            type: "webp",
            mime: "image/webp",
            wUnits: "px",
            hUnits: "px",
          };

          safeSkip(parser, length - 10, function () {
            sandbox.offset += length;
            getWebpSize(parser, sandbox);
          });
        });
      }

      function parseExif(parser, length, sandbox) {
        parser._bytes(length, function (data) {
          // exif is the last chunk we care about, stop after it
          sandbox.offset = Infinity;
          sandbox.exif_orientation = exif.get_orientation(data);

          getWebpSize(parser, sandbox);
        });
      }

      function getWebpSize(parser, sandbox) {
        if (sandbox.fileLength - 8 <= sandbox.offset) {
          parser._skipBytes(Infinity);

          if (sandbox.result) {
            var result = sandbox.result;

            if (sandbox.exif_orientation > 0) {
              result.orientation = sandbox.exif_orientation;
            }

            parser.push(result);
          }

          parser.push(null);
          return;
        }

        parser._bytes(4 - sandbox.bufferedChunkHeader.length, function (data) {
          sandbox.offset += 4 - sandbox.bufferedChunkHeader.length;
          var header =
            sandbox.bufferedChunkHeader + String.fromCharCode.apply(null, data);

          // after each chunk of odd size there should be 0 byte of padding, skip those
          header = header.replace(/^\0+/, "");

          if (header.length < 4) {
            sandbox.bufferedChunkHeader = header;
            getWebpSize(parser, sandbox);
            return;
          }

          sandbox.bufferedChunkHeader = "";

          parser._bytes(4, function (data) {
            sandbox.offset += 4;
            var length = data.readUInt32LE(0);

            if (header === "VP8 " && length >= 10) {
              parseVP8(parser, length, sandbox);
            } else if (header === "VP8L" && length >= 5) {
              parseVP8L(parser, length, sandbox);
            } else if (header === "VP8X" && length >= 10) {
              parseVP8X(parser, length, sandbox);
            } else if (header === "EXIF" && length >= 4) {
              parseExif(parser, length, sandbox);
            } else {
              safeSkip(parser, length, function () {
                sandbox.offset += length;
                getWebpSize(parser, sandbox);
              });
            }
          });
        });
      }

      module.exports = function () {
        var parser = new ParserStream();

        parser._bytes(12, function (data) {
          // check /^RIFF....WEBPVP8([ LX])$/ signature
          if (sliceEq(data, 0, SIG_RIFF) && sliceEq(data, 8, SIG_WEBP)) {
            getWebpSize(parser, {
              fileLength: data.readUInt32LE(4) + 8,
              offset: 12,
              exif_orientation: 0,
              bufferedChunkHeader: "", // for dealing with padding
            });
          } else {
            parser._skipBytes(Infinity);
            parser.push(null);
          }
        });

        return parser;
      };

      /***/
    },

    /***/ 7750: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      // Utils used to parse miaf-based files (avif/heic/heif)
      //
      //  - image collections are not supported (only last size is reported)
      //  - images with metadata encoded after image data are not supported
      //  - images without any `ispe` box are not supported
      //

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;
      var miaf = __nccwpck_require__(1306);
      var exif = __nccwpck_require__(8407);

      var SIG_FTYP = str2arr("ftyp");

      module.exports = function (data) {
        // ISO media file (avif format) starts with ftyp box:
        // 0000 0020 6674 7970 6176 6966
        //  (length)  f t  y p  a v  i f
        //
        if (!sliceEq(data, 4, SIG_FTYP)) return;

        var firstBox = miaf.unbox(data, 0);
        if (!firstBox) return;

        var fileType = miaf.getMimeType(firstBox.data);
        if (!fileType) return;

        var meta,
          offset = firstBox.end;

        for (;;) {
          var box = miaf.unbox(data, offset);
          if (!box) break;
          offset = box.end;

          // mdat block SHOULD be last (but not strictly required),
          // so it's unlikely that metadata is after it
          if (box.boxtype === "mdat") return;
          if (box.boxtype === "meta") {
            meta = box.data;
            break;
          }
        }

        if (!meta) return;

        var imgSize = miaf.readSizeFromMeta(meta);

        if (!imgSize) return;

        var result = {
          width: imgSize.width,
          height: imgSize.height,
          type: fileType.type,
          mime: fileType.mime,
          wUnits: "px",
          hUnits: "px",
        };

        if (imgSize.variants.length > 1) {
          result.variants = imgSize.variants;
        }

        if (imgSize.orientation) {
          result.orientation = imgSize.orientation;
        }

        if (
          imgSize.exif_location &&
          imgSize.exif_location.offset + imgSize.exif_location.length <=
            data.length
        ) {
          var sig_offset = readUInt32BE(data, imgSize.exif_location.offset);
          var exif_data = data.slice(
            imgSize.exif_location.offset + sig_offset + 4,
            imgSize.exif_location.offset + imgSize.exif_location.length
          );

          var orientation = exif.get_orientation(exif_data);

          if (orientation > 0) result.orientation = orientation;
        }

        return result;
      };

      /***/
    },

    /***/ 1510: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt16LE = __nccwpck_require__(1252) /* .readUInt16LE */.mP;

      var SIG_BM = str2arr("BM");

      module.exports = function (data) {
        if (data.length < 26) return;

        if (!sliceEq(data, 0, SIG_BM)) return;

        return {
          width: readUInt16LE(data, 18),
          height: readUInt16LE(data, 22),
          type: "bmp",
          mime: "image/bmp",
          wUnits: "px",
          hUnits: "px",
        };
      };

      /***/
    },

    /***/ 7653: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt16LE = __nccwpck_require__(1252) /* .readUInt16LE */.mP;

      var SIG_GIF87a = str2arr("GIF87a");
      var SIG_GIF89a = str2arr("GIF89a");

      module.exports = function (data) {
        if (data.length < 10) return;

        if (!sliceEq(data, 0, SIG_GIF87a) && !sliceEq(data, 0, SIG_GIF89a))
          return;

        return {
          width: readUInt16LE(data, 6),
          height: readUInt16LE(data, 8),
          type: "gif",
          mime: "image/gif",
          wUnits: "px",
          hUnits: "px",
        };
      };

      /***/
    },

    /***/ 1047: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var readUInt16LE = __nccwpck_require__(1252) /* .readUInt16LE */.mP;

      var HEADER = 0;
      var TYPE_ICO = 1;
      var INDEX_SIZE = 16;

      // Format specification:
      // https://en.wikipedia.org/wiki/ICO_(file_format)#Icon_resource_structure
      module.exports = function (data) {
        var header = readUInt16LE(data, 0);
        var type = readUInt16LE(data, 2);
        var numImages = readUInt16LE(data, 4);

        if (header !== HEADER || type !== TYPE_ICO || !numImages) {
          return;
        }

        var variants = [];
        var maxSize = { width: 0, height: 0 };

        for (var i = 0; i < numImages; i++) {
          var width = data[6 + INDEX_SIZE * i] || 256;
          var height = data[6 + INDEX_SIZE * i + 1] || 256;
          var size = { width: width, height: height };
          variants.push(size);

          if (width > maxSize.width || height > maxSize.height) {
            maxSize = size;
          }
        }

        return {
          width: maxSize.width,
          height: maxSize.height,
          variants: variants,
          type: "ico",
          mime: "image/x-icon",
          wUnits: "px",
          hUnits: "px",
        };
      };

      /***/
    },

    /***/ 6816: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var readUInt16BE = __nccwpck_require__(1252) /* .readUInt16BE */.n8;
      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var exif = __nccwpck_require__(8407);

      var SIG_EXIF = str2arr("Exif\0\0");

      module.exports = function (data) {
        if (data.length < 2) return;

        // first marker of the file MUST be 0xFFD8
        if (data[0] !== 0xff || data[1] !== 0xd8) return;

        var offset = 2;

        for (;;) {
          if (data.length - offset < 2) return;
          // not a JPEG marker
          if (data[offset++] !== 0xff) return;

          var code = data[offset++];
          var length;

          // skip padding bytes
          while (code === 0xff) code = data[offset++];

          // standalone markers, according to JPEG 1992,
          // http://www.w3.org/Graphics/JPEG/itu-t81.pdf, see Table B.1
          if ((0xd0 <= code && code <= 0xd9) || code === 0x01) {
            length = 0;
          } else if (0xc0 <= code && code <= 0xfe) {
            // the rest of the unreserved markers
            if (data.length - offset < 2) return;

            length = readUInt16BE(data, offset) - 2;
            offset += 2;
          } else {
            // unknown markers
            return;
          }

          if (code === 0xd9 /* EOI */ || code === 0xda /* SOS */) {
            // end of the datastream
            return;
          }

          var orientation;

          // try to get orientation from Exif segment
          if (
            code === 0xe1 &&
            length >= 10 &&
            sliceEq(data, offset, SIG_EXIF)
          ) {
            orientation = exif.get_orientation(
              data.slice(offset + 6, offset + length)
            );
          }

          if (
            length >= 5 &&
            0xc0 <= code &&
            code <= 0xcf &&
            code !== 0xc4 &&
            code !== 0xc8 &&
            code !== 0xcc
          ) {
            if (data.length - offset < length) return;

            var result = {
              width: readUInt16BE(data, offset + 3),
              height: readUInt16BE(data, offset + 1),
              type: "jpg",
              mime: "image/jpeg",
              wUnits: "px",
              hUnits: "px",
            };

            if (orientation > 0) {
              result.orientation = orientation;
            }

            return result;
          }

          offset += length;
        }
      };

      /***/
    },

    /***/ 9032: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;

      var SIG_PNG = str2arr("\x89PNG\r\n\x1a\n");
      var SIG_IHDR = str2arr("IHDR");

      module.exports = function (data) {
        if (data.length < 24) return;

        // check PNG signature
        if (!sliceEq(data, 0, SIG_PNG)) return;

        // check that first chunk is IHDR
        if (!sliceEq(data, 12, SIG_IHDR)) return;

        return {
          width: readUInt32BE(data, 16),
          height: readUInt32BE(data, 20),
          type: "png",
          mime: "image/png",
          wUnits: "px",
          hUnits: "px",
        };
      };

      /***/
    },

    /***/ 7814: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;

      var SIG_8BPS = str2arr("8BPS\x00\x01");

      module.exports = function (data) {
        if (data.length < 6 + 16) return;

        // signature + version
        if (!sliceEq(data, 0, SIG_8BPS)) return;

        return {
          width: readUInt32BE(data, 6 + 12),
          height: readUInt32BE(data, 6 + 8),
          type: "psd",
          mime: "image/vnd.adobe.photoshop",
          wUnits: "px",
          hUnits: "px",
        };
      };

      /***/
    },

    /***/ 3890: /***/ (module) => {
      "use strict";

      /* eslint-disable consistent-return */

      function isWhiteSpace(chr) {
        return chr === 0x20 || chr === 0x09 || chr === 0x0d || chr === 0x0a;
      }

      // Filter NaN, Infinity, < 0
      function isFinitePositive(val) {
        return typeof val === "number" && isFinite(val) && val > 0;
      }

      function canBeSvg(buf) {
        var i = 0,
          max = buf.length;

        // byte order mark, https://github.com/nodeca/probe-image-size/issues/57
        if (buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) i = 3;

        while (i < max && isWhiteSpace(buf[i])) i++;

        if (i === max) return false;
        return buf[i] === 0x3c; /* < */
      }

      // skip `<?` (comments), `<!` (directives, cdata, doctype),
      // looking for `<svg>` or `<NAMESPACE:svg>`
      var SVG_HEADER_RE = /<[-_.:a-zA-Z0-9][^>]*>/;

      // test if the top level element is svg + optional namespace,
      // used to skip svg embedded in html
      var SVG_TAG_RE = /^<([-_.:a-zA-Z0-9]+:)?svg\s/;

      var SVG_WIDTH_RE = /[^-]\bwidth="([^%]+?)"|[^-]\bwidth='([^%]+?)'/;
      var SVG_HEIGHT_RE = /\bheight="([^%]+?)"|\bheight='([^%]+?)'/;
      var SVG_VIEWBOX_RE = /\bview[bB]ox="(.+?)"|\bview[bB]ox='(.+?)'/;
      var SVG_UNITS_RE = /in$|mm$|cm$|pt$|pc$|px$|em$|ex$/;

      function svgAttrs(str) {
        var width = str.match(SVG_WIDTH_RE);
        var height = str.match(SVG_HEIGHT_RE);
        var viewbox = str.match(SVG_VIEWBOX_RE);

        return {
          width: width && (width[1] || width[2]),
          height: height && (height[1] || height[2]),
          viewbox: viewbox && (viewbox[1] || viewbox[2]),
        };
      }

      function units(str) {
        if (!SVG_UNITS_RE.test(str)) return "px";

        return str.match(SVG_UNITS_RE)[0];
      }

      module.exports = function (data) {
        if (!canBeSvg(data)) return;

        var str = "";

        for (var i = 0; i < data.length; i++) {
          // 1. We can't rely on buffer features
          // 2. Don't care about UTF16 because ascii is enougth for our goals
          str += String.fromCharCode(data[i]);
        }

        // get top level element
        var svgTag = (str.match(SVG_HEADER_RE) || [""])[0];

        // test if top level element is <svg>
        if (!SVG_TAG_RE.test(svgTag)) return;

        var attrs = svgAttrs(svgTag);
        var width = parseFloat(attrs.width);
        var height = parseFloat(attrs.height);

        // Extract from direct values

        if (attrs.width && attrs.height) {
          if (!isFinitePositive(width) || !isFinitePositive(height)) return;

          return {
            width: width,
            height: height,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.width),
            hUnits: units(attrs.height),
          };
        }

        // Extract from viewbox

        var parts = (attrs.viewbox || "").split(" ");
        var viewbox = {
          width: parts[2],
          height: parts[3],
        };
        var vbWidth = parseFloat(viewbox.width);
        var vbHeight = parseFloat(viewbox.height);

        if (!isFinitePositive(vbWidth) || !isFinitePositive(vbHeight)) return;
        if (units(viewbox.width) !== units(viewbox.height)) return;

        var ratio = vbWidth / vbHeight;

        if (attrs.width) {
          if (!isFinitePositive(width)) return;

          return {
            width: width,
            height: width / ratio,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.width),
            hUnits: units(attrs.width),
          };
        }

        if (attrs.height) {
          if (!isFinitePositive(height)) return;

          return {
            width: height * ratio,
            height: height,
            type: "svg",
            mime: "image/svg+xml",
            wUnits: units(attrs.height),
            hUnits: units(attrs.height),
          };
        }

        return {
          width: vbWidth,
          height: vbHeight,
          type: "svg",
          mime: "image/svg+xml",
          wUnits: units(viewbox.width),
          hUnits: units(viewbox.height),
        };
      };

      /***/
    },

    /***/ 3355: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt16LE = __nccwpck_require__(1252) /* .readUInt16LE */.mP;
      var readUInt16BE = __nccwpck_require__(1252) /* .readUInt16BE */.n8;
      var readUInt32LE = __nccwpck_require__(1252) /* .readUInt32LE */.nm;
      var readUInt32BE = __nccwpck_require__(1252) /* .readUInt32BE */.Ag;

      var SIG_1 = str2arr("II\x2A\0");
      var SIG_2 = str2arr("MM\0\x2A");

      function readUInt16(buffer, offset, is_big_endian) {
        return is_big_endian
          ? readUInt16BE(buffer, offset)
          : readUInt16LE(buffer, offset);
      }

      function readUInt32(buffer, offset, is_big_endian) {
        return is_big_endian
          ? readUInt32BE(buffer, offset)
          : readUInt32LE(buffer, offset);
      }

      function readIFDValue(data, data_offset, is_big_endian) {
        var type = readUInt16(data, data_offset + 2, is_big_endian);
        var values = readUInt32(data, data_offset + 4, is_big_endian);

        if (values !== 1 || (type !== 3 && type !== 4)) return null;

        if (type === 3) {
          return readUInt16(data, data_offset + 8, is_big_endian);
        }

        return readUInt32(data, data_offset + 8, is_big_endian);
      }

      module.exports = function (data) {
        if (data.length < 8) return;

        // check TIFF signature
        if (!sliceEq(data, 0, SIG_1) && !sliceEq(data, 0, SIG_2)) return;

        var is_big_endian = data[0] === 77 /* 'MM' */;
        var count = readUInt32(data, 4, is_big_endian) - 8;

        if (count < 0) return;

        // skip until IFD
        var offset = count + 8;

        if (data.length - offset < 2) return;

        // read number of IFD entries
        var ifd_size = readUInt16(data, offset + 0, is_big_endian) * 12;

        if (ifd_size <= 0) return;

        offset += 2;

        // read all IFD entries
        if (data.length - offset < ifd_size) return;

        var i, width, height, tag;

        for (i = 0; i < ifd_size; i += 12) {
          tag = readUInt16(data, offset + i, is_big_endian);

          if (tag === 256) {
            width = readIFDValue(data, offset + i, is_big_endian);
          } else if (tag === 257) {
            height = readIFDValue(data, offset + i, is_big_endian);
          }
        }

        if (width && height) {
          return {
            width: width,
            height: height,
            type: "tiff",
            mime: "image/tiff",
            wUnits: "px",
            hUnits: "px",
          };
        }
      };

      /***/
    },

    /***/ 1990: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      /* eslint-disable no-bitwise */
      /* eslint-disable consistent-return */

      var str2arr = __nccwpck_require__(1252) /* .str2arr */.eG;
      var sliceEq = __nccwpck_require__(1252) /* .sliceEq */.OF;
      var readUInt16LE = __nccwpck_require__(1252) /* .readUInt16LE */.mP;
      var readUInt32LE = __nccwpck_require__(1252) /* .readUInt32LE */.nm;
      var exif = __nccwpck_require__(8407);

      var SIG_RIFF = str2arr("RIFF");
      var SIG_WEBP = str2arr("WEBP");

      function parseVP8(data, offset) {
        if (
          data[offset + 3] !== 0x9d ||
          data[offset + 4] !== 0x01 ||
          data[offset + 5] !== 0x2a
        ) {
          // bad code block signature
          return;
        }

        return {
          width: readUInt16LE(data, offset + 6) & 0x3fff,
          height: readUInt16LE(data, offset + 8) & 0x3fff,
          type: "webp",
          mime: "image/webp",
          wUnits: "px",
          hUnits: "px",
        };
      }

      function parseVP8L(data, offset) {
        if (data[offset] !== 0x2f) return;

        var bits = readUInt32LE(data, offset + 1);

        return {
          width: (bits & 0x3fff) + 1,
          height: ((bits >> 14) & 0x3fff) + 1,
          type: "webp",
          mime: "image/webp",
          wUnits: "px",
          hUnits: "px",
        };
      }

      function parseVP8X(data, offset) {
        return {
          // TODO: replace with `data.readUIntLE(8, 3) + 1`
          //       when 0.10 support is dropped
          width:
            ((data[offset + 6] << 16) |
              (data[offset + 5] << 8) |
              data[offset + 4]) +
            1,
          height:
            ((data[offset + 9] << offset) |
              (data[offset + 8] << 8) |
              data[offset + 7]) +
            1,
          type: "webp",
          mime: "image/webp",
          wUnits: "px",
          hUnits: "px",
        };
      }

      module.exports = function (data) {
        if (data.length < 16) return;

        // check /^RIFF....WEBPVP8([ LX])$/ signature
        if (!sliceEq(data, 0, SIG_RIFF) && !sliceEq(data, 8, SIG_WEBP)) return;

        var offset = 12;
        var result = null;
        var exif_orientation = 0;
        var fileLength = readUInt32LE(data, 4) + 8;

        if (fileLength > data.length) return;

        while (offset + 8 < fileLength) {
          if (data[offset] === 0) {
            // after each chunk of odd size there should be 0 byte of padding, skip those
            offset++;
            continue;
          }

          var header = String.fromCharCode.apply(
            null,
            data.slice(offset, offset + 4)
          );
          var length = readUInt32LE(data, offset + 4);

          if (header === "VP8 " && length >= 10) {
            result = result || parseVP8(data, offset + 8);
          } else if (header === "VP8L" && length >= 9) {
            result = result || parseVP8L(data, offset + 8);
          } else if (header === "VP8X" && length >= 10) {
            result = result || parseVP8X(data, offset + 8);
          } else if (header === "EXIF") {
            exif_orientation = exif.get_orientation(
              data.slice(offset + 8, offset + 8 + length)
            );

            // exif is the last chunk we care about, stop after it
            offset = Infinity;
          }

          offset += 8 + length;
        }

        if (!result) return;

        if (exif_orientation > 0) {
          result.orientation = exif_orientation;
        }

        return result;
      };

      /***/
    },

    /***/ 7186: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      module.exports = {
        avif: __nccwpck_require__(8302),
        bmp: __nccwpck_require__(3379),
        gif: __nccwpck_require__(9411),
        ico: __nccwpck_require__(2248),
        jpeg: __nccwpck_require__(4114),
        png: __nccwpck_require__(3363),
        psd: __nccwpck_require__(8726),
        svg: __nccwpck_require__(3614),
        tiff: __nccwpck_require__(7103),
        webp: __nccwpck_require__(5700),
      };

      /***/
    },

    /***/ 1444: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      module.exports = {
        avif: __nccwpck_require__(7750),
        bmp: __nccwpck_require__(1510),
        gif: __nccwpck_require__(7653),
        ico: __nccwpck_require__(1047),
        jpeg: __nccwpck_require__(6816),
        png: __nccwpck_require__(9032),
        psd: __nccwpck_require__(7814),
        svg: __nccwpck_require__(3890),
        tiff: __nccwpck_require__(3355),
        webp: __nccwpck_require__(1990),
      };

      /***/
    },

    /***/ 7422: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var ProbeError = __nccwpck_require__(1252).ProbeError;
      var parsers = __nccwpck_require__(7186);
      var PassThrough = __nccwpck_require__(2413).PassThrough;
      var pipeline = __nccwpck_require__(2413).pipeline;

      module.exports = function probeStream(src, keepOpen) {
        var proxy = new PassThrough();

        // increase max number of listeners to stop memory leak warning
        proxy.setMaxListeners(Object.keys(parsers).length + 10);

        var result = new Promise(function (resolve, reject) {
          src.on("error", reject);
          proxy.on("error", reject);

          var alive_parsers = [];
          var last_error;

          function parserEnd(err) {
            var idx = alive_parsers.indexOf[this];

            /* istanbul ignore if */
            if (idx < 0) return;

            /* istanbul ignore if */
            if (err) last_error = err;

            proxy.unpipe(this);
            this.removeAllListeners();
            alive_parsers.splice(idx, 1);

            if (alive_parsers.length) return;

            // if all parsers finished without success -> fail.
            reject(
              last_error ||
                new ProbeError("unrecognized file format", "ECONTENT")
            );
          }

          Object.keys(parsers).forEach(function (type) {
            var pStream = parsers[type]();

            alive_parsers.push(pStream);

            pStream.once("data", resolve);
            pStream.once("end", parserEnd);
            // User does not need to know that something wrong in parser
            // Process error the same was unrecognized format (end without data)
            pStream.on("error", parserEnd);

            proxy.pipe(pStream);
          });
        });

        function cleanup() {
          // request stream doesn't have unpipe, https://github.com/request/request/issues/874
          if (keepOpen && typeof src.unpipe === "function") src.unpipe(proxy);
          proxy.destroy();
        }

        result.then(cleanup).catch(cleanup);

        if (keepOpen) src.pipe(proxy);
        else pipeline(src, proxy, function () {});

        return result;
      };

      module.exports.parsers = parsers;

      /***/
    },

    /***/ 4970: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var parsers = __nccwpck_require__(1444);

      function probeBuffer(buffer) {
        var parser_names = Object.keys(parsers);

        for (var i = 0; i < parser_names.length; i++) {
          var result = parsers[parser_names[i]](buffer);

          if (result) return result;
        }

        return null;
      }

      ///////////////////////////////////////////////////////////////////////
      // Exports
      //

      module.exports = function get_image_size(src) {
        return probeBuffer(src);
      };

      module.exports.parsers = parsers;

      /***/
    },

    /***/ 3846: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";
      /* eslint-disable node/no-deprecated-api */

      var buffer = __nccwpck_require__(4293);
      var Buffer = buffer.Buffer;

      var safer = {};

      var key;

      for (key in buffer) {
        if (!buffer.hasOwnProperty(key)) continue;
        if (key === "SlowBuffer" || key === "Buffer") continue;
        safer[key] = buffer[key];
      }

      var Safer = (safer.Buffer = {});
      for (key in Buffer) {
        if (!Buffer.hasOwnProperty(key)) continue;
        if (key === "allocUnsafe" || key === "allocUnsafeSlow") continue;
        Safer[key] = Buffer[key];
      }

      safer.Buffer.prototype = Buffer.prototype;

      if (!Safer.from || Safer.from === Uint8Array.from) {
        Safer.from = function (value, encodingOrOffset, length) {
          if (typeof value === "number") {
            throw new TypeError(
              'The "value" argument must not be of type number. Received type ' +
                typeof value
            );
          }
          if (value && typeof value.length === "undefined") {
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof value
            );
          }
          return Buffer(value, encodingOrOffset, length);
        };
      }

      if (!Safer.alloc) {
        Safer.alloc = function (size, fill, encoding) {
          if (typeof size !== "number") {
            throw new TypeError(
              'The "size" argument must be of type number. Received type ' +
                typeof size
            );
          }
          if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError(
              'The value "' + size + '" is invalid for option "size"'
            );
          }
          var buf = Buffer(size);
          if (!fill || fill.length === 0) {
            buf.fill(0);
          } else if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
          return buf;
        };
      }

      if (!safer.kStringMaxLength) {
        try {
          safer.kStringMaxLength = process.binding("buffer").kStringMaxLength;
        } catch (e) {
          // we can't determine kStringMaxLength in environments where process.binding
          // is unsupported, so let's not set it
        }
      }

      if (!safer.constants) {
        safer.constants = {
          MAX_LENGTH: safer.kMaxLength,
        };
        if (safer.kStringMaxLength) {
          safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
        }
      }

      module.exports = safer;

      /***/
    },

    /***/ 9009: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      (function (sax) {
        // wrapper for non-node envs
        sax.parser = function (strict, opt) {
          return new SAXParser(strict, opt);
        };
        sax.SAXParser = SAXParser;
        sax.SAXStream = SAXStream;
        sax.createStream = createStream;

        // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
        // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
        // since that's the earliest that a buffer overrun could occur.  This way, checks are
        // as rare as required, but as often as necessary to ensure never crossing this bound.
        // Furthermore, buffers are only tested at most once per write(), so passing a very
        // large string into write() might have undesirable effects, but this is manageable by
        // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
        // edge case, result in creating at most one complete copy of the string passed in.
        // Set to Infinity to have unlimited buffers.
        sax.MAX_BUFFER_LENGTH = 64 * 1024;

        var buffers = [
          "comment",
          "sgmlDecl",
          "textNode",
          "tagName",
          "doctype",
          "procInstName",
          "procInstBody",
          "entity",
          "attribName",
          "attribValue",
          "cdata",
          "script",
        ];

        sax.EVENTS = [
          "text",
          "processinginstruction",
          "sgmldeclaration",
          "doctype",
          "comment",
          "opentagstart",
          "attribute",
          "opentag",
          "closetag",
          "opencdata",
          "cdata",
          "closecdata",
          "error",
          "end",
          "ready",
          "script",
          "opennamespace",
          "closenamespace",
        ];

        function SAXParser(strict, opt) {
          if (!(this instanceof SAXParser)) {
            return new SAXParser(strict, opt);
          }

          var parser = this;
          clearBuffers(parser);
          parser.q = parser.c = "";
          parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
          parser.opt = opt || {};
          parser.opt.lowercase =
            parser.opt.lowercase || parser.opt.lowercasetags;
          parser.looseCase = parser.opt.lowercase
            ? "toLowerCase"
            : "toUpperCase";
          parser.tags = [];
          parser.closed = parser.closedRoot = parser.sawRoot = false;
          parser.tag = parser.error = null;
          parser.strict = !!strict;
          parser.noscript = !!(strict || parser.opt.noscript);
          parser.state = S.BEGIN;
          parser.strictEntities = parser.opt.strictEntities;
          parser.ENTITIES = parser.strictEntities
            ? Object.create(sax.XML_ENTITIES)
            : Object.create(sax.ENTITIES);
          parser.attribList = [];

          // namespaces form a prototype chain.
          // it always points at the current tag,
          // which protos to its parent tag.
          if (parser.opt.xmlns) {
            parser.ns = Object.create(rootNS);
          }

          // mostly just for error reporting
          parser.trackPosition = parser.opt.position !== false;
          if (parser.trackPosition) {
            parser.position = parser.line = parser.column = 0;
          }
          emit(parser, "onready");
        }

        if (!Object.create) {
          Object.create = function (o) {
            function F() {}
            F.prototype = o;
            var newf = new F();
            return newf;
          };
        }

        if (!Object.keys) {
          Object.keys = function (o) {
            var a = [];
            for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
            return a;
          };
        }

        function checkBufferLength(parser) {
          var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
          var maxActual = 0;
          for (var i = 0, l = buffers.length; i < l; i++) {
            var len = parser[buffers[i]].length;
            if (len > maxAllowed) {
              // Text/cdata nodes can get big, and since they're buffered,
              // we can get here under normal conditions.
              // Avoid issues by emitting the text node now,
              // so at least it won't get any bigger.
              switch (buffers[i]) {
                case "textNode":
                  closeText(parser);
                  break;

                case "cdata":
                  emitNode(parser, "oncdata", parser.cdata);
                  parser.cdata = "";
                  break;

                case "script":
                  emitNode(parser, "onscript", parser.script);
                  parser.script = "";
                  break;

                default:
                  error(parser, "Max buffer length exceeded: " + buffers[i]);
              }
            }
            maxActual = Math.max(maxActual, len);
          }
          // schedule the next check for the earliest possible buffer overrun.
          var m = sax.MAX_BUFFER_LENGTH - maxActual;
          parser.bufferCheckPosition = m + parser.position;
        }

        function clearBuffers(parser) {
          for (var i = 0, l = buffers.length; i < l; i++) {
            parser[buffers[i]] = "";
          }
        }

        function flushBuffers(parser) {
          closeText(parser);
          if (parser.cdata !== "") {
            emitNode(parser, "oncdata", parser.cdata);
            parser.cdata = "";
          }
          if (parser.script !== "") {
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
          }
        }

        SAXParser.prototype = {
          end: function () {
            end(this);
          },
          write: write,
          resume: function () {
            this.error = null;
            return this;
          },
          close: function () {
            return this.write(null);
          },
          flush: function () {
            flushBuffers(this);
          },
        };

        var Stream;
        try {
          Stream = __nccwpck_require__(2413).Stream;
        } catch (ex) {
          Stream = function () {};
        }

        var streamWraps = sax.EVENTS.filter(function (ev) {
          return ev !== "error" && ev !== "end";
        });

        function createStream(strict, opt) {
          return new SAXStream(strict, opt);
        }

        function SAXStream(strict, opt) {
          if (!(this instanceof SAXStream)) {
            return new SAXStream(strict, opt);
          }

          Stream.apply(this);

          this._parser = new SAXParser(strict, opt);
          this.writable = true;
          this.readable = true;

          var me = this;

          this._parser.onend = function () {
            me.emit("end");
          };

          this._parser.onerror = function (er) {
            me.emit("error", er);

            // if didn't throw, then means error was handled.
            // go ahead and clear error, so we can write again.
            me._parser.error = null;
          };

          this._decoder = null;

          streamWraps.forEach(function (ev) {
            Object.defineProperty(me, "on" + ev, {
              get: function () {
                return me._parser["on" + ev];
              },
              set: function (h) {
                if (!h) {
                  me.removeAllListeners(ev);
                  me._parser["on" + ev] = h;
                  return h;
                }
                me.on(ev, h);
              },
              enumerable: true,
              configurable: false,
            });
          });
        }

        SAXStream.prototype = Object.create(Stream.prototype, {
          constructor: {
            value: SAXStream,
          },
        });

        SAXStream.prototype.write = function (data) {
          if (
            typeof Buffer === "function" &&
            typeof Buffer.isBuffer === "function" &&
            Buffer.isBuffer(data)
          ) {
            if (!this._decoder) {
              var SD = __nccwpck_require__(4304).StringDecoder;
              this._decoder = new SD("utf8");
            }
            data = this._decoder.write(data);
          }

          this._parser.write(data.toString());
          this.emit("data", data);
          return true;
        };

        SAXStream.prototype.end = function (chunk) {
          if (chunk && chunk.length) {
            this.write(chunk);
          }
          this._parser.end();
          return true;
        };

        SAXStream.prototype.on = function (ev, handler) {
          var me = this;
          if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
            me._parser["on" + ev] = function () {
              var args =
                arguments.length === 1
                  ? [arguments[0]]
                  : Array.apply(null, arguments);
              args.splice(0, 0, ev);
              me.emit.apply(me, args);
            };
          }

          return Stream.prototype.on.call(me, ev, handler);
        };

        // this really needs to be replaced with character classes.
        // XML allows all manner of ridiculous numbers and digits.
        var CDATA = "[CDATA[";
        var DOCTYPE = "DOCTYPE";
        var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
        var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
        var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };

        // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
        // This implementation works on strings, a single character at a time
        // as such, it cannot ever support astral-plane characters (10000-EFFFF)
        // without a significant breaking change to either this  parser, or the
        // JavaScript language.  Implementation of an emoji-capable xml parser
        // is left as an exercise for the reader.
        var nameStart =
          /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

        var nameBody =
          /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

        var entityStart =
          /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
        var entityBody =
          /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

        function isWhitespace(c) {
          return c === " " || c === "\n" || c === "\r" || c === "\t";
        }

        function isQuote(c) {
          return c === '"' || c === "'";
        }

        function isAttribEnd(c) {
          return c === ">" || isWhitespace(c);
        }

        function isMatch(regex, c) {
          return regex.test(c);
        }

        function notMatch(regex, c) {
          return !isMatch(regex, c);
        }

        var S = 0;
        sax.STATE = {
          BEGIN: S++, // leading byte order mark or whitespace
          BEGIN_WHITESPACE: S++, // leading whitespace
          TEXT: S++, // general stuff
          TEXT_ENTITY: S++, // &amp and such.
          OPEN_WAKA: S++, // <
          SGML_DECL: S++, // <!BLARG
          SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
          DOCTYPE: S++, // <!DOCTYPE
          DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
          DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
          DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
          COMMENT_STARTING: S++, // <!-
          COMMENT: S++, // <!--
          COMMENT_ENDING: S++, // <!-- blah -
          COMMENT_ENDED: S++, // <!-- blah --
          CDATA: S++, // <![CDATA[ something
          CDATA_ENDING: S++, // ]
          CDATA_ENDING_2: S++, // ]]
          PROC_INST: S++, // <?hi
          PROC_INST_BODY: S++, // <?hi there
          PROC_INST_ENDING: S++, // <?hi "there" ?
          OPEN_TAG: S++, // <strong
          OPEN_TAG_SLASH: S++, // <strong /
          ATTRIB: S++, // <a
          ATTRIB_NAME: S++, // <a foo
          ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
          ATTRIB_VALUE: S++, // <a foo=
          ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
          ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
          ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
          ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
          ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
          CLOSE_TAG: S++, // </a
          CLOSE_TAG_SAW_WHITE: S++, // </a   >
          SCRIPT: S++, // <script> ...
          SCRIPT_ENDING: S++, // <script> ... <
        };

        sax.XML_ENTITIES = {
          amp: "&",
          gt: ">",
          lt: "<",
          quot: '"',
          apos: "'",
        };

        sax.ENTITIES = {
          amp: "&",
          gt: ">",
          lt: "<",
          quot: '"',
          apos: "'",
          AElig: 198,
          Aacute: 193,
          Acirc: 194,
          Agrave: 192,
          Aring: 197,
          Atilde: 195,
          Auml: 196,
          Ccedil: 199,
          ETH: 208,
          Eacute: 201,
          Ecirc: 202,
          Egrave: 200,
          Euml: 203,
          Iacute: 205,
          Icirc: 206,
          Igrave: 204,
          Iuml: 207,
          Ntilde: 209,
          Oacute: 211,
          Ocirc: 212,
          Ograve: 210,
          Oslash: 216,
          Otilde: 213,
          Ouml: 214,
          THORN: 222,
          Uacute: 218,
          Ucirc: 219,
          Ugrave: 217,
          Uuml: 220,
          Yacute: 221,
          aacute: 225,
          acirc: 226,
          aelig: 230,
          agrave: 224,
          aring: 229,
          atilde: 227,
          auml: 228,
          ccedil: 231,
          eacute: 233,
          ecirc: 234,
          egrave: 232,
          eth: 240,
          euml: 235,
          iacute: 237,
          icirc: 238,
          igrave: 236,
          iuml: 239,
          ntilde: 241,
          oacute: 243,
          ocirc: 244,
          ograve: 242,
          oslash: 248,
          otilde: 245,
          ouml: 246,
          szlig: 223,
          thorn: 254,
          uacute: 250,
          ucirc: 251,
          ugrave: 249,
          uuml: 252,
          yacute: 253,
          yuml: 255,
          copy: 169,
          reg: 174,
          nbsp: 160,
          iexcl: 161,
          cent: 162,
          pound: 163,
          curren: 164,
          yen: 165,
          brvbar: 166,
          sect: 167,
          uml: 168,
          ordf: 170,
          laquo: 171,
          not: 172,
          shy: 173,
          macr: 175,
          deg: 176,
          plusmn: 177,
          sup1: 185,
          sup2: 178,
          sup3: 179,
          acute: 180,
          micro: 181,
          para: 182,
          middot: 183,
          cedil: 184,
          ordm: 186,
          raquo: 187,
          frac14: 188,
          frac12: 189,
          frac34: 190,
          iquest: 191,
          times: 215,
          divide: 247,
          OElig: 338,
          oelig: 339,
          Scaron: 352,
          scaron: 353,
          Yuml: 376,
          fnof: 402,
          circ: 710,
          tilde: 732,
          Alpha: 913,
          Beta: 914,
          Gamma: 915,
          Delta: 916,
          Epsilon: 917,
          Zeta: 918,
          Eta: 919,
          Theta: 920,
          Iota: 921,
          Kappa: 922,
          Lambda: 923,
          Mu: 924,
          Nu: 925,
          Xi: 926,
          Omicron: 927,
          Pi: 928,
          Rho: 929,
          Sigma: 931,
          Tau: 932,
          Upsilon: 933,
          Phi: 934,
          Chi: 935,
          Psi: 936,
          Omega: 937,
          alpha: 945,
          beta: 946,
          gamma: 947,
          delta: 948,
          epsilon: 949,
          zeta: 950,
          eta: 951,
          theta: 952,
          iota: 953,
          kappa: 954,
          lambda: 955,
          mu: 956,
          nu: 957,
          xi: 958,
          omicron: 959,
          pi: 960,
          rho: 961,
          sigmaf: 962,
          sigma: 963,
          tau: 964,
          upsilon: 965,
          phi: 966,
          chi: 967,
          psi: 968,
          omega: 969,
          thetasym: 977,
          upsih: 978,
          piv: 982,
          ensp: 8194,
          emsp: 8195,
          thinsp: 8201,
          zwnj: 8204,
          zwj: 8205,
          lrm: 8206,
          rlm: 8207,
          ndash: 8211,
          mdash: 8212,
          lsquo: 8216,
          rsquo: 8217,
          sbquo: 8218,
          ldquo: 8220,
          rdquo: 8221,
          bdquo: 8222,
          dagger: 8224,
          Dagger: 8225,
          bull: 8226,
          hellip: 8230,
          permil: 8240,
          prime: 8242,
          Prime: 8243,
          lsaquo: 8249,
          rsaquo: 8250,
          oline: 8254,
          frasl: 8260,
          euro: 8364,
          image: 8465,
          weierp: 8472,
          real: 8476,
          trade: 8482,
          alefsym: 8501,
          larr: 8592,
          uarr: 8593,
          rarr: 8594,
          darr: 8595,
          harr: 8596,
          crarr: 8629,
          lArr: 8656,
          uArr: 8657,
          rArr: 8658,
          dArr: 8659,
          hArr: 8660,
          forall: 8704,
          part: 8706,
          exist: 8707,
          empty: 8709,
          nabla: 8711,
          isin: 8712,
          notin: 8713,
          ni: 8715,
          prod: 8719,
          sum: 8721,
          minus: 8722,
          lowast: 8727,
          radic: 8730,
          prop: 8733,
          infin: 8734,
          ang: 8736,
          and: 8743,
          or: 8744,
          cap: 8745,
          cup: 8746,
          int: 8747,
          there4: 8756,
          sim: 8764,
          cong: 8773,
          asymp: 8776,
          ne: 8800,
          equiv: 8801,
          le: 8804,
          ge: 8805,
          sub: 8834,
          sup: 8835,
          nsub: 8836,
          sube: 8838,
          supe: 8839,
          oplus: 8853,
          otimes: 8855,
          perp: 8869,
          sdot: 8901,
          lceil: 8968,
          rceil: 8969,
          lfloor: 8970,
          rfloor: 8971,
          lang: 9001,
          rang: 9002,
          loz: 9674,
          spades: 9824,
          clubs: 9827,
          hearts: 9829,
          diams: 9830,
        };

        Object.keys(sax.ENTITIES).forEach(function (key) {
          var e = sax.ENTITIES[key];
          var s = typeof e === "number" ? String.fromCharCode(e) : e;
          sax.ENTITIES[key] = s;
        });

        for (var s in sax.STATE) {
          sax.STATE[sax.STATE[s]] = s;
        }

        // shorthand
        S = sax.STATE;

        function emit(parser, event, data) {
          parser[event] && parser[event](data);
        }

        function emitNode(parser, nodeType, data) {
          if (parser.textNode) closeText(parser);
          emit(parser, nodeType, data);
        }

        function closeText(parser) {
          parser.textNode = textopts(parser.opt, parser.textNode);
          if (parser.textNode) emit(parser, "ontext", parser.textNode);
          parser.textNode = "";
        }

        function textopts(opt, text) {
          if (opt.trim) text = text.trim();
          if (opt.normalize) text = text.replace(/\s+/g, " ");
          return text;
        }

        function error(parser, er) {
          closeText(parser);
          if (parser.trackPosition) {
            er +=
              "\nLine: " +
              parser.line +
              "\nColumn: " +
              parser.column +
              "\nChar: " +
              parser.c;
          }
          er = new Error(er);
          parser.error = er;
          emit(parser, "onerror", er);
          return parser;
        }

        function end(parser) {
          if (parser.sawRoot && !parser.closedRoot)
            strictFail(parser, "Unclosed root tag");
          if (
            parser.state !== S.BEGIN &&
            parser.state !== S.BEGIN_WHITESPACE &&
            parser.state !== S.TEXT
          ) {
            error(parser, "Unexpected end");
          }
          closeText(parser);
          parser.c = "";
          parser.closed = true;
          emit(parser, "onend");
          SAXParser.call(parser, parser.strict, parser.opt);
          return parser;
        }

        function strictFail(parser, message) {
          if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
            throw new Error("bad call to strictFail");
          }
          if (parser.strict) {
            error(parser, message);
          }
        }

        function newTag(parser) {
          if (!parser.strict)
            parser.tagName = parser.tagName[parser.looseCase]();
          var parent = parser.tags[parser.tags.length - 1] || parser;
          var tag = (parser.tag = { name: parser.tagName, attributes: {} });

          // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
          if (parser.opt.xmlns) {
            tag.ns = parent.ns;
          }
          parser.attribList.length = 0;
          emitNode(parser, "onopentagstart", tag);
        }

        function qname(name, attribute) {
          var i = name.indexOf(":");
          var qualName = i < 0 ? ["", name] : name.split(":");
          var prefix = qualName[0];
          var local = qualName[1];

          // <x "xmlns"="http://foo">
          if (attribute && name === "xmlns") {
            prefix = "xmlns";
            local = "";
          }

          return { prefix: prefix, local: local };
        }

        function attrib(parser) {
          if (!parser.strict) {
            parser.attribName = parser.attribName[parser.looseCase]();
          }

          if (
            parser.attribList.indexOf(parser.attribName) !== -1 ||
            parser.tag.attributes.hasOwnProperty(parser.attribName)
          ) {
            parser.attribName = parser.attribValue = "";
            return;
          }

          if (parser.opt.xmlns) {
            var qn = qname(parser.attribName, true);
            var prefix = qn.prefix;
            var local = qn.local;

            if (prefix === "xmlns") {
              // namespace binding attribute. push the binding into scope
              if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
                strictFail(
                  parser,
                  "xml: prefix must be bound to " +
                    XML_NAMESPACE +
                    "\n" +
                    "Actual: " +
                    parser.attribValue
                );
              } else if (
                local === "xmlns" &&
                parser.attribValue !== XMLNS_NAMESPACE
              ) {
                strictFail(
                  parser,
                  "xmlns: prefix must be bound to " +
                    XMLNS_NAMESPACE +
                    "\n" +
                    "Actual: " +
                    parser.attribValue
                );
              } else {
                var tag = parser.tag;
                var parent = parser.tags[parser.tags.length - 1] || parser;
                if (tag.ns === parent.ns) {
                  tag.ns = Object.create(parent.ns);
                }
                tag.ns[local] = parser.attribValue;
              }
            }

            // defer onattribute events until all attributes have been seen
            // so any new bindings can take effect. preserve attribute order
            // so deferred events can be emitted in document order
            parser.attribList.push([parser.attribName, parser.attribValue]);
          } else {
            // in non-xmlns mode, we can emit the event right away
            parser.tag.attributes[parser.attribName] = parser.attribValue;
            emitNode(parser, "onattribute", {
              name: parser.attribName,
              value: parser.attribValue,
            });
          }

          parser.attribName = parser.attribValue = "";
        }

        function openTag(parser, selfClosing) {
          if (parser.opt.xmlns) {
            // emit namespace binding events
            var tag = parser.tag;

            // add namespace info to tag
            var qn = qname(parser.tagName);
            tag.prefix = qn.prefix;
            tag.local = qn.local;
            tag.uri = tag.ns[qn.prefix] || "";

            if (tag.prefix && !tag.uri) {
              strictFail(
                parser,
                "Unbound namespace prefix: " + JSON.stringify(parser.tagName)
              );
              tag.uri = qn.prefix;
            }

            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns && parent.ns !== tag.ns) {
              Object.keys(tag.ns).forEach(function (p) {
                emitNode(parser, "onopennamespace", {
                  prefix: p,
                  uri: tag.ns[p],
                });
              });
            }

            // handle deferred onattribute events
            // Note: do not apply default ns to attributes:
            //   http://www.w3.org/TR/REC-xml-names/#defaulting
            for (var i = 0, l = parser.attribList.length; i < l; i++) {
              var nv = parser.attribList[i];
              var name = nv[0];
              var value = nv[1];
              var qualName = qname(name, true);
              var prefix = qualName.prefix;
              var local = qualName.local;
              var uri = prefix === "" ? "" : tag.ns[prefix] || "";
              var a = {
                name: name,
                value: value,
                prefix: prefix,
                local: local,
                uri: uri,
              };

              // if there's any attributes with an undefined namespace,
              // then fail on them now.
              if (prefix && prefix !== "xmlns" && !uri) {
                strictFail(
                  parser,
                  "Unbound namespace prefix: " + JSON.stringify(prefix)
                );
                a.uri = prefix;
              }
              parser.tag.attributes[name] = a;
              emitNode(parser, "onattribute", a);
            }
            parser.attribList.length = 0;
          }

          parser.tag.isSelfClosing = !!selfClosing;

          // process the tag
          parser.sawRoot = true;
          parser.tags.push(parser.tag);
          emitNode(parser, "onopentag", parser.tag);
          if (!selfClosing) {
            // special case for <script> in non-strict mode.
            if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
              parser.state = S.SCRIPT;
            } else {
              parser.state = S.TEXT;
            }
            parser.tag = null;
            parser.tagName = "";
          }
          parser.attribName = parser.attribValue = "";
          parser.attribList.length = 0;
        }

        function closeTag(parser) {
          if (!parser.tagName) {
            strictFail(parser, "Weird empty close tag.");
            parser.textNode += "</>";
            parser.state = S.TEXT;
            return;
          }

          if (parser.script) {
            if (parser.tagName !== "script") {
              parser.script += "</" + parser.tagName + ">";
              parser.tagName = "";
              parser.state = S.SCRIPT;
              return;
            }
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
          }

          // first make sure that the closing tag actually exists.
          // <a><b></c></b></a> will close everything, otherwise.
          var t = parser.tags.length;
          var tagName = parser.tagName;
          if (!parser.strict) {
            tagName = tagName[parser.looseCase]();
          }
          var closeTo = tagName;
          while (t--) {
            var close = parser.tags[t];
            if (close.name !== closeTo) {
              // fail the first time in strict mode
              strictFail(parser, "Unexpected close tag");
            } else {
              break;
            }
          }

          // didn't find it.  we already failed for strict, so just abort.
          if (t < 0) {
            strictFail(parser, "Unmatched closing tag: " + parser.tagName);
            parser.textNode += "</" + parser.tagName + ">";
            parser.state = S.TEXT;
            return;
          }
          parser.tagName = tagName;
          var s = parser.tags.length;
          while (s-- > t) {
            var tag = (parser.tag = parser.tags.pop());
            parser.tagName = parser.tag.name;
            emitNode(parser, "onclosetag", parser.tagName);

            var x = {};
            for (var i in tag.ns) {
              x[i] = tag.ns[i];
            }

            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (parser.opt.xmlns && tag.ns !== parent.ns) {
              // remove namespace bindings introduced by tag
              Object.keys(tag.ns).forEach(function (p) {
                var n = tag.ns[p];
                emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
              });
            }
          }
          if (t === 0) parser.closedRoot = true;
          parser.tagName = parser.attribValue = parser.attribName = "";
          parser.attribList.length = 0;
          parser.state = S.TEXT;
        }

        function parseEntity(parser) {
          var entity = parser.entity;
          var entityLC = entity.toLowerCase();
          var num;
          var numStr = "";

          if (parser.ENTITIES[entity]) {
            return parser.ENTITIES[entity];
          }
          if (parser.ENTITIES[entityLC]) {
            return parser.ENTITIES[entityLC];
          }
          entity = entityLC;
          if (entity.charAt(0) === "#") {
            if (entity.charAt(1) === "x") {
              entity = entity.slice(2);
              num = parseInt(entity, 16);
              numStr = num.toString(16);
            } else {
              entity = entity.slice(1);
              num = parseInt(entity, 10);
              numStr = num.toString(10);
            }
          }
          entity = entity.replace(/^0+/, "");
          if (isNaN(num) || numStr.toLowerCase() !== entity) {
            strictFail(parser, "Invalid character entity");
            return "&" + parser.entity + ";";
          }

          return String.fromCodePoint(num);
        }

        function beginWhiteSpace(parser, c) {
          if (c === "<") {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
          } else if (!isWhitespace(c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, "Non-whitespace before first tag.");
            parser.textNode = c;
            parser.state = S.TEXT;
          }
        }

        function charAt(chunk, i) {
          var result = "";
          if (i < chunk.length) {
            result = chunk.charAt(i);
          }
          return result;
        }

        function write(chunk) {
          var parser = this;
          if (this.error) {
            throw this.error;
          }
          if (parser.closed) {
            return error(
              parser,
              "Cannot write after close. Assign an onready handler."
            );
          }
          if (chunk === null) {
            return end(parser);
          }
          if (typeof chunk === "object") {
            chunk = chunk.toString();
          }
          var i = 0;
          var c = "";
          while (true) {
            c = charAt(chunk, i++);
            parser.c = c;

            if (!c) {
              break;
            }

            if (parser.trackPosition) {
              parser.position++;
              if (c === "\n") {
                parser.line++;
                parser.column = 0;
              } else {
                parser.column++;
              }
            }

            switch (parser.state) {
              case S.BEGIN:
                parser.state = S.BEGIN_WHITESPACE;
                if (c === "\uFEFF") {
                  continue;
                }
                beginWhiteSpace(parser, c);
                continue;

              case S.BEGIN_WHITESPACE:
                beginWhiteSpace(parser, c);
                continue;

              case S.TEXT:
                if (parser.sawRoot && !parser.closedRoot) {
                  var starti = i - 1;
                  while (c && c !== "<" && c !== "&") {
                    c = charAt(chunk, i++);
                    if (c && parser.trackPosition) {
                      parser.position++;
                      if (c === "\n") {
                        parser.line++;
                        parser.column = 0;
                      } else {
                        parser.column++;
                      }
                    }
                  }
                  parser.textNode += chunk.substring(starti, i - 1);
                }
                if (
                  c === "<" &&
                  !(parser.sawRoot && parser.closedRoot && !parser.strict)
                ) {
                  parser.state = S.OPEN_WAKA;
                  parser.startTagPosition = parser.position;
                } else {
                  if (
                    !isWhitespace(c) &&
                    (!parser.sawRoot || parser.closedRoot)
                  ) {
                    strictFail(parser, "Text data outside of root node.");
                  }
                  if (c === "&") {
                    parser.state = S.TEXT_ENTITY;
                  } else {
                    parser.textNode += c;
                  }
                }
                continue;

              case S.SCRIPT:
                // only non-strict
                if (c === "<") {
                  parser.state = S.SCRIPT_ENDING;
                } else {
                  parser.script += c;
                }
                continue;

              case S.SCRIPT_ENDING:
                if (c === "/") {
                  parser.state = S.CLOSE_TAG;
                } else {
                  parser.script += "<" + c;
                  parser.state = S.SCRIPT;
                }
                continue;

              case S.OPEN_WAKA:
                // either a /, ?, !, or text is coming next.
                if (c === "!") {
                  parser.state = S.SGML_DECL;
                  parser.sgmlDecl = "";
                } else if (isWhitespace(c)) {
                  // wait for it...
                } else if (isMatch(nameStart, c)) {
                  parser.state = S.OPEN_TAG;
                  parser.tagName = c;
                } else if (c === "/") {
                  parser.state = S.CLOSE_TAG;
                  parser.tagName = "";
                } else if (c === "?") {
                  parser.state = S.PROC_INST;
                  parser.procInstName = parser.procInstBody = "";
                } else {
                  strictFail(parser, "Unencoded <");
                  // if there was some whitespace, then add that in.
                  if (parser.startTagPosition + 1 < parser.position) {
                    var pad = parser.position - parser.startTagPosition;
                    c = new Array(pad).join(" ") + c;
                  }
                  parser.textNode += "<" + c;
                  parser.state = S.TEXT;
                }
                continue;

              case S.SGML_DECL:
                if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                  emitNode(parser, "onopencdata");
                  parser.state = S.CDATA;
                  parser.sgmlDecl = "";
                  parser.cdata = "";
                } else if (parser.sgmlDecl + c === "--") {
                  parser.state = S.COMMENT;
                  parser.comment = "";
                  parser.sgmlDecl = "";
                } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                  parser.state = S.DOCTYPE;
                  if (parser.doctype || parser.sawRoot) {
                    strictFail(
                      parser,
                      "Inappropriately located doctype declaration"
                    );
                  }
                  parser.doctype = "";
                  parser.sgmlDecl = "";
                } else if (c === ">") {
                  emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                  parser.sgmlDecl = "";
                  parser.state = S.TEXT;
                } else if (isQuote(c)) {
                  parser.state = S.SGML_DECL_QUOTED;
                  parser.sgmlDecl += c;
                } else {
                  parser.sgmlDecl += c;
                }
                continue;

              case S.SGML_DECL_QUOTED:
                if (c === parser.q) {
                  parser.state = S.SGML_DECL;
                  parser.q = "";
                }
                parser.sgmlDecl += c;
                continue;

              case S.DOCTYPE:
                if (c === ">") {
                  parser.state = S.TEXT;
                  emitNode(parser, "ondoctype", parser.doctype);
                  parser.doctype = true; // just remember that we saw it.
                } else {
                  parser.doctype += c;
                  if (c === "[") {
                    parser.state = S.DOCTYPE_DTD;
                  } else if (isQuote(c)) {
                    parser.state = S.DOCTYPE_QUOTED;
                    parser.q = c;
                  }
                }
                continue;

              case S.DOCTYPE_QUOTED:
                parser.doctype += c;
                if (c === parser.q) {
                  parser.q = "";
                  parser.state = S.DOCTYPE;
                }
                continue;

              case S.DOCTYPE_DTD:
                parser.doctype += c;
                if (c === "]") {
                  parser.state = S.DOCTYPE;
                } else if (isQuote(c)) {
                  parser.state = S.DOCTYPE_DTD_QUOTED;
                  parser.q = c;
                }
                continue;

              case S.DOCTYPE_DTD_QUOTED:
                parser.doctype += c;
                if (c === parser.q) {
                  parser.state = S.DOCTYPE_DTD;
                  parser.q = "";
                }
                continue;

              case S.COMMENT:
                if (c === "-") {
                  parser.state = S.COMMENT_ENDING;
                } else {
                  parser.comment += c;
                }
                continue;

              case S.COMMENT_ENDING:
                if (c === "-") {
                  parser.state = S.COMMENT_ENDED;
                  parser.comment = textopts(parser.opt, parser.comment);
                  if (parser.comment) {
                    emitNode(parser, "oncomment", parser.comment);
                  }
                  parser.comment = "";
                } else {
                  parser.comment += "-" + c;
                  parser.state = S.COMMENT;
                }
                continue;

              case S.COMMENT_ENDED:
                if (c !== ">") {
                  strictFail(parser, "Malformed comment");
                  // allow <!-- blah -- bloo --> in non-strict mode,
                  // which is a comment of " blah -- bloo "
                  parser.comment += "--" + c;
                  parser.state = S.COMMENT;
                } else {
                  parser.state = S.TEXT;
                }
                continue;

              case S.CDATA:
                if (c === "]") {
                  parser.state = S.CDATA_ENDING;
                } else {
                  parser.cdata += c;
                }
                continue;

              case S.CDATA_ENDING:
                if (c === "]") {
                  parser.state = S.CDATA_ENDING_2;
                } else {
                  parser.cdata += "]" + c;
                  parser.state = S.CDATA;
                }
                continue;

              case S.CDATA_ENDING_2:
                if (c === ">") {
                  if (parser.cdata) {
                    emitNode(parser, "oncdata", parser.cdata);
                  }
                  emitNode(parser, "onclosecdata");
                  parser.cdata = "";
                  parser.state = S.TEXT;
                } else if (c === "]") {
                  parser.cdata += "]";
                } else {
                  parser.cdata += "]]" + c;
                  parser.state = S.CDATA;
                }
                continue;

              case S.PROC_INST:
                if (c === "?") {
                  parser.state = S.PROC_INST_ENDING;
                } else if (isWhitespace(c)) {
                  parser.state = S.PROC_INST_BODY;
                } else {
                  parser.procInstName += c;
                }
                continue;

              case S.PROC_INST_BODY:
                if (!parser.procInstBody && isWhitespace(c)) {
                  continue;
                } else if (c === "?") {
                  parser.state = S.PROC_INST_ENDING;
                } else {
                  parser.procInstBody += c;
                }
                continue;

              case S.PROC_INST_ENDING:
                if (c === ">") {
                  emitNode(parser, "onprocessinginstruction", {
                    name: parser.procInstName,
                    body: parser.procInstBody,
                  });
                  parser.procInstName = parser.procInstBody = "";
                  parser.state = S.TEXT;
                } else {
                  parser.procInstBody += "?" + c;
                  parser.state = S.PROC_INST_BODY;
                }
                continue;

              case S.OPEN_TAG:
                if (isMatch(nameBody, c)) {
                  parser.tagName += c;
                } else {
                  newTag(parser);
                  if (c === ">") {
                    openTag(parser);
                  } else if (c === "/") {
                    parser.state = S.OPEN_TAG_SLASH;
                  } else {
                    if (!isWhitespace(c)) {
                      strictFail(parser, "Invalid character in tag name");
                    }
                    parser.state = S.ATTRIB;
                  }
                }
                continue;

              case S.OPEN_TAG_SLASH:
                if (c === ">") {
                  openTag(parser, true);
                  closeTag(parser);
                } else {
                  strictFail(
                    parser,
                    "Forward-slash in opening tag not followed by >"
                  );
                  parser.state = S.ATTRIB;
                }
                continue;

              case S.ATTRIB:
                // haven't read the attribute name yet.
                if (isWhitespace(c)) {
                  continue;
                } else if (c === ">") {
                  openTag(parser);
                } else if (c === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else if (isMatch(nameStart, c)) {
                  parser.attribName = c;
                  parser.attribValue = "";
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                }
                continue;

              case S.ATTRIB_NAME:
                if (c === "=") {
                  parser.state = S.ATTRIB_VALUE;
                } else if (c === ">") {
                  strictFail(parser, "Attribute without value");
                  parser.attribValue = parser.attribName;
                  attrib(parser);
                  openTag(parser);
                } else if (isWhitespace(c)) {
                  parser.state = S.ATTRIB_NAME_SAW_WHITE;
                } else if (isMatch(nameBody, c)) {
                  parser.attribName += c;
                } else {
                  strictFail(parser, "Invalid attribute name");
                }
                continue;

              case S.ATTRIB_NAME_SAW_WHITE:
                if (c === "=") {
                  parser.state = S.ATTRIB_VALUE;
                } else if (isWhitespace(c)) {
                  continue;
                } else {
                  strictFail(parser, "Attribute without value");
                  parser.tag.attributes[parser.attribName] = "";
                  parser.attribValue = "";
                  emitNode(parser, "onattribute", {
                    name: parser.attribName,
                    value: "",
                  });
                  parser.attribName = "";
                  if (c === ">") {
                    openTag(parser);
                  } else if (isMatch(nameStart, c)) {
                    parser.attribName = c;
                    parser.state = S.ATTRIB_NAME;
                  } else {
                    strictFail(parser, "Invalid attribute name");
                    parser.state = S.ATTRIB;
                  }
                }
                continue;

              case S.ATTRIB_VALUE:
                if (isWhitespace(c)) {
                  continue;
                } else if (isQuote(c)) {
                  parser.q = c;
                  parser.state = S.ATTRIB_VALUE_QUOTED;
                } else {
                  strictFail(parser, "Unquoted attribute value");
                  parser.state = S.ATTRIB_VALUE_UNQUOTED;
                  parser.attribValue = c;
                }
                continue;

              case S.ATTRIB_VALUE_QUOTED:
                if (c !== parser.q) {
                  if (c === "&") {
                    parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                  } else {
                    parser.attribValue += c;
                  }
                  continue;
                }
                attrib(parser);
                parser.q = "";
                parser.state = S.ATTRIB_VALUE_CLOSED;
                continue;

              case S.ATTRIB_VALUE_CLOSED:
                if (isWhitespace(c)) {
                  parser.state = S.ATTRIB;
                } else if (c === ">") {
                  openTag(parser);
                } else if (c === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else if (isMatch(nameStart, c)) {
                  strictFail(parser, "No whitespace between attributes");
                  parser.attribName = c;
                  parser.attribValue = "";
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                }
                continue;

              case S.ATTRIB_VALUE_UNQUOTED:
                if (!isAttribEnd(c)) {
                  if (c === "&") {
                    parser.state = S.ATTRIB_VALUE_ENTITY_U;
                  } else {
                    parser.attribValue += c;
                  }
                  continue;
                }
                attrib(parser);
                if (c === ">") {
                  openTag(parser);
                } else {
                  parser.state = S.ATTRIB;
                }
                continue;

              case S.CLOSE_TAG:
                if (!parser.tagName) {
                  if (isWhitespace(c)) {
                    continue;
                  } else if (notMatch(nameStart, c)) {
                    if (parser.script) {
                      parser.script += "</" + c;
                      parser.state = S.SCRIPT;
                    } else {
                      strictFail(parser, "Invalid tagname in closing tag.");
                    }
                  } else {
                    parser.tagName = c;
                  }
                } else if (c === ">") {
                  closeTag(parser);
                } else if (isMatch(nameBody, c)) {
                  parser.tagName += c;
                } else if (parser.script) {
                  parser.script += "</" + parser.tagName;
                  parser.tagName = "";
                  parser.state = S.SCRIPT;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser, "Invalid tagname in closing tag");
                  }
                  parser.state = S.CLOSE_TAG_SAW_WHITE;
                }
                continue;

              case S.CLOSE_TAG_SAW_WHITE:
                if (isWhitespace(c)) {
                  continue;
                }
                if (c === ">") {
                  closeTag(parser);
                } else {
                  strictFail(parser, "Invalid characters in closing tag");
                }
                continue;

              case S.TEXT_ENTITY:
              case S.ATTRIB_VALUE_ENTITY_Q:
              case S.ATTRIB_VALUE_ENTITY_U:
                var returnState;
                var buffer;
                switch (parser.state) {
                  case S.TEXT_ENTITY:
                    returnState = S.TEXT;
                    buffer = "textNode";
                    break;

                  case S.ATTRIB_VALUE_ENTITY_Q:
                    returnState = S.ATTRIB_VALUE_QUOTED;
                    buffer = "attribValue";
                    break;

                  case S.ATTRIB_VALUE_ENTITY_U:
                    returnState = S.ATTRIB_VALUE_UNQUOTED;
                    buffer = "attribValue";
                    break;
                }

                if (c === ";") {
                  parser[buffer] += parseEntity(parser);
                  parser.entity = "";
                  parser.state = returnState;
                } else if (
                  isMatch(parser.entity.length ? entityBody : entityStart, c)
                ) {
                  parser.entity += c;
                } else {
                  strictFail(parser, "Invalid character in entity name");
                  parser[buffer] += "&" + parser.entity + c;
                  parser.entity = "";
                  parser.state = returnState;
                }

                continue;

              default:
                throw new Error(parser, "Unknown state: " + parser.state);
            }
          } // while

          if (parser.position >= parser.bufferCheckPosition) {
            checkBufferLength(parser);
          }
          return parser;
        }

        /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
        /* istanbul ignore next */
        if (!String.fromCodePoint) {
          (function () {
            var stringFromCharCode = String.fromCharCode;
            var floor = Math.floor;
            var fromCodePoint = function () {
              var MAX_SIZE = 0x4000;
              var codeUnits = [];
              var highSurrogate;
              var lowSurrogate;
              var index = -1;
              var length = arguments.length;
              if (!length) {
                return "";
              }
              var result = "";
              while (++index < length) {
                var codePoint = Number(arguments[index]);
                if (
                  !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                  codePoint < 0 || // not a valid Unicode code point
                  codePoint > 0x10ffff || // not a valid Unicode code point
                  floor(codePoint) !== codePoint // not an integer
                ) {
                  throw RangeError("Invalid code point: " + codePoint);
                }
                if (codePoint <= 0xffff) {
                  // BMP code point
                  codeUnits.push(codePoint);
                } else {
                  // Astral code point; split in surrogate halves
                  // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                  codePoint -= 0x10000;
                  highSurrogate = (codePoint >> 10) + 0xd800;
                  lowSurrogate = (codePoint % 0x400) + 0xdc00;
                  codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                  result += stringFromCharCode.apply(null, codeUnits);
                  codeUnits.length = 0;
                }
              }
              return result;
            };
            /* istanbul ignore next */
            if (Object.defineProperty) {
              Object.defineProperty(String, "fromCodePoint", {
                value: fromCodePoint,
                configurable: true,
                writable: true,
              });
            } else {
              String.fromCodePoint = fromCodePoint;
            }
          })();
        }
      })(false ? 0 : exports);

      /***/
    },

    /***/ 9846: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      "use strict";

      var typeOf = __nccwpck_require__(6626);
      var extend = __nccwpck_require__(9856);

      /**
       * Parse sections in `input` with the given `options`.
       *
       * ```js
       * var sections = require('{%= name %}');
       * var result = sections(input, options);
       * // { content: 'Content before sections', sections: [] }
       * ```
       * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
       * @param {Object} options
       * @return {Object} Returns an object with a `content` string and an array of `sections` objects.
       * @api public
       */

      module.exports = function (input, options) {
        if (typeof options === "function") {
          options = { parse: options };
        }

        var file = toObject(input);
        var defaults = { section_delimiter: "---", parse: identity };
        var opts = extend({}, defaults, options);
        var delim = opts.section_delimiter;
        var lines = file.content.split(/\r?\n/);
        var sections = null;
        var section = createSection();
        var content = [];
        var stack = [];

        function initSections(val) {
          file.content = val;
          sections = [];
          content = [];
        }

        function closeSection(val) {
          if (stack.length) {
            section.key = getKey(stack[0], delim);
            section.content = val;
            opts.parse(section, sections);
            sections.push(section);
            section = createSection();
            content = [];
            stack = [];
          }
        }

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];
          var len = stack.length;
          var ln = line.trim();

          if (isDelimiter(ln, delim)) {
            if (ln.length === 3 && i !== 0) {
              if (len === 0 || len === 2) {
                content.push(line);
                continue;
              }
              stack.push(ln);
              section.data = content.join("\n");
              content = [];
              continue;
            }

            if (sections === null) {
              initSections(content.join("\n"));
            }

            if (len === 2) {
              closeSection(content.join("\n"));
            }

            stack.push(ln);
            continue;
          }

          content.push(line);
        }

        if (sections === null) {
          initSections(content.join("\n"));
        } else {
          closeSection(content.join("\n"));
        }

        file.sections = sections;
        return file;
      };

      function isDelimiter(line, delim) {
        if (line.slice(0, delim.length) !== delim) {
          return false;
        }
        if (line.charAt(delim.length + 1) === delim.slice(-1)) {
          return false;
        }
        return true;
      }

      function toObject(input) {
        if (typeOf(input) !== "object") {
          input = { content: input };
        }

        if (typeof input.content !== "string" && !isBuffer(input.content)) {
          throw new TypeError("expected a buffer or string");
        }

        input.content = input.content.toString();
        input.sections = [];
        return input;
      }

      function getKey(val, delim) {
        return val ? val.slice(delim.length).trim() : "";
      }

      function createSection() {
        return { key: "", data: "", content: "" };
      }

      function identity(val) {
        return val;
      }

      function isBuffer(val) {
        if (
          val &&
          val.constructor &&
          typeof val.constructor.isBuffer === "function"
        ) {
          return val.constructor.isBuffer(val);
        }
        return false;
      }

      /***/
    },

    /***/ 2663: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      /**
       * Module dependencies.
       */

      var assert = __nccwpck_require__(2357);
      var debug = __nccwpck_require__(5102)("stream-parser");

      /**
       * Module exports.
       */

      module.exports = Parser;

      /**
       * Parser states.
       */

      var INIT = -1;
      var BUFFERING = 0;
      var SKIPPING = 1;
      var PASSTHROUGH = 2;

      /**
       * The `Parser` stream mixin works with either `Writable` or `Transform` stream
       * instances/subclasses. Provides a convenient generic "parsing" API:
       *
       *   _bytes(n, cb) - buffers "n" bytes and then calls "cb" with the "chunk"
       *   _skipBytes(n, cb) - skips "n" bytes and then calls "cb" when done
       *
       * If you extend a `Transform` stream, then the `_passthrough()` function is also
       * added:
       *
       *   _passthrough(n, cb) - passes through "n" bytes untouched and then calls "cb"
       *
       * @param {Stream} stream Transform or Writable stream instance to extend
       * @api public
       */

      function Parser(stream) {
        var isTransform = stream && "function" == typeof stream._transform;
        var isWritable = stream && "function" == typeof stream._write;

        if (!isTransform && !isWritable)
          throw new Error("must pass a Writable or Transform stream in");
        debug("extending Parser into stream");

        // Transform streams and Writable streams get `_bytes()` and `_skipBytes()`
        stream._bytes = _bytes;
        stream._skipBytes = _skipBytes;

        // only Transform streams get the `_passthrough()` function
        if (isTransform) stream._passthrough = _passthrough;

        // take control of the streams2 callback functions for this stream
        if (isTransform) {
          stream._transform = transform;
        } else {
          stream._write = write;
        }
      }

      function init(stream) {
        debug("initializing parser stream");

        // number of bytes left to parser for the next "chunk"
        stream._parserBytesLeft = 0;

        // array of Buffer instances that make up the next "chunk"
        stream._parserBuffers = [];

        // number of bytes parsed so far for the next "chunk"
        stream._parserBuffered = 0;

        // flag that keeps track of if what the parser should do with bytes received
        stream._parserState = INIT;

        // the callback for the next "chunk"
        stream._parserCallback = null;

        // XXX: backwards compat with the old Transform API... remove at some point..
        if ("function" == typeof stream.push) {
          stream._parserOutput = stream.push.bind(stream);
        }

        stream._parserInit = true;
      }

      /**
       * Buffers `n` bytes and then invokes `fn` once that amount has been collected.
       *
       * @param {Number} n the number of bytes to buffer
       * @param {Function} fn callback function to invoke when `n` bytes are buffered
       * @api public
       */

      function _bytes(n, fn) {
        assert(!this._parserCallback, 'there is already a "callback" set!');
        assert(
          isFinite(n) && n > 0,
          'can only buffer a finite number of bytes > 0, got "' + n + '"'
        );
        if (!this._parserInit) init(this);
        debug("buffering %o bytes", n);
        this._parserBytesLeft = n;
        this._parserCallback = fn;
        this._parserState = BUFFERING;
      }

      /**
       * Skips over the next `n` bytes, then invokes `fn` once that amount has
       * been discarded.
       *
       * @param {Number} n the number of bytes to discard
       * @param {Function} fn callback function to invoke when `n` bytes have been skipped
       * @api public
       */

      function _skipBytes(n, fn) {
        assert(!this._parserCallback, 'there is already a "callback" set!');
        assert(n > 0, 'can only skip > 0 bytes, got "' + n + '"');
        if (!this._parserInit) init(this);
        debug("skipping %o bytes", n);
        this._parserBytesLeft = n;
        this._parserCallback = fn;
        this._parserState = SKIPPING;
      }

      /**
       * Passes through `n` bytes to the readable side of this stream untouched,
       * then invokes `fn` once that amount has been passed through.
       *
       * @param {Number} n the number of bytes to pass through
       * @param {Function} fn callback function to invoke when `n` bytes have passed through
       * @api public
       */

      function _passthrough(n, fn) {
        assert(!this._parserCallback, 'There is already a "callback" set!');
        assert(n > 0, 'can only pass through > 0 bytes, got "' + n + '"');
        if (!this._parserInit) init(this);
        debug("passing through %o bytes", n);
        this._parserBytesLeft = n;
        this._parserCallback = fn;
        this._parserState = PASSTHROUGH;
      }

      /**
       * The `_write()` callback function implementation.
       *
       * @api private
       */

      function write(chunk, encoding, fn) {
        if (!this._parserInit) init(this);
        debug("write(%o bytes)", chunk.length);

        // XXX: old Writable stream API compat... remove at some point...
        if ("function" == typeof encoding) fn = encoding;

        data(this, chunk, null, fn);
      }

      /**
       * The `_transform()` callback function implementation.
       *
       * @api private
       */

      function transform(chunk, output, fn) {
        if (!this._parserInit) init(this);
        debug("transform(%o bytes)", chunk.length);

        // XXX: old Transform stream API compat... remove at some point...
        if ("function" != typeof output) {
          output = this._parserOutput;
        }

        data(this, chunk, output, fn);
      }

      /**
       * The internal buffering/passthrough logic...
       *
       * This `_data` function get's "trampolined" to prevent stack overflows for tight
       * loops. This technique requires us to return a "thunk" function for any
       * synchronous action. Async stuff breaks the trampoline, but that's ok since it's
       * working with a new stack at that point anyway.
       *
       * @api private
       */

      function _data(stream, chunk, output, fn) {
        if (stream._parserBytesLeft <= 0) {
          return fn(new Error("got data but not currently parsing anything"));
        }

        if (chunk.length <= stream._parserBytesLeft) {
          // small buffer fits within the "_parserBytesLeft" window
          return function () {
            return process(stream, chunk, output, fn);
          };
        } else {
          // large buffer needs to be sliced on "_parserBytesLeft" and processed
          return function () {
            var b = chunk.slice(0, stream._parserBytesLeft);
            return process(stream, b, output, function (err) {
              if (err) return fn(err);
              if (chunk.length > b.length) {
                return function () {
                  return _data(stream, chunk.slice(b.length), output, fn);
                };
              }
            });
          };
        }
      }

      /**
       * The internal `process` function gets called by the `data` function when
       * something "interesting" happens. This function takes care of buffering the
       * bytes when buffering, passing through the bytes when doing that, and invoking
       * the user callback when the number of bytes has been reached.
       *
       * @api private
       */

      function process(stream, chunk, output, fn) {
        stream._parserBytesLeft -= chunk.length;
        debug("%o bytes left for stream piece", stream._parserBytesLeft);

        if (stream._parserState === BUFFERING) {
          // buffer
          stream._parserBuffers.push(chunk);
          stream._parserBuffered += chunk.length;
        } else if (stream._parserState === PASSTHROUGH) {
          // passthrough
          output(chunk);
        }
        // don't need to do anything for the SKIPPING case

        if (0 === stream._parserBytesLeft) {
          // done with stream "piece", invoke the callback
          var cb = stream._parserCallback;
          if (
            cb &&
            stream._parserState === BUFFERING &&
            stream._parserBuffers.length > 1
          ) {
            chunk = Buffer.concat(
              stream._parserBuffers,
              stream._parserBuffered
            );
          }
          if (stream._parserState !== BUFFERING) {
            chunk = null;
          }
          stream._parserCallback = null;
          stream._parserBuffered = 0;
          stream._parserState = INIT;
          stream._parserBuffers.splice(0); // empty

          if (cb) {
            var args = [];
            if (chunk) {
              // buffered
              args.push(chunk);
            } else {
              // passthrough
            }
            if (output) {
              // on a Transform stream, has "output" function
              args.push(output);
            }
            var async = cb.length > args.length;
            if (async) {
              args.push(trampoline(fn));
            }
            // invoke cb
            var rtn = cb.apply(stream, args);
            if (!async || fn === rtn) return fn;
          }
        } else {
          // need more bytes
          return fn;
        }
      }

      var data = trampoline(_data);

      /**
       * Generic thunk-based "trampoline" helper function.
       *
       * @param {Function} input function
       * @return {Function} "trampolined" function
       * @api private
       */

      function trampoline(fn) {
        return function () {
          var result = fn.apply(this, arguments);

          while ("function" == typeof result) {
            result = result();
          }

          return result;
        };
      }

      /***/
    },

    /***/ 1574: /***/ (module) => {
      "use strict";
      /*!
       * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      module.exports = function (str) {
        if (typeof str === "string" && str.charAt(0) === "\ufeff") {
          return str.slice(1);
        }
        return str;
      };

      /***/
    },

    /***/ 1371: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      const matter = __nccwpck_require__(8989);

      const { STATUS, ERRORS, CATEGORIES } = __nccwpck_require__(3196);

      function checkMarkdown(markdown) {
        let result = {
          status: STATUS.VALID,
          logo: "",
          errors: [],
        };
        try {
          const parsed = matter(markdown);
          if (parsed.data) {
            result.logo = parsed.data.logo;
            if (parsed.data.category) {
              const categories = parsed.data.category
                .split(",")
                .map((cat) => cat.trim().toLowerCase());
              if (categories.some((cat) => CATEGORIES.indexOf(cat) < 0)) {
                result.errors.push(ERRORS.CATEGORY_INVALID);
              }
            } else {
              result.errors.push(ERRORS.CATEGORY);
            }

            if (!parsed.data.slug) {
              result.errors.push(ERRORS.SLUG);
            }

            if (!parsed.data.date) {
              result.errors.push(ERRORS.DATE);
            }

            if (!parsed.data.title) {
              result.errors.push(ERRORS.TITLE);
            }

            if (!parsed.data.logline) {
              result.errors.push(ERRORS.LOGLINE);
            }

            if (!parsed.data.cta) {
              result.errors.push(ERRORS.CTA);
            }

            if (!parsed.data.logo) {
              result.errors.push(ERRORS.LOGO);
            } else {
              if (parsed.data.logo.includes(" ")) {
                result.errors.push(ERRORS.LOGO_INVALID);
              }
            }

            if (!parsed.data.status) {
              result.errors.push(ERRORS.STATUS);
            }
          } else {
            result.errors.push(ERRORS.DATA_INVALID);
          }

          if (result.errors.length > 0) {
            result.status = STATUS.INVALID;
          }
        } catch (e) {
          result.status = STATUS.INVALID;
          result.errors.push(ERRORS.DATA_INVALID);
        }

        return result;
      }

      exports.checkMarkdown = checkMarkdown;

      /***/
    },

    /***/ 3196: /***/ (module) => {
      const DEFAULT_MARKDOWN_EXTENSIONS = [".md", ".mdx"];
      const DEFAULT_IMAGE_EXTENSIONS = [".svg", ".png", ".jpg", ".jpeg"];
      const DEFAULT_FOLDERS = ["projects", "img"];

      const STATUS = {
        VALID: "VALID",
        INVALID: "INVALID",
      };

      const ERRORS = {
        EXTENSION_INVALID: "EXTENSION_IS_INVALID",
        DATA_INVALID: "DATA_INVALID",
        CATEGORY_INVALID: "CATEGORY_INVALID",
        CATEGORY: "CATEGORY_NOT_EXIST",
        SLUG: "SLUG_NOT_EXIST",
        DATE: "DATE_NOT_EXIST",
        TITLE: "TITLE_NOT_EXIST",
        LOGLINE: "LOGLINE_NOT_EXIST",
        CTA: "CTA_NOT_EXIST",
        LOGO: "LOGO_NOT_EXIST",
        LOGO_INVALID: "INVALID_LOGO_NAME",
        STATUS: "STATUS_NOT_EXIST",
        LOGO_FILE: "LOGO_FILE_NOT_EXIST",
        LOGO_FORMAT: "INVALID_LOGO_FORMAT",
        LOGO_SIZE: "INVALID_LOGO_SIZE",
        PROJECT_DUPLICATION: "PROJECT_ALREADY_EXIST",
      };

      const CATEGORIES = [
        "amm",
        "app",
        "dapp",
        "defi",
        "dex",
        "exchange",
        "explorer",
        "fund",
        "governance",
        "infra",
        "investmentfund",
        "metaplex",
        "nft",
        "oracle",
        "sdk",
        "spl",
        "stablecoin",
        "tools",
        "wallet",
      ];

      module.exports = {
        DEFAULT_FOLDERS,
        DEFAULT_MARKDOWN_EXTENSIONS,
        DEFAULT_IMAGE_EXTENSIONS,
        STATUS,
        ERRORS,
        CATEGORIES,
      };

      /***/
    },

    /***/ 1698: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      const path = __nccwpck_require__(5622);
      const fs = __nccwpck_require__(5747);
      const matter = __nccwpck_require__(8989);
      const Fuse = __nccwpck_require__(3038);

      const { STATUS, ERRORS } = __nccwpck_require__(3196);

      const getSlugList = (extensions, directory) => {
        let list = [];
        const allFiles = fs.readdirSync(directory);
        allFiles.forEach((filePath) => {
          const extension = path.extname(filePath);
          if (extensions.includes(extension)) {
            const markdownData = fs.readFileSync(
              `${directory}/${filePath}`,
              "utf8"
            );
            const parsed = matter(markdownData);
            if (parsed.data && parsed.data.slug) {
              list.push({
                slug: parsed.data.slug,
                filePath: `${directory}/${filePath}`,
              });
            }
          }
        });

        return list;
      };

      const checkDuplication = (slugList, slug, filePath, isFuzzySearch) => {
        let result = [];
        if (isFuzzySearch) {
          const fuse = new Fuse(slugList, {
            includeScore: true,
            threshold: 0.2,
            keys: ["slug"],
          });
          const duplications = fuse.search(slug);

          duplications.forEach((old) => {
            if (old.item.filePath !== filePath) {
              result.push(old.item.filePath);
            }
          });
        } else {
          slugList.forEach((item) => {
            if (item.slug === slug && item.filePath !== filePath) {
              result.push(item.filePath);
            }
          });
        }

        return result;
      };

      /**
       * Loops over all files in a directory and checks project duplication.
       *
       * @param changedFiles
       * @param markdownExtensions
       * @param directory
       * @param isFuzzySearch
       * @returns {{errors: *[], status: string}}
       */
      const testDuplication = (
        changedFiles,
        markdownExtensions,
        directory,
        isFuzzySearch
      ) => {
        let result = {
          status: STATUS.VALID,
          errors: [],
        };
        const slugList = getSlugList(markdownExtensions, directory);
        changedFiles.forEach((filePath) => {
          // check markdown files in the specified directory
          const markdownData = fs.readFileSync(filePath, "utf8");
          const parsed = matter(markdownData);
          if (parsed.data && parsed.data.slug) {
            const slug = parsed.data.slug;
            const checkResult = checkDuplication(
              slugList,
              slug,
              filePath,
              isFuzzySearch
            );
            if (checkResult.length > 0) {
              result.errors.push({
                errors: ERRORS.PROJECT_DUPLICATION,
                file: filePath,
                duplicates: checkResult,
              });
            }
          } else {
            result.errors.push({ errors: ERRORS.SLUG, file: filePath });
          }
        });

        if (result.errors.length > 0) {
          result.status = STATUS.INVALID;
        }

        return result;
      };

      module.exports = {
        testDuplication,
      };

      /***/
    },

    /***/ 3662: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      const path = __nccwpck_require__(5622);
      const { STATUS, ERRORS } = __nccwpck_require__(3196);

      /**
       * Loops over all files in a directory and checks their extensions.
       *
       * @param extensions
       * @param changedFiles
       * @param directory
       * @returns {{errors: *[], validFiles: [string], status: string}}
       */
      const testExtensions = (extensions, changedFiles, directory) => {
        let result = {
          status: STATUS.VALID,
          validFiles: [],
          errors: [],
        };
        changedFiles.forEach((filePath) => {
          if (filePath.includes(directory)) {
            let extension = path.extname(filePath) || "";
            extension = extension.toLowerCase();
            if (extensions.includes(extension)) {
              result.validFiles.push(filePath);
            } else {
              result.errors.push({
                error: ERRORS.EXTENSION_INVALID,
                file: filePath,
              });
            }
          }
        });

        if (result.errors.length > 0) {
          result.status = STATUS.INVALID;
        }

        return result;
      };

      module.exports = {
        testExtensions,
      };

      /***/
    },

    /***/ 8915: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      const path = __nccwpck_require__(5622);
      const fs = __nccwpck_require__(5747);

      const { STATUS, ERRORS } = __nccwpck_require__(3196);
      const { checkMarkdown } = __nccwpck_require__(1371);

      /**
       * Loops over all files in a directory and checks Markdown Frontmatter.
       *
       * @param markdownExtensions
       * @param changedFiles
       * @param directory
       * @returns {{errors: *[], status: string}}
       */
      const testFrontmatter = (markdownExtensions, changedFiles, directory) => {
        let result = {
          status: STATUS.VALID,
          errors: [],
        };
        changedFiles.forEach((filePath) => {
          // check markdown files in the specified directory
          if (filePath.includes(directory)) {
            const extension = path.extname(filePath);
            if (markdownExtensions.includes(extension)) {
              const markdownData = fs.readFileSync(filePath, "utf8");
              const markdownResult = checkMarkdown(markdownData);
              if (markdownResult.errors.length > 0) {
                // Grab markdown syntax errors
                result.errors.push({
                  errors: markdownResult.errors,
                  file: filePath,
                });
              }
            }
          }
        });

        if (result.errors.length > 0) {
          result.status = STATUS.INVALID;
        }

        return result;
      };

      module.exports = {
        testFrontmatter,
      };

      /***/
    },

    /***/ 1253: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      const path = __nccwpck_require__(5622);
      const fs = __nccwpck_require__(5747);
      const matter = __nccwpck_require__(8989);
      const probe = __nccwpck_require__(1752);

      const { STATUS, ERRORS } = __nccwpck_require__(3196);

      const getLogoPath = (filePath) => {
        const markdownData = fs.readFileSync(filePath, "utf8");
        const parsed = matter(markdownData);
        let logoPath = "";
        if (parsed.data && parsed.data.logo) {
          logoPath = parsed.data.logo.slice(1); // remove "/" at the beginning of the image path
        }
        return logoPath;
      };

      /**
       * Check logo file name & format
       *
       * @param extensions
       * @param logoPath
       * @returns {{error: string}}
       */
      const checkLogoFile = (extensions, logoPath) => {
        let result = {
          error: null,
        };

        // Check logo error
        if (!fs.existsSync(logoPath)) {
          // logo file doesn't exist
          result.error = ERRORS.LOGO_FILE;
        } else {
          const extension = path.extname(logoPath).toLowerCase();
          if (extensions.indexOf(extension) < 0) {
            result.error = ERRORS.LOGO_FORMAT;
          } else {
            const data = fs.readFileSync(logoPath);
            const meta = probe.sync(data);
            const ext = extension.slice(1);
            if (meta.type === ext || meta.mime.includes(ext)) {
              const ratio = meta.height / meta.width;
              if (ratio < 0.9 || ratio > 1.1) {
                result.error = ERRORS.LOGO_SIZE;
              }
            } else {
              result.error = ERRORS.LOGO_FORMAT;
            }
          }
        }
        return result;
      };

      /**
       * Loops over all files in a directory and checks Logos.
       *
       * @param extensions
       * @param changedFiles
       * @returns {{errors: *[], status: string}}
       */
      const testLogo = (extensions, changedFiles) => {
        let result = {
          status: STATUS.VALID,
          errors: [],
        };
        changedFiles.forEach((filePath) => {
          // Grab logo filename
          const logoPath = getLogoPath(filePath);
          const logoCheckResult = checkLogoFile(extensions, logoPath);
          if (logoCheckResult.error) {
            result.errors.push({
              error: logoCheckResult.error,
              file: logoPath,
            });
          }
        });

        if (result.errors.length > 0) {
          result.status = STATUS.INVALID;
        }

        return result;
      };

      module.exports = {
        testLogo,
      };

      /***/
    },

    /***/ 436: /***/ (module) => {
      module.exports = eval("require")("supports-color");

      /***/
    },

    /***/ 3612: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["8740","䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"],["8767","綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],["87a1","𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"],["8840","㇀",4,"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"],["88a1","ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],["8940","𪎩𡅅"],["8943","攊"],["8946","丽滝鵎釟"],["894c","𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],["89a1","琑糼緍楆竉刧"],["89ab","醌碸酞肼"],["89b0","贋胶𠧧"],["89b5","肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],["89c1","溚舾甙"],["89c5","䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],["8a40","𧶄唥"],["8a43","𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"],["8a64","𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],["8a76","䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],["8aa1","𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],["8aac","䠋𠆩㿺塳𢶍"],["8ab2","𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],["8abb","䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],["8ac9","𪘁𠸉𢫏𢳉"],["8ace","𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],["8adf","𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],["8af6","𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],["8b40","𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],["8b55","𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"],["8ba1","𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"],["8bde","𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"],["8c40","倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"],["8ca1","𣏹椙橃𣱣泿"],["8ca7","爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"],["8cc9","顨杫䉶圽"],["8cce","藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],["8ce6","峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],["8d40","𠮟"],["8d42","𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],["8da1","㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"],["8e40","𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"],["8ea1","繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"],["8f40","蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"],["8fa1","𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"],["9040","趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"],["90a1","𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"],["9140","𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"],["91a1","鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"],["9240","𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"],["92a1","働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"],["9340","媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"],["93a1","摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"],["9440","銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"],["94a1","㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"],["9540","𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"],["95a1","衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"],["9640","桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"],["96a1","𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"],["9740","愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"],["97a1","𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"],["9840","𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"],["98a1","咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"],["9940","䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],["99a1","䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],["9a40","鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"],["9aa1","黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"],["9b40","𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"],["9b62","𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],["9ba1","椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"],["9c40","嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"],["9ca1","㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"],["9d40","𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"],["9da1","辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"],["9e40","𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"],["9ea1","鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],["9ead","𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],["9ec5","㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"],["9ef5","噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],["9f40","籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],["9f4f","凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],["9fa1","椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],["9fae","酙隁酜"],["9fb2","酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],["9fc1","𤤙盖鮝个𠳔莾衂"],["9fc9","届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],["9fdb","歒酼龥鮗頮颴骺麨麄煺笔"],["9fe7","毺蠘罸"],["9feb","嘠𪙊蹷齓"],["9ff0","跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],["a040","𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],["a055","𡠻𦸅"],["a058","詾𢔛"],["a05b","惽癧髗鵄鍮鮏蟵"],["a063","蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],["a073","坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],["a0a1","嵗𨯂迚𨸹"],["a0a6","僙𡵆礆匲阸𠼻䁥"],["a0ae","矾"],["a0b0","糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],["a0d4","覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],["a0e2","罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],["a3c0","␀",31,"␡"],["c6a1","①",9,"⑴",9,"ⅰ",9,"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",23],["c740","す",58,"ァアィイ"],["c7a1","ゥ",81,"А",5,"ЁЖ",4],["c840","Л",26,"ёж",25,"⇧↸↹㇏𠃌乚𠂊刂䒑"],["c8a1","龰冈龱𧘇"],["c8cd","￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],["c8f5","ʃɐɛɔɵœøŋʊɪ"],["f9fe","￭"],["fa40","𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"],["faa1","鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"],["fb40","𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"],["fba1","𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"],["fc40","廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"],["fca1","𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"],["fd40","𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"],["fda1","𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"],["fe40","鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"],["fea1","𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]]'
      );

      /***/
    },

    /***/ 7803: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["0","\\u0000",127,"€"],["8140","丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",5,"乲乴",9,"乿",6,"亇亊"],["8180","亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",6,"伋伌伒",4,"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",4,"佄佅佇",5,"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],["8240","侤侫侭侰",4,"侶",8,"俀俁係俆俇俈俉俋俌俍俒",4,"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",11],["8280","個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",10,"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",4,"偖偗偘偙偛偝",7,"偦",5,"偭",8,"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",20,"傤傦傪傫傭",4,"傳",6,"傼"],["8340","傽",17,"僐",5,"僗僘僙僛",10,"僨僩僪僫僯僰僱僲僴僶",4,"僼",9,"儈"],["8380","儉儊儌",5,"儓",13,"儢",28,"兂兇兊兌兎兏児兒兓兗兘兙兛兝",4,"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",4,"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",5],["8440","凘凙凚凜凞凟凢凣凥",5,"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",5,"剋剎剏剒剓剕剗剘"],["8480","剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",9,"剾劀劃",4,"劉",6,"劑劒劔",6,"劜劤劥劦劧劮劯劰労",9,"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",5,"勠勡勢勣勥",10,"勱",7,"勻勼勽匁匂匃匄匇匉匊匋匌匎"],["8540","匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",9,"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],["8580","厐",4,"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",6,"厷厸厹厺厼厽厾叀參",4,"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",4,"呣呥呧呩",7,"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],["8640","咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",4,"哫哬哯哰哱哴",5,"哻哾唀唂唃唄唅唈唊",4,"唒唓唕",5,"唜唝唞唟唡唥唦"],["8680","唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",4,"啑啒啓啔啗",4,"啝啞啟啠啢啣啨啩啫啯",5,"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",6,"喨",8,"喲喴営喸喺喼喿",4,"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",4,"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",4,"嗿嘂嘃嘄嘅"],["8740","嘆嘇嘊嘋嘍嘐",7,"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",11,"噏",4,"噕噖噚噛噝",4],["8780","噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",7,"嚇",6,"嚐嚑嚒嚔",14,"嚤",10,"嚰",6,"嚸嚹嚺嚻嚽",12,"囋",8,"囕囖囘囙囜団囥",5,"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",6],["8840","園",9,"圝圞圠圡圢圤圥圦圧圫圱圲圴",4,"圼圽圿坁坃坄坅坆坈坉坋坒",4,"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],["8880","垁垇垈垉垊垍",4,"垔",6,"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",8,"埄",6,"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",7,"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",4,"堫",4,"報堲堳場堶",7],["8940","堾",5,"塅",6,"塎塏塐塒塓塕塖塗塙",4,"塟",5,"塦",4,"塭",16,"塿墂墄墆墇墈墊墋墌"],["8980","墍",4,"墔",4,"墛墜墝墠",7,"墪",17,"墽墾墿壀壂壃壄壆",10,"壒壓壔壖",13,"壥",5,"壭壯壱売壴壵壷壸壺",7,"夃夅夆夈",4,"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],["8a40","夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",4,"奡奣奤奦",12,"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],["8a80","妧妬妭妰妱妳",5,"妺妼妽妿",6,"姇姈姉姌姍姎姏姕姖姙姛姞",4,"姤姦姧姩姪姫姭",11,"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",6,"娳娵娷",4,"娽娾娿婁",4,"婇婈婋",9,"婖婗婘婙婛",5],["8b40","婡婣婤婥婦婨婩婫",8,"婸婹婻婼婽婾媀",17,"媓",6,"媜",13,"媫媬"],["8b80","媭",4,"媴媶媷媹",4,"媿嫀嫃",5,"嫊嫋嫍",4,"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",4,"嫲",22,"嬊",11,"嬘",25,"嬳嬵嬶嬸",7,"孁",6],["8c40","孈",7,"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],["8c80","寑寔",8,"寠寢寣實寧審",4,"寯寱",6,"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",6,"屰屲",6,"屻屼屽屾岀岃",4,"岉岊岋岎岏岒岓岕岝",4,"岤",4],["8d40","岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",5,"峌",5,"峓",5,"峚",6,"峢峣峧峩峫峬峮峯峱",9,"峼",4],["8d80","崁崄崅崈",5,"崏",4,"崕崗崘崙崚崜崝崟",4,"崥崨崪崫崬崯",4,"崵",7,"崿",7,"嵈嵉嵍",10,"嵙嵚嵜嵞",10,"嵪嵭嵮嵰嵱嵲嵳嵵",12,"嶃",21,"嶚嶛嶜嶞嶟嶠"],["8e40","嶡",21,"嶸",12,"巆",6,"巎",12,"巜巟巠巣巤巪巬巭"],["8e80","巰巵巶巸",4,"巿帀帄帇帉帊帋帍帎帒帓帗帞",7,"帨",4,"帯帰帲",4,"帹帺帾帿幀幁幃幆",5,"幍",6,"幖",4,"幜幝幟幠幣",14,"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",4,"庮",4,"庴庺庻庼庽庿",6],["8f40","廆廇廈廋",5,"廔廕廗廘廙廚廜",11,"廩廫",8,"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],["8f80","弨弫弬弮弰弲",6,"弻弽弾弿彁",14,"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",5,"復徫徬徯",5,"徶徸徹徺徻徾",4,"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],["9040","怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",4,"怶",4,"怽怾恀恄",6,"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],["9080","悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",7,"惇惈惉惌",4,"惒惓惔惖惗惙惛惞惡",4,"惪惱惲惵惷惸惻",4,"愂愃愄愅愇愊愋愌愐",4,"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",18,"慀",6],["9140","慇慉態慍慏慐慒慓慔慖",6,"慞慟慠慡慣慤慥慦慩",6,"慱慲慳慴慶慸",18,"憌憍憏",4,"憕"],["9180","憖",6,"憞",8,"憪憫憭",9,"憸",5,"憿懀懁懃",4,"應懌",4,"懓懕",16,"懧",13,"懶",8,"戀",5,"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",4,"扂扄扅扆扊"],["9240","扏扐払扖扗扙扚扜",6,"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",5,"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],["9280","拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",5,"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",7,"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",6,"採掤掦掫掯掱掲掵掶掹掻掽掿揀"],["9340","揁揂揃揅揇揈揊揋揌揑揓揔揕揗",6,"揟揢揤",4,"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",4,"損搎搑搒搕",5,"搝搟搢搣搤"],["9380","搥搧搨搩搫搮",5,"搵",4,"搻搼搾摀摂摃摉摋",6,"摓摕摖摗摙",4,"摟",7,"摨摪摫摬摮",9,"摻",6,"撃撆撈",8,"撓撔撗撘撚撛撜撝撟",4,"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",6,"擏擑擓擔擕擖擙據"],["9440","擛擜擝擟擠擡擣擥擧",24,"攁",7,"攊",7,"攓",4,"攙",8],["9480","攢攣攤攦",4,"攬攭攰攱攲攳攷攺攼攽敀",4,"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",14,"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",7,"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",7,"旡旣旤旪旫"],["9540","旲旳旴旵旸旹旻",4,"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",4,"昽昿晀時晄",6,"晍晎晐晑晘"],["9580","晙晛晜晝晞晠晢晣晥晧晩",4,"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",4,"暞",8,"暩",4,"暯",4,"暵暶暷暸暺暻暼暽暿",25,"曚曞",7,"曧曨曪",5,"曱曵曶書曺曻曽朁朂會"],["9640","朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",5,"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",4,"杝杢杣杤杦杧杫杬杮東杴杶"],["9680","杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",7,"柂柅",9,"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",7,"柾栁栂栃栄栆栍栐栒栔栕栘",4,"栞栟栠栢",6,"栫",6,"栴栵栶栺栻栿桇桋桍桏桒桖",5],["9740","桜桝桞桟桪桬",7,"桵桸",8,"梂梄梇",7,"梐梑梒梔梕梖梘",9,"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],["9780","梹",6,"棁棃",5,"棊棌棎棏棐棑棓棔棖棗棙棛",4,"棡棢棤",9,"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",4,"椌椏椑椓",11,"椡椢椣椥",7,"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",16,"楕楖楘楙楛楜楟"],["9840","楡楢楤楥楧楨楩楪楬業楯楰楲",4,"楺楻楽楾楿榁榃榅榊榋榌榎",5,"榖榗榙榚榝",9,"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],["9880","榾榿槀槂",7,"構槍槏槑槒槓槕",5,"槜槝槞槡",11,"槮槯槰槱槳",9,"槾樀",9,"樋",11,"標",5,"樠樢",5,"権樫樬樭樮樰樲樳樴樶",6,"樿",4,"橅橆橈",7,"橑",6,"橚"],["9940","橜",4,"橢橣橤橦",10,"橲",6,"橺橻橽橾橿檁檂檃檅",8,"檏檒",4,"檘",7,"檡",5],["9980","檧檨檪檭",114,"欥欦欨",6],["9a40","欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",11,"歚",7,"歨歩歫",13,"歺歽歾歿殀殅殈"],["9a80","殌殎殏殐殑殔殕殗殘殙殜",4,"殢",7,"殫",7,"殶殸",6,"毀毃毄毆",4,"毌毎毐毑毘毚毜",4,"毢",7,"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",6,"氈",4,"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",4,"汑汒汓汖汘"],["9b40","汙汚汢汣汥汦汧汫",4,"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],["9b80","泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",5,"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",4,"涃涄涆涇涊涋涍涏涐涒涖",4,"涜涢涥涬涭涰涱涳涴涶涷涹",5,"淁淂淃淈淉淊"],["9c40","淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",7,"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],["9c80","渶渷渹渻",7,"湅",7,"湏湐湑湒湕湗湙湚湜湝湞湠",10,"湬湭湯",14,"満溁溂溄溇溈溊",4,"溑",6,"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",5],["9d40","滰滱滲滳滵滶滷滸滺",7,"漃漄漅漇漈漊",4,"漐漑漒漖",9,"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",6,"漿潀潁潂"],["9d80","潃潄潅潈潉潊潌潎",9,"潙潚潛潝潟潠潡潣潤潥潧",5,"潯潰潱潳潵潶潷潹潻潽",6,"澅澆澇澊澋澏",12,"澝澞澟澠澢",4,"澨",10,"澴澵澷澸澺",5,"濁濃",5,"濊",6,"濓",10,"濟濢濣濤濥"],["9e40","濦",7,"濰",32,"瀒",7,"瀜",6,"瀤",6],["9e80","瀫",9,"瀶瀷瀸瀺",17,"灍灎灐",13,"灟",11,"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",12,"炰炲炴炵炶為炾炿烄烅烆烇烉烋",12,"烚"],["9f40","烜烝烞烠烡烢烣烥烪烮烰",6,"烸烺烻烼烾",10,"焋",4,"焑焒焔焗焛",10,"焧",7,"焲焳焴"],["9f80","焵焷",13,"煆煇煈煉煋煍煏",12,"煝煟",4,"煥煩",4,"煯煰煱煴煵煶煷煹煻煼煾",5,"熅",4,"熋熌熍熎熐熑熒熓熕熖熗熚",4,"熡",6,"熩熪熫熭",5,"熴熶熷熸熺",8,"燄",9,"燏",4],["a040","燖",9,"燡燢燣燤燦燨",5,"燯",9,"燺",11,"爇",19],["a080","爛爜爞",9,"爩爫爭爮爯爲爳爴爺爼爾牀",6,"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",4,"犌犎犐犑犓",11,"犠",11,"犮犱犲犳犵犺",6,"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],["a1a1","　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",7,"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"],["a2a1","ⅰ",9],["a2b1","⒈",19,"⑴",19,"①",9],["a2e5","㈠",9],["a2f1","Ⅰ",11],["a3a1","！＂＃￥％",88,"￣"],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a6e0","︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],["a6ee","︻︼︷︸︱"],["a6f4","︳︴"],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a840","ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",35,"▁",6],["a880","█",7,"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],["a8a1","āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],["a8bd","ńň"],["a8c0","ɡ"],["a8c5","ㄅ",36],["a940","〡",8,"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],["a959","℡㈱"],["a95c","‐"],["a960","ー゛゜ヽヾ〆ゝゞ﹉",9,"﹔﹕﹖﹗﹙",8],["a980","﹢",4,"﹨﹩﹪﹫"],["a996","〇"],["a9a4","─",75],["aa40","狜狝狟狢",5,"狪狫狵狶狹狽狾狿猀猂猄",5,"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",8],["aa80","獉獊獋獌獎獏獑獓獔獕獖獘",7,"獡",10,"獮獰獱"],["ab40","獲",11,"獿",4,"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",5,"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",4],["ab80","珋珌珎珒",6,"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",4],["ac40","珸",10,"琄琇琈琋琌琍琎琑",8,"琜",5,"琣琤琧琩琫琭琯琱琲琷",4,"琽琾琿瑀瑂",11],["ac80","瑎",6,"瑖瑘瑝瑠",12,"瑮瑯瑱",4,"瑸瑹瑺"],["ad40","瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",10,"璝璟",7,"璪",15,"璻",12],["ad80","瓈",9,"瓓",8,"瓝瓟瓡瓥瓧",6,"瓰瓱瓲"],["ae40","瓳瓵瓸",6,"甀甁甂甃甅",7,"甎甐甒甔甕甖甗甛甝甞甠",4,"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],["ae80","畝",7,"畧畨畩畫",6,"畳畵當畷畺",4,"疀疁疂疄疅疇"],["af40","疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",4,"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],["af80","瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],["b040","癅",6,"癎",5,"癕癗",4,"癝癟癠癡癢癤",6,"癬癭癮癰",7,"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],["b080","皜",7,"皥",8,"皯皰皳皵",9,"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],["b140","盄盇盉盋盌盓盕盙盚盜盝盞盠",4,"盦",7,"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",10,"眛眜眝眞眡眣眤眥眧眪眫"],["b180","眬眮眰",4,"眹眻眽眾眿睂睄睅睆睈",7,"睒",7,"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],["b240","睝睞睟睠睤睧睩睪睭",11,"睺睻睼瞁瞂瞃瞆",5,"瞏瞐瞓",11,"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",4],["b280","瞼瞾矀",12,"矎",8,"矘矙矚矝",4,"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],["b340","矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",5,"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],["b380","硛硜硞",11,"硯",7,"硸硹硺硻硽",6,"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],["b440","碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",7,"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",9],["b480","磤磥磦磧磩磪磫磭",4,"磳磵磶磸磹磻",5,"礂礃礄礆",6,"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],["b540","礍",5,"礔",9,"礟",4,"礥",14,"礵",4,"礽礿祂祃祄祅祇祊",8,"祔祕祘祙祡祣"],["b580","祤祦祩祪祫祬祮祰",6,"祹祻",4,"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],["b640","禓",6,"禛",11,"禨",10,"禴",4,"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",5,"秠秡秢秥秨秪"],["b680","秬秮秱",6,"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",4,"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],["b740","稝稟稡稢稤",14,"稴稵稶稸稺稾穀",5,"穇",9,"穒",4,"穘",16],["b780","穩",6,"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],["b840","窣窤窧窩窪窫窮",4,"窴",10,"竀",10,"竌",9,"竗竘竚竛竜竝竡竢竤竧",5,"竮竰竱竲竳"],["b880","竴",4,"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],["b940","笯笰笲笴笵笶笷笹笻笽笿",5,"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",10,"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",6,"箎箏"],["b980","箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",7,"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],["ba40","篅篈築篊篋篍篎篏篐篒篔",4,"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",4,"篸篹篺篻篽篿",7,"簈簉簊簍簎簐",5,"簗簘簙"],["ba80","簚",4,"簠",5,"簨簩簫",12,"簹",5,"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],["bb40","籃",9,"籎",36,"籵",5,"籾",9],["bb80","粈粊",6,"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",4,"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],["bc40","粿糀糂糃糄糆糉糋糎",6,"糘糚糛糝糞糡",6,"糩",5,"糰",7,"糹糺糼",13,"紋",5],["bc80","紑",14,"紡紣紤紥紦紨紩紪紬紭紮細",6,"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],["bd40","紷",54,"絯",7],["bd80","絸",32,"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],["be40","継",12,"綧",6,"綯",42],["be80","線",32,"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],["bf40","緻",62],["bf80","縺縼",4,"繂",4,"繈",21,"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],["c040","繞",35,"纃",23,"纜纝纞"],["c080","纮纴纻纼绖绤绬绹缊缐缞缷缹缻",6,"罃罆",9,"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],["c140","罖罙罛罜罝罞罠罣",4,"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",7,"羋羍羏",4,"羕",4,"羛羜羠羢羣羥羦羨",6,"羱"],["c180","羳",4,"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",4,"翖翗翙",5,"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],["c240","翤翧翨翪翫翬翭翯翲翴",6,"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",5,"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],["c280","聙聛",13,"聫",5,"聲",11,"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],["c340","聾肁肂肅肈肊肍",5,"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",4,"胏",6,"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],["c380","脌脕脗脙脛脜脝脟",12,"脭脮脰脳脴脵脷脹",4,"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],["c440","腀",5,"腇腉腍腎腏腒腖腗腘腛",4,"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",4,"膉膋膌膍膎膐膒",5,"膙膚膞",4,"膤膥"],["c480","膧膩膫",7,"膴",5,"膼膽膾膿臄臅臇臈臉臋臍",6,"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],["c540","臔",14,"臤臥臦臨臩臫臮",4,"臵",5,"臽臿舃與",4,"舎舏舑舓舕",5,"舝舠舤舥舦舧舩舮舲舺舼舽舿"],["c580","艀艁艂艃艅艆艈艊艌艍艎艐",7,"艙艛艜艝艞艠",7,"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],["c640","艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],["c680","苺苼",4,"茊茋茍茐茒茓茖茘茙茝",9,"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],["c740","茾茿荁荂荄荅荈荊",4,"荓荕",4,"荝荢荰",6,"荹荺荾",6,"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",6,"莬莭莮"],["c780","莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],["c840","菮華菳",4,"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",5,"萙萚萛萞",5,"萩",7,"萲",5,"萹萺萻萾",7,"葇葈葉"],["c880","葊",6,"葒",4,"葘葝葞葟葠葢葤",4,"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],["c940","葽",4,"蒃蒄蒅蒆蒊蒍蒏",7,"蒘蒚蒛蒝蒞蒟蒠蒢",12,"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],["c980","蓘",4,"蓞蓡蓢蓤蓧",4,"蓭蓮蓯蓱",10,"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],["ca40","蔃",8,"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",8,"蔭",9,"蔾",4,"蕄蕅蕆蕇蕋",10],["ca80","蕗蕘蕚蕛蕜蕝蕟",4,"蕥蕦蕧蕩",8,"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],["cb40","薂薃薆薈",6,"薐",10,"薝",6,"薥薦薧薩薫薬薭薱",5,"薸薺",6,"藂",6,"藊",4,"藑藒"],["cb80","藔藖",5,"藝",6,"藥藦藧藨藪",14,"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],["cc40","藹藺藼藽藾蘀",4,"蘆",10,"蘒蘓蘔蘕蘗",15,"蘨蘪",13,"蘹蘺蘻蘽蘾蘿虀"],["cc80","虁",11,"虒虓處",4,"虛虜虝號虠虡虣",7,"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],["cd40","虭虯虰虲",6,"蚃",6,"蚎",4,"蚔蚖",5,"蚞",4,"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",4,"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],["cd80","蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],["ce40","蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",6,"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",5,"蝡蝢蝦",7,"蝯蝱蝲蝳蝵"],["ce80","蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",4,"螔螕螖螘",6,"螠",4,"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],["cf40","螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",4,"蟇蟈蟉蟌",4,"蟔",6,"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",9],["cf80","蟺蟻蟼蟽蟿蠀蠁蠂蠄",5,"蠋",7,"蠔蠗蠘蠙蠚蠜",4,"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],["d040","蠤",13,"蠳",5,"蠺蠻蠽蠾蠿衁衂衃衆",5,"衎",5,"衕衖衘衚",6,"衦衧衪衭衯衱衳衴衵衶衸衹衺"],["d080","衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",4,"袝",4,"袣袥",5,"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],["d140","袬袮袯袰袲",4,"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",4,"裠裡裦裧裩",6,"裲裵裶裷裺裻製裿褀褁褃",5],["d180","褉褋",4,"褑褔",4,"褜",4,"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],["d240","褸",8,"襂襃襅",24,"襠",5,"襧",19,"襼"],["d280","襽襾覀覂覄覅覇",26,"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],["d340","覢",30,"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",6],["d380","觻",4,"訁",5,"計",21,"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],["d440","訞",31,"訿",8,"詉",21],["d480","詟",25,"詺",6,"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],["d540","誁",7,"誋",7,"誔",46],["d580","諃",32,"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],["d640","諤",34,"謈",27],["d680","謤謥謧",30,"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],["d740","譆",31,"譧",4,"譭",25],["d780","讇",24,"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],["d840","谸",8,"豂豃豄豅豈豊豋豍",7,"豖豗豘豙豛",5,"豣",6,"豬",6,"豴豵豶豷豻",6,"貃貄貆貇"],["d880","貈貋貍",6,"貕貖貗貙",20,"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],["d940","貮",62],["d980","賭",32,"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],["da40","贎",14,"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",8,"趂趃趆趇趈趉趌",4,"趒趓趕",9,"趠趡"],["da80","趢趤",12,"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],["db40","跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",6,"踆踇踈踋踍踎踐踑踒踓踕",7,"踠踡踤",4,"踫踭踰踲踳踴踶踷踸踻踼踾"],["db80","踿蹃蹅蹆蹌",4,"蹓",5,"蹚",11,"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],["dc40","蹳蹵蹷",4,"蹽蹾躀躂躃躄躆躈",6,"躑躒躓躕",6,"躝躟",11,"躭躮躰躱躳",6,"躻",7],["dc80","軃",10,"軏",21,"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],["dd40","軥",62],["dd80","輤",32,"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],["de40","轅",32,"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],["de80","迉",4,"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],["df40","這逜連逤逥逧",5,"逰",4,"逷逹逺逽逿遀遃遅遆遈",4,"過達違遖遙遚遜",5,"遤遦遧適遪遫遬遯",4,"遶",6,"遾邁"],["df80","還邅邆邇邉邊邌",4,"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],["e040","郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",19,"鄚鄛鄜"],["e080","鄝鄟鄠鄡鄤",10,"鄰鄲",6,"鄺",8,"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],["e140","酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",4,"醆醈醊醎醏醓",6,"醜",5,"醤",5,"醫醬醰醱醲醳醶醷醸醹醻"],["e180","醼",10,"釈釋釐釒",9,"針",8,"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],["e240","釦",62],["e280","鈥",32,"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",5,"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],["e340","鉆",45,"鉵",16],["e380","銆",7,"銏",24,"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],["e440","銨",5,"銯",24,"鋉",31],["e480","鋩",32,"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],["e540","錊",51,"錿",10],["e580","鍊",31,"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],["e640","鍬",34,"鎐",27],["e680","鎬",29,"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],["e740","鏎",7,"鏗",54],["e780","鐎",32,"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",6,"缪缫缬缭缯",4,"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],["e840","鐯",14,"鐿",43,"鑬鑭鑮鑯"],["e880","鑰",20,"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],["e940","锧锳锽镃镈镋镕镚镠镮镴镵長",7,"門",42],["e980","閫",32,"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],["ea40","闌",27,"闬闿阇阓阘阛阞阠阣",6,"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],["ea80","陘陙陚陜陝陞陠陣陥陦陫陭",4,"陳陸",12,"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],["eb40","隌階隑隒隓隕隖隚際隝",9,"隨",7,"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",9,"雡",6,"雫"],["eb80","雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",4,"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],["ec40","霡",8,"霫霬霮霯霱霳",4,"霺霻霼霽霿",18,"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",7],["ec80","靲靵靷",4,"靽",7,"鞆",4,"鞌鞎鞏鞐鞓鞕鞖鞗鞙",4,"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],["ed40","鞞鞟鞡鞢鞤",6,"鞬鞮鞰鞱鞳鞵",46],["ed80","韤韥韨韮",4,"韴韷",23,"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],["ee40","頏",62],["ee80","顎",32,"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",4,"钼钽钿铄铈",6,"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],["ef40","顯",5,"颋颎颒颕颙颣風",37,"飏飐飔飖飗飛飜飝飠",4],["ef80","飥飦飩",30,"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",4,"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",8,"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],["f040","餈",4,"餎餏餑",28,"餯",26],["f080","饊",9,"饖",12,"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",4,"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",6,"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],["f140","馌馎馚",10,"馦馧馩",47],["f180","駙",32,"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],["f240","駺",62],["f280","騹",32,"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],["f340","驚",17,"驲骃骉骍骎骔骕骙骦骩",6,"骲骳骴骵骹骻骽骾骿髃髄髆",4,"髍髎髏髐髒體髕髖髗髙髚髛髜"],["f380","髝髞髠髢髣髤髥髧髨髩髪髬髮髰",8,"髺髼",6,"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],["f440","鬇鬉",5,"鬐鬑鬒鬔",10,"鬠鬡鬢鬤",10,"鬰鬱鬳",7,"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",5],["f480","魛",32,"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],["f540","魼",62],["f580","鮻",32,"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],["f640","鯜",62],["f680","鰛",32,"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",5,"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",5,"鲥",4,"鲫鲭鲮鲰",7,"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],["f740","鰼",62],["f780","鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",4,"鳈鳉鳑鳒鳚鳛鳠鳡鳌",4,"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],["f840","鳣",62],["f880","鴢",32],["f940","鵃",62],["f980","鶂",32],["fa40","鶣",62],["fa80","鷢",32],["fb40","鸃",27,"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",9,"麀"],["fb80","麁麃麄麅麆麉麊麌",5,"麔",8,"麞麠",5,"麧麨麩麪"],["fc40","麫",8,"麵麶麷麹麺麼麿",4,"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",8,"黺黽黿",6],["fc80","鼆",4,"鼌鼏鼑鼒鼔鼕鼖鼘鼚",5,"鼡鼣",8,"鼭鼮鼰鼱"],["fd40","鼲",4,"鼸鼺鼼鼿",4,"齅",10,"齒",38],["fd80","齹",5,"龁龂龍",11,"龜龝龞龡",4,"郎凉秊裏隣"],["fe40","兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]]'
      );

      /***/
    },

    /***/ 7013: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["0","\\u0000",127],["8141","갂갃갅갆갋",4,"갘갞갟갡갢갣갥",6,"갮갲갳갴"],["8161","갵갶갷갺갻갽갾갿걁",9,"걌걎",5,"걕"],["8181","걖걗걙걚걛걝",18,"걲걳걵걶걹걻",4,"겂겇겈겍겎겏겑겒겓겕",6,"겞겢",5,"겫겭겮겱",6,"겺겾겿곀곂곃곅곆곇곉곊곋곍",7,"곖곘",7,"곢곣곥곦곩곫곭곮곲곴곷",4,"곾곿괁괂괃괅괇",4,"괎괐괒괓"],["8241","괔괕괖괗괙괚괛괝괞괟괡",7,"괪괫괮",5],["8261","괶괷괹괺괻괽",6,"굆굈굊",5,"굑굒굓굕굖굗"],["8281","굙",7,"굢굤",7,"굮굯굱굲굷굸굹굺굾궀궃",4,"궊궋궍궎궏궑",10,"궞",5,"궥",17,"궸",7,"귂귃귅귆귇귉",6,"귒귔",7,"귝귞귟귡귢귣귥",18],["8341","귺귻귽귾긂",5,"긊긌긎",5,"긕",7],["8361","긝",18,"긲긳긵긶긹긻긼"],["8381","긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",4,"깞깢깣깤깦깧깪깫깭깮깯깱",6,"깺깾",5,"꺆",5,"꺍",46,"꺿껁껂껃껅",6,"껎껒",5,"껚껛껝",8],["8441","껦껧껩껪껬껮",5,"껵껶껷껹껺껻껽",8],["8461","꼆꼉꼊꼋꼌꼎꼏꼑",18],["8481","꼤",7,"꼮꼯꼱꼳꼵",6,"꼾꽀꽄꽅꽆꽇꽊",5,"꽑",10,"꽞",5,"꽦",18,"꽺",5,"꾁꾂꾃꾅꾆꾇꾉",6,"꾒꾓꾔꾖",5,"꾝",26,"꾺꾻꾽꾾"],["8541","꾿꿁",5,"꿊꿌꿏",4,"꿕",6,"꿝",4],["8561","꿢",5,"꿪",5,"꿲꿳꿵꿶꿷꿹",6,"뀂뀃"],["8581","뀅",6,"뀍뀎뀏뀑뀒뀓뀕",6,"뀞",9,"뀩",26,"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",29,"끾끿낁낂낃낅",6,"낎낐낒",5,"낛낝낞낣낤"],["8641","낥낦낧낪낰낲낶낷낹낺낻낽",6,"냆냊",5,"냒"],["8661","냓냕냖냗냙",6,"냡냢냣냤냦",10],["8681","냱",22,"넊넍넎넏넑넔넕넖넗넚넞",4,"넦넧넩넪넫넭",6,"넶넺",5,"녂녃녅녆녇녉",6,"녒녓녖녗녙녚녛녝녞녟녡",22,"녺녻녽녾녿놁놃",4,"놊놌놎놏놐놑놕놖놗놙놚놛놝"],["8741","놞",9,"놩",15],["8761","놹",18,"뇍뇎뇏뇑뇒뇓뇕"],["8781","뇖",5,"뇞뇠",7,"뇪뇫뇭뇮뇯뇱",7,"뇺뇼뇾",5,"눆눇눉눊눍",6,"눖눘눚",5,"눡",18,"눵",6,"눽",26,"뉙뉚뉛뉝뉞뉟뉡",6,"뉪",4],["8841","뉯",4,"뉶",5,"뉽",6,"늆늇늈늊",4],["8861","늏늒늓늕늖늗늛",4,"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],["8881","늸",15,"닊닋닍닎닏닑닓",4,"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",6,"댒댖",5,"댝",54,"덗덙덚덝덠덡덢덣"],["8941","덦덨덪덬덭덯덲덳덵덶덷덹",6,"뎂뎆",5,"뎍"],["8961","뎎뎏뎑뎒뎓뎕",10,"뎢",5,"뎩뎪뎫뎭"],["8981","뎮",21,"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",18,"돽",18,"됑",6,"됙됚됛됝됞됟됡",6,"됪됬",7,"됵",15],["8a41","둅",10,"둒둓둕둖둗둙",6,"둢둤둦"],["8a61","둧",4,"둭",18,"뒁뒂"],["8a81","뒃",4,"뒉",19,"뒞",5,"뒥뒦뒧뒩뒪뒫뒭",7,"뒶뒸뒺",5,"듁듂듃듅듆듇듉",6,"듑듒듓듔듖",5,"듞듟듡듢듥듧",4,"듮듰듲",5,"듹",26,"딖딗딙딚딝"],["8b41","딞",5,"딦딫",4,"딲딳딵딶딷딹",6,"땂땆"],["8b61","땇땈땉땊땎땏땑땒땓땕",6,"땞땢",8],["8b81","땫",52,"떢떣떥떦떧떩떬떭떮떯떲떶",4,"떾떿뗁뗂뗃뗅",6,"뗎뗒",5,"뗙",18,"뗭",18],["8c41","똀",15,"똒똓똕똖똗똙",4],["8c61","똞",6,"똦",5,"똭",6,"똵",5],["8c81","똻",12,"뙉",26,"뙥뙦뙧뙩",50,"뚞뚟뚡뚢뚣뚥",5,"뚭뚮뚯뚰뚲",16],["8d41","뛃",16,"뛕",8],["8d61","뛞",17,"뛱뛲뛳뛵뛶뛷뛹뛺"],["8d81","뛻",4,"뜂뜃뜄뜆",33,"뜪뜫뜭뜮뜱",6,"뜺뜼",7,"띅띆띇띉띊띋띍",6,"띖",9,"띡띢띣띥띦띧띩",6,"띲띴띶",5,"띾띿랁랂랃랅",6,"랎랓랔랕랚랛랝랞"],["8e41","랟랡",6,"랪랮",5,"랶랷랹",8],["8e61","럂",4,"럈럊",19],["8e81","럞",13,"럮럯럱럲럳럵",6,"럾렂",4,"렊렋렍렎렏렑",6,"렚렜렞",5,"렦렧렩렪렫렭",6,"렶렺",5,"롁롂롃롅",11,"롒롔",7,"롞롟롡롢롣롥",6,"롮롰롲",5,"롹롺롻롽",7],["8f41","뢅",7,"뢎",17],["8f61","뢠",7,"뢩",6,"뢱뢲뢳뢵뢶뢷뢹",4],["8f81","뢾뢿룂룄룆",5,"룍룎룏룑룒룓룕",7,"룞룠룢",5,"룪룫룭룮룯룱",6,"룺룼룾",5,"뤅",18,"뤙",6,"뤡",26,"뤾뤿륁륂륃륅",6,"륍륎륐륒",5],["9041","륚륛륝륞륟륡",6,"륪륬륮",5,"륶륷륹륺륻륽"],["9061","륾",5,"릆릈릋릌릏",15],["9081","릟",12,"릮릯릱릲릳릵",6,"릾맀맂",5,"맊맋맍맓",4,"맚맜맟맠맢맦맧맩맪맫맭",6,"맶맻",4,"먂",5,"먉",11,"먖",33,"먺먻먽먾먿멁멃멄멅멆"],["9141","멇멊멌멏멐멑멒멖멗멙멚멛멝",6,"멦멪",5],["9161","멲멳멵멶멷멹",9,"몆몈몉몊몋몍",5],["9181","몓",20,"몪몭몮몯몱몳",4,"몺몼몾",5,"뫅뫆뫇뫉",14,"뫚",33,"뫽뫾뫿묁묂묃묅",7,"묎묐묒",5,"묙묚묛묝묞묟묡",6],["9241","묨묪묬",7,"묷묹묺묿",4,"뭆뭈뭊뭋뭌뭎뭑뭒"],["9261","뭓뭕뭖뭗뭙",7,"뭢뭤",7,"뭭",4],["9281","뭲",21,"뮉뮊뮋뮍뮎뮏뮑",18,"뮥뮦뮧뮩뮪뮫뮭",6,"뮵뮶뮸",7,"믁믂믃믅믆믇믉",6,"믑믒믔",35,"믺믻믽믾밁"],["9341","밃",4,"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],["9361","밶밷밹",6,"뱂뱆뱇뱈뱊뱋뱎뱏뱑",8],["9381","뱚뱛뱜뱞",37,"벆벇벉벊벍벏",4,"벖벘벛",4,"벢벣벥벦벩",6,"벲벶",5,"벾벿볁볂볃볅",7,"볎볒볓볔볖볗볙볚볛볝",22,"볷볹볺볻볽"],["9441","볾",5,"봆봈봊",5,"봑봒봓봕",8],["9461","봞",5,"봥",6,"봭",12],["9481","봺",5,"뵁",6,"뵊뵋뵍뵎뵏뵑",6,"뵚",9,"뵥뵦뵧뵩",22,"붂붃붅붆붋",4,"붒붔붖붗붘붛붝",6,"붥",10,"붱",6,"붹",24],["9541","뷒뷓뷖뷗뷙뷚뷛뷝",11,"뷪",5,"뷱"],["9561","뷲뷳뷵뷶뷷뷹",6,"븁븂븄븆",5,"븎븏븑븒븓"],["9581","븕",6,"븞븠",35,"빆빇빉빊빋빍빏",4,"빖빘빜빝빞빟빢빣빥빦빧빩빫",4,"빲빶",4,"빾빿뺁뺂뺃뺅",6,"뺎뺒",5,"뺚",13,"뺩",14],["9641","뺸",23,"뻒뻓"],["9661","뻕뻖뻙",6,"뻡뻢뻦",5,"뻭",8],["9681","뻶",10,"뼂",5,"뼊",13,"뼚뼞",33,"뽂뽃뽅뽆뽇뽉",6,"뽒뽓뽔뽖",44],["9741","뾃",16,"뾕",8],["9761","뾞",17,"뾱",7],["9781","뾹",11,"뿆",5,"뿎뿏뿑뿒뿓뿕",6,"뿝뿞뿠뿢",89,"쀽쀾쀿"],["9841","쁀",16,"쁒",5,"쁙쁚쁛"],["9861","쁝쁞쁟쁡",6,"쁪",15],["9881","쁺",21,"삒삓삕삖삗삙",6,"삢삤삦",5,"삮삱삲삷",4,"삾샂샃샄샆샇샊샋샍샎샏샑",6,"샚샞",5,"샦샧샩샪샫샭",6,"샶샸샺",5,"섁섂섃섅섆섇섉",6,"섑섒섓섔섖",5,"섡섢섥섨섩섪섫섮"],["9941","섲섳섴섵섷섺섻섽섾섿셁",6,"셊셎",5,"셖셗"],["9961","셙셚셛셝",6,"셦셪",5,"셱셲셳셵셶셷셹셺셻"],["9981","셼",8,"솆",5,"솏솑솒솓솕솗",4,"솞솠솢솣솤솦솧솪솫솭솮솯솱",11,"솾",5,"쇅쇆쇇쇉쇊쇋쇍",6,"쇕쇖쇙",6,"쇡쇢쇣쇥쇦쇧쇩",6,"쇲쇴",7,"쇾쇿숁숂숃숅",6,"숎숐숒",5,"숚숛숝숞숡숢숣"],["9a41","숤숥숦숧숪숬숮숰숳숵",16],["9a61","쉆쉇쉉",6,"쉒쉓쉕쉖쉗쉙",6,"쉡쉢쉣쉤쉦"],["9a81","쉧",4,"쉮쉯쉱쉲쉳쉵",6,"쉾슀슂",5,"슊",5,"슑",6,"슙슚슜슞",5,"슦슧슩슪슫슮",5,"슶슸슺",33,"싞싟싡싢싥",5,"싮싰싲싳싴싵싷싺싽싾싿쌁",6,"쌊쌋쌎쌏"],["9b41","쌐쌑쌒쌖쌗쌙쌚쌛쌝",6,"쌦쌧쌪",8],["9b61","쌳",17,"썆",7],["9b81","썎",25,"썪썫썭썮썯썱썳",4,"썺썻썾",5,"쎅쎆쎇쎉쎊쎋쎍",50,"쏁",22,"쏚"],["9c41","쏛쏝쏞쏡쏣",4,"쏪쏫쏬쏮",5,"쏶쏷쏹",5],["9c61","쏿",8,"쐉",6,"쐑",9],["9c81","쐛",8,"쐥",6,"쐭쐮쐯쐱쐲쐳쐵",6,"쐾",9,"쑉",26,"쑦쑧쑩쑪쑫쑭",6,"쑶쑷쑸쑺",5,"쒁",18,"쒕",6,"쒝",12],["9d41","쒪",13,"쒹쒺쒻쒽",8],["9d61","쓆",25],["9d81","쓠",8,"쓪",5,"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",9,"씍씎씏씑씒씓씕",6,"씝",10,"씪씫씭씮씯씱",6,"씺씼씾",5,"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",6,"앲앶",5,"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],["9e41","얖얙얚얛얝얞얟얡",7,"얪",9,"얶"],["9e61","얷얺얿",4,"엋엍엏엒엓엕엖엗엙",6,"엢엤엦엧"],["9e81","엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",6,"옚옝",6,"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",6,"왒왖",5,"왞왟왡",10,"왭왮왰왲",5,"왺왻왽왾왿욁",6,"욊욌욎",5,"욖욗욙욚욛욝",6,"욦"],["9f41","욨욪",5,"욲욳욵욶욷욻",4,"웂웄웆",5,"웎"],["9f61","웏웑웒웓웕",6,"웞웟웢",5,"웪웫웭웮웯웱웲"],["9f81","웳",4,"웺웻웼웾",5,"윆윇윉윊윋윍",6,"윖윘윚",5,"윢윣윥윦윧윩",6,"윲윴윶윸윹윺윻윾윿읁읂읃읅",4,"읋읎읐읙읚읛읝읞읟읡",6,"읩읪읬",7,"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",4,"잢잧",4,"잮잯잱잲잳잵잶잷"],["a041","잸잹잺잻잾쟂",5,"쟊쟋쟍쟏쟑",6,"쟙쟚쟛쟜"],["a061","쟞",5,"쟥쟦쟧쟩쟪쟫쟭",13],["a081","쟻",4,"젂젃젅젆젇젉젋",4,"젒젔젗",4,"젞젟젡젢젣젥",6,"젮젰젲",5,"젹젺젻젽젾젿졁",6,"졊졋졎",5,"졕",26,"졲졳졵졶졷졹졻",4,"좂좄좈좉좊좎",5,"좕",7,"좞좠좢좣좤"],["a141","좥좦좧좩",18,"좾좿죀죁"],["a161","죂죃죅죆죇죉죊죋죍",6,"죖죘죚",5,"죢죣죥"],["a181","죦",14,"죶",5,"죾죿줁줂줃줇",4,"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",9,"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],["a241","줐줒",5,"줙",18],["a261","줭",6,"줵",18],["a281","쥈",7,"쥒쥓쥕쥖쥗쥙",6,"쥢쥤",7,"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"],["a341","쥱쥲쥳쥵",6,"쥽",10,"즊즋즍즎즏"],["a361","즑",6,"즚즜즞",16],["a381","즯",16,"짂짃짅짆짉짋",4,"짒짔짗짘짛！",58,"￦］",32,"￣"],["a441","짞짟짡짣짥짦짨짩짪짫짮짲",5,"짺짻짽짾짿쨁쨂쨃쨄"],["a461","쨅쨆쨇쨊쨎",5,"쨕쨖쨗쨙",12],["a481","쨦쨧쨨쨪",28,"ㄱ",93],["a541","쩇",4,"쩎쩏쩑쩒쩓쩕",6,"쩞쩢",5,"쩩쩪"],["a561","쩫",17,"쩾",5,"쪅쪆"],["a581","쪇",16,"쪙",14,"ⅰ",9],["a5b0","Ⅰ",9],["a5c1","Α",16,"Σ",6],["a5e1","α",16,"σ",6],["a641","쪨",19,"쪾쪿쫁쫂쫃쫅"],["a661","쫆",5,"쫎쫐쫒쫔쫕쫖쫗쫚",5,"쫡",6],["a681","쫨쫩쫪쫫쫭",6,"쫵",18,"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",7],["a741","쬋",4,"쬑쬒쬓쬕쬖쬗쬙",6,"쬢",7],["a761","쬪",22,"쭂쭃쭄"],["a781","쭅쭆쭇쭊쭋쭍쭎쭏쭑",6,"쭚쭛쭜쭞",5,"쭥",7,"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",9,"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",9,"㎀",4,"㎺",5,"㎐",4,"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],["a841","쭭",10,"쭺",14],["a861","쮉",18,"쮝",6],["a881","쮤",19,"쮹",11,"ÆÐªĦ"],["a8a6","Ĳ"],["a8a8","ĿŁØŒºÞŦŊ"],["a8b1","㉠",27,"ⓐ",25,"①",14,"½⅓⅔¼¾⅛⅜⅝⅞"],["a941","쯅",14,"쯕",10],["a961","쯠쯡쯢쯣쯥쯦쯨쯪",18],["a981","쯽",14,"찎찏찑찒찓찕",6,"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",27,"⒜",25,"⑴",14,"¹²³⁴ⁿ₁₂₃₄"],["aa41","찥찦찪찫찭찯찱",6,"찺찿",4,"챆챇챉챊챋챍챎"],["aa61","챏",4,"챖챚",5,"챡챢챣챥챧챩",6,"챱챲"],["aa81","챳챴챶",29,"ぁ",82],["ab41","첔첕첖첗첚첛첝첞첟첡",6,"첪첮",5,"첶첷첹"],["ab61","첺첻첽",6,"쳆쳈쳊",5,"쳑쳒쳓쳕",5],["ab81","쳛",8,"쳥",6,"쳭쳮쳯쳱",12,"ァ",85],["ac41","쳾쳿촀촂",5,"촊촋촍촎촏촑",6,"촚촜촞촟촠"],["ac61","촡촢촣촥촦촧촩촪촫촭",11,"촺",4],["ac81","촿",28,"쵝쵞쵟А",5,"ЁЖ",25],["acd1","а",5,"ёж",25],["ad41","쵡쵢쵣쵥",6,"쵮쵰쵲",5,"쵹",7],["ad61","춁",6,"춉",10,"춖춗춙춚춛춝춞춟"],["ad81","춠춡춢춣춦춨춪",5,"춱",18,"췅"],["ae41","췆",5,"췍췎췏췑",16],["ae61","췢",5,"췩췪췫췭췮췯췱",6,"췺췼췾",4],["ae81","츃츅츆츇츉츊츋츍",6,"츕츖츗츘츚",5,"츢츣츥츦츧츩츪츫"],["af41","츬츭츮츯츲츴츶",19],["af61","칊",13,"칚칛칝칞칢",5,"칪칬"],["af81","칮",5,"칶칷칹칺칻칽",6,"캆캈캊",5,"캒캓캕캖캗캙"],["b041","캚",5,"캢캦",5,"캮",12],["b061","캻",5,"컂",19],["b081","컖",13,"컦컧컩컪컭",6,"컶컺",5,"가각간갇갈갉갊감",7,"같",4,"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],["b141","켂켃켅켆켇켉",6,"켒켔켖",5,"켝켞켟켡켢켣"],["b161","켥",6,"켮켲",5,"켹",11],["b181","콅",14,"콖콗콙콚콛콝",6,"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],["b241","콭콮콯콲콳콵콶콷콹",6,"쾁쾂쾃쾄쾆",5,"쾍"],["b261","쾎",18,"쾢",5,"쾩"],["b281","쾪",5,"쾱",18,"쿅",6,"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],["b341","쿌",19,"쿢쿣쿥쿦쿧쿩"],["b361","쿪",5,"쿲쿴쿶",5,"쿽쿾쿿퀁퀂퀃퀅",5],["b381","퀋",5,"퀒",5,"퀙",19,"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",4,"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],["b441","퀮",5,"퀶퀷퀹퀺퀻퀽",6,"큆큈큊",5],["b461","큑큒큓큕큖큗큙",6,"큡",10,"큮큯"],["b481","큱큲큳큵",6,"큾큿킀킂",18,"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",4,"닳담답닷",4,"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],["b541","킕",14,"킦킧킩킪킫킭",5],["b561","킳킶킸킺",5,"탂탃탅탆탇탊",5,"탒탖",4],["b581","탛탞탟탡탢탣탥",6,"탮탲",5,"탹",11,"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],["b641","턅",7,"턎",17],["b661","턠",15,"턲턳턵턶턷턹턻턼턽턾"],["b681","턿텂텆",5,"텎텏텑텒텓텕",6,"텞텠텢",5,"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],["b741","텮",13,"텽",6,"톅톆톇톉톊"],["b761","톋",20,"톢톣톥톦톧"],["b781","톩",6,"톲톴톶톷톸톹톻톽톾톿퇁",14,"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],["b841","퇐",7,"퇙",17],["b861","퇫",8,"퇵퇶퇷퇹",13],["b881","툈툊",5,"툑",24,"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",4,"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],["b941","툪툫툮툯툱툲툳툵",6,"툾퉀퉂",5,"퉉퉊퉋퉌"],["b961","퉍",14,"퉝",6,"퉥퉦퉧퉨"],["b981","퉩",22,"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",4,"받",4,"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],["ba41","튍튎튏튒튓튔튖",5,"튝튞튟튡튢튣튥",6,"튭"],["ba61","튮튯튰튲",5,"튺튻튽튾틁틃",4,"틊틌",5],["ba81","틒틓틕틖틗틙틚틛틝",6,"틦",9,"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],["bb41","틻",4,"팂팄팆",5,"팏팑팒팓팕팗",4,"팞팢팣"],["bb61","팤팦팧팪팫팭팮팯팱",6,"팺팾",5,"퍆퍇퍈퍉"],["bb81","퍊",31,"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],["bc41","퍪",17,"퍾퍿펁펂펃펅펆펇"],["bc61","펈펉펊펋펎펒",5,"펚펛펝펞펟펡",6,"펪펬펮"],["bc81","펯",4,"펵펶펷펹펺펻펽",6,"폆폇폊",5,"폑",5,"샥샨샬샴샵샷샹섀섄섈섐섕서",4,"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],["bd41","폗폙",7,"폢폤",7,"폮폯폱폲폳폵폶폷"],["bd61","폸폹폺폻폾퐀퐂",5,"퐉",13],["bd81","퐗",5,"퐞",25,"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],["be41","퐸",7,"푁푂푃푅",14],["be61","푔",7,"푝푞푟푡푢푣푥",7,"푮푰푱푲"],["be81","푳",4,"푺푻푽푾풁풃",4,"풊풌풎",5,"풕",8,"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",6,"엌엎"],["bf41","풞",10,"풪",14],["bf61","풹",18,"퓍퓎퓏퓑퓒퓓퓕"],["bf81","퓖",5,"퓝퓞퓠",7,"퓩퓪퓫퓭퓮퓯퓱",6,"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",5,"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],["c041","퓾",5,"픅픆픇픉픊픋픍",6,"픖픘",5],["c061","픞",25],["c081","픸픹픺픻픾픿핁핂핃핅",6,"핎핐핒",5,"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",7,"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],["c141","핤핦핧핪핬핮",5,"핶핷핹핺핻핽",6,"햆햊햋"],["c161","햌햍햎햏햑",19,"햦햧"],["c181","햨",31,"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],["c241","헊헋헍헎헏헑헓",4,"헚헜헞",5,"헦헧헩헪헫헭헮"],["c261","헯",4,"헶헸헺",5,"혂혃혅혆혇혉",6,"혒"],["c281","혖",5,"혝혞혟혡혢혣혥",7,"혮",9,"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],["c341","혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",4],["c361","홢",4,"홨홪",5,"홲홳홵",11],["c381","횁횂횄횆",5,"횎횏횑횒횓횕",7,"횞횠횢",5,"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],["c441","횫횭횮횯횱",7,"횺횼",7,"훆훇훉훊훋"],["c461","훍훎훏훐훒훓훕훖훘훚",5,"훡훢훣훥훦훧훩",4],["c481","훮훯훱훲훳훴훶",5,"훾훿휁휂휃휅",11,"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],["c541","휕휖휗휚휛휝휞휟휡",6,"휪휬휮",5,"휶휷휹"],["c561","휺휻휽",6,"흅흆흈흊",5,"흒흓흕흚",4],["c581","흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",6,"흾흿힀힂",5,"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],["c641","힍힎힏힑",6,"힚힜힞",5],["c6a1","퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],["c7a1","퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],["c8a1","혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],["caa1","伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],["cba1","匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],["cca1","瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],["cda1","棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],["cea1","科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],["cfa1","區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],["d0a1","鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],["d1a1","朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",5,"那樂",4,"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],["d2a1","納臘蠟衲囊娘廊",4,"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",5,"駑魯",10,"濃籠聾膿農惱牢磊腦賂雷尿壘",7,"嫩訥杻紐勒",5,"能菱陵尼泥匿溺多茶"],["d3a1","丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],["d4a1","棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],["d5a1","蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],["d6a1","煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],["d7a1","遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],["d8a1","立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],["d9a1","蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],["daa1","汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],["dba1","發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],["dca1","碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],["dda1","孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],["dea1","脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],["dfa1","傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],["e0a1","胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],["e1a1","聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],["e2a1","戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],["e3a1","嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],["e4a1","沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],["e5a1","櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],["e6a1","旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],["e7a1","簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],["e8a1","烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],["e9a1","窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],["eaa1","運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],["eba1","濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],["eca1","議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],["eda1","立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],["eea1","障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],["efa1","煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],["f0a1","靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],["f1a1","踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],["f2a1","咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],["f3a1","鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],["f4a1","責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],["f5a1","椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],["f6a1","贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],["f7a1","鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],["f8a1","阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],["f9a1","品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],["faa1","行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],["fba1","形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],["fca1","禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],["fda1","爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]]'
      );

      /***/
    },

    /***/ 3104: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["0","\\u0000",127],["a140","　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],["a1a1","﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",4,"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],["a240","＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",7,"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],["a2a1","╮╰╯═╞╪╡◢◣◥◤╱╲╳０",9,"Ⅰ",9,"〡",8,"十卄卅Ａ",25,"ａ",21],["a340","ｗｘｙｚΑ",16,"Σ",6,"α",16,"σ",6,"ㄅ",10],["a3a1","ㄐ",25,"˙ˉˊˇˋ"],["a3e1","€"],["a440","一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],["a4a1","丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],["a540","世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],["a5a1","央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],["a640","共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],["a6a1","式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],["a740","作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],["a7a1","均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],["a840","杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],["a8a1","芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],["a940","咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],["a9a1","屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],["aa40","昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],["aaa1","炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],["ab40","陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],["aba1","哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],["ac40","拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],["aca1","活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],["ad40","耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],["ada1","迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],["ae40","哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],["aea1","恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],["af40","浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],["afa1","砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],["b040","虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],["b0a1","陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],["b140","娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],["b1a1","情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],["b240","毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],["b2a1","瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],["b340","莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],["b3a1","部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],["b440","婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],["b4a1","插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],["b540","溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],["b5a1","窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],["b640","詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],["b6a1","間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],["b740","媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],["b7a1","楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],["b840","睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],["b8a1","腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],["b940","辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],["b9a1","飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],["ba40","愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],["baa1","滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],["bb40","罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],["bba1","說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],["bc40","劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],["bca1","慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],["bd40","瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],["bda1","翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],["be40","輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],["bea1","鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],["bf40","濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],["bfa1","縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],["c040","錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],["c0a1","嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],["c140","瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],["c1a1","薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],["c240","駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],["c2a1","癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],["c340","鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],["c3a1","獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],["c440","願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],["c4a1","纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],["c540","護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],["c5a1","禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],["c640","讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],["c940","乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],["c9a1","氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],["ca40","汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],["caa1","吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],["cb40","杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],["cba1","芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],["cc40","坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],["cca1","怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],["cd40","泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],["cda1","矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],["ce40","哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],["cea1","峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],["cf40","柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],["cfa1","洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],["d040","穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],["d0a1","苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],["d140","唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],["d1a1","恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],["d240","毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],["d2a1","牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],["d340","笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],["d3a1","荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],["d440","酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],["d4a1","唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],["d540","崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],["d5a1","捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],["d640","淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],["d6a1","痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],["d740","耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],["d7a1","蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],["d840","釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],["d8a1","堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],["d940","惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],["d9a1","晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],["da40","湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],["daa1","琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],["db40","罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],["dba1","菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],["dc40","軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],["dca1","隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],["dd40","媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],["dda1","搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],["de40","毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],["dea1","煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],["df40","稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],["dfa1","腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],["e040","觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],["e0a1","遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],["e140","凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],["e1a1","寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],["e240","榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],["e2a1","漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],["e340","禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],["e3a1","耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],["e440","裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],["e4a1","銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],["e540","噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],["e5a1","憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],["e640","澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],["e6a1","獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],["e740","膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],["e7a1","蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],["e840","踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],["e8a1","銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],["e940","噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],["e9a1","憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],["ea40","澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],["eaa1","瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],["eb40","蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],["eba1","諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],["ec40","錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],["eca1","魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],["ed40","檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],["eda1","瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],["ee40","蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],["eea1","謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],["ef40","鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],["efa1","鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],["f040","璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],["f0a1","臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],["f140","蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],["f1a1","鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],["f240","徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],["f2a1","礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],["f340","譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],["f3a1","鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],["f440","嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],["f4a1","禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],["f540","鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],["f5a1","鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],["f640","蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],["f6a1","騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],["f740","糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],["f7a1","驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],["f840","讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],["f8a1","齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],["f940","纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],["f9a1","龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]]'
      );

      /***/
    },

    /***/ 2417: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["0","\\u0000",127],["8ea1","｡",62],["a1a1","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"],["a2a1","◆□■△▲▽▼※〒→←↑↓〓"],["a2ba","∈∋⊆⊇⊂⊃∪∩"],["a2ca","∧∨￢⇒⇔∀∃"],["a2dc","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["a2f2","Å‰♯♭♪†‡¶"],["a2fe","◯"],["a3b0","０",9],["a3c1","Ａ",25],["a3e1","ａ",25],["a4a1","ぁ",82],["a5a1","ァ",85],["a6a1","Α",16,"Σ",6],["a6c1","α",16,"σ",6],["a7a1","А",5,"ЁЖ",25],["a7d1","а",5,"ёж",25],["a8a1","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["ada1","①",19,"Ⅰ",9],["adc0","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["addf","㍻〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["b0a1","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["b1a1","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],["b2a1","押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["b3a1","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],["b4a1","粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["b5a1","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],["b6a1","供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["b7a1","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],["b8a1","検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["b9a1","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],["baa1","此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["bba1","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],["bca1","次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["bda1","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],["bea1","勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["bfa1","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],["c0a1","澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["c1a1","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],["c2a1","臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["c3a1","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],["c4a1","帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["c5a1","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],["c6a1","董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["c7a1","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],["c8a1","函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["c9a1","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],["caa1","福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["cba1","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],["cca1","漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["cda1","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],["cea1","痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["cfa1","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["d0a1","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["d1a1","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],["d2a1","辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["d3a1","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],["d4a1","圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["d5a1","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],["d6a1","屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["d7a1","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],["d8a1","悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["d9a1","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],["daa1","據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["dba1","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],["dca1","棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["dda1","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],["dea1","沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["dfa1","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],["e0a1","燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e1a1","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],["e2a1","癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e3a1","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],["e4a1","筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e5a1","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],["e6a1","罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e7a1","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],["e8a1","茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e9a1","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],["eaa1","蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["eba1","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],["eca1","譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["eda1","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],["eea1","遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["efa1","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],["f0a1","陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["f1a1","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],["f2a1","髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["f3a1","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],["f4a1","堯槇遙瑤凜熙"],["f9a1","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],["faa1","忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["fba1","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],["fca1","釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["fcf1","ⅰ",9,"￢￤＇＂"],["8fa2af","˘ˇ¸˙˝¯˛˚～΄΅"],["8fa2c2","¡¦¿"],["8fa2eb","ºª©®™¤№"],["8fa6e1","ΆΈΉΊΪ"],["8fa6e7","Ό"],["8fa6e9","ΎΫ"],["8fa6ec","Ώ"],["8fa6f1","άέήίϊΐόςύϋΰώ"],["8fa7c2","Ђ",10,"ЎЏ"],["8fa7f2","ђ",10,"ўџ"],["8fa9a1","ÆĐ"],["8fa9a4","Ħ"],["8fa9a6","Ĳ"],["8fa9a8","ŁĿ"],["8fa9ab","ŊØŒ"],["8fa9af","ŦÞ"],["8fa9c1","æđðħıĳĸłŀŉŋøœßŧþ"],["8faaa1","ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],["8faaba","ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"],["8faba1","áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],["8fabbd","ġĥíìïîǐ"],["8fabc5","īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],["8fb0a1","丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],["8fb1a1","侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],["8fb2a1","傒傓傔傖傛傜傞",4,"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],["8fb3a1","凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],["8fb4a1","匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],["8fb5a1","咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],["8fb6a1","嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",5,"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",4,"囱囫园"],["8fb7a1","囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",4,"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],["8fb8a1","堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],["8fb9a1","奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],["8fbaa1","嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",4,"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],["8fbba1","屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],["8fbca1","巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",4,"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],["8fbda1","彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",4,"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],["8fbea1","悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",4,"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],["8fbfa1","懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],["8fc0a1","捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],["8fc1a1","擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],["8fc2a1","昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],["8fc3a1","杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",4,"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],["8fc4a1","棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],["8fc5a1","樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],["8fc6a1","歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],["8fc7a1","泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],["8fc8a1","湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],["8fc9a1","濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",4,"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",4,"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],["8fcaa1","煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],["8fcba1","狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],["8fcca1","珿琀琁琄琇琊琑琚琛琤琦琨",9,"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],["8fcda1","甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",5,"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],["8fcea1","瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",6,"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],["8fcfa1","睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],["8fd0a1","碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],["8fd1a1","秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],["8fd2a1","笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",5],["8fd3a1","籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],["8fd4a1","綞綦綧綪綳綶綷綹緂",4,"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],["8fd5a1","罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],["8fd6a1","胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],["8fd7a1","艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],["8fd8a1","荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],["8fd9a1","蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",4,"蕖蕙蕜",6,"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],["8fdaa1","藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",4,"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],["8fdba1","蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",6,"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],["8fdca1","蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",4,"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],["8fdda1","襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",4,"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],["8fdea1","誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",4,"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],["8fdfa1","貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],["8fe0a1","踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],["8fe1a1","轃轇轏轑",4,"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],["8fe2a1","郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],["8fe3a1","釂釃釅釓釔釗釙釚釞釤釥釩釪釬",5,"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",4,"鉻鉼鉽鉿銈銉銊銍銎銒銗"],["8fe4a1","銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",4,"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],["8fe5a1","鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",4,"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],["8fe6a1","镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],["8fe7a1","霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],["8fe8a1","頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",4,"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],["8fe9a1","馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",4],["8feaa1","鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",4,"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],["8feba1","鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",4,"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],["8feca1","鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],["8feda1","黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",4,"齓齕齖齗齘齚齝齞齨齩齭",4,"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]]'
      );

      /***/
    },

    /***/ 6351: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"uChars":[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],"gbChars":[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189000]}'
      );

      /***/
    },

    /***/ 7419: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["a140","",62],["a180","",32],["a240","",62],["a280","",32],["a2ab","",5],["a2e3","€"],["a2ef",""],["a2fd",""],["a340","",62],["a380","",31,"　"],["a440","",62],["a480","",32],["a4f4","",10],["a540","",62],["a580","",32],["a5f7","",7],["a640","",62],["a680","",32],["a6b9","",7],["a6d9","",6],["a6ec",""],["a6f3",""],["a6f6","",8],["a740","",62],["a780","",32],["a7c2","",14],["a7f2","",12],["a896","",10],["a8bc",""],["a8bf","ǹ"],["a8c1",""],["a8ea","",20],["a958",""],["a95b",""],["a95d",""],["a989","〾⿰",11],["a997","",12],["a9f0","",14],["aaa1","",93],["aba1","",93],["aca1","",93],["ada1","",93],["aea1","",93],["afa1","",93],["d7fa","",4],["f8a1","",93],["f9a1","",93],["faa1","",93],["fba1","",93],["fca1","",93],["fda1","",93],["fe50","⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],["fe80","䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",6,"䶮",93]]'
      );

      /***/
    },

    /***/ 4108: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '[["0","\\u0000",128],["a1","｡",62],["8140","　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",9,"＋－±×"],["8180","÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],["81b8","∈∋⊆⊇⊂⊃∪∩"],["81c8","∧∨￢⇒⇔∀∃"],["81da","∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],["81f0","Å‰♯♭♪†‡¶"],["81fc","◯"],["824f","０",9],["8260","Ａ",25],["8281","ａ",25],["829f","ぁ",82],["8340","ァ",62],["8380","ム",22],["839f","Α",16,"Σ",6],["83bf","α",16,"σ",6],["8440","А",5,"ЁЖ",25],["8470","а",5,"ёж",7],["8480","о",17],["849f","─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],["8740","①",19,"Ⅰ",9],["875f","㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],["877e","㍻"],["8780","〝〟№㏍℡㊤",4,"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],["889f","亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],["8940","院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],["8980","園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],["8a40","魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],["8a80","橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],["8b40","機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],["8b80","朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],["8c40","掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],["8c80","劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],["8d40","后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],["8d80","項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],["8e40","察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],["8e80","死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],["8f40","宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],["8f80","準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],["9040","拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],["9080","逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],["9140","繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],["9180","操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],["9240","叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],["9280","逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],["9340","邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],["9380","凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],["9440","如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],["9480","楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],["9540","鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],["9580","斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],["9640","法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],["9680","摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],["9740","諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],["9780","沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],["9840","蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],["989f","弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],["9940","僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],["9980","凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],["9a40","咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],["9a80","噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],["9b40","奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],["9b80","它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],["9c40","廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],["9c80","怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],["9d40","戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],["9d80","捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],["9e40","曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],["9e80","梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],["9f40","檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],["9f80","麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],["e040","漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],["e080","烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],["e140","瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],["e180","痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],["e240","磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],["e280","窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],["e340","紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],["e380","縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],["e440","隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],["e480","艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],["e540","蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],["e580","蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],["e640","襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],["e680","諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],["e740","蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],["e780","轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],["e840","錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],["e880","閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],["e940","顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],["e980","騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],["ea40","鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],["ea80","黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],["ed40","纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],["ed80","塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],["ee40","犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],["ee80","蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],["eeef","ⅰ",9,"￢￤＇＂"],["f040","",62],["f080","",124],["f140","",62],["f180","",124],["f240","",62],["f280","",124],["f340","",62],["f380","",124],["f440","",62],["f480","",124],["f540","",62],["f580","",124],["f640","",62],["f680","",124],["f740","",62],["f780","",124],["f840","",62],["f880","",124],["f940",""],["fa40","ⅰ",9,"Ⅰ",9,"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],["fa80","兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],["fb40","涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],["fb80","祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],["fc40","髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]]'
      );

      /***/
    },

    /***/ 1075: /***/ (module) => {
      "use strict";
      module.exports = { i8: "2.9.1" };

      /***/
    },

    /***/ 2510: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"name":"probe-image-size","version":"7.2.1","description":"Get image size without full download (JPG, GIF, PNG, WebP, BMP, TIFF, PSD)","keywords":["image","size","jpg","jpeg","ico","gif","png","webp","tiff","bmp","svg","psd"],"repository":"nodeca/probe-image-size","license":"MIT","files":["index.js","http.js","stream.js","sync.js","lib/"],"scripts":{"lint":"eslint .","test":"npm run lint && nyc mocha","coverage":"npm run test && nyc report --reporter html","report-coveralls":"nyc --reporter=lcov mocha"},"mocha":{"timeout":5000},"dependencies":{"lodash.merge":"^4.6.2","needle":"^2.5.2","stream-parser":"~0.3.1"},"devDependencies":{"eslint":"^7.12.1","mocha":"^8.2.0","nyc":"^15.1.0"}}'
      );

      /***/
    },

    /***/ 2357: /***/ (module) => {
      "use strict";
      module.exports = require("assert");

      /***/
    },

    /***/ 4293: /***/ (module) => {
      "use strict";
      module.exports = require("buffer");

      /***/
    },

    /***/ 6417: /***/ (module) => {
      "use strict";
      module.exports = require("crypto");

      /***/
    },

    /***/ 5747: /***/ (module) => {
      "use strict";
      module.exports = require("fs");

      /***/
    },

    /***/ 8605: /***/ (module) => {
      "use strict";
      module.exports = require("http");

      /***/
    },

    /***/ 7211: /***/ (module) => {
      "use strict";
      module.exports = require("https");

      /***/
    },

    /***/ 1631: /***/ (module) => {
      "use strict";
      module.exports = require("net");

      /***/
    },

    /***/ 2087: /***/ (module) => {
      "use strict";
      module.exports = require("os");

      /***/
    },

    /***/ 5622: /***/ (module) => {
      "use strict";
      module.exports = require("path");

      /***/
    },

    /***/ 1191: /***/ (module) => {
      "use strict";
      module.exports = require("querystring");

      /***/
    },

    /***/ 2413: /***/ (module) => {
      "use strict";
      module.exports = require("stream");

      /***/
    },

    /***/ 4304: /***/ (module) => {
      "use strict";
      module.exports = require("string_decoder");

      /***/
    },

    /***/ 3867: /***/ (module) => {
      "use strict";
      module.exports = require("tty");

      /***/
    },

    /***/ 8835: /***/ (module) => {
      "use strict";
      module.exports = require("url");

      /***/
    },

    /***/ 1669: /***/ (module) => {
      "use strict";
      module.exports = require("util");

      /***/
    },

    /***/ 8761: /***/ (module) => {
      "use strict";
      module.exports = require("zlib");

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __nccwpck_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ loaded: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ var threw = true;
    /******/ try {
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __nccwpck_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete __webpack_module_cache__[moduleId];
      /******/
    }
    /******/
    /******/ // Flag the module as loaded
    /******/ module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/node module decorator */
  /******/ (() => {
    /******/ __nccwpck_require__.nmd = (module) => {
      /******/ module.paths = [];
      /******/ if (!module.children) module.children = [];
      /******/ return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat */
  /******/
  /******/ if (typeof __nccwpck_require__ !== "undefined")
    __nccwpck_require__.ab = __dirname + "/";
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    const core = __nccwpck_require__(743);
    // const github = require("@actions/github");
    // const exec = require("@actions/exec");
    const {
      STATUS,
      DEFAULT_FOLDERS,
      DEFAULT_MARKDOWN_EXTENSIONS,
      DEFAULT_IMAGE_EXTENSIONS,
    } = __nccwpck_require__(3196);
    const { testExtensions } = __nccwpck_require__(3662);
    const { testFrontmatter } = __nccwpck_require__(8915);
    const { testDuplication } = __nccwpck_require__(1698);
    const { testLogo } = __nccwpck_require__(1253);

    try {
      // Get all inputs or fall back to defaults.
      const changedFiles = core.getInput("changed-files");
      const isFuzzySearch = core.getInput("fuzzy-search");

      // Only continue if any files have changed.
      if (changedFiles.length) {
        const changedFilesArray = changedFiles.split(",");
        const directories =
          core.getMultilineInput("directories") || DEFAULT_FOLDERS;
        const markdownExtensions =
          core.getMultilineInput("markdown-extensions") ||
          DEFAULT_MARKDOWN_EXTENSIONS;
        const imageExtensions =
          core.getMultilineInput("image-extensions") ||
          DEFAULT_IMAGE_EXTENSIONS;

        core.notice(`Testing markdown extensions...`);
        const mdExtensionResult = testExtensions(
          markdownExtensions,
          changedFilesArray,
          directories[0]
        );
        if (mdExtensionResult.status !== STATUS.VALID) {
          core.error(JSON.stringify(mdExtensionResult));
          core.setFailed(JSON.stringify(mdExtensionResult));
        }

        core.notice(`Testing image extensions...`);
        const imgExtensionResult = testExtensions(
          imageExtensions,
          changedFilesArray,
          directories[1]
        );
        if (imgExtensionResult.status !== STATUS.VALID) {
          core.error(JSON.stringify(imgExtensionResult));
          core.setFailed(JSON.stringify(imgExtensionResult));
        }

        core.notice("Testing Markdown Frontmatter...");
        const markdownResult = testFrontmatter(
          markdownExtensions,
          changedFilesArray,
          directories[0]
        );

        if (markdownResult.status !== STATUS.VALID) {
          core.error(JSON.stringify(markdownResult));
          core.setFailed(JSON.stringify(markdownResult));
        }

        core.notice(`Testing project duplication...`);
        const duplicationResult = testDuplication(
          mdExtensionResult.validFiles,
          markdownExtensions,
          directories[0],
          isFuzzySearch
        );
        if (duplicationResult.status !== STATUS.VALID) {
          core.error(JSON.stringify(duplicationResult));
          core.setFailed(JSON.stringify(duplicationResult));
        }

        core.notice("Testing Logo Files...");
        const logoResult = testLogo(
          imageExtensions,
          mdExtensionResult.validFiles
        );

        if (logoResult.status !== STATUS.VALID) {
          core.error(JSON.stringify(logoResult));
          core.setFailed(JSON.stringify(logoResult));
        }

        core.notice(
          `Result: ${JSON.stringify({
            mdExtensionResult,
            imgExtensionResult,
            markdownResult,
            logoResult,
          })}`
        );
        core.setOutput(
          "changed",
          JSON.stringify({
            mdExtensionResult,
            imgExtensionResult,
            markdownResult,
            logoResult,
          })
        );
      } else {
        core.setFailed("No files changed!");
      }
    } catch (error) {
      core.setFailed(error.message);
    }
  })();

  module.exports = __webpack_exports__;
  /******/
})();
