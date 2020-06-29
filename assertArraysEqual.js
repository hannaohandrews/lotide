// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅✅✅ Assertion Passed: ${actual} ===  ${expected}` )
  } else {
    console.log ( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` )
  }
}

const eqArrays = (arrayOne, arrayTwo) => {
  let outcome = "";

  for (let i = 0 ;i < arrayOne.length ; i++) {
    if (arrayOne[i] === arrayTwo[i]){
      outcome = true 
    } else {
      return false 
    }
  } return outcome
}

const assertArraysEqual = function(arrayOne, arrayTwo) {

    if (eqArrays(arrayOne,arrayTwo)) {
       return `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
    } else {
      return `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
    } 
};

let answer = eqArrays([1, 2, 3],[1, 2, 3]) // => true

console.log(assertArraysEqual([1, 2, 3],[1, 2, 3]) );


module.exports = assertArraysEqual;

