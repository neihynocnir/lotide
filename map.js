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

const words = ["paper", "scissors", "rocks", "water", "fire"];
const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}
const testMap = map(words, word => word[0]);
console.log(assertArraysEqual(testMap,[ 'p', 's', 'r', 'w', 'f' ]));


