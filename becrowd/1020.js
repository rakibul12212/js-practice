let age = parseInt(lines[0]);

let years = Math.floor(age / 365);
age = age % 365;
let months = Math.floor(age / 30);
let days = age % 30;

console.log(years + " ano(s)");
console.log(months + " mes(es)");
console.log(days + " dia(s)");
