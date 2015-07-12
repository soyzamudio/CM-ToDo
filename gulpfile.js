var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
  jadesrc: ['./app/**/*.jade'],
  coffeesrc: ['./app/**/*.coffee'],
  sasssrc: ['./app/**/*.scss'],
  destination: './public/'
}

gulp.task('html', function() {
  gulp.src(paths.jadesrc)
  .pipe($.jade({pretty: true, doctype: 'html'}))
  .on('error', $.util.log)
  .pipe(gulp.dest(paths.destination));
});

gulp.task('js', function() {
  gulp.src(paths.coffeesrc)
  .pipe($.coffee({bare: true}))
  .on('error', $.util.log)
  .pipe(gulp.dest(paths.destination));
});

gulp.task('css', function() {
  gulp.src(paths.sasssrc)
  .pipe($.sass({style: 'expanded'}))
  .pipe(gulp.dest(paths.destination));
});

gulp.task('watch', function() {
  gulp.watch(paths.jadesrc, ['html']);
  gulp.watch(paths.coffeesrc, ['js']);
  gulp.watch(paths.sasssrc, ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {

});
