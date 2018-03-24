module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  plugins: [
    'react',
    'react-native',
    'flowtype',
    'jsx-a11y',
  ],
  extends: [
    'airbnb',
    'plugin:react-native/all',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    "import/no-named-as-default": 0,
    'import/no-unresolved': 1,
    'import/extensions': 1,
    'class-methods-use-this': 'off',
  },
};
