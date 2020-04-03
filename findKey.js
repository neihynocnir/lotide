const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(info, callback) {
  let infoKeys = Object.keys(info);
  for (let key of infoKeys) {
    if (callback(info[key]))  {
      return key;
    }
  }
};

const hotels = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


const findHotel = findKey(hotels, x => x.stars === 2);
console.log(findHotel);
assertEqual(findHotel,'noma');