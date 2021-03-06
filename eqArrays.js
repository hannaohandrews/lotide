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
      outcome = false 
    }
  } return outcome
}



module.exports = eqArrays;


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
