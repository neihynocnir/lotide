const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {

  it("returns [2,3] for [1, 2, 3] without [1]", () => {
    const input = [1, 2, 3] ;
    const remove = [1];
    const output = [2,3];
    assert.deepEqual(without(input, remove), output);
  });

  it("returns ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    const input = ['1', '2', '3'] ;
    const remove = [1, 2, '3'];
    const output = ['1', '2'];
    assert.deepEqual(without(input, remove), output);
  });

});
