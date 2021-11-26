const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {
  it("should return an empty array when passed an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("should return an empty array when passed an array with 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return an empty array when passed an array with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return 1 element when the input has odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return 2 elements when the input has even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});