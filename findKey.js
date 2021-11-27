const findKey = function(obj, callback) {
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }

  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = findKey;
