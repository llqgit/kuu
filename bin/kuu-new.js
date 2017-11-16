#!/usr/bin/env node

const program = require('commander');
const exec = require('child_process').exec;

program
.option('-t, --type', 'create project type')

program.parse(process.argv);
