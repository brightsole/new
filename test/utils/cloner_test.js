import fs from 'fs';
import mockFs from 'mock-fs';
import '../_helper';

const { default: cloneIt } = require('../../src/utils/cloner');

test.afterEach.always(mockFs.restore);

test('clones our example directory to a new location', t => {
  const mockCliDir = `${__dirname.replace(/\/test\//g, '/src/')}/../cli`;
  mockFs({
    [mockCliDir]: {
      'index.js': 'our cool util, not at all new-cli',
    },
  });

  cloneIt('cli', 'baller-project', {});

  t.deepEqual(fs.readdirSync('./baller-project'), ['index.js']);
  t.deepEqual(
    fs.readFileSync('./baller-project/index.js', { encoding: 'utf8' }),
    'our cool util, not at all baller-project'
  );
});

test('allows the user to specify a pretty internal name', t => {
  const mockCliDir = `${__dirname.replace(/\/test\//g, '/src/')}/../cli`;
  mockFs({
    [mockCliDir]: {
      'index.js': 'our cool util, not at all new-cli',
    },
  });

  cloneIt('cli', 'baller-project', { prettyName: 'woooooo-js' });

  t.deepEqual(fs.readdirSync('./baller-project'), ['index.js']);
  t.deepEqual(
    fs.readFileSync('./baller-project/index.js', { encoding: 'utf8' }),
    'our cool util, not at all woooooo-js'
  );
});

test('will for sure copy the .gitignore file across', t => {
  const mockCliDir = `${__dirname.replace(/\/test\//g, '/src/')}/../cli`;
  mockFs({
    [mockCliDir]: {
      gitignore: 'npm //because they stink',
    },
  });

  cloneIt('cli', 'baller-project', {});

  t.deepEqual(fs.readdirSync('./baller-project'), ['.gitignore']);
});
