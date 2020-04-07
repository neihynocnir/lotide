const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns { } for empty", () => {
    const input = "" ;
    const output = { };
    assert.deepEqual(letterPositions(input), output);
  });


  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    const input = "hello" ;
    const output = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
    assert.deepEqual(letterPositions(input), output);
  });

});
