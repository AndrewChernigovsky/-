const { src, dest } = require('gulp')
const concatCss = require('gulp-concat-css')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

module.exports = function cssConcat() {
  return src('src/css/**/*.css')
    .pipe(autoprefixer())
    .pipe(concatCss('styles.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('assets/css/'))
}
