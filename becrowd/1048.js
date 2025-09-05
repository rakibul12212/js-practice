let salary = parseFloat(lines[0]).split(" ").map(Number);; 
let percentage;

if (salary >= 0 && salary <= 400.0) {
  percentage = 15;
} else if (salary <= 800.0) {
  percentage = 12;
} else if (salary <= 1200.0) {
  percentage = 10;
} else if (salary <= 2000.0) {
  percentage = 7;
} else {
  percentage = 4;
}

let incrementAmount = (salary * percentage) / 100;
let newSalary = salary + incrementAmount;

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${earned.toFixed(2)}`);
console.log(`Em percentual: ${percentage} %`);
