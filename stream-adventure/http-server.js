var http = require('http');
var through = require('through2');

var tr = through(function(chunk, enc, next) {
  this.push(chunk.toString().toUpperCase());
  next();
}); 
var server = http.createServer(function(req, res) {
  if(req.method == 'POST') {
    req.pipe(tr).pipe(res);
  }
  else res.end('POST requests only\n');
});
server.listen(process.argv[2]);
