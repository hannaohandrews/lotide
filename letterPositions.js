const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === i) {
      results[sentence[i]] += 1;
    } else {
      results[sentence[i]] = 1;
    }
  }
  
  return results;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let outcome;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      outcome = `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`;
    } else {
      outcome = `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
    }
  } return outcome;
};

console.log(assertArraysEqual([letterPositions("hello").e] , [1]));


