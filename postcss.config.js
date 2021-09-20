module.exports = {
  parser: 'sugarss',
  plugins: [
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-easy-import', {
      extensions: ['.sss'],
    }),
  ],
};
