module.exports = (...numbers) => {
  var sum = numbers.reduce((sum, n) => sum + n);
  return sum / numbers.length;
}
