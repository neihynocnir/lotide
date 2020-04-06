const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns {} when for ['Jason','Karl','Fang','Jason'] with { 'Penelope' : true }", () => {
    const input = ['Jason','Karl','Fang','Jason'];
    const check =  { 'Penelope' : true };
    const output = {  };
    assert.deepEqual(countOnly(input, check), output);
  });

  it("returns { 'Jason' : 2 } for ['Jason','Karl','Salima','Agouhanna','Fang','Kavith','Jason'] with { 'Jason' : true }", () => {
    const input = ['Jason','Karl','Salima','Agouhanna','Fang','Kavith','Jason'];
    const check =  { 'Jason' : true };
    const output = { 'Jason' : 2 };
    assert.deepEqual(countOnly(input, check), output);
  });

  it("returns { 'Karl' : 3 } for ['Jason','Karl','Salima','Karl','Fang','Kavith','Karl'] with { 'Karl' : true }", () => {
    const input = ['Jason','Karl','Salima','Karl','Fang','Kavith','Karl'];
    const check =  { 'Karl' : true };
    const output = { 'Karl' : 3 };
    assert.deepEqual(countOnly(input, check), output);
  });

});
