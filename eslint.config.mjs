import jsPlugin from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import sortPlugin from 'eslint-plugin-sort';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  jsPlugin.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  sortPlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  prettierPluginRecommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node, ...globals.es2025 },
      sourceType: 'module',
    },
    plugins: {
      'prefer-arrow': preferArrowPlugin,
    },
    rules: {
      'import/no-unresolved': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          classPropertiesAllowed: false,
          disallowPrototype: true,
          singleReturnOnly: false,
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/display-name': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: 'last',
          shorthandFirst: true,
        },
      ],
      'sort/imports': [
        'error',
        {
          groups: [
            { order: 10, type: 'side-effect' },
            { order: 20, type: 'dependency' },
            { order: 30, type: 'other' },
            { order: 40, regex: '\\.(png|jpg|svg)$' },
          ],
          separator: '\n',
        },
      ],
      'sort/object-properties': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
];
