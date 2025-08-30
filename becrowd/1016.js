var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const X = parseInt(lines[0].trim());
let time = X * 2;
console.log(time + " minutos");
