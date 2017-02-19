var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('test', function() {
  console.log('running');
});

gulp.task('server', function() {
  connect.server();
});

gulp.task('sass', function() {
  gulp.src('style.scss')
    .pipe( sass() )
    .pipe( gulp.dest('css') );
});

gulp.task('watch', function() {
  gulp.watch(['style.scss'], ['sass']);
});

gulp.task('default', ['server', 'watch']);
