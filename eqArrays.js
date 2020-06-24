// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log( 'Assertion Passed:' + actual + '===' + expected )
  } else {
    console.log ( 'Assertion Failed: ' + actual + '!==' + expected )
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
 
if ((arrayOne[0] === arrayTwo[0]) && (arrayOne[1] === arrayTwo[1]) && (arrayOne[2] === arrayTwo[2])) {
  return true
 } else {
   return false
 } 
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 