function solution(number) {
  let arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  if (!number) return '';

  let ret = '';
  let i = arab.length - 1;
  while (number > 0) {
    if (number >= arab[i]) {
      ret += roman[i];
      number -= arab[i];
    }
    else {
      i--;
    }
  }

  return ret;
}
solution(1); // 'I', '1 should return "I"')
console.log(solution(2)); // 'II', '2 should return "II"')
// console.log(solution(3)); // 'III', '3 should return "III"')
// console.log(solution(4)); // 'IV', '4 should return "IV"')
// console.log(solution(5)); // 'V', '5 should return "V"')
// console.log(solution(9)); // 'IX', '9 should return "IX"')
// console.log(solution(10)); // 'X', '10 should return "X"')
// console.log(solution(11)); // 'XI', '11 should return "XI"')
// console.log(solution(19)); // 'XIX', '19 should return "XIX"')
// console.log(solution(22)); // 'XXII', '22 should return "XXII"')
// console.log(solution(15)); // 'XV', '15 should return "XV"')