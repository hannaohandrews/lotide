

let finalarray = [];

let tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    finalarray.push(array[i]);
  } return (finalarray);
};;


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('Assertion Passed:' + actual + '===' + expected);
  } else {
    console.log('Assertion Failed: ' + actual + '!==' + expected);
  }
};


// Test Case 1: Check the returned array elements
// FUNCTION IMPLEMENTATION
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse");
// ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;