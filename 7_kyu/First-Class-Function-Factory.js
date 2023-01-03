function factory(x) {
  return function (p) {
    return p.map((element) => element * x)
  };
}