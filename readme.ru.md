## [gulp-racket](https://npmjs.com/package/gulp-racket) - [RacketScript](https://github.com/racketscript/racketscript) - [Gulp](https://gulpjs.com/)

![](https://img.shields.io/npm/v/gulp-racket)
![](https://img.shields.io/github/issues/fxhxyz4/gulp-racket)
![](https://img.shields.io/npm/l/gulp-racket)
![](https://img.shields.io/github/commit-activity/t/fxhxyz4/gulp-racket)
![](https://img.shields.io/npm/dt/gulp-racket)
![](https://img.shields.io/website?url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fgulp-racket)

### Зависимости:
 - [Racket](https://racket-lang.org)
 - [NodeJS](https://nodejs.org)

#

# Подробная инструкция по установке gulp-racket и RacketScript

## 1. Установите gulp-racket через npm

```sh
npm install --save-dev gulp-racket
```

## 2. Скачайте или клонируйте RacketScript

Официальный репозиторий: https://github.com/racketscript/racketscript

```sh
git clone https://github.com/racketscript/racketscript.git
cd racketscript
# (Опционально: выберите нужную ветку или версию)
```

## 3. Установите зависимости RacketScript (требуется установленный Racket)

```sh
raco pkg install --auto racketscript
```

> **Примечание:**  
> Если используете snap/flatpak или другой способ установки Racket, убедитесь что команда `raco` работает и пакет устанавливается именно для той версии Racket, которую вы используете.

## 4. Добавьте папку с racks в переменную PATH

В директории `racketscript/racketscript-compiler/bin` лежит исполняемый файл `racks`.  
Добавьте эту папку в PATH для вашей сессии (замените `/path/to/racketscript` на реальный путь):

```sh
export PATH="$HOME/path-to-your-project/racketscript/racketscript-compiler/bin:$PATH"
```

> Можно добавить эту строку в ваш `~/.bashrc`, `~/.zshrc` или `~/.config/fish/config.fish`, чтобы путь всегда был доступен.

## 5. Проверьте установку

Выполните команду:

```sh
racks --help
```

Должно появиться описание команд RacketScript Compiler.

## 6. Используйте gulp-racket в своем gulpfile.js

Пример:

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

## Частые проблемы

- **Команда `racks` не найдена:**  
  Убедитесь, что переменная PATH содержит путь к `racketscript/racketscript-compiler/bin`.
- **Ошибка про комплексные числа:**  
  Комплексные числа не поддерживаются в JavaScript, перепишите код без них.
- **В браузере не работает JS:**  
  Скомпилированный JS использует ES6-модули и runtime-файлы. Используйте `<script type="module">` и запускайте через локальный сервер.

---

## Ссылки

- [RacketScript GitHub](https://github.com/racketscript/racketscript)
- [Документация по gulp-racket](https://www.npmjs.com/package/gulp-racket)

#

### Использование:

```javascript
import racketTransform from 'gulp-racket';

const racket = () => {
  return gulp
    .src('./src/*.rkt')
    .pipe(racketTransform(`./example/dist`))
    .pipe(gulp.dest(`./example/dist`));
};
```

### Пример использования: [view example folder](./example)

#

### Предложения:

- [issues](https://github.com/fxhxyz4/gulp-racket/issues)
- [discussion](https://github.com/fxhxyz4/gulp-racket/discussions)

#

### Лицензия: [MIT License](https://fxhxyz.mit-license.org/)
