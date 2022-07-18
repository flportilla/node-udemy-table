const { multiplicationTables } = require('./utils/mutiply')
const argv = require('./config/yargs');
require('colors')

const { base, list, until } = argv

console.clear()

multiplicationTables(base, list, until)
  .then(fileName => console.log(fileName))
  .catch(error => console.log(error))