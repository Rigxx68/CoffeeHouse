const gulp = require('gulp'); //подключаем Gulp к нашему проекту
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const sass = require('gulp-sass')(require('sass')); //Подключаем Scss пакет

gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync.init({
        server: {
            baseDir: "app",
            index: "index.html",  
        },
        
    });
});

gulp.task('code', function () { //обработка хтмл
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('app/sass/*.scss') // Берем все scss файлы из папки sass и дочерних, если таковые будут
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результаты в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменени
});

gulp.task('watch', function () {
    gulp.watch('app/sass/*.scss').on('change', gulp.series('sass', browserSync.reload)); // Наблюдение за sass файлами
    gulp.watch('app/*.html').on('change', gulp.series('code', browserSync.reload)); // Наблюдение за HTML файлами в корне проекта*/
});
gulp.task('default', gulp.series(
    gulp.parallel('browser-sync', 'code', 'sass', 'watch')
));
