// FUNCTION IMPLEMENTATION
var array = []

function head(array) {
var first = array[0]
return first
}


const assertEqual = function( actual, expected) {

  if (actual === expected) {
    console.log( 'Assertion Passed:' + actual + '===' + expected )
  } else {
    console.log ( 'Assertion Failed: ' + actual + '!==' + expected )
  }
  
  
};

// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");