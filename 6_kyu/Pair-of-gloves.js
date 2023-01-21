function numberOfPairs(gloves) {
  let pairs = [];
  let res = 0;

  gloves.forEach(element => {
    let ind = pairs.indexOf(element);
    ind != -1 ? res += pairs.splice(ind, 1).length : pairs.push(element);
  });
  return res;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
// result = 2(1 red pair + 1 blue pair)

console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
// result = 3(3 red pairs)