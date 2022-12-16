var { src, dest } = require('gulp');
var pug = require('gulp-pug');

module.exports = function pug2html() {
	return src('src/**/*.pug')
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(dest('assets/'));
};
