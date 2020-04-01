// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected) ? `Assertion Passed` : `Assertion Failed`);
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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));