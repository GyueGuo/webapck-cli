const path = require('path');

const distPath = path.resolve('dist');

const srcPath = path.resolve('src');

const pagePath = path.resolve(path.join(srcPath, 'pages'));

module.exports = {
  distPath,
  srcPath,
  pagePath,
}