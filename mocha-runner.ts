import * as fs from 'fs'
import Mocha from 'mocha'
import * as path from 'path'

const mocha = new Mocha({
  timeout: 60000
});

const testDir = './tests'

/**
 * Gets the test .ts file paths recursively from a given directory.
 * @param {String} dir - path to directory containing test files.
 * @returns {Array} Filepaths to each test .ts file.
 */
function getTestPaths(dir, fileList) {
  const files = fs.readdirSync(dir);
  fileList = fileList || [];

  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = getTestPaths(path.join(dir, file), fileList);
    } else {
      fileList.push(path.join(dir, file));
    }
  });

  return fileList.filter(function (file) {
    return path.extname(file) === '.ts';
  });
}

getTestPaths(testDir, undefined).forEach(function (file) {
  mocha.addFile(path.join(file));
});

mocha.run(function (failures) {
  process.on('exit', function () {
    process.exit(failures);
  });
});
