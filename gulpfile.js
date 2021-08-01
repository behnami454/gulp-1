const gulp = require ('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

gulp.task(js, ()=> {
    gulp.src('folder/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'))
})

gulp.task(html , ()=>{
    gulp.src('folder/*.html').pipe(gulp.dest('dist/html'))
})
gulp.task(img , ()=> {
    gulp.src('folder/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'))
})

gulp.task('default' , ['js' , 'html' , 'img'])
