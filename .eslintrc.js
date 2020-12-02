module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:cypress/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['webpack.*'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['**/cypress/**'],
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
