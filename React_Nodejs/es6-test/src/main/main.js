//객체를 받아낸 뒤 객체의 속성 이용
const m1 = require('./modules/module1');   //{ add, multiply }
const greeting = require('./modules/module2');

console.log(m1.add(3))
console.log(m1.multiply(3))
console.log(greeting("world"));