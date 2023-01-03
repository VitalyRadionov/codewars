function once(fn) {
  let state = false;

  return function () {
    if (!state) {
      state = true;
      return fn(...arguments);
    }
  };
}

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect