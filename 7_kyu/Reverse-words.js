const reverseWords = (str) => str.split(' ').map(e => e.split('').reverse().join('')).join(' ');

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'