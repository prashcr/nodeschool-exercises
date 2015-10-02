var through = require('through2');
var split = require('split');

var counter = 1;
var tr = through(function(line, enc, next) {
  if (counter % 2) this.push(line.toString().toLowerCase() + '\n');
  else this.push(line.toString().toUpperCase() + '\n');
  counter++;
  next();
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
