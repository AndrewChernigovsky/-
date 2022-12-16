var { src, dest } = require('gulp');
var pug = require('gulp-pug');

module.exports = function pug2htmlProd() {
	return src(['src/pug/**/*.pug', '!src/components/**/*.pug'])
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(dest('production/'));
};
