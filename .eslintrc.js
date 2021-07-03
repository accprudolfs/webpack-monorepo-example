module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['jest', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    strict: 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
    'no-undef': 0,
    'react/prop-types': 0,
    'no-async-promise-executor': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
