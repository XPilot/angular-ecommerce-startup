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

function packageSort(packages) {
  // packages = ['polyfills', 'vendor', 'main']
  var len = packages.length - 1;
  var first = packages[0];
  var last = packages[len];
  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before app
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}

function reverse(arr) {
  return arr.reverse();
}

// export our util functions
exports.reverse = reverse;
exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
exports.rootNode = rootNode;
exports.prependExt = prependExt;
exports.prepend = prependExt;
exports.packageSort = packageSort;
