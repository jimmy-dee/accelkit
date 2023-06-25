const { rem, stripUnits } = require('./src/utils/css-functions.js');

module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-functions': {
      functions: {
        rem,
        stripUnits,
      },
    },
    autoprefixer: {},
  },
};
