const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  const results = []
  for (let item of array){
    if (callback(item) === false) {
      results.push(item)
    } else {
      break;
    }
  };
  return results
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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
      outcome = `✅✅✅ Assertion Passed: ${arrayOne} ===  ${arrayTwo}` 
    } else {
      outcome = `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`
    }
    
  }return outcome
}

  

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]))
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]))
