var through = require('through2');
var trumpet = require('trumpet');

var tr = trumpet();
var stream = tr.select('.loud').createStream();
var thr = through(function(chunk, enc, next) {
  this.push(chunk.toString().toUpperCase());
  next();
});

stream.pipe(thr).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
