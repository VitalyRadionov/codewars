function add(n) {

  let fn = (m) => add(n + m);

  fn.valueOf = () => n;

  return fn;
}

// console.log(add(1).valueOf()); // 1);
// console.log(add(1)(2).valueOf()); // 3);
console.log(add(1)(2)(3).valueOf()); // 6);
// console.log(add(1)(2)(3)(4).valueOf()); // 10);
// console.log(add(1)(2)(3)(4)(5).valueOf()); // 15);