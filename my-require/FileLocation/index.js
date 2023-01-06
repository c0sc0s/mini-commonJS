const { isPath } = require("./helper");
const { resolveCustom } = require("./custom");
const { matchExt } = require("./matchExt");
const path = require("path");
const fs = require("fs/promises");

function fileLocation(filename) {
  if (isPath(filename)) {
    filename = path.resolve(filename);
    let ext = path.extname(filename);

    //有后缀，判断是否是有效文件，直接返回结果
    if (ext) {
      try {
        fs.statSync(filename)
        return {
          filePath: filename,
          fileExt: ext,
        }
      } catch (e) {
        throw new Error("无效的文件");
      }
    }


    //无后缀，尝试匹配
    filename = matchExt(filename);
    ext = path.extname(filename);

    return {
      filePath: filename,
      fileExt: ext,
    }
  }
  //自定义模块的处理
  else {
    resolveCustom(filename)
  }
}

module.exports = fileLocation;