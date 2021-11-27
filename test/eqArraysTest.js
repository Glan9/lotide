const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
*/

describe("#eqArrays", () => {
  it("finds [] equal to []", () => {
    assert.equal(eqArrays([], []), true);
  });
  it("finds [1, 2, 3] equal to [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("finds [1, 2] not equal to [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("finds [1, 2, '3'] not equal to [1, 2, 3]", () => {
    assert.equal(eqArrays([1, 2, "3"], [1, 2, 3]), false);
  });
});