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

const middle = function(array){
  if (array.length <= 2) { // Too short array
    return [];
  } else {
    if (array.length % 2 === 0) { // Even length
      return [array[array.length / 2 - 1], array[array.length / 2]];
    } else { // odd length
      return [array[Math.floor(array.length / 2)]];
    }
  }
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);