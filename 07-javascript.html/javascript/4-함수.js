// 함수 선언하기

hello()//hello

// 함수 선언문
function hello(){
  console.log('hello')
}

// 함수 표현식
const world = function(){
  console.log('world')
}
 
hello()//hello
world()//world

const user = {
  name: 'winter',
  age : 2,
  // email : 'angelcw94@naver.com'

}

function getName({name}){
  return name
}

function getEmail ({email ='이메일이 없습니다.'}){
  return email
}

console.log(getName(user));  
console.log(getEmail(user)); 

// 배열의 구조 분해 할당
const animals = ['dog','cat','fish']

// 두번쨰 요소 반환하는 기능
function getSecond([,b = '두번째 요소가 없습니다.',c]){
  return (b,c) 
}

console.log(getSecond(animals))

// 화살표 함수 
function 함수이름(매게변수){실행문}

(매게변수) => {실행문}

function hello(){
  console.log('hello')
}
const hello11 = function(){
  console.log('hello11')
}
const hello12 = () => {
 console.log('hello12') 
}

hello()
hello11()
hello12()

// sum 함수
// 선언문
function sum1(x,y) {
  return x + y
}

// 표현식
const sum2 = function(x , y){
  return x + y
}

// 화살표 함수 
const sum3 = (x,y) => {
  return x + y
}

// 화살표 함수 축약
const sum4 = (x,y)=> x + y

console.log(sum1(1,2))//3
console.log(sum2(1,2))//3
console.log(sum3(1,2))//3

// 화살표 함수 예시
const a = () => {}
const b = x => {}
const c = (x , y) => {}
const d = x => {return x + x}
const e = x => {
  console.log(x)
  return x * x
}

const g = () =>{return{a: 1}}
const h = () =>({a: 1})

const i = () =>{return[1,2]}
const j = () =>[1,2]