var optimist = require('optimist');

module.exports = optimist
  .usage('CLI for generating JS6 type.')
  .options('classname', {
    'alias':    'c',
    'describe': 'Define the class name.'
  })
  .options('jsonpath', {
    'alias':    'p',
    'describe': 'Define json schema file path.'
  })
  .options('help', {
    'alias':    'h',
    'describe': 'Display the usage'
  })
  .options('force', {
    'describe': 'Override the file without asking'
  })
  .options('convert', {
    'describe': 'Convert a type to another. For instance, the option `--convert integer:number` will convert `integer` to `number`'
  })
  .options('cascade', {
    'describe': 'Cascade and generate Object classes recursively'
  })
  .string('classname')
  .boolean('force')
  .argv;
