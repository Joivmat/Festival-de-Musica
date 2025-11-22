import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

// Configuramos gulp-sass para usar Dart Sass
const sass = gulpSass(dartSass);

export function css(done) {
    // Selecciona el archivo scss de entrada
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())           //  Inicia los sourcemaps
        .pipe(sass().on('error', sass.logError)) // Compila scss a css y captura errores
        .pipe(sourcemaps.write('.'))       //  Escribe el sourcemap junto al css
        .pipe(dest('build/css'));          //  Guarda el css compilado en la carpeta de destino

    done(); 
}

export function dev() { 
    // Observa los cambios en todos los archivos SCSS
    watch('src/scss/**/*.scss', css); 
}


