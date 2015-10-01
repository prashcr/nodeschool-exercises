var http = require('http');
var bl = require('bl');

var count = 0;
var results = [];

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(res) {
    res.pipe(bl(function(err, data) {
      results[index] = data;
      if (++count == 3) {
        printResults();
      }
    }));
  });
}

function printResults() {
  results.forEach(function(result) {
    console.log(result.toString());
  });
}

// This exercise specifically mentioned completing the task without an async-handling library
