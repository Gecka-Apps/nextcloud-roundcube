import { recommended } from '@nextcloud/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

const configOptions = [
  ...recommended,
  {
    files: ['**/*.vue'],
    rules: {
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],
      'vue/first-attribute-linebreak': [
        'error',
        {
          multiline: 'beside',
        },
      ],
      semi: ['error', 'never'],
      'no-tabs': ['error', {
        allowIndentationTabs: false,
      }],
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      '@stylistic/implicit-arrow-linebreak': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/padded-blocks': 'off',
      '@stylistic/space-infix-ops': [
        'error',
        {
          ignoreTypes: true,
        },
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'consistent',
      ],
      'no-mixed-spaces-and-tabs': 'error',
      'no-console': 'off',
      'antfu/top-level-function': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'],
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-infix-ops': [
        'error',
        {
          ignoreTypes: true,
        },
      ],
      '@stylistic/implicit-arrow-linebreak': 'off',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
          },
        },
      ],
      '@stylistic/padded-blocks': 'off',
      '@stylistic/indent': ['error', 2],
      // 'n/no-unpublished-import': 'off',
      // 'n/no-unpublished-require': 'off',
      'no-tabs': ['error', {
        allowIndentationTabs: false,

      }],
      indent: ['error', 2],
      'no-mixed-spaces-and-tabs': 'error',
      semi: ['error', 'always'],
      'no-console': 'off',
      // 'n/no-missing-require': ['error', {
      //   resolvePaths: ['./src', './style', './'],
      //   tryExtensions: ['.js', '.json', '.node', '.css', '.scss', '.ts', '.xml', '.vue'],
      // }],
      'antfu/top-level-function': 'off',
    },
  },
  globalIgnores([
    'src/toolkit/**',
    'repositories/**',
  ]),
  {
    files: ['**/*.vue'],

    rules: {
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.cts',
      '**/*.mts',
      '**/*.tsx',
      '**/*.vue',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

// console.info(configOptions);

export default defineConfig(configOptions);
