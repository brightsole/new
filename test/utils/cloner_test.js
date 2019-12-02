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

test('replaces _files so sub-package.json files are ignored', t => {
  const mockCliDir = `${__dirname.replace(/\/test\//g, '/src/')}/../cli`;
  mockFs({
    [mockCliDir]: {
      'package.json': '{ "_files": "some" }',
    },
  });

  cloneIt('cli', 'baller-project', {});

  t.deepEqual(fs.readdirSync('./baller-project'), ['package.json']);
  t.deepEqual(
    fs.readFileSync('./baller-project/package.json', { encoding: 'utf8' }),
    '{ "files": "some" }'
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

test('also copies the gitattribues file across', t => {
  const mockCliDir = `${__dirname.replace(/\/test\//g, '/src/')}/../cli`;
  mockFs({
    [mockCliDir]: {
      gitignore: 'npm //because they stink',
      gitattributes: 'dist/*.html linguist-generated // who do this?',
    },
  });

  cloneIt('cli', 'baller-project', {});

  t.deepEqual(fs.readdirSync('./baller-project'), [
    '.gitattributes',
    '.gitignore',
  ]);
});
