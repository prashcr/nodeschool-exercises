var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(soc) {
  soc.end(strftime('%F %R'));
})
server.listen(process.argv[2]);
