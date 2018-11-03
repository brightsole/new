export default {
  verbose: true,
  cache: false,
  require: ['@babel/register', './test/helper.js'],
  files: ['test/**/*_test.js'],
};
