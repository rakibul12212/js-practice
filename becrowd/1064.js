let numbers = [7, -5, 6, -3.4, 4.6, 12];

let positive = numbers.filter((num) => num > 0);
let sum = positive.reduce((acc, num) => acc + num, 0);
let avg = sum / positive.length;

console.log(positive.length + " valores positivos");
console.log(avg.toFixed(1));
