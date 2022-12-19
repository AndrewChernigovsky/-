var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");

// var resizeImageTasks = [];

// [100,300,800,1000,2000].forEach(function(size) {
//   var resizeImageTask = 'resize_' + size;
//   gulp.task(resizeImageTask, function() {
//     return gulp.src('src/images/**/*.{jpg,png,tiff}')
//       .pipe(imageResize({
//          width:  size,
//          height: size,
//          upscale: false
//        }))
//       .pipe(gulp.dest('src/images/' + size + '/'))
//   });
//   resizeImageTasks.push(resizeImageTask);
// });
	
// gulp.task('resize_images', resizeImageTasks)

var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var os = require('os');
var parallel = require('concurrent-transform');
const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true });
var changed = require("gulp-changed");
var im = require('imagemagick');

module.exports = function crop() {

	//     var sizes = [100,300,800,1000,2000];
	//     var stream;

	//     for (size in sizes) {
	//         stream = gulp.src('src/images/**/*.{jpg,png,tiff}')
	//             .pipe(parallel(
	//                     imageResize({
	//                         width:  sizes[size],
	//                         height: sizes[size],
	//                         upscale: false
	//                 }),
	//                 os.cpus().length
	//             ))
	//            .pipe(gulp.dest('src/images/' + sizes[size] + '/'))
	//    }
	//    return stream;

    im.resize({
		srcPath:'src/images/content/money.png',
		dstPath: 'src/images/content/money-small.png',
		width:   256,
	})
	// );
	
	// return gulp.src('src/images/**/*.{png,jpg,gif}')
	// 	.pipe(changed("src"))
	// 	.pipe(imageResize({
	// 		width: 100,
	// 		height: 100,
	// 		crop: true,
	// 		upscale: false,
	// 	}))
	// 	.pipe(gulp.dest('src/images/'))
};

// exports.resize_images = crop;