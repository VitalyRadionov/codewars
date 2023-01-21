function duplicateEncode(word) {
  word = [...word.toLowerCase()];
  return word = word.map(element => {
    return word.filter(item => item == element).length > 1 ? element = ')' : element = '(';
  }).join('');
}

console.log(duplicateEncode("din"));     // => "((("
console.log(duplicateEncode("recede"));  // => "()()()"
console.log(duplicateEncode("Success")); // => ")())())"
console.log(duplicateEncode("(( @"));    // => "))((" 