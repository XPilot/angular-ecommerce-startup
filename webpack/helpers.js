const path = require('path');

// This file contains helper functions used in
// the webpack flow, just to reduce the overall config

const _root = path.resolve(__dirname, '..'); //up one level for absolute root path

// function to check if we got process specified flags
function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

// function to get root of specified folder
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

// a similar function but for node modules
function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, ['node_modules'].concat(args));
}

// function used to solve extensions
function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) args = [args];

  return extensions.reduce(function(m, val) {
    return m.concat(val, args.map(function(item) {
      return item + val;
    }));
  }, ['']);
}

// export our util functions
exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
exports.rootNode = rootNode;
exports.prependExt = prependExt;
exports.prepend = prependExt;
