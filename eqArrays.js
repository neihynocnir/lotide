// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Get the value type
const eqArrays = function (actual, expected) {
  // Compare the length of the two arrays
  if (actual.length === expected.length) {
    for (i=0; i < actual.length; i++) {
      // Compare type and value for the two items 
      if (typeof(actual[i]) !== typeof(expected[i]) || actual[i] !== expected[i]){
        return false
      }
    }
    return true;
  } else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);