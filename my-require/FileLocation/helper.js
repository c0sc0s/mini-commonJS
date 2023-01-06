const path = require("path");

path.isRelative = (filename) => {
  const firstChar = filename.charAt(0);
  return (firstChar === '.' || firstChar === '/')
    ? true
    : false;
}

exports.isPath = (filename) => {
  return path.isAbsolute(filename) || path.isRelative(filename);
}