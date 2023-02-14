module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': false
      }
    ],
    'max-len': [
      'error',
      {
        'code': 120
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
  },
  ignorePatterns: [
    '/config/**',
    '.eslintrc.js'
  ]
};