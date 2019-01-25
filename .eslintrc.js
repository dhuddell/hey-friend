module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react'
  ],
  globals: {
    Feature: true,
    Scenario: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      ecmaVersion: '2018',
      sourceType: 'module',
    }
  },
  plugins: [
    'import',
    'jest',
  ],
  settings: {
    react: {
      version: "16.2.0"
    }
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    indent: [
      'warn',
      2,
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'no-console': [
      'warn',
    ],
    'no-var': [
      'error',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'prefer-const': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'warn',
    'quote-props': [
      'warn',
      'as-needed',
    ],
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'wrap-iife': [
      'error',
      'outside',
    ],
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'no-new-func': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-param-reassign': 'error',
    'prefer-spread': 'warn',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'no-useless-constructor': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
    'dot-notation': 'error',
    'no-undef': 'error',
    'one-var': [
      'error',
      'never',
    ],
    eqeqeq: [
      'error',
      'always',
    ],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'brace-style': 'error',
    'spaced-comment': [
      'warn',
      'always',
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'space-infix-ops': 'error',
    'eol-last': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 5,
      },
    ],
    'no-whitespace-before-property': 'error',
    'padded-blocks': [
      'error',
      'never',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'max-len': [
      'error',
      140,
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    camelcase: 'error',
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Feature', 'Scenario'],
    }],
    'no-underscore-dangle': 'error',
  },
};