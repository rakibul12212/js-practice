for (let i = 0; i < lines.length; i++) {
  let [X, Y] = lines[i].split(' ').map(Number);

  if (X === Y) break;

  if (X > Y) {
    console.log("Decrescente");
  } else {
    console.log("Crescente");
  }
}