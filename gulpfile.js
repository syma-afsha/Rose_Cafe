const gulp = require('gulp');
const sass = require('gulp-sass');

const browsersync=require('browser-sync').create();
//compile sass into css
function style(){
    //where is my scss file
    return gulp.src('./scss/**/*.scss')
    //pass the file through sass compiler
    .pipe (sass().on('error',sass.logerror))
    //where do i save css file
    .pipe(gulp.dest('./css'))
    .pipe(browsersync.stream())
}
function watch(){
    browsersync.init(
        {
            server:{
                basedir: './'
            }
        }

    );
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*html').on('change',browsersync.reload);
    gulp.watch('./js/**/*.js').on('change',browsersync.reload);

}
exports.style = style;
exports.watch = watch;
