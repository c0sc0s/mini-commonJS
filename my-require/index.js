const fs = require('fs');
const myModule = require('./Module/myModule');



//=======Reader==========
const jsonReader = (module_, filePath) => {
  var content = fs.readFileSync(filePath, 'utf8');
  try {
    module_.exports = JSON.parse(content);
  } catch (err) {
    throw err;
  }
}

const jsReader = (module_, filePath) => {
  const code = fs.readFileSync(filePath).toString("utf-8");
  (function (exports_, require_, module_, filename_, dirname_) {
    eval(code)
  })(module_.exports, myRequire, module_, module_.filename, module_.path);
}

exports = {
  jsonReader,
  jsReader
}

myModule._extensions = {
  ".json": jsonReader,
  ".js": jsReader,
}


//======MyRequire==========
const fileLocation = require("./FileLocation")
function myRequire(filename) {

  const file = fileLocation(filename);

  const _module = new myModule(file);

  fileResolve(_module, file);

  _module.loaded = true;
  return _module.exports;
}

const fileResolve = (_module, file) => {
  const ext = file.fileExt;
  const filePath = file.filePath;
  myModule._extensions[ext](_module, filePath);
}

exports = myRequire;

let t = myRequire("./x")
console.log(t);