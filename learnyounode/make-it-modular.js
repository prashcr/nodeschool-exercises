var lsfil = require('./make-it-modular-lsfil');

lsfil(process.argv[2], process.argv[3], function(err, files) {
  if (err) return console.log(err);
  files.forEach(function(file) {
    console.log(file);
  });
});
