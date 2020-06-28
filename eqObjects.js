
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

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

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(assertEqual((eqObjects(ab,ba)),true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual((eqObjects(ab, abc)),false)); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual((eqObjects(cd,dc)),true));  // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual((eqObjects(cd,cd2)),true));  // => false