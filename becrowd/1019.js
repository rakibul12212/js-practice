let N = parseInt(lines[0]);

let hours = Math.floor(N / 3600);
N = N % 3600;
let minutes = Math.floor(N / 60);
let seconds = N % 60;

console.log(`${hours}:${minutes}:${seconds}`);
