function convert(input, source, target) {
  let dec = [];

  if (source.length == 62 || source.length == 52 || source.length == 26 || source.length == 16 || source.length == 10 || source.length == 8 || source.length == 2) {
    HEXA_DECIMAL();
  }

  function HEXA_DECIMAL() {
    input = [...input].reverse();

    if (target.length == source.length) {
      return dec = input.map(element => element = target[source.indexOf(element, 0)]).reverse().join('');
    }

    let a = input.reduce((sum, element, index) => {
      return sum + (source.indexOf(element, 0) * (source.length ** index));
    }, 0);

    if (target.length == 10) {
      dec.push(a);
      return dec = dec.join('');
    } else if (a < target.length) {
      dec.push(target[a]);
      return dec = dec.join('');
    } else {
      while (a > target.length - 2) {
        dec.unshift(target[a % target.length]);
        a = Math.floor(a / target.length);
        if (a < target.length) {
          dec.unshift(target[a]);
          break;
        }
      }
    }
    return dec = dec.join('');
  }
  return dec;
}

let Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

// convert between numeral systems
console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY)); // should return "1111"
console.log(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL)); // should return "17"
console.log(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)); // should return "10"
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL)); // should return "a"

// other bases
console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)); // should return "a"
console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER)); // should return "bb"
console.log(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)); // should return "320048"
console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER)); // should return "SAME"