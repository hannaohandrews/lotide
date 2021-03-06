
const findKey = function (array,callback){
  for (let i in array) {
      if (callback(array[i])) {
        return i
    }
  } 
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log( `✅✅✅ Assertion Passed: ${actual} ===  ${expected}` )
  } else {
    console.log ( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}` )
  }
}
result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

console.log(assertEqual(result1,'noma'))

