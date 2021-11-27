const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("finds objects equal if they have all the same properties and values", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true);
  });
  it("finds object not equal if one has more properties than the other", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), false);
  });
  it("finds objects not equal if their values aren't equal", () => {
    const cd = { c: "1", d: 2 };
    const dc = { d: 3, c: "1" };
    assert.equal(eqObjects(cd, dc), false);
  });
});
