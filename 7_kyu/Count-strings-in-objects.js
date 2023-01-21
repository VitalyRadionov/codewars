function strCount(obj) {
  let counter = 0;

  for (const key in obj) {
    if (typeof (obj[key]) == 'object') {
      counter += strCount(obj[key]);
    } else if (Array.isArray(obj[key])) {
      obj[key].forEach((element, index) => counter += strCount({ [index]: element }));
    } else if (typeof (obj[key]) == 'string') {
      counter = ++counter;
    }
  }
  return counter;
}

let a = strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null
})
//returns 3

console.log(a);