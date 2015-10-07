#!/usr/bin/env node
var optimist  = require('optimist');
var yeoman    = require('yeoman-environment');
var Generator = require('generator-js-type');
var argv      = require('./argv');
var env       = yeoman.createEnv();
var path      = require('path');


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
env.register(path.join(__dirname, '../node_modules/generator-js-type/generators/app/index.js'), 'npm:app');
env.register(path.join(__dirname, '../node_modules/generator-js-type/generators/json-schema/index.js'), 'js-type:json-schema');

env.lookup(function () {
  var command = '';

  if (argv.classname) {
    command += 'npm:app ' + argv.classname;
  } else {
    command += 'js-type:json-schema ' + argv.jsonpath;
  }

  env.run( command,
    {
      convert: argv.convert,
      cascade: argv.cascade,
      // get yeoman to auto overwrite files
      // https://github.com/yeoman/generator/blob/8c895a5fe48054dcc473d71ad1227a249cde3497/lib/base.js#L115
      force: argv.force
    }, function() {
      // console.log( 'done!' );
  } );

} );
