#!/usr/bin/env node

const program = require('commander');
const config = require("../package");
const exec = require('child_process').exec;

program
.version(config.version)
.option('-s, --site', 'open my site')
.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble');

program
.command('ls')
.description('show all commands')
.action(function(env, options){
  const commands = env.parent.commands;
  if(commands) {
    commands.map(cmd => {
      console.log(`  · ${cmd._name}\t\t\t${cmd._description}`);
    });
  }
});

program
.command('new [env]', 'create some kind of project')
.command('get [env]', 'get some kind of project from templates');


program.parse(process.argv);

// show my site
if (program.site) {
  const cmd = 'open ' + config.site;
  console.log(cmd);
  exec(cmd, function(err, stdout, stderr){
    if(err) {
      console.log(`open site error: ${stderr}`);
    }
  });
}

if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log(' list: %j', program.list);
