const {src, dest, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-Plumber');

function css(done) {
    //Identificar el archivo de SASS
    //Compilarlo
    //Almacenarlo
    src('src/scss/**/*.scss')
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( dest('build/css'));

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;

exports.dev = dev;