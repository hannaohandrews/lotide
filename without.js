
const without = function (values, valueRemoves) {
  let newArray = []
  
  for(let value of values){
    if (!valueRemoves.includes(value)){
      newArray.push(value)
    }
  }   console.log('newarray: ',newArray)
   return newArray;
}

const assertArraysEqual = function(arrayOne ,arrayTwo){
  let outcome ;

  console.log('arrayOne =' , arrayOne)
  console.log('arrayTwo =', arrayTwo)
  for (let i = 0 ; i < arrayOne.length ; i++) {
   arrayOne[i] === arrayTwo[i] ? outcome = true : outcome = false
  } 
  console.log('outcome:', outcome);
  return outcome;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log( 'words =' , words)
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

  //This function should take in a source array and a itemsToRemove array. 
  //It should return a new array with only those elements from source that are not present in the itemsToRemove array.
  //Implement without which will return a subset of a given array, removing unwanted elements.
