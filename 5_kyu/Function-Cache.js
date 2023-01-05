function cache(func) {
  let state = {
    arg: [],
    res: 0,
  };

  console.log(...state.arg);

  return function (...x) {

    if (state.arg.every((element, index) => element === arguments[index])) {
      console.log('second');
      // console.log(...x + ' ...x');
      console.log(state.arg + ' state.arg');
      console.log(arguments[0] + ' [...arguments]');
      console.log('foo' === arguments[0]);
      return state.res;
    } else {
      console.log('first');
      state.arg = [...arguments];
      state.res = func(...arguments);
      return func(...arguments);
    }
  };
}

var complexFunction = function (arg1, arg2) { return arg1 + ' ' + arg2 };
var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments