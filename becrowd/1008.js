let number = parseInt(lines[0]);
let hours = parseInt(lines[1])
let amount= parseFloat(lines[2])
 
console.log("NUMBER = " + number);
let SALARY = parseFloat((amount * hours)).toFixed(2);
console.log("SALARY = U$" + SALARY);