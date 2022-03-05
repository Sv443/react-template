module.exports = {
  root: true,
  ignorePatterns: [
    "dist/",
    "workspaces/",
  ],
  env: {
    "browser": true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    indent: ["error", 4],
    "comma-dangle": ["error", "always-multiline"],
    "array-bracket-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline"],
    "no-unused-vars": ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
