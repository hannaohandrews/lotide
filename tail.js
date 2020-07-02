// const assertEqual = require('./assertEqual');

 function tail (array) {
  let finalarray = [];
  for (let i = 1; i < array.length; i++) {
    finalarray.push(array[i]);
  } return finalarray

};

module.exports = tail;
