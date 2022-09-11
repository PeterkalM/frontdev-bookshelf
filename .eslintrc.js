module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true
  },
  'ignorePatterns': ['public/'],
  'plugins': ['import', 'react'],
  'extends': [
    'eslint:recommended',
    'google',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended'
  ],
  'rules': {
    'max-len': ['error', 120],
    'require-jsdoc': 'off',
    'comma-dangle': 'off',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
