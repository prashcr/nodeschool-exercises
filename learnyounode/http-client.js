var http = require('http');

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on('err', console.error);
  res.on('data', console.log);
});
