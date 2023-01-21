function solution(number) {
  let sum = 0;
  for (let index = 1; index < number; index++) {
    if (!(index % 3 && index % 5)) {
      sum += index;
    }
  }
  return sum;
}