
let input =99
const data = [
  { code: 61, country: "Brasilia" },
  { code: 71, country: "Salvador" },
  { code: 11, country: "Sao Paulo" },
  { code: 21, country: "Rio de Janeiro" },
  { code: 32, country: "Juiz de Fora" },
  { code: 19, country: "Campinas" },
  { code: 27, country: "Vitoria" },
  { code: 31, country: "Belo Horizonte" }
];
const check=data.find((i)=>i.code == input)
if(check){
  console.log(check.country)
}else {
  console.log("DDD nao cadastrado");
}

//another solve optimised way 
// let input = 99
// const name = {
//   61: "Brasilia",
//   71: "Salvador",
//   11: "Sao Paulo",
//   21: "Rio de Janeiro",
//   32: "Juiz de Fora",
//   19: "Campinas",
//   27: "Vitoria",
//   31: "Belo Horizonte"
// }

// if (name[input]) {
//   console.log(name[input])
// } else {
//   console.log("DDD nao cadastrado");
// }
