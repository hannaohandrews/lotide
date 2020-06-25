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
      outcome = false 
    }
  } return outcome
}

const assertArraysEqual = function(arrayOne, arrayTwo){
  let outcome ;

  for (let i = 0 ; i < arrayOne.length ; i++) {
    if (arrayOne[i] === arrayTwo[i]){
      outcome = `✅✅✅ Assertion Passed: ${actual} ===  ${expected}` 
    } else {
      outcome = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
    }
    
  }return output
}



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS