var md5File = require('md5-file');

process.argv.forEach(function(val, index, array) {
  if (index > 1) {
    console.log(index + ': ' + val + '  md5: ' + md5File('./' + val));
  }
});
