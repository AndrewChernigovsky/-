const { watch, parallel, series } = require('gulp')
var browserSync = require('browser-sync').create()

module.exports = function watching() {
  browserSync.init({
    server: {
      baseDir: './assets',
      index: '/index.html',
    },
  })

watch('src/**/*.pug', series('pug2html', 'html'))
watch('src/**/*.php', series('php', 'copyPHP'))
watch('src/js/**/*.js', series('jsCustom'))
watch('src/scss/**/*.scss', series('scss', 'cssConcat'))
  //   watch('src/**/*.json', parallel('html'))
  //   watch('src/img/**/*.+(svg|ico)', parallel('rastr'))
  //   watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'))
    // watch('src/svg/css/**/*.svg', series('svg_css', 'style'))
  //   watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'))
}
