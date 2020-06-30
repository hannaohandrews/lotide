

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns 6 for [5,6,5]", () => {
    assert.deepEqual(middle([5,6,5]), [6]); 
  });

  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});