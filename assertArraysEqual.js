// Get the value type
const assertArraysEqual = function (actual, expected) {
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


console.log((assertArraysEqual([1, 2, 3], [1, 3, 3])) ? `Assertion Passed`:`Assertion Failed`);