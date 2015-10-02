var inputs = process.argv.slice(2);
var result = inputs.map(w => w.charAt(0))
  .reduce((str, ch) => str + ch);
console.log(`[${inputs}] becomes "${result}"`);
