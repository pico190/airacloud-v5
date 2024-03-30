import $ from 'jquery'

/*
Swiftly Open Source
- You can use this as you want
*/

let currentRequests = [];
/**
 * Function to lint JS code and identify syntax errors
 * @param {string} fullcode - The full JS code to be linted
 * @param {function} setErrors - Function to set syntax errors
 */
export default function jsLinter(fullcode, setErrors) {
    // Abort ongoing requests before making new ones
    currentRequests.forEach(request => request.abort());
    currentRequests = [];
    console.log("Funciona")

    var errorArray = []; // Array to store syntax errors

    // var phpdetections = [];

    // Split the PHP code by "<?php" and "?>" tags
    // fullcode.split("<?php").forEach(phpclose => {
    //     var phpcode = phpclose.split("?>");
    //     phpdetections.push(phpcode[0]);
    // });

    // Iterate over detected PHP code blocks
            // Send POST request to PHP code checker API
            const request = $.post("https://lintapi.free.nf/", {
                api: "js",
                code:fullcode,
                rules: {
                    "array-bracket-spacing": [
                      "error",
                      "never"
                    ],
                    "array-callback-return": [
                      "error",
                      {
                        "allowImplicit": true
                      }
                    ],
                    "arrow-body-style": [
                      "error",
                      "as-needed",
                      {
                        "requireReturnForObjectLiteral": false
                      }
                    ],
                    "arrow-parens": [
                      "error",
                      "always"
                    ],
                    "arrow-spacing": [
                      "error",
                      {
                        "before": true,
                        "after": true
                      }
                    ],
                    "block-scoped-var": "error",
                    "block-spacing": [
                      "error",
                      "always"
                    ],
                    "brace-style": [
                      "error",
                      "1tbs",
                      {
                        "allowSingleLine": true
                      }
                    ],
                    "camelcase": [
                      "error",
                      {
                        "properties": "never",
                        "ignoreDestructuring": false
                      }
                    ],
                    "class-methods-use-this": [
                      "error",
                      {
                        "exceptMethods": [
                          "render",
                          "getInitialState",
                          "getDefaultProps",
                          "getChildContext",
                          "componentWillMount",
                          "UNSAFE_componentWillMount",
                          "componentDidMount",
                          "componentWillReceiveProps",
                          "UNSAFE_componentWillReceiveProps",
                          "shouldComponentUpdate",
                          "componentWillUpdate",
                          "UNSAFE_componentWillUpdate",
                          "componentDidUpdate",
                          "componentWillUnmount",
                          "componentDidCatch",
                          "getSnapshotBeforeUpdate"
                        ]
                      }
                    ],
                    "comma-dangle": [
                      "error",
                      {
                        "arrays": "always-multiline",
                        "objects": "always-multiline",
                        "imports": "always-multiline",
                        "exports": "always-multiline",
                        "functions": "always-multiline"
                      }
                    ],
                    "comma-spacing": [
                      "error",
                      {
                        "before": false,
                        "after": true
                      }
                    ],
                    "comma-style": [
                      "error",
                      "last",
                      {
                        "exceptions": {
                          "ArrayExpression": false,
                          "ArrayPattern": false,
                          "ArrowFunctionExpression": false,
                          "CallExpression": false,
                          "FunctionDeclaration": false,
                          "FunctionExpression": false,
                          "ImportDeclaration": false,
                          "ObjectExpression": false,
                          "ObjectPattern": false,
                          "VariableDeclaration": false,
                          "NewExpression": false
                        }
                      }
                    ],
                    "computed-property-spacing": [
                      "error",
                      "never"
                    ],
                    "consistent-return": "error",
                    "constructor-super": "error",
                    "curly": [
                      "error",
                      "multi-line"
                    ],
                    "default-case": [
                      "error",
                      {
                        "commentPattern": "^no default$"
                      }
                    ],
                    "dot-location": [
                      "error",
                      "property"
                    ],
                    "dot-notation": [
                      "error",
                      {
                        "allowKeywords": true
                      }
                    ],
                    "eol-last": [
                      "error",
                      "always"
                    ],
                    "eqeqeq": [
                      "error",
                      "always",
                      {
                        "null": "ignore"
                      }
                    ],
                    "for-direction": "error",
                    "func-call-spacing": [
                      "error",
                      "never"
                    ],
                    "func-names": "warn",
                    "function-paren-newline": [
                      "error",
                      "consistent"
                    ],
                    "generator-star-spacing": [
                      "error",
                      {
                        "before": false,
                        "after": true
                      }
                    ],
                    "getter-return": [
                      "error",
                      {
                        "allowImplicit": true
                      }
                    ],
                    "global-require": "error",
                    "guard-for-in": "error",
                    "implicit-arrow-linebreak": [
                      "error",
                      "beside"
                    ],
                    "indent": [
                      "error",
                      2,
                      {
                        "SwitchCase": 1,
                        "VariableDeclarator": 1,
                        "outerIIFEBody": 1,
                        "FunctionDeclaration": {
                          "parameters": 1,
                          "body": 1
                        },
                        "FunctionExpression": {
                          "parameters": 1,
                          "body": 1
                        },
                        "CallExpression": {
                          "arguments": 1
                        },
                        "ArrayExpression": 1,
                        "ObjectExpression": 1,
                        "ImportDeclaration": 1,
                        "flatTernaryExpressions": false,
                        "ignoredNodes": [
                          "JSXElement",
                          "JSXElement > *",
                          "JSXAttribute",
                          "JSXIdentifier",
                          "JSXNamespacedName",
                          "JSXMemberExpression",
                          "JSXSpreadAttribute",
                          "JSXExpressionContainer",
                          "JSXOpeningElement",
                          "JSXClosingElement",
                          "JSXFragment",
                          "JSXOpeningFragment",
                          "JSXClosingFragment",
                          "JSXText",
                          "JSXEmptyExpression",
                          "JSXSpreadChild"
                        ],
                        "ignoreComments": false
                      }
                    ],
                    "jsx-quotes": [
                      "error",
                      "prefer-double"
                    ],
                    "key-spacing": [
                      "error",
                      {
                        "beforeColon": false,
                        "afterColon": true
                      }
                    ],
                    "keyword-spacing": [
                      "error",
                      {
                        "before": true,
                        "after": true,
                        "overrides": {
                          "return": {
                            "after": true
                          },
                          "throw": {
                            "after": true
                          },
                          "case": {
                            "after": true
                          }
                        }
                      }
                    ],
                    "linebreak-style": [
                      "error",
                      "unix"
                    ],
                    "lines-around-directive": [
                      "error",
                      {
                        "before": "always",
                        "after": "always"
                      }
                    ],
                    "lines-between-class-members": [
                      "error",
                      "always",
                      {
                        "exceptAfterSingleLine": false
                      }
                    ],
                    "max-classes-per-file": [
                      "error",
                      1
                    ],
                    "max-len": [
                      "error",
                      100,
                      2,
                      {
                        "ignoreUrls": true,
                        "ignoreComments": false,
                        "ignoreRegExpLiterals": true,
                        "ignoreStrings": true,
                        "ignoreTemplateLiterals": true
                      }
                    ],
                    "new-cap": [
                      "error",
                      {
                        "newIsCap": true,
                        "newIsCapExceptions": [],
                        "capIsNew": false,
                        "capIsNewExceptions": [
                          "Immutable.Map",
                          "Immutable.Set",
                          "Immutable.List"
                        ]
                      }
                    ],
                    "new-parens": "error",
                    "newline-per-chained-call": [
                      "error",
                      {
                        "ignoreChainWithDepth": 4
                      }
                    ],
                    "no-alert": "warn",
                    "no-array-constructor": "error",
                    "no-async-promise-executor": "error",
                    "no-await-in-loop": "error",
                    "no-bitwise": "error",
                    "no-buffer-constructor": "error",
                    "no-caller": "error",
                    "no-case-declarations": "error",
                    "no-class-assign": "error",
                    "no-compare-neg-zero": "error",
                    "no-cond-assign": [
                      "error",
                      "always"
                    ],
                    "no-confusing-arrow": [
                      "error",
                      {
                        "allowParens": true
                      }
                    ],
                    "no-console": "warn",
                    "no-const-assign": "error",
                    "no-constant-condition": "warn",
                    "no-continue": "error",
                    "no-control-regex": "error",
                    "no-debugger": "error",
                    "no-delete-var": "error",
                    "no-dupe-args": "error",
                    "no-dupe-class-members": "error",
                    "no-dupe-keys": "error",
                    "no-duplicate-case": "error",
                    "no-else-return": [
                      "error",
                      {
                        "allowElseIf": false
                      }
                    ],
                    "no-empty": "error",
                    "no-empty-character-class": "error",
                    "no-empty-function": [
                      "error",
                      {
                        "allow": [
                          "arrowFunctions",
                          "functions",
                          "methods"
                        ]
                      }
                    ],
                    "no-empty-pattern": "error",
                    "no-eval": "error",
                    "no-ex-assign": "error",
                    "no-extend-native": "error",
                    "no-extra-bind": "error",
                    "no-extra-boolean-cast": "error",
                    "no-extra-label": "error",
                    "no-extra-semi": "error",
                    "no-fallthrough": "error",
                    "no-floating-decimal": "error",
                    "no-func-assign": "error",
                    "no-global-assign": [
                      "error",
                      {
                        "exceptions": []
                      }
                    ],
                    "no-implied-eval": "error",
                    "no-inner-declarations": "error",
                    "no-invalid-regexp": "error",
                    "no-irregular-whitespace": "error",
                    "no-iterator": "error",
                    "no-label-var": "error",
                    "no-labels": [
                      "error",
                      {
                        "allowLoop": false,
                        "allowSwitch": false
                      }
                    ],
                    "no-lone-blocks": "error",
                    "no-lonely-if": "error",
                    "no-loop-func": "error",
                    "no-misleading-character-class": "error",
                    "no-mixed-operators": [
                      "error",
                      {
                        "groups": [
                          [
                            "%",
                            "**"
                          ],
                          [
                            "%",
                            "+"
                          ],
                          [
                            "%",
                            "-"
                          ],
                          [
                            "%",
                            "*"
                          ],
                          [
                            "%",
                            "/"
                          ],
                          [
                            "/",
                            "*"
                          ],
                          [
                            "&",
                            "|",
                            "<<",
                            ">>",
                            ">>>"
                          ],
                          [
                            "==",
                            "!=",
                            "===",
                            "!=="
                          ],
                          [
                            "&&",
                            "||"
                          ]
                        ],
                        "allowSamePrecedence": false
                      }
                    ],
                    "no-mixed-spaces-and-tabs": "error",
                    "no-multi-assign": [
                      "error"
                    ],
                    "no-multi-spaces": [
                      "error",
                      {
                        "ignoreEOLComments": false
                      }
                    ],
                    "no-multi-str": "error",
                    "no-multiple-empty-lines": [
                      "error",
                      {
                        "max": 1,
                        "maxBOF": 0,
                        "maxEOF": 0
                      }
                    ],
                    "no-nested-ternary": "error",
                    "no-new": "error",
                    "no-new-func": "error",
                    "no-new-object": "error",
                    "no-new-require": "error",
                    "no-new-symbol": "error",
                    "no-new-wrappers": "error",
                    "no-obj-calls": "error",
                    "no-octal": "error",
                    "no-octal-escape": "error",
                    "no-param-reassign": [
                      "error",
                      {
                        "props": true,
                        "ignorePropertyModificationsFor": [
                          "acc",
                          "accumulator",
                          "e",
                          "ctx",
                          "context",
                          "req",
                          "request",
                          "res",
                          "response",
                          "$scope",
                          "staticContext"
                        ]
                      }
                    ],
                    "no-path-concat": "error",
                    "no-plusplus": "error",
                    "no-proto": "error",
                    "no-prototype-builtins": "error",
                    "no-redeclare": "error",
                    "no-regex-spaces": "error",
                    "no-restricted-globals": [
                      "error",
                      {
                        "name": "isFinite",
                        "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
                      },
                      {
                        "name": "isNaN",
                        "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
                      },
                      "addEventListener",
                      "blur",
                      "close",
                      "closed",
                      "confirm",
                      "defaultStatus",
                      "defaultstatus",
                      "event",
                      "external",
                      "find",
                      "focus",
                      "frameElement",
                      "frames",
                      "history",
                      "innerHeight",
                      "innerWidth",
                      "length",
                      "location",
                      "locationbar",
                      "menubar",
                      "moveBy",
                      "moveTo",
                      "name",
                      "onblur",
                      "onerror",
                      "onfocus",
                      "onload",
                      "onresize",
                      "onunload",
                      "open",
                      "opener",
                      "opera",
                      "outerHeight",
                      "outerWidth",
                      "pageXOffset",
                      "pageYOffset",
                      "parent",
                      "print",
                      "removeEventListener",
                      "resizeBy",
                      "resizeTo",
                      "screen",
                      "screenLeft",
                      "screenTop",
                      "screenX",
                      "screenY",
                      "scroll",
                      "scrollbars",
                      "scrollBy",
                      "scrollTo",
                      "scrollX",
                      "scrollY",
                      "self",
                      "status",
                      "statusbar",
                      "stop",
                      "toolbar",
                      "top"
                    ],
                    "no-restricted-properties": [
                      "error",
                      {
                        "object": "arguments",
                        "property": "callee",
                        "message": "arguments.callee is deprecated"
                      },
                      {
                        "object": "global",
                        "property": "isFinite",
                        "message": "Please use Number.isFinite instead"
                      },
                      {
                        "object": "self",
                        "property": "isFinite",
                        "message": "Please use Number.isFinite instead"
                      },
                      {
                        "object": "window",
                        "property": "isFinite",
                        "message": "Please use Number.isFinite instead"
                      },
                      {
                        "object": "global",
                        "property": "isNaN",
                        "message": "Please use Number.isNaN instead"
                      },
                      {
                        "object": "self",
                        "property": "isNaN",
                        "message": "Please use Number.isNaN instead"
                      },
                      {
                        "object": "window",
                        "property": "isNaN",
                        "message": "Please use Number.isNaN instead"
                      },
                      {
                        "property": "__defineGetter__",
                        "message": "Please use Object.defineProperty instead."
                      },
                      {
                        "property": "__defineSetter__",
                        "message": "Please use Object.defineProperty instead."
                      },
                      {
                        "object": "Math",
                        "property": "pow",
                        "message": "Use the exponentiation operator (**) instead."
                      }
                    ],
                    "no-restricted-syntax": [
                      "error",
                      {
                        "selector": "ForInStatement",
                        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
                      },
                      {
                        "selector": "ForOfStatement",
                        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
                      },
                      {
                        "selector": "LabeledStatement",
                        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
                      },
                      {
                        "selector": "WithStatement",
                        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
                      }
                    ],
                    "no-return-assign": [
                      "error",
                      "always"
                    ],
                    "no-return-await": "error",
                    "no-script-url": "error",
                    "no-self-assign": [
                      "error",
                      {
                        "props": true
                      }
                    ],
                    "no-self-compare": "error",
                    "no-sequences": "error",
                    "no-shadow": "error",
                    "no-shadow-restricted-names": "error",
                    "no-spaced-func": "error",
                    "no-sparse-arrays": "error",
                    "no-tabs": "error",
                    "no-template-curly-in-string": "error",
                    "no-this-before-super": "error",
                    "no-throw-literal": "error",
                    "no-trailing-spaces": [
                      "error",
                      {
                        "skipBlankLines": false,
                        "ignoreComments": false
                      }
                    ],
                    "no-undef": "error",
                    "no-undef-init": "error",
                    "no-underscore-dangle": [
                      "error",
                      {
                        "allow": [
                          "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
                        ],
                        "allowAfterThis": false,
                        "allowAfterSuper": false,
                        "enforceInMethodNames": true
                      }
                    ],
                    "no-unexpected-multiline": "error",
                    "no-unneeded-ternary": [
                      "error",
                      {
                        "defaultAssignment": false
                      }
                    ],
                    "no-unreachable": "error",
                    "no-unsafe-finally": "error",
                    "no-unsafe-negation": "error",
                    "no-unused-expressions": [
                      "error",
                      {
                        "allowShortCircuit": false,
                        "allowTernary": false,
                        "allowTaggedTemplates": false
                      }
                    ],
                    "no-unused-labels": "error",
                    "no-unused-vars": [
                      "error",
                      {
                        "vars": "all",
                        "args": "after-used",
                        "ignoreRestSiblings": true
                      }
                    ],
                    "no-use-before-define": [
                      "error",
                      {
                        "functions": true,
                        "classes": true,
                        "variables": true
                      }
                    ],
                    "no-useless-catch": "error",
                    "no-useless-computed-key": "error",
                    "no-useless-concat": "error",
                    "no-useless-constructor": "error",
                    "no-useless-escape": "error",
                    "no-useless-rename": [
                      "error",
                      {
                        "ignoreDestructuring": false,
                        "ignoreImport": false,
                        "ignoreExport": false
                      }
                    ],
                    "no-useless-return": "error",
                    "no-var": "error",
                    "no-void": "error",
                    "no-whitespace-before-property": "error",
                    "no-with": "error",
                    "nonblock-statement-body-position": [
                      "error",
                      "beside",
                      {
                        "overrides": {}
                      }
                    ],
                    "object-curly-newline": [
                      "error",
                      {
                        "ObjectExpression": {
                          "minProperties": 4,
                          "multiline": true,
                          "consistent": true
                        },
                        "ObjectPattern": {
                          "minProperties": 4,
                          "multiline": true,
                          "consistent": true
                        },
                        "ImportDeclaration": {
                          "minProperties": 4,
                          "multiline": true,
                          "consistent": true
                        },
                        "ExportDeclaration": {
                          "minProperties": 4,
                          "multiline": true,
                          "consistent": true
                        }
                      }
                    ],
                    "object-curly-spacing": [
                      "error",
                      "always"
                    ],
                    "object-property-newline": [
                      "error",
                      {
                        "allowAllPropertiesOnSameLine": true
                      }
                    ],
                    "object-shorthand": [
                      "error",
                      "always",
                      {
                        "ignoreConstructors": false,
                        "avoidQuotes": true
                      }
                    ],
                    "one-var": [
                      "error",
                      "never"
                    ],
                    "one-var-declaration-per-line": [
                      "error",
                      "always"
                    ],
                    "operator-assignment": [
                      "error",
                      "always"
                    ],
                    "operator-linebreak": [
                      "error",
                      "before",
                      {
                        "overrides": {
                          "=": "none"
                        }
                      }
                    ],
                    "padded-blocks": [
                      "error",
                      {
                        "blocks": "never",
                        "classes": "never",
                        "switches": "never"
                      },
                      {
                        "allowSingleLineBlocks": true
                      }
                    ],
                    "prefer-arrow-callback": [
                      "error",
                      {
                        "allowNamedFunctions": false,
                        "allowUnboundThis": true
                      }
                    ],
                    "prefer-const": [
                      "error",
                      {
                        "destructuring": "any",
                        "ignoreReadBeforeAssign": true
                      }
                    ],
                    "prefer-destructuring": [
                      "error",
                      {
                        "VariableDeclarator": {
                          "array": false,
                          "object": true
                        },
                        "AssignmentExpression": {
                          "array": true,
                          "object": false
                        }
                      },
                      {
                        "enforceForRenamedProperties": false
                      }
                    ],
                    "prefer-numeric-literals": "error",
                    "prefer-object-spread": "error",
                    "prefer-promise-reject-errors": [
                      "error",
                      {
                        "allowEmptyReject": true
                      }
                    ],
                    "prefer-rest-params": "error",
                    "prefer-spread": "error",
                    "prefer-template": "error",
                    "quote-props": [
                      "error",
                      "as-needed",
                      {
                        "keywords": false,
                        "unnecessary": true,
                        "numbers": false
                      }
                    ],
                    "quotes": [
                      "error",
                      "single",
                      {
                        "avoidEscape": true
                      }
                    ],
                    "radix": "error",
                    "require-yield": "error",
                    "rest-spread-spacing": [
                      "error",
                      "never"
                    ],
                    "semi": [
                      "error",
                      "always"
                    ],
                    "semi-spacing": [
                      "error",
                      {
                        "before": false,
                        "after": true
                      }
                    ],
                    "semi-style": [
                      "error",
                      "last"
                    ],
                    "space-before-blocks": "error",
                    "space-before-function-paren": [
                      "error",
                      {
                        "anonymous": "always",
                        "named": "never",
                        "asyncArrow": "always"
                      }
                    ],
                    "space-in-parens": [
                      "error",
                      "never"
                    ],
                    "space-infix-ops": "error",
                    "space-unary-ops": [
                      "error",
                      {
                        "words": true,
                        "nonwords": false,
                        "overrides": {}
                      }
                    ],
                    "spaced-comment": [
                      "error",
                      "always",
                      {
                        "line": {
                          "exceptions": [
                            "-",
                            "+"
                          ],
                          "markers": [
                            "=",
                            "!",
                            "/"
                          ]
                        },
                        "block": {
                          "exceptions": [
                            "-",
                            "+"
                          ],
                          "markers": [
                            "=",
                            "!",
                            ":",
                            "::"
                          ],
                          "balanced": true
                        }
                      }
                    ],
                    "strict": [
                      "error",
                      "never"
                    ],
                    "switch-colon-spacing": [
                      "error",
                      {
                        "after": true,
                        "before": false
                      }
                    ],
                    "symbol-description": "error",
                    "template-curly-spacing": "error",
                    "template-tag-spacing": [
                      "error",
                      "never"
                    ],
                    "unicode-bom": [
                      "error",
                      "never"
                    ],
                    "use-isnan": "error",
                    "valid-typeof": [
                      "error",
                      {
                        "requireStringLiterals": true
                      }
                    ],
                    "vars-on-top": "error",
                    "wrap-iife": [
                      "error",
                      "outside",
                      {
                        "functionPrototypeMethods": false
                      }
                    ],
                    "yield-star-spacing": [
                      "error",
                      "after"
                    ],
                    "yoda": "error",
                    "react/button-has-type": [
                      "error",
                      {
                        "button": true,
                        "submit": true,
                        "reset": false
                      }
                    ],
                    "react/default-props-match-prop-types": [
                      "error",
                      {
                        "allowRequiredDefaults": false
                      }
                    ],
                    "react/destructuring-assignment": [
                      "error",
                      "always"
                    ],
                    "react/forbid-foreign-prop-types": [
                      "warn",
                      {
                        "allowInPropTypes": true
                      }
                    ],
                    "react/forbid-prop-types": [
                      "error",
                      {
                        "forbid": [
                          "any",
                          "array",
                          "object"
                        ],
                        "checkContextTypes": true,
                        "checkChildContextTypes": true
                      }
                    ],
                    "react/jsx-boolean-value": [
                      "error",
                      "never",
                      {
                        "always": []
                      }
                    ],
                    "react/jsx-closing-bracket-location": [
                      "error",
                      "line-aligned"
                    ],
                    "react/jsx-closing-tag-location": "error",
                    "react/jsx-curly-spacing": [
                      "error",
                      "never",
                      {
                        "allowMultiline": true
                      }
                    ],
                    "react/jsx-curly-newline": [
                      "error",
                      {
                        "multiline": "consistent",
                        "singleline": "consistent"
                      }
                    ],
                    "react/jsx-equals-spacing": [
                      "error",
                      "never"
                    ],
                    "react/jsx-filename-extension": [
                      "error",
                      {
                        "extensions": [
                          ".jsx"
                        ]
                      }
                    ],
                    "react/jsx-first-prop-new-line": [
                      "error",
                      "multiline-multiprop"
                    ],
                    "react/jsx-indent": [
                      "error",
                      2
                    ],
                    "react/jsx-indent-props": [
                      "error",
                      2
                    ],
                    "react/jsx-max-props-per-line": [
                      "error",
                      {
                        "maximum": 1,
                        "when": "multiline"
                      }
                    ],
                    "react/jsx-no-bind": [
                      "error",
                      {
                        "ignoreRefs": true,
                        "allowArrowFunctions": true,
                        "allowFunctions": false,
                        "allowBind": false,
                        "ignoreDOMComponents": true
                      }
                    ],
                    "react/jsx-no-comment-textnodes": "error",
                    "react/jsx-no-duplicate-props": [
                      "error",
                      {
                        "ignoreCase": true
                      }
                    ],
                    "react/jsx-no-target-blank": [
                      "error",
                      {
                        "enforceDynamicLinks": "always"
                      }
                    ],
                    "react/jsx-one-expression-per-line": [
                      "error",
                      {
                        "allow": "single-child"
                      }
                    ],
                    "react/jsx-no-undef": "error",
                    "react/jsx-curly-brace-presence": [
                      "error",
                      {
                        "props": "never",
                        "children": "never"
                      }
                    ],
                    "react/jsx-pascal-case": [
                      "error",
                      {
                        "allowAllCaps": true,
                        "ignore": []
                      }
                    ],
                    "react/jsx-fragments": [
                      "error",
                      "syntax"
                    ],
                    "react/jsx-props-no-multi-spaces": "error",
                    "react/jsx-props-no-spreading": [
                      "error",
                      {
                        "html": "enforce",
                        "custom": "enforce",
                        "explicitSpread": "ignore",
                        "exceptions": []
                      }
                    ],
                    "react/jsx-tag-spacing": [
                      "error",
                      {
                        "closingSlash": "never",
                        "beforeSelfClosing": "always",
                        "afterOpening": "never",
                        "beforeClosing": "never"
                      }
                    ],
                    "react/jsx-uses-react": [
                      "error"
                    ],
                    "react/jsx-uses-vars": "error",
                    "react/jsx-wrap-multilines": [
                      "error",
                      {
                        "declaration": "parens-new-line",
                        "assignment": "parens-new-line",
                        "return": "parens-new-line",
                        "arrow": "parens-new-line",
                        "condition": "parens-new-line",
                        "logical": "parens-new-line",
                        "prop": "parens-new-line"
                      }
                    ],
                    "react/no-access-state-in-setstate": "error",
                    "react/no-array-index-key": "error",
                    "react/no-children-prop": "error",
                    "react/no-danger": "warn",
                    "react/no-danger-with-children": "error",
                    "react/no-deprecated": [
                      "error"
                    ],
                    "react/no-did-update-set-state": "error",
                    "react/no-find-dom-node": "error",
                    "react/no-is-mounted": "error",
                    "react/no-string-refs": "error",
                    "react/no-redundant-should-component-update": "error",
                    "react/no-render-return-value": "error",
                    "react/no-this-in-sfc": "error",
                    "react/no-typos": "error",
                    "react/no-unescaped-entities": "error",
                    "react/no-unknown-property": "error",
                    "react/no-unused-prop-types": [
                      "error",
                      {
                        "customValidators": [],
                        "skipShapeProps": true
                      }
                    ],
                    "react/no-unused-state": "error",
                    "react/no-will-update-set-state": "error",
                    "react/prefer-es6-class": [
                      "error",
                      "always"
                    ],
                    "react/prefer-stateless-function": [
                      "error",
                      {
                        "ignorePureComponents": true
                      }
                    ],
                    "react/prop-types": [
                      "error",
                      {
                        "ignore": [],
                        "customValidators": [],
                        "skipUndeclared": false
                      }
                    ],
                    "react/react-in-jsx-scope": "error",
                    "react/require-default-props": [
                      "error",
                      {
                        "forbidDefaultForRequired": true
                      }
                    ],
                    "react/require-render-return": "error",
                    "react/self-closing-comp": "error",
                    "react/sort-comp": [
                      "error",
                      {
                        "order": [
                          "static-variables",
                          "static-methods",
                          "instance-variables",
                          "lifecycle",
                          "/^handle.+$/",
                          "/^on.+$/",
                          "getters",
                          "setters",
                          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                          "instance-methods",
                          "everything-else",
                          "rendering"
                        ],
                        "groups": {
                          "lifecycle": [
                            "displayName",
                            "propTypes",
                            "contextTypes",
                            "childContextTypes",
                            "mixins",
                            "statics",
                            "defaultProps",
                            "constructor",
                            "getDefaultProps",
                            "getInitialState",
                            "state",
                            "getChildContext",
                            "getDerivedStateFromProps",
                            "componentWillMount",
                            "UNSAFE_componentWillMount",
                            "componentDidMount",
                            "componentWillReceiveProps",
                            "UNSAFE_componentWillReceiveProps",
                            "shouldComponentUpdate",
                            "componentWillUpdate",
                            "UNSAFE_componentWillUpdate",
                            "getSnapshotBeforeUpdate",
                            "componentDidUpdate",
                            "componentDidCatch",
                            "componentWillUnmount"
                          ],
                          "rendering": [
                            "/^render.+$/",
                            "render"
                          ]
                        }
                      }
                    ],
                    "react/state-in-constructor": [
                      "error",
                      "always"
                    ],
                    "react/static-property-placement": [
                      "error",
                      "property assignment"
                    ],
                    "react/style-prop-object": "error",
                    "react/void-dom-elements-no-children": "error",
                    "jsx-a11y/alt-text": [
                      "error",
                      {
                        "elements": [
                          "img",
                          "object",
                          "area",
                          "input[type=\"image\"]"
                        ],
                        "img": [],
                        "object": [],
                        "area": [],
                        "input[type=\"image\"]": []
                      }
                    ],
                    "jsx-a11y/anchor-has-content": [
                      "error",
                      {
                        "components": []
                      }
                    ],
                    "jsx-a11y/anchor-is-valid": [
                      "error",
                      {
                        "components": [
                          "Link"
                        ],
                        "specialLink": [
                          "to"
                        ],
                        "aspects": [
                          "noHref",
                          "invalidHref",
                          "preferButton"
                        ]
                      }
                    ],
                    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
                    "jsx-a11y/aria-props": "error",
                    "jsx-a11y/aria-proptypes": "error",
                    "jsx-a11y/aria-role": [
                      "error",
                      {
                        "ignoreNonDOM": false
                      }
                    ],
                    "jsx-a11y/aria-unsupported-elements": "error",
                    "jsx-a11y/click-events-have-key-events": "error",
                    "jsx-a11y/control-has-associated-label": [
                      "error",
                      {
                        "labelAttributes": [
                          "label"
                        ],
                        "controlComponents": [],
                        "ignoreElements": [
                          "audio",
                          "canvas",
                          "embed",
                          "input",
                          "textarea",
                          "tr",
                          "video"
                        ],
                        "ignoreRoles": [
                          "grid",
                          "listbox",
                          "menu",
                          "menubar",
                          "radiogroup",
                          "row",
                          "tablist",
                          "toolbar",
                          "tree",
                          "treegrid"
                        ],
                        "depth": 5
                      }
                    ],
                    "jsx-a11y/heading-has-content": [
                      "error",
                      {
                        "components": [
                          ""
                        ]
                      }
                    ],
                    "jsx-a11y/html-has-lang": "error",
                    "jsx-a11y/iframe-has-title": "error",
                    "jsx-a11y/img-redundant-alt": "error",
                    "jsx-a11y/interactive-supports-focus": "error",
                    "jsx-a11y/label-has-associated-control": [
                      "error",
                      {
                        "labelComponents": [],
                        "labelAttributes": [],
                        "controlComponents": [],
                        "assert": "both",
                        "depth": 25
                      }
                    ],
                    "jsx-a11y/lang": "error",
                    "jsx-a11y/media-has-caption": [
                      "error",
                      {
                        "audio": [],
                        "video": [],
                        "track": []
                      }
                    ],
                    "jsx-a11y/mouse-events-have-key-events": "error",
                    "jsx-a11y/no-access-key": "error",
                    "jsx-a11y/no-autofocus": [
                      "error",
                      {
                        "ignoreNonDOM": true
                      }
                    ],
                    "jsx-a11y/no-distracting-elements": [
                      "error",
                      {
                        "elements": [
                          "marquee",
                          "blink"
                        ]
                      }
                    ],
                    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
                      "error",
                      {
                        "tr": [
                          "none",
                          "presentation"
                        ]
                      }
                    ],
                    "jsx-a11y/no-noninteractive-element-interactions": [
                      "error",
                      {
                        "handlers": [
                          "onClick",
                          "onMouseDown",
                          "onMouseUp",
                          "onKeyPress",
                          "onKeyDown",
                          "onKeyUp"
                        ]
                      }
                    ],
                    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
                      "error",
                      {
                        "ul": [
                          "listbox",
                          "menu",
                          "menubar",
                          "radiogroup",
                          "tablist",
                          "tree",
                          "treegrid"
                        ],
                        "ol": [
                          "listbox",
                          "menu",
                          "menubar",
                          "radiogroup",
                          "tablist",
                          "tree",
                          "treegrid"
                        ],
                        "li": [
                          "menuitem",
                          "option",
                          "row",
                          "tab",
                          "treeitem"
                        ],
                        "table": [
                          "grid"
                        ],
                        "td": [
                          "gridcell"
                        ]
                      }
                    ],
                    "jsx-a11y/no-noninteractive-tabindex": [
                      "error",
                      {
                        "tags": [],
                        "roles": [
                          "tabpanel"
                        ]
                      }
                    ],
                    "jsx-a11y/no-redundant-roles": "error",
                    "jsx-a11y/no-static-element-interactions": [
                      "error",
                      {
                        "handlers": [
                          "onClick",
                          "onMouseDown",
                          "onMouseUp",
                          "onKeyPress",
                          "onKeyDown",
                          "onKeyUp"
                        ]
                      }
                    ],
                    "jsx-a11y/role-has-required-aria-props": "error",
                    "jsx-a11y/role-supports-aria-props": "error",
                    "jsx-a11y/scope": "error",
                    "jsx-a11y/tabindex-no-positive": "error"
                  },"fix":true,
                "envs":[]
            }, (data) => {
                try {
                    const response = JSON.parse(data);
                    // if (response.hasOwnProperty('syntax')) {
                    //     console_info("PHP Linter > Errors detected");
                    //     var rsponsesyntax = response.syntax
                    //     var line = rsponsesyntax.message.split("line ")
                    //     var lineAround = parseInt(line[line.length - 1])

                    //     // Find the nearest line in the original code
                    //     console_info("PHP Linter > Finding Line");
                    //     const targetString = rsponsesyntax.code;
                    //     const targetLine = lineAround;
                    //     console_group("PHP Linter > Finding Line [Context]");
                    //     console.log("lineString:", targetString);
                    //     console.log("lineNumber:", targetLine);
                    //     console.log("fullCode:", fullcode);
                    //     console.groupEnd();
                    //     var linefound = findNearestString(targetString, targetLine, fullcode);
                    //     rsponsesyntax.line = linefound+2;
                    //     rsponsesyntax.codelines = fullcode.split("\n");

                    //     // Get the index of the second occurrence of the error character within the code
                    //     console_info("PHP Linter > Finding Index");
                    //     var indexchar = rsponsesyntax.message.split("'")[1].split("'")[0];
                    //     rsponsesyntax.index = getStringIndex(indexchar, rsponsesyntax.codelines[rsponsesyntax.line - 1]);

                    //     // Format and push the error message
                    //     console_info("PHP Linter > Parsing Error");
                    //     var messageparse = rsponsesyntax.message.replace("Parse error: ", "").split(" on line")[0].replace(" in your code", "")
                    //     rsponsesyntax.message = messageparse.charAt(0).toUpperCase() + messageparse.slice(1);
                    //     errorArray.push(rsponsesyntax);
                    //     console_group("PHP Linter > Result");
                    //     console.log(rsponsesyntax);
                    //     console.groupEnd();
                    // }
                    console.log(response)
                } catch (err) {
                    return false;
                }
                currentRequests.splice(currentRequests.indexOf(request), 1);

                // Set errors when all requests are completed
                if (currentRequests.length === 0) {
                    // setErrors(errorArray);
                }
            }, "json");
            currentRequests.push(request);
}