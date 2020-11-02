module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: 0,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
}
