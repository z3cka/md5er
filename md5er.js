var fs = require('fs');
var md5File = require('md5-file');

process.argv.forEach(function (dir, index) {
  if (index > 1) {
    fs.readdir(process.argv[index], function (err, files) {
      files.forEach(function (filename, index) {
        var file = dir + '/' + filename;
        fs.stat(file, function (err, stats) {
          if (stats.isFile()) {
            console.log(dir + '/' + filename + '  md5: ' + md5File(file));
          }
        });
      });
    });
  }
});
