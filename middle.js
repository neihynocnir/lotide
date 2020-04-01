// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {
  return (eqArrays(actual, expected) ? `Assertion Passed` : `Assertion Failed`);
};

// ACTUAL FUNCTION
const middle = function(array) {
  let index = array[Math.floor(array.length / 2)];
  let midIndex = [];
  if (array.length <= 2) {
    return midIndex;
  } else if (array.length % 2 === 0) {
    midIndex.push(array[index - 2]);
    midIndex.push(array[index - 1]);
  } else {
    midIndex.push(array[index - 1 ]);
  }
  return midIndex;
};

// TEST CODE
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 3 ]));
console.log(assertArraysEqual(middle([1, 2 ]), [  ]));
console.log(assertArraysEqual(middle([1 ]), [  ]));
console.log(assertArraysEqual(middle([1, 2, 3, 4 , 5, 6 ]), [ 3, 4]));