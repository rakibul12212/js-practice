
let start = parseInt(lines[0])
let end = parseInt(lines[1])

if(start>end){
  let duration = 24 - start + end
  console.log(`O JOGO DUROU ${duration} HORA(S)`)
} else if(start < end){
    let duration = end - start  
  console.log(`O JOGO DUROU ${duration} HORA(S)`)
}else {
    let duration = 24
  console.log(`O JOGO DUROU ${duration} HORA(S)`)
} 

