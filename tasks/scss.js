const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const map = require('gulp-sourcemaps');

module.exports = function scss() {
	return src('src/scss/**/*.scss')
		.pipe(map.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(map.write('assets/sourcemaps/'))
		.pipe(dest('assets/css/'));
};
