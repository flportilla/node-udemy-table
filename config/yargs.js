
const argv = require('yargs')
  .option({

    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'base for multiplication'
    },
    'l': {
      alias: 'list',
      type: 'boolean',
      default: false,
      describe: 'logs resulst on console'
    },
    'u': {
      alias: 'until',
      type: 'number',
      default: 10,
      describe: 'prints on the console until this number'
    }
  }
  )
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'base must be a number'
    }
    return true
  })
  .argv;

module.exports = argv;