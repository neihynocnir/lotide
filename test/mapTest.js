const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("returns [] for empty", () => {
    const input = [] ;
    const callback = word => word[0];
    const output = [];
    assert.deepEqual(map(input, callback), output);
  });

  it("returns [ 'p', 's', 'r', 'w', 'f' ] for ['paper', 'scissors', 'rocks', 'water', 'fire'] with callback word => word[0]", () => {
    const input = ['paper', 'scissors', 'rocks', 'water', 'fire'] ;
    const callback = word => word[0];
    const output = [ 'p', 's', 'r', 'w', 'f' ];
    assert.deepEqual(map(input, callback), output);
  });

  it("returns [2, 8, 18, 32] for [1, 4, 9, 16] with callback x => x * 2", () => {
    const input = [1, 4, 9, 16] ;
    const callback = x => x * 2;
    const output = [2, 8, 18, 32];
    assert.deepEqual(map(input, callback), output);
  });

});



// const words = ['paper', 'scissors', 'rocks', 'water', 'fire'];

// const testMap = map(words, word => word[0]);
// console.log(assertArraysEqual(testMap,[ 'p', 's', 'r', 'w', 'f' ]));