'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./tasks')
const tasksProd = requireDir('./tasksProduction')
const gulpConfig = require('./gulp-config.js')

function requireTask(taskName, path, options, dependencies) {
  let settings = options || {}
  const taskFunction = function (callback) {
    if (settings.checkProduction) {
      settings.isProduction = process.argv[process.argv.length - 1] === 'build'
    }

    let task = require(path + taskName + '.js').call(this, settings)

    return task(callback)
  }

  settings.taskName = taskName

  if (!Array.isArray(dependencies)) {
    gulp.task(taskName, taskFunction)
  } else if (dependencies.length === 1) {
    gulp.task(taskName, gulp.series(dependencies[0], taskFunction))
  } else {
    gulp.task(taskName, gulp.series(dependencies, taskFunction))
  }
}






// var imageResize = require('gulp-image-resize');
// var rename = require("gulp-rename");

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

// exports.resize_images = crop;



// DEFAULT (directory=>assets)

// clean asstes
exports.del = tasks.del
// copy files
exports.copy = tasks.copy

// requireTask(`${gulpConfig.task.copyFolders}`, `./${gulpConfig.folder.tasks}/`, {
//   dest: gulpConfig.folder.build,
//   foldersToCopy: gulpConfig.getPathesToCopy(),
// }),

// pug to html
exports.pug2html = tasks.pug2html
// html to formatter html
exports.html = tasks.html
// scss to css
exports.scss = tasks.scss
// css_modules to style.css
exports.cssConcat = tasks.cssConcat

// js_modules to js

requireTask(
  `${gulpConfig.task.buildCustomJs}`,
  `./${gulpConfig.folder.tasks}/`,
  {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    mainJs: gulpConfig.file.mainJs,
    checkProduction: true,
  },
)

// vendors.js in to directory=>assets/vendors

requireTask(
  `${gulpConfig.task.buildJsVendors}`,
  `./${gulpConfig.folder.tasks}/`,
  {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    vendorJs: gulpConfig.file.vendorJs,
    vendorJsMin: gulpConfig.file.vendorJsMin,
    checkProduction: true,
  },
)

// vendors.css in to directory=>assets/vendors

requireTask(
  `${gulpConfig.task.buildStylesVendors}`,
  `./${gulpConfig.folder.tasks}/`,
  {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    vendorScss: gulpConfig.file.vendorScss,
    vendorScssMin: gulpConfig.file.vendorScssMin,
    checkProduction: true,
  },
)
// images optimize in to directory=>assets/images
exports.rastr = tasks.rastr
// images optimize in to directory=>assets/images
exports.webp = tasks.webp
// images optimize in to directory=>assets/images
exports.crop = tasks.crop
// icons-svg optimize sprite in to directory=>src
exports.svg_sprite = tasks.svg_sprite
// php
exports.php = tasks.php;
// copy php
exports.copyPHP = tasks.copyPHP;
// watchig
exports.watch = tasks.watch
// browserSync
exports.browsersync = tasks.browsersync

// =>=>=>=>=>=>=>=>
// ___________________________________________________________
// =>=>=>=>=>=>=>=>
// PRODUCTION (directory=>production)

// clean production
exports.delProd = tasksProd.delProd
// pug to html
exports.pug2htmlProd = tasksProd.pug2htmlProd
// html to formatter html
exports.htmlProd = tasksProd.htmlProd
// scss to css
exports.scssProd = tasksProd.scssProd
// css_modules to style.css
exports.cssConcatProd = tasksProd.cssConcatProd
// vendors.css in to directory=>assets/vendors
exports.cssVendorsProd = tasksProd.cssVendorsProd
// js_modules to js
exports.jsCustomProd = tasksProd.jsCustomProd
// vendors.js to vendors.min.js
exports.jsVendorsProd = tasksProd.jsVendorsProd
// .php to directory=>productiion
exports.php = tasksProd.php


// ВЫЗОВ ГАЛПА

// gulp
exports.default = gulp.series(
  exports.del,
   exports.svg_sprite,
   exports.webp,
   exports.rastr,
   exports.crop,
  exports.copy,
  exports.pug2html,
  exports.html,
  exports.scss,
  exports.cssConcat,
  gulpConfig.task.buildStylesVendors,
  gulpConfig.task.buildCustomJs,
 gulpConfig.task.buildJsVendors,
  	exports.php,
  exports.watch,
  exports.browsersync,
)

// gulp production
exports.prod = gulp.series(
  exports.delProd,
  exports.pug2htmlProd,
  exports.htmlProd,
  exports.scssProd,
  exports.cssConcatProd,
  exports.jsVendorsProd,
  exports.jsCustomProd,
  exports.cssVendorsProd,
  exports.php,
  exports.rastr,
)

// webp
exports.webp = gulp.series(exports.rastr, exports.svg_sprite)
exports.img = gulp.series(exports.crop)