const gulp = require('gulp');
var postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
    gulp.src('main.css')
        .pipe(autoprefixer({
            cascade: false,
            grid: "no-autoplace"
        }))
        .pipe(gulp.dest('./'))
);
