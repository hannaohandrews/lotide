
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1,object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (Array.isArray(object1) !== Array.isArray(object2)) {
    return false;
  } else {
    if (keys1.length !== keys2.length) {
      return false;
    } else {
      for (let i of keys1) {
        if (keys1[i] !== keys2[i]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  
  let answer = eqObjects(inspect(actual),inspect(expected));

  if (answer === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' }));

