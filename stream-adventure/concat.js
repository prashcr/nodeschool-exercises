var concat = require('concat-stream');

var cc = concat({ encoding: 'string' }, function(body) {
  body = body.split('').reverse().join('');
  console.log(body);
});
process.stdin.pipe(cc);
