function flip(fn) {
  return (...x) => fn(...(x.reverse()))
}
