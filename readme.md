## <img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" width="30" height="60" /> [gulp-racket](https://npmjs.com/package/gulp-racket) - [RacketScript](https://github.com/racketscript/racketscript) - [Gulp](https://gulpjs.com/)

![](https://img.shields.io/npm/v/gulp-racket)
![](https://img.shields.io/github/issues/fxhxyz4/gulp-racket)
![](https://img.shields.io/npm/l/gulp-racket)
![](https://img.shields.io/github/commit-activity/t/fxhxyz4/gulp-racket)
![](https://img.shields.io/npm/dt/gulp-racket)
![](https://img.shields.io/website?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fgulp-racket)

### Dependencies:
 - [Racket](https://racket-lang.org)
 - [NodeJS](https://nodejs.org)

#

# Detailed Installation Guide for gulp-racket and RacketScript

## 1. Install gulp-racket via npm

```sh
npm install --save-dev gulp-racket
```

## 2. Download or clone RacketScript

Official repo: https://github.com/racketscript/racketscript

```sh
git clone https://github.com/racketscript/racketscript.git
cd racketscript
# (Optional: checkout to a specific branch or version)
```

## 3. Install RacketScript dependencies (requires Racket to be installed)

```sh
export PATH=$PATH:/var/lib/snapd/snap/bin
raco pkg install --auto racketscript
```

> **Note:**  
> If you use snap/flatpak or another way to install Racket, make sure the `raco` command works and the package is installed for the correct Racket version.

## 4. Add the racks binary folder to your PATH

The `racks` executable is located in `racketscript/racketscript-compiler/bin`.  
Add this folder to your PATH for your session (replace `/path/to/racketscript` with your actual path):

```sh
export PATH="$HOME/path-to-your-project/racketscript/racketscript-compiler/bin:$PATH"
```

> You can add this line to your `~/.bashrc`, `~/.zshrc`, or `~/.config/fish/config.fish` so it is always available.

## 5. Verify the installation

Run:

```sh
racks --help
```

You should see the RacketScript Compiler command help.

## 6. Use gulp-racket in your gulpfile.js

Example:

```js
const gulp = require('gulp');
const racket = require('gulp-racket');

gulp.task('default', () =>
  gulp.src('src/index.rkt')
      .pipe(racket())
      .pipe(gulp.dest('dist'))
);
```

---

## Common problems

- **`racks` command not found:**  
  Make sure your PATH includes `racketscript/racketscript-compiler/bin`.
- **Complex numbers error:**  
  Complex numbers are not supported by JavaScript; rewrite your code to avoid them.
- **JS doesn't work in the browser:**  
  The generated JS uses ES6 modules and runtime files. Use `<script type="module">` and run through a local server.

---

## Links

- [RacketScript GitHub](https://github.com/racketscript/racketscript)
- [gulp-racket documentation](https://www.npmjs.com/package/gulp-racket)

#

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

### Example usage: [view example folder](./example)

#

### Suggestions:

- [issues](https://github.com/fxhxyz4/gulp-racket/issues)
- [discussion](https://github.com/fxhxyz4/gulp-racket/discussions)

#

### License: [MIT License](https://fxhxyz.mit-license.org/)
