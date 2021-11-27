const takeUntil = function(array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
}

const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }

  for (let i=0; i<list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = takeUntil;
