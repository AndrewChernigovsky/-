const { src, dest } = require('gulp')

module.exports = function copyPHP() {
  return src([
    'src/php/*.php',
  ]).pipe(dest('assets/php/'))
}
