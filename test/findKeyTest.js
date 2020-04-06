const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns undefined when doesn't exist in the object", () => {
    const input = {'Blue Hill':{ stars: 1 },'Akaleri':{ stars: 3 },'noma':{ stars: 2 }};
    const callback = x => x.stars === 4;
    const output = undefined;
    assert.strictEqual(findKey(input, callback),output);
  });


  it("returns 'noma' for {'Blue Hill':{ stars: 1 },'Akaleri':{ stars: 3 },'noma':{ stars: 2 }}' with callback  x => x.stars === 2", () => {
    const input = {'Blue Hill':{ stars: 1 },'Akaleri':{ stars: 3 },'noma':{ stars: 2 }};
    const callback = x => x.stars === 2;
    const output = 'noma';
    assert.strictEqual(findKey(input, callback),output);
  });

});