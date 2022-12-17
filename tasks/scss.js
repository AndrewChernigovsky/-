const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const map = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

module.exports = function scss() {
  return src('src/scss/**/*.scss')
    .pipe(map.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(map.write('sourcemaps/'))
    .pipe(dest('src/css/'))
}
