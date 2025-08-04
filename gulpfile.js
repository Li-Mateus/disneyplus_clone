const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
// const imagemin = require('gulp-imagemin');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

// function images() {
//     return gulp.src('./src/images/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./src/images/minified'));
// } -------> função para minificar imagens

exports.default = gulp.parallel(styles, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}