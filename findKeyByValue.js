const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;
