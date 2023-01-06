const fs = require('fs');
const { packageResolve } = require('./package');
const exts = [".js", ".json"];

exports.matchExt = (filename) => {
  for (let ext of exts) {
    let attempt = filename + ext;
    try {
      const stat = fs.statSync(attempt);
      return attempt;
    } catch (e) {
      continue;
    }
  }
  //如果循环结束，说明，没有找到匹配的文件,作为包处理
  packageResolve(filename);
}