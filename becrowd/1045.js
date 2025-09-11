let [A, B, C] = [5,7, 7].sort((a, b) => b - a);


if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (A * A === B * B + C * C) {
    console.log("TRIANGULO RETANGULO");
  }
  if (A * A > B * B + C * C) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (A * A < B * B + C * C) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B && B === C) {
    console.log("TRIANGULO EQUILATERO");
  } else if (A === B || B === C || A === C) {
    console.log("TRIANGULO ISOSCELES");
  }
}
