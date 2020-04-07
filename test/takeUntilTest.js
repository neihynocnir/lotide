const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  it("returns [[1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] using callback x => x < 0", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5] ;
    const callback = x => x < 0;
    const output = [1, 2, 5, 7, 2];
    assert.deepEqual(takeUntil(input, callback), output);
  });

  it("returns [ 'I've', 'been', 'to', 'Hollywood' ] for  [ 'I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood' ] with callback x => x === ',' ", () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] ;
    const callback = x => x === ',';
    const output = [ "I've", 'been', 'to', 'Hollywood' ] ;
    assert.deepEqual(takeUntil(input, callback), output);
  });

});
