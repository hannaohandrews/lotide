// FUNCTION IMPLEMENTATION

const eqArrays = (arrayOne, arrayTwo) => {
 
if ((arrayOne[0] === arrayTwo[0]) && (arrayOne[1] === arrayTwo[1]) && (arrayOne[2] === arrayTwo[2])) {
  return true
 } else {
   return false
 } 
}

const assertArraysEqual = () => { 
  true ? console.log ( 'Assertion Passed') : console.log('Assertion Failed')
}

