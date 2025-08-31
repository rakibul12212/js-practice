let time = parseInt(lines[0])
let speed = parseInt(lines[1]);
const distance=time*speed
const liters = (distance / 12).toFixed(3);
console.log(liters);