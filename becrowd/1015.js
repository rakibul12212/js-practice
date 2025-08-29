let [x1, y1] = lines[0].trim().split(" ").map(Number);
let [x2, y2] = lines[1].trim().split(" ").map(Number);

let p1 = Math.pow(x2 - x1, 2);
let p2 = Math.pow(y2 - y1, 2);

let result = Math.sqrt(p1 + p2).toFixed(4);
console.log(result);
