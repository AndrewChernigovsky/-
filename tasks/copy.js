const { src, dest } = require('gulp')

var paths = {
  images:
    '[src/images/**/*.{png, jpg, jpeg, svg, ico, gif, webp, pdf, eps, tiff}, src/sprite/*]',
  videos: 'src/videos/**/*.{avi, mkv, asf, mp4, flv, webm}',
  fonts: 'src/fonts/**/*.{ttf, otf, eot, woff, woff2}',
  js: 'src/js/**/*.js',
}

module.exports = function copy() {
  return src([
    'src/**/*',
    '[src/images/**/*.{png, jpg, jpeg, svg, ico, gif, webp, pdf, eps, tiff}, src/sprite/*]',
    'src/videos/**/*.{avi, mkv, asf, mp4, flv, webm}',
    'src/fonts/**/*.{ttf, otf, eot, woff, woff2}',
    'src/js/**/*.js',
    '!src/js/app.js',
    '!src/js/components/**',
    '!src/js/components/*.js',
    '!src/pages/**/*.pug',
    '!src/index.pug',
    '!src/vendors/**',
    '!src/scss/**',
    '!src/scss/**/*.scss',
    '!src/css/**',
    '!src/css/**/*.css',
  ]).pipe(dest('assets'))
}
