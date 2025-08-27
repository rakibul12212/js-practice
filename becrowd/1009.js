let name = lines[0];
let salary = parseFloat(lines[1]);
let sale = parseFloat(lines[2]);
let salePercent = parseFloat((sale * 15) / 100);

let TOTAL = (salary + salePercent).toFixed(2);

console.log("TOTAL = R$ " + TOTAL);
