const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns everything up but not including the element that passes", () => {
    assert.deepEqual(takeUntil([1, 2, 3], x => x > 1), [1]);
  });
  it("returns the whole list if nothing passes", () => {
    assert.deepEqual(takeUntil([1, 2, 3], x => x < 0), [1, 2, 3]);
  });
  it("returns an empty list if passed an empty list", () => {
    assert.deepEqual(takeUntil([], x => x < 0), []);
  });
});
