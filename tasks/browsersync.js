var gulp = require('gulp')
var browserSync = require('browser-sync').create()

// Static server
module.exports = function browsersync() {
  browserSync.init({
    server: 'assets',
  })

  gulp.watch('src/**/*.pug').on('change', browserSync.reload)
}
