const { resolve } = require("path");
module.exports = {
  root: true,

  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
  },

  env: {
    browser: true,
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
    
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:vue/vue3-essential",

    "prettier",
    "plugin:prettier/recommended",
  ],

  plugins: [
    "@typescript-eslint",

    "vue",
  ],

  globals: {
    ga: "readonly",
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  rules: {
    "prefer-promise-reject-errors": "off",

    quotes: ["warn", "double", { avoidEscape: true }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
