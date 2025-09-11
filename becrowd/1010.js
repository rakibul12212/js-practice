var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

let [code1, units1, price1] = lines[0].split(" ").map(Number);
let [code2, units2, price2] = lines[1].split(" ").map(Number);

let product1 = [code1, units1, price1];
let product2 = [code2, units2, price2];

let total = (product1[1] * product1[2] + product2[1] * product2[2]).toFixed(2);

console.log("VALOR A PAGAR: R$ " + total);




