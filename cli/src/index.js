/**
 * Function that does nothing
 *
 * @param {string} [something] - some argument or arguments
 * @param {Object} options - optional secondary options
 */
module.exports.default = (_, __) => {
  runningLog.info('Absolutely nothing was done with args or options', _, __);
};
