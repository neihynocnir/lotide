const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  console.log((eqArrays(actual, expected) ? `Assertion Passed` : `Assertion Failed`));
};

module.exports = assertArraysEqual;