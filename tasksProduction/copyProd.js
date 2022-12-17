const {src,dest} = require('gulp');


var paths = {
	"images": "['assets/images/**/*.{png, jpg, jpeg, svg, ico, gif, webp, pdf, eps, tiff}', 'assets/sprite/*']",
	"videos": "'assets/videos/**/*.{avi, mkv, asf, mp4, flv, webm}'",
	"fonts": "assets/fonts/**/*.{ttf, otf, eot, woff, woff2}",

}

module.exports = function copyProd() {
	return src(
			paths.images,
			paths.videos,
			paths.fonts
		)
		.pipe(dest('production'))
}