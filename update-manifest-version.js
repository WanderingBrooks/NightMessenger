/*
 * This script update cacoo-blog theme's "Version" in style.css
 */
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const now = Date.now()
const themeName = 'cacoo-blog-guides'
const filePath = path.join(
  __dirname,
  `../web/wp-app/themes/${themeName}/style.css`,
)

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    return console.log(chalk.red(err))
  }
  var result = data.replace(/Version: \d+/, 'Version: ' + now)
  fs.writeFile(filePath, result, 'utf8', function(err) {
    if (err) {
      return console.log(chalk.red(err))
    }
    console.log(
      chalk.bold(`Updated the theme version in ${themeName}: `),
      chalk.green(now),
    )
  })
})
