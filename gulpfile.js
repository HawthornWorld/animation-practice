/**
 * Created by mayan on 2017/7/11.
 */

var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('default',function () {
    gulp.src('index.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
});