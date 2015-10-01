var fs = require('fs');
var path = require('path');

module.exports = function(currentPath, ext, callback) {
  fs.readdir(currentPath, function(err, files) {
    if (err) return callback(err, null);
    var filtered = files.filter(function(file) {
      return path.extname(file) == '.' + ext;
    });
    callback(null, filtered);
  });
}
