var { src, dest } = require('gulp');
var pug = require('gulp-pug');

module.exports = function pug2htmlProd() {
	return src(['src/pug/**/*.pug', '!src/pug/bem-blocks/*pug'])
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(dest('production/'));
};
