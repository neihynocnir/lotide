const eqArrays = function(actual, expected) {
  // Compare the length of the two arrays
  if (actual.length === expected.length) {
    for (let itemIndex in expected) {
      let valueActual = actual[itemIndex];
      let valueExp = expected[(expected.indexOf(actual[itemIndex]))];
      if (typeof(valueActual) !== typeof(valueExp) || valueActual !== valueExp) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};



module.exports = eqArrays;