#!/usr/bin/env node
const _ = require('lodash');
const program = require('commander');
const { Signale } = require('signale');
const { default: main } = require('./src');

const runningLog = new Signale({ interactive: true, scope: 'new-cli' });
runningLog.start('Beginning process');

global._ = _;
global.runningLog = runningLog;

program.arguments('[args]').action(async (args, options) => {
  runningLog.info('Calling main function');

  await main(args, options);

  runningLog.success('Ran the main function!');
});

program.parse(process.argv);
