module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    curly: 1,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
