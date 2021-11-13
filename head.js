const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(list) {
  return list[0];
};


assertEqual(head([1, 2, 3]), 1);
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
assertEqual(head(["foo", "bar"]), "foo");