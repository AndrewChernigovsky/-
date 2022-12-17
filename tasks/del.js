const { src, dest } = require('gulp')
var delite = require('del')

module.exports = function del() {
  return delite('assets/**/*', { force: true })
}
