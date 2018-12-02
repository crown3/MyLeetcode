const { lstatSync, readdirSync } = require('fs')
const { join, resolve } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .map(item => {
      const folderName = item.split('/').slice(-1)[0]
      if (folderName === '.vuepress') {
        return '/'
      } else {
        return '/' + folderName + '/'
      }
    })

module.exports = getDirectories(resolve(__dirname, '../'))
