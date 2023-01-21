function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}

console.log(isPrime(1));  /* false */
console.log(isPrime(2));  /* true  */
console.log(isPrime(-1)); /* false */