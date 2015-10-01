var sum = process.argv.slice(2).map(Number).reduce(function(sum, n) {
  return sum + n;
});
console.log(sum);
