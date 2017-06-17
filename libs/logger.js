var chalk = require('chalk')
var format = require('util').format

// 前缀
var prefix = '   reactweb-cli'
var sep = chalk.gray('·')

// log message
exports.log = function () {
  var msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}

// log error
exports.fatal = function (message) {
  if (message instanceof Error) message = message.message.trim()
  var msg = format.apply(format, arguments)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

// log success
exports.success = function () {
  var msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}
