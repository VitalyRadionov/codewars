function toWeirdCase(string) {
  return string.split(' ').map(element => {
    return element = element.split('').map((element, index) => {
      return (index % 2 == 0) ? element = element.toUpperCase() : element;
    }).join('');
  }).join(' ');
}

console.log(toWeirdCase("String")); //=> returns "StRiNg"
console.log(toWeirdCase("Weird string case")); //=> returns "WeIrD StRiNg CaSe"