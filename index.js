import { exec } from 'child_process';
import through from 'through2';
import utils from 'gulp-util';
import fs from 'fs';

let transform, error, rktFile;

export default function (dir) {
  transform = (file, encoding, callback) => {
    if (!file) {
      return callback(null, file);
    }

    if (file.isStream()) {
      error = new utils.PluginError(
        'gulp-racket',
        'Streaming not supported'
      );

      return callback(error);
    }

    try {
     rktFile = exec(
        `racks -d ${dir} ${file.path}`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing racks: ${error.message}`);
            return callback(error);
          }

          if (stderr) {
            console.error(`racks error: ${stderr}`);
            return callback(stderr);
          }

          rktFile = stdout;
          fs.rm(`${dir}/cache`, { recursive: true, force: true }, err => {
            if (err) {
              throw err;
            }
          });

          fs.unlink(`${dir}/package.json`, err => err);

          callback(null, file);
        }
      );
    } catch (error) {
      console.error(`Error executing racks: ${error.message}`);
      return callback(error);
    }
  };

  return through.obj(transform);
}
