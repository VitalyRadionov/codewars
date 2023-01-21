function rgb(...arguments) {
  const HEX = '0123456789abcdef';
  let rgb = arguments.map(e => Math.abs((e > 255) ? e = 255 : (e < 0) ? e = 0 : e));
  rgb = rgb.map(element => {
    let rgbToHex = '';
    if (element <= 15) {
      rgbToHex += '0' + HEX[element];
    } else {
      while (element > 15) {
        rgbToHex = HEX[element % HEX.length] + rgbToHex;
        element = Math.floor(element / HEX.length);
        if (element <= 15) {
          rgbToHex = HEX[element] + rgbToHex;
          break;
        }
      }
    }
    return rgbToHex;
  });
  return rgb.join('').toUpperCase();
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3