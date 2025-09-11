var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split(" ").map(Number);

let [A, B, C] = lines.sort((a, b) => b - a);

if (A < B + C) {
  let perimeter = (A + B + C).toFixed(1);
  console.log(perimeter);
} else {
  let area = (((A + B) * C) / 2).toFixed(1);
  console.log(area);
}
