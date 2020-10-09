
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    // mocha: true,
    // jest: true,
    // jasmine: true,
  },
  rules: {
  },
  plugins: [
    "react-hooks",
    "jsx-a11y",
    "babel",
    "flowtype",
    "import",
  ],
  // settings: {
  //   polyfills: ['fetch', 'promises', 'url'],
  // },
};
