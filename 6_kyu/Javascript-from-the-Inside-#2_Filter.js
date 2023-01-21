const { runInNewContext } = require("vm");
Array.prototype.filter = runInNewContext("Array.prototype.filter");

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower_than_six = (x) => x < 6;
var one_to_five = one_to_nine.filter(lower_than_six);
console.log(one_to_five);
// Expected [1, 2, 3, 4, 5]