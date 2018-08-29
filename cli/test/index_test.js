import './_helper';

const { default: main } = require('../src');

test('does nothing', t => {
  const result = main();

  t.deepEqual(result, undefined);
});
