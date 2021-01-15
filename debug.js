/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
// let arr = [1, 2, 3, 3, 4, 5, 5];

// function firstOccurrence(arr) {
//   let output = -1, val = 0;
//   arr.forEach((element, ind) => {
//     return { v: element, i: ind };
//   });

//   arr.map(el     => {
//       if(el.v > val) {

//       }
//   })
// }

async function A() {
  const val = await Promise.resolve('Value');
  return val;
}

A()
  .then((val) => val + 2)
  .then((e) => console.log(`one${e}`))
  .then((r) => console.log(`two${r}`))
  .then((f) => console.log(`three${f}`));

// const string = 'mohit';

// String.prototype.repeat = function repeat(count) {
//   const str = `${this}`;
// };

// console.log(string.repeat(5));
