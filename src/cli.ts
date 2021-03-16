#!/usr/bin/env node
import { cac } from '@walrus/cli-utils';
import { scriptRun } from './';

const cli = cac(`script-run`);

cli
  .command('[...entrie]')
  .action(() => {
    console.log('12')
    try {
      scriptRun();
    } catch {
      process.exit(1);
    }
  })

cli.help();
cli.version(require('../package.json').version);
cli.parse();
