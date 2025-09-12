let numbers = [-5, 0, -3, -4, 12];
let even = numbers.filter((num) => num % 2 === 0).length;
let odd = numbers.filter((num) => num % 2 !== 0).length;
let positive = numbers.filter((num) => num > 0).length;
let negative = numbers.filter((num) => num < 0).length;
console.log(even + " valor(es) par(es)");
console.log(odd + " valor(es) impar(es)");
console.log(positive + " valor(es) positivo(s)");
console.log(negative + " valor(es) negativo(s)");
