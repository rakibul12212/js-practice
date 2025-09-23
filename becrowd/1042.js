let arr = [40, 100, 1, 5, 25, 10];
let sorted = [...arr].sort((a, b) => a - b);

sorted.forEach((num) => console.log(num));

console.log();

arr.forEach((num) => console.log(num));
