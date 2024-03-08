const { rem, stripUnits } = require('./src/utils/css-functions.ts');

module.exports = {
  plugins: {
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-functions': {
      functions: {
        rem,
        stripUnits,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
