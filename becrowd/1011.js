var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

let pi = parseFloat(3.14159);
let R = parseFloat(lines[0].trim());

let total = ((4 / 3) * pi * Math.pow(R, 3)).toFixed(3);

console.log("VOLUME = " + total);