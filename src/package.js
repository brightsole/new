#!/usr/bin/env node
const _ = require('lodash');
const program = require('commander');
const { Signale } = require('signale');
const { default: cloner } = require('./utils/cloner');

const runningLog = new Signale({ interactive: true, scope: 'new:package' });
runningLog.start('Beginning process');

global._ = _;
global.runningLog = runningLog;

program
  .arguments('<dir>')
  .option(
    '-n, --pretty-name [string]',
    'optional internally applied package name'
  )
  .action((newDir, options) => {
    runningLog.info('Cloning project');

    cloner('package', newDir, options);

    runningLog.success('Cloned new package!');
  });

program.parse(process.argv);
