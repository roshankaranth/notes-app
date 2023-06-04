const chalk = require('chalk')

const getNotes = require('./notes.js')
console.log(getNotes())

console.log(chalk.green.bgGreenBright.inverse.bold('SUCCESS'))
console.log(chalk.inverse('hello'))

