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
  .string('classname')
  .boolean('force')
  .argv;
