#!/usr/bin/env node
const _ = require('lodash');
const program = require('commander');
const { Signale } = require('signale');

const runningLog = new Signale({ interactive: true, scope: '@brightsole/new' });
runningLog.start('Beginning process');

global._ = _;
global.runningLog = runningLog;

program.command('cli <dir>', 'create new cli project').parse(process.argv);
