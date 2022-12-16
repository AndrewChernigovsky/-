const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

module.exports = function scss() {
	return src('src/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed',
			}).on('error', sass.logError)
		)
		.pipe(dest('assets/css/'));
};
