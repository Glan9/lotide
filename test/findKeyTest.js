const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns undefined with an empty object", () => {
    const obj = {};
    assert.equal(findKey(obj, x => x.stars == 2), undefined);
  });
  it("returns a key whose value passes the test", () => {
    const obj = {"Blue Hill": { stars: 1 },"Akaleri": { stars: 3 },"noma": { stars: 2 },"elBulli": { stars: 3 },"Ora": { stars: 2 },"Akelarre": { stars: 3 }};
    assert.equal(findKey(obj, x => x.stars == 2), "noma");
  });
  it("returns undefined if no value passes the test", () => {
    const obj = {"Blue Hill": { stars: 1 },"Akaleri": { stars: 3 },"noma": { stars: 2 },"elBulli": { stars: 3 },"Ora": { stars: 2 },"Akelarre": { stars: 3 }};
    assert.equal(findKey(obj, x => x.stars == 7), undefined);
  });
});