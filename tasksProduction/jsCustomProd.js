const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function jsCustomProd() {
	return src(['src/js/**/*.js', '!src/js/metrika/*.js'])
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(dest('production/js/'));
};
