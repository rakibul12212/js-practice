const shopping = 5000


if (shopping >= 6000) {
    const dis = shopping / 100 * 15
    const payable = shopping - dis
    console.log(payable);
}else if(shopping>=3000){
const dis = (shopping / 100) * 5;
const payable = shopping - dis;
console.log(payable);
} else {
    console.log (shopping);
}