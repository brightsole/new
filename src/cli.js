const _ = require('lodash');
const program = require('commander');
const { Signale } = require('signale');
const { default: cloner } = require('./utils/cloner');

const runningLog = new Signale({ interactive: true, scope: 'new:cli' });
runningLog.start('Beginning process');

global._ = _;
global.runningLog = runningLog;

program
  .arguments('<dir>')
  .option(
    '-n, --pretty-name [string]',
    'optional internally applied application name'
  )
  .action((newDir, options) => {
    runningLog.info('Cloning project');

    cloner('cli', newDir, options);

    runningLog.success('Cloned new cli!');
  });

program.parse(process.argv);
