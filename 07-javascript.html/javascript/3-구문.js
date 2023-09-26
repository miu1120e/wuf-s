const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 구조분해 할당
const [a, b, c] = arr;

console.log(a, b, c);

// 변수가 미리 할당되어 있을 경우
let e = 5;
let f = 6;

const arr2 = [1, 2, 3];

// const d = arr2[0]
// 구조분해할당
[d, e, f] = arr2;

console.log(d, e, f); // 1 2 3

console.log(e, f); //1 2 3

// 나머지 할당
const arr3 = [1, 2, 3];
const [g, ...rest] = arr3;

console.log(g.rest); //6,7

// 객체구조분해할당
const obj = {
  e: 1,
  f: 2,
  g: 3,
};

// const ee = obj.e;
// const ff = obj.f;
// const gg = obj.g;

// 구조분해할당
const { h = 4, i: free, k: kk = 10 } = obj;

console.log(h, free, kk); //1 2 10
// undefined 객체의 키와 변수명이 다를 경우

// 선택적 체이닝 (?.)
let user = null; //정보가 없는 사용자

// console.log(user.name);// TypeError:cannot read property 'name'
console.log(user?.name); // undefined , 에러가발생하지 않음

// 예시
let user2 = {
  name: "winter",
  age: 2,
  adress: {
    city: "seoul",
    zipcode: "12345",
  },
};
let user3 = {
  name: "fall",
  age: 3,
};

function printCity(user) {
  return user.address?.city;
}

console.log(printCity(user2)); //seoul
console.log(printCity(user3)); //undefined
