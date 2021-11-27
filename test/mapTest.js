const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns a new array with elements passed through the function", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it("returns an empty array when passed []", () => {
    assert.deepEqual(map([], (x) => x * 2), [])
  });
});
