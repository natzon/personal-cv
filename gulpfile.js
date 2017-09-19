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
gulp.task('testWatch', function () {
    gulp.watch('less/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});