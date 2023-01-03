function squaresNeeded(grains) {
  let i = 0;
  while (2 ** i <= grains) {
    i++;
  }
  return i;
}