const { src, dest } = require('gulp');
const uglify = require;
'gulp-uglify-es'.default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');

module.exports = function jsCustom() {
	return src(['src/js/**/*.js', '!src/js/vendors.js'])
		.pipe(map.init())
		.pipe(concat('app.min.js'))
		.pipe(map.write(''))
		.pipe(dest('assets/js/'));
};
