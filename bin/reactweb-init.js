#!/usr/bin/env node

var path = require('path')
var program = require('commander')
var chalk = require('chalk')
var exists = require('fs').existsSync
var inquirer = require('inquirer')

var generate = require('../libs/generate')
var logger = require('../libs/logger')
var localPath = require("../libs/local-path")
var isLocalPath = localPath.isLocalPath
var getTemplatePath = localPath.getTemplatePath


// var download = require('download-git-repo')

// var ora = require('ora')
// var home = require('user-home')
// var tildify = require('tildify')
// var rm = require('rimraf').sync
// var logger = require('../lib/logger')
// var generate = require('../lib/generate')
// var checkVersion = require('../lib/check-version')
// var warnings = require('../lib/warnings')
// var localPath = require('../lib/local-path')

// var isLocalPath = localPath.isLocalPath
// var getTemplatePath = localPath.getTemplatePath

// 使用方法
program.usage('[project-name]')

// 帮助 help
program.on('--help', function () {
    console.log('  Examples:')
    console.log()
    console.log(chalk.gray('    # create a new react web project'))
    console.log('    $ reactweb init my-project')
    console.log()
});
function help () {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
}
help();

var rawName = program.args[0];
var inPlace = !rawName || rawName === ".";
var name = inPlace ? path.relative('../', process.cwd()) : rawName;
var to = path.resolve(rawName || '.');

var template = "./webpack-simple";      // 当前暂时使用本地模板.

process.on('exit', function () {
    console.log()
});
//
if (exists(to)) {
    inquirer.prompt([{
        type: 'confirm',
        message: inPlace
            ? 'Generate project in current directory?'
            : 'Target directory exists. Continue?',
        name: 'ok'
    }], function (answers) {
        if (answers.ok) {
            run()
        }
    })
} else {
    run()
}

//
function run () {
    // 检查模板是否是本地模板
    if (isLocalPath(template)) {
        var templatePath = getTemplatePath(template);
        if (exists(templatePath)) {
            generate(name, templatePath, to, function (err) {
                if (err) logger.fatal(err)
                console.log()
                logger.success('Generated "%s".', name)
            })
        } else {
            logger.fatal('Local template "%s" not found.', template)
        }
    } else {
        logger.fatal('Please provide a local template:  "%s".', template)
    }
}
//
// /**
//  * Download a generate from a template repo.
//  *
//  * @param {String} template
//  */
//
// function downloadAndGenerate (template) {
//     var spinner = ora('downloading template')
//     spinner.start()
//     // Remove if local template exists
//     if (exists(tmp)) rm(tmp)
//     download(template, tmp, { clone: clone }, function (err) {
//         spinner.stop()
//         if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
//         generate(name, tmp, to, function (err) {
//             if (err) logger.fatal(err)
//             console.log()
//             logger.success('Generated "%s".', name)
//         })
//     })
// }
