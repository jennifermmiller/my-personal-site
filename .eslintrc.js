module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        indent: 2,
        jsxBracketSameLine: true,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'no-console': 2,
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAsync|useAsyncCallback)',
      },
    ],
  },
}
