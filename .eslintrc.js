/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "ignorePatterns": ["/*.*"],
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/quotes": "warn",
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "curly": "warn",
        "eqeqeq": [
            "warn",
            "always"
        ],
        "no-redeclare": "warn",
        "no-throw-literal": "warn",
        "no-unused-vars": [2, { "args": "after-used", "argsIgnorePattern": "^_" }],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "typeLike",
                format: [
                    "PascalCase"
                ]
            },
            {
                selector: "variable", 
                types: [
                    "boolean"
                ],
                format: [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ]
            },
        ],
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" }
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            { "name": "Link", "linkAttribute": "to" }
        ]
    },
    globals: {
        React: true,
        JSX: true,
        Winreg: true,
    },
};