const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns the key which holds the value", () => {
    const bestTVShowsByGenre = { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined if no key has the value", () => {
    const bestTVShowsByGenre = { sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});