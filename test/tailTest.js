const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

  it("returns [1, 2] for [3,1,2]", () => {
    assert.deepEqual(tail([3,1,2]),[1,2]);
  });
  
  it("returns [] for [4]", () => {
    assert.deepEqual(tail([4]),[]);
  });

});