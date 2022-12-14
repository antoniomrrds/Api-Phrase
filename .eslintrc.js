module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
  },
};
