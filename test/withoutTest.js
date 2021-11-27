const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it("removes all copies of each element in the 2nd list", () => {
    assert.deepEqual(without([1, 2, 3, 1, 2], [1, 2]), [3]);
  });
  it("removes nothing if no elements in the lists match", () => {
    assert.deepEqual(without([1, 2, 3], [4, 5]), [1, 2, 3]);
  });
  it("removes nothing if the 2nd list is empty", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  it("returns [] when the 1st list is []", () => {
    assert.deepEqual(without([], [4, 5]), []);
  });
});
