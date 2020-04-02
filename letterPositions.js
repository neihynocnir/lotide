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

// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
const letterPositions = function(sentence) {
  const results = {};
  
  for (const itemIndex in sentence) {
    let index = sentence[itemIndex];
    if (index !== " ") {
      results[index] ? results[index].push(parseInt(itemIndex)) : results[index] = [parseInt(itemIndex)];
    }
  }
  return results;
};
console.log(assertArraysEqual(letterPositions("hello").o, [4]));
console.log(letterPositions("hello"));
