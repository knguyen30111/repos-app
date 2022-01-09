module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'class-methods-use-this': 0,
    'no-debugger': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': 1,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // react
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/no-array-index-key': 1, // warning for now, don't know how to fix
    'react/no-access-state-in-setstate': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-key': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
    'no-undef': 0,
  },
};
