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

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj, x => x.stars === 2), "noma");
assertEqual(findKey(obj, x => x.stars === 7), undefined);
assertEqual(findKey({}, x => x.stars === 2), undefined);