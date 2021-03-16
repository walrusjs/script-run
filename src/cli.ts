#!/usr/bin/env node
import { scriptRun } from './';

const argv = process.argv;
argv.splice(0, 2);

try {
  scriptRun(argv);
} catch {
  process.exit(1);
}
