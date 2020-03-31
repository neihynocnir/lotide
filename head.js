// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION HEAD
const head = function(items) {
  let firstOne;
  if (items === undefined) {
    firstOne = undefined;
  } else if (items.length === undefined) {
    firstOne = items;
  } else {
    firstOne = items[0];
  }
  return firstOne;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
