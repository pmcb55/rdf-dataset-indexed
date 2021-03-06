module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'jest'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  // add your custom rules here
  rules: {
    'callback-return': ['error', ['done', 'callback', 'cb', 'send']],
    'max-len': ['error', {
      'code': 120,
      'ignoreRegExpLiterals': true,
      'ignorePattern': '\\s+test\\(|\\s+require\\(|https?://'
    }],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': ['error', {allow: ['predicate', 'callback', 'done', 'err']}],
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': ['error', {destructuring: 'any', ignoreReadBeforeAssign: true}],
    curly: 'error',
    quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
  }
}
