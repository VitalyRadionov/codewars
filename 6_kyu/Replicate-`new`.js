function nouveau(Constructor) {
  let args = Array.prototype.slice.call(arguments, 1);
  let obj = Object.create(Constructor.prototype);
  let alt = Constructor.apply(obj, args)

  return alt && (typeof alt === 'object' || typeof alt === 'function') ? alt : obj
}