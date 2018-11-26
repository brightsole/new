import test from 'ava';
import { noop } from './index';

test('main exports a function', t => {
  t.deepEqual(typeof noop, 'function');
});

test('the main function does nothing', t => {
  t.deepEqual(noop(), undefined);
});
