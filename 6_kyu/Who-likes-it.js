function likes(names) {
  if (names.length) {
    return names.length == 1 ? names[0] + ' likes this' : names.length == 2 ? names[0] + ' and ' + names[1] + ' like this' : names.length == 3 ? names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this' : names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  } else {
    return 'no one likes this';
  }
}

console.log(likes([])); //-- > "no one likes this"
console.log(likes(["Peter"])); //-- > "Peter likes this"
console.log(likes(["Jacob", "Alex"])); //-- > "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); //-- > "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //-- > "Alex, Jacob and 2 others like this"