#!/usr/bin/env node

const program = require('commander');
const exec = require('child_process').exec;

program
.command('table')
.description('create a html that would load [data.json] file in current path')
.action(function(env){
  console.log('create table');
});

program.parse(process.argv);
