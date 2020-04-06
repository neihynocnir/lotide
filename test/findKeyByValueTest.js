const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("returns undefined when doesn't exist in the object", () => {
    const input = { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'} ;
    const value = "That '70s Show";
    const key = undefined;
    assert.strictEqual(findKeyByValue(input, value),key);
  });


  it("returns 'drama' for { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'} when value 'The Wire'", () => {
    const input = { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'} ;
    const value = 'The Wire';
    const key = 'drama';
    assert.strictEqual(findKeyByValue(input, value),key);
  });

});
