var runLengthEncoding = function (str) {
  let l = [];
  for (let i = 0; i < str.length; i++) {
    let c = 1;
    for (let j = i; j < str.length; j++) {
      if (str[i] == str[j + 1]) {
        c++;
      } else { i = j; break; }
    }
    l.push([c, str[i]])
  }
  return l;
}

console.log(runLengthEncoding("hello world!"));
 //=> [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]