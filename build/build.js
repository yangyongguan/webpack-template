'use strict'
require('./check-versions')()
//https://github.com/tj/commander.js 这是用来处理命令行的工具
var program = require('commander');
var urlPath = require('../config/url.path');

//监听处理命令行
program
  .version(require('../package').version)
  .option('-t ,--test', 'build test')
  .option('-d ,--dev', 'build dev')
  .parse(process.argv);

if(program.dev){
  process.env.BUILD_ENV='"dev"'
  process.env.API_PATH= urlPath.api.dev
}
else if(program.test){
  process.env.BUILD_ENV='"test"'
  process.env.API_PATH=urlPath.api.test
}else{
  process.env.BUILD_ENV='"prod"'
  process.env.API_PATH=urlPath.api.prod
}

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
