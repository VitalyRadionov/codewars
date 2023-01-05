function cache(func) {
  let state = {};

  return function () {
    let result = JSON.stringify(arguments);
    return state[result] = state.hasOwnProperty(result) ? state[result] : func(...arguments);
  }
}

var complexFunction = function (arg1, arg2) { return arg1 + ' ' + arg2 };
var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments