// const assertEqual = require('./assertEqual');



 function tail (array) {
  let finalarray = [];
  for (let i = 1; i < array.length; i++) {
    finalarray.push(array[i]);
  } return finalarray

};
console.log(tail([1,2,5,6,7]))

module.exports = tail;
