var through = require('through2');

var tr = through(function(chunk, enc, next) {
  this.push(chunk.toString().toUpperCase());
  next();
});
process.stdin.pipe(tr).pipe(process.stdout);
