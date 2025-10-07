let sum = 0;

for (let i = 1; i <= 40; i++) {
  if (i % 13 === 0) {
    console.log(i);
    sum += i; 
  }
}

console.log("Sum = "+ sum);
