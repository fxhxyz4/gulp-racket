## gulp-racket

![](https://img.shields.io/npm/v/gulp-racket)
![](https://img.shields.io/github/issues/fxhxyz4/gulp-racket)
![](https://img.shields.io/npm/l/gulp-racket)
![](https://img.shields.io/npm/dt/gulp-racket)
![](https://img.shields.io/github/commit-activity/t/fxhxyz4/gulp-racket)
![](https://img.shields.io/website?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fgulp-racket)

### Usage:

```javascript
import racketTransform from 'gulp-racket';

const racket = () => {
  return gulp
    .src('./src/*.rkt')
    .pipe(racketTransform(`./example/dist`))
    .pipe(gulp.dest(`./example/dist`));
};
```

### Example: [view example folder](./example)

#

### Suggestions:

- [issues](https://github.com/fxhxyz4/gulp-racket/issues)
- [discussion](https://github.com/fxhxyz4/gulp-racket/discussions)

#

### License: [MIT License](https://fxhxyz.mit-license.org/)
