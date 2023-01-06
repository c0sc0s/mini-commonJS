module.exports = function (file) {
  let extLen = file.fileExt.length
  let pathLen = file.filePath.length
  let path = file.filePath.slice(0, pathLen - extLen)


  let paths = [];
  paths[0] = path + "node_modules";


  this.exports = {};
  this.path = path
  this.paths = module.paths; //这里就耍赖一下
  this.filename = file.filePath;
  this.loaded = false;
  this.children = [];
}