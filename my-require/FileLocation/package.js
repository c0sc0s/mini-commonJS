const path = require("path");
const fs = require("fs");


let defaultPath = "index.js";

exports.packageResolve = (filename) => {

  let _filename;


  try {
    let stat = fs.statSync(filename);

    _filename = filename + "\\package.json";

    try {
      stat = fs.statSync(_filename);
      var content = fs.readFileSync(_filename, 'utf8');
      let package_json;

      try {
        package_json = JSON.parse(content);
        let main = package_json.main;
        if (main) {
          defaultPath = main;
        }
      } catch (err) {
        throw err;
      }
    } catch (e) { }

  } catch (e) {
    throw new Error("不是有效的目录，找不到该包")
  }

  //找到了包，并且确认了 package.json 的配置



  filename = 
  try {
    stat = fs.statSync(filename);
  } catch (e) {

  }




}