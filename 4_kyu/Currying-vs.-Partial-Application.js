function curryPartial(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (...params) => curryPartial(fn, ...args, ...params);
}



function add(a, b, c) {
  // console.log('a = ' + a);
  // console.log('b = ' + b);
  // console.log('c = ' + c);
  return a + b + c;
}

let a = 1;
let b = 2;
let c = 3;
let sum = a + b + c;
let add1 = curryPartial(add, 1);
let add2 = curryPartial(add)(2);
let add_ = curryPartial(add);
let it0 = [add_];
let it1 = [].concat(...[0, 1].map(v => it0.map(f => f(v))));
let it2 = [].concat(...[0, 2].map(v => it1.map(f => f(v))));
let it3 = [].concat(...[0, 4].map(v => it2.map(f => f(v))));

// console.log(add(a, b, c)); // sum
// console.log(curryPartial(add)(a)(b)(c)); // sum
// console.log(curryPartial(add, a)(b)(c)); // sum
// console.log(curryPartial(add, a)(b, c)); // sum
// console.log(curryPartial(add, a, b, c)); // sum
// console.log(curryPartial(add, a, b, c, 20)); // sum
// console.log(curryPartial(add)(a, b, c)); // sum
// console.log(curryPartial(add)()(a, b, c)); // sum
// console.log(curryPartial(add)()(a)()()(b, c)); // sum
// console.log(curryPartial(add)()(a)()()(b, c, 5, 6, 7)); // sum

// console.log(curryPartial(curryPartial(curryPartial(add, a), b), c)); // sum
// console.log(curryPartial(curryPartial(add, a, b), c)); // sum
// console.log(curryPartial(curryPartial(add, a), b, c)); // sum

// console.log(curryPartial(curryPartial(add, a), b)(c)); // sum
// console.log(curryPartial(curryPartial(add, a)(b), c)); // sum

// console.log(curryPartial(curryPartial(curryPartial(add, a)), b, c)); // sum

// console.log(add1(2, 3)); // 6)
// console.log(add1(4, 5)); // 10)

// console.log(add2(3, 4)) // 9
// console.log(add2(5)(6)) // 13

console.log(it3);