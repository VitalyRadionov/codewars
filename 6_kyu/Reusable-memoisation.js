const factorial = i => i ? i * factorial(i - 1) : 1;
const factorialMemo = memo(i => i ? i * factorialMemo(i - 1) : 1);
const f = factorialMemo(4);
const nTests = 1e6;
let durationMemo;

console.log(f);

function memo(fn) {
  let memo = {};
  return function (n) {
    let isObj = typeof n === 'object';
    let args = (isObj) ? [...arguments] : n;
    let key = (isObj) ? JSON.stringify(args) : n;
    if (!(key in memo)) {
      memo[key] = (isObj) ? fn(...arguments) : fn(n);
    }
    return memo[key];
  }
}