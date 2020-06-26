const words = ["ground", "control", "to", "major", "tom"];

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


const map = function (array,callback){

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
  }
  
  const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]))
