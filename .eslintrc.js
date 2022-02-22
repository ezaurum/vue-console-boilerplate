module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
}
