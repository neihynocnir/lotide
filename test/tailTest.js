const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    input = ['Yo Yo', 'Lighthouse', 'Labs'];
    output = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(input), output);
  });

  it("returns [1, 2] for [3,1,2]", () => {
    assert.deepEqual(tail([3,1,2]),[1,2]);
  });
  
  it("returns [] for [4]", () => {
    assert.deepEqual(tail([4]),[]);
  });

});