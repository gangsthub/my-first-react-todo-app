module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    serviceworker: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    semi: ['error', 'never'],
    'no-extra-semi': 2,
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'ignore',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore'
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        named: 'never',
        anonymous: 'never'
      }
    ],
    'no-debugger': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-no-bind': {
      allowArrowFunctions: 1,
      allowBind: 2
    }
  },
  globals: {}
}
