
let obj = { length: 5 };
console.log(Array.from(obj));

//MDN - Array.from() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//MDN - Array.prototype.map() - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//Ex
let array1 = Array.from({ length: 10 }, (v, i) => i);
console.log(array1);

//Ex
let array2 = Array.from([...Array(10)], (v, i) => i);
console.log(array2);

//Ex
const array3 = [...Array(9).keys()].map(x => x + 1);
console.log(array3);

const newArray = array3.map(x => x * 1);
console.log(newArray.join(', '));

//Ex
const array4 = 'foo|'.repeat(5).split('|');
console.log(array4);

const arr = 'foo|'.repeat(5).split('|').filter(f => !!f);
const arr = 'foo|'.repeat(5).split('|').filter(f => f != '');
console.log(arr);

//關於!! double not運算子 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT
let result1 = !'foo';
let result2 = !!'foo';
let result3 = !!'';

console.log(result1);
console.log(result2);
console.log(result3);