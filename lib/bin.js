#!/usr/bin/env node
var optimist  = require('optimist');
var yeoman    = require('yeoman-environment');
var Generator = require('generator-js-type');
var argv      = require('./argv');
var env       = yeoman.createEnv();


if (argv.help) {
  optimist.showHelp();
  process.exit(0);
} else if ( !argv.classname && !argv.jsonpath ) {
  var msg = "Please, provide either the class name or json schema path. Use the option --help for more information.";
  console.error(msg);
  process.exit(0);
}

// Here we register a generator based on its path. Providing the namespace
// is optional.
env.register(require.resolve('generator-js-type'), 'npm:app');

env.lookup(function () {
  var command = '';

  if (argv.classname) {
    command += 'npm:app ' + argv.classname;
  } else {
    command += 'js-type:json-schema ' + argv.jsonpath;
  }

  env.run( command, function() {
    // console.log( 'done!' );
  } );

} );
