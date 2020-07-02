// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};



// FUNCTION 

const countLetters = function(string) {
let obj = {};


    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string[i].length; j++){
        if (!obj[string[i]]) {
          obj[string[i]] = 1;
        } else {
          obj[string[i]]++;
        }
      }
    } console.log(obj);
    return obj;
  }
  
//TESTING
countLetters('lighthouse');