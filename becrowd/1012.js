let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);


let TRIANGULO = (0.5 * A * C).toFixed(3);
console.log("TRIANGULO: " + TRIANGULO);

let CIRCULO = (3.14159 * Math.pow(C, 2)).toFixed(3);
console.log("CIRCULO: " + CIRCULO);

let TRAPEZIO = (((A + B) * C) / 2).toFixed(3);
console.log("TRAPEZIO: " + TRAPEZIO);

let QUADRADO = Math.pow(B, 2).toFixed(3);
console.log("QUADRADO: " + QUADRADO);

let RETANGULO = (A * B).toFixed(3)
console.log("RETANGULO: " + RETANGULO);

