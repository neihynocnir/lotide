// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
  // Compare the length of the two arrays
  if (arrayA.length === arrayB.length) {
    for (let itemIndex in arrayA) {
      let valueActual = arrayA[itemIndex];
      let valueExp = arrayB[(arrayB.indexOf(arrayA[itemIndex]))];
      if (typeof(valueActual) !== typeof(valueExp) || valueActual !== valueExp) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);