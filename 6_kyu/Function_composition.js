function compose() {
  console.log(...arguments);
  return (x) => [...arguments].reduceRight((sum, element) => element(sum), x);
}

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

console.log(compose(multTwo, addOne)(5));