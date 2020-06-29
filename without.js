
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
without(words, ["lighthouse"]);

console.log( 'words =' ,words)
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
