//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const eqArrays = (arrayOne, arrayTwo) => {
  let outcome = "";

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      outcome = true;
    } else {
      return false;
    }
  } return outcome;
};


const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    return `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
  }
};

// ACTUAL FUNCTION
const middle = function(arrays) {
  let middle;
  let oddArray = [];
  let evenArray = [];

    if (arrays.length < 3) {
      return ([]);
    } else {
      if (arrays.length %2 != 0){
        middle = Math.floor(arrays.length/2);
        oddArray.push(arrays[middle]);
        return(oddArray);
      } 
      middle = arrays.length/2
      evenArray.push(arrays[middle-1]);
      evenArray.push(arrays[middle]);
      return evenArray;
    }
};


// console.log(middle([1, 2 ,3]))

// console.log(assertArraysEqual(middle([1, 2 ,3]),[2]));

module.exports = middle;
