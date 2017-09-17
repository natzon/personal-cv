var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});
gulp.task('default',['testLess'],function() {
  // 将你的默认的任务代码放在这
});