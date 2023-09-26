const animalsA = ['dog','cat','fish'];

console.log(animalsA[0])//dog
console.log(animalsA[1])//cat
console.log(animalsA[2])//fish

// for(초기화;조건;종료식){
//   실행문;
// }
for (let i = 0; i < 3; i = i + 1){
  console.log(animalsA[i]) //dog,cat,fish
}

// fot of문
// for(변수of배열){
//   실행문;
// }

for(let animal of animalsA){
  console.log(animal);//dog, cat, fish
}

const users = [
  {name:'겨울이',age: 2},
  {name:'겨울이',age: 2},
  {name:'겨울이',age: 2},
]

console.log(user[0])
console.log(user[1])
console.log(user[2])

for(let i = 0; i < 3; i++){
  console.log(users[i])
}

const user = {
  name :'겨울이',
  age: 2,
  cute: true,
}

for(let key in user) {
  console.lpg(key); //name,age,cute
  console.lpg(user[key]); //겨울이, 2, true

}

// 0~9까지출력
let k = 0