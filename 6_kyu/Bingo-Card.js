function getCard() {
  let bingoMap = [];
  let amountOfItems = 0;
  let min = 1;
  let max = 15;

  ['B', 'I', 'N', 'G', 'O'].forEach((element, index) => {
    index == 2 ? amountOfItems = 4 : amountOfItems = 5;

    for (let i = 0; i < amountOfItems; i++) {
      let num = Math.floor(Math.random() * (max - min + 1) + min);
      bingoMap.includes(element + num) ? i-- : bingoMap[bingoMap.length] = element + num;
    }

    min = min + 15;
    max = max + 15;
  });
  return bingoMap;
}

console.log(getCard());