function bingo(ticket, win) {
  let minWin = false;
  ticket.forEach(element => {
    minWin += [...element[0]].includes(String.fromCodePoint(element[1]));
  });
  return minWin >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]]));