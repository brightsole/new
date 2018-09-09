module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: './test/_helper.js',
  testRegex: 'test/.*_(test)\\.js$',
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '/docs/',
    '/dist/',
    '/coverage/',
    '/node_modules/',
  ],
};
