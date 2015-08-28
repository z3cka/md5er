var async = require('async');
var fs = require('fs');
var md5File = require('md5-file');
var prettyjson = require('prettyjson');

var dirs = {};

async.waterfall([
  function (callback) {
    folderbuilder(process.argv[2]);
    callback();
  },
  function (callback) {
    folderbuilder(process.argv[3]);
    callback();
  }
],
function (err) {
  console.log("Done processing dirs:");
  console.log(prettyjson.render(dirs));
});

function folderbuilder(dir) {
  dirs[dir] = {};
  files = fs.readdirSync(dir);
  async.eachSeries(files, function iterator(filename, callback) {
    var file = dir + '/' + filename;
    if (fs.statSync(file).isFile()) {
      dirs[dir][filename] = md5File(file);
    }
    callback();
  }, function (err) {
    if (err) {
      console.log(err);
    }
  });
}