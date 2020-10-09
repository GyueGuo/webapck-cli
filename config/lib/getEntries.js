var glob = require('glob');
var path = require('path');

var baseConfig = require('./baseConfig');


module.exports = function () {
  return glob.sync(path.resolve(path.join(baseConfig.pagePath, '**', 'index.js')));
};
