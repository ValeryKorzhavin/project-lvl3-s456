#!/usr/bin/env node

import program from 'commander';
import pageLoader from '..';
import { version, description } from '../../package.json';

program
  .version(version)
  .description(description)
  .arguments('<pageUrl>')
  .option('-o, --output [dir]', 'output dir', process.cwd())
  .usage('[options] <pageUrl>')
  .action(pageUrl => pageLoader(pageUrl, program.output)
    .then(() => console.log('Page was successfully downloaded'))
    .catch((error) => {
      console.error(error.message);
      process.exit(error.code);
    }))
  .parse(process.argv);
