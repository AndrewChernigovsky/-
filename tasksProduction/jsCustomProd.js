const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

module.exports = function jsCustomProd() {
	return src(['src/js/**/*.js', '!src/js/vendors.js'])
		.pipe(uglify())
		.pipe(concat('app.min.js'))
		.pipe(dest('production/js/'));
};
