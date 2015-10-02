function escape(s) {
  return s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

function html(strings, ...values) {
  values = values.map(escape);
  return values.reduce((prev, curr, i) => prev + curr + strings[i + 1], strings[0]);
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
