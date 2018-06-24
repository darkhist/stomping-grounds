module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin: react/recommended'
  ],
  plugins: ['jsx-a11y', 'react'],
  rules: {
    'comma-dangle': 'off'
  }
};
