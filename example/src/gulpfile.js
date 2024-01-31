import gulp from 'gulp';
import racketTransform from 'gulp-racket';

const destDir = `./example/dist`;

const racket = () => {
  return gulp
    .src('./*.rkt')
    .pipe(racketTransform(destDir))
    .pipe(gulp.src(`./*.html`))
    .pipe(gulp.dest(destDir));
};

export default racket;
