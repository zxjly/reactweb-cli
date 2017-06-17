#!/usr/bin/env node

require('commander')
    .version(require('../package').version)
    .usage('<command> [options]')
    .command('init', 'generate a new react web project')
    .parse(process.argv)