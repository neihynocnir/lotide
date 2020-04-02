const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
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

const eqObjects = function(object1, object2) {
  let objectListOne = Object.keys(object1);
  let objectListTwo = Object.keys(object2);
  if (objectListOne.length !== objectListTwo.length) {
    return false;
  } else {
    for (let key of objectListOne) {
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); 
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));
assertEqual(eqObjects(cd, dc), true);