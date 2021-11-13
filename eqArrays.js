const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length){
    return false;
  }

  for (let i=0; i<list1.length; i++){
    if (list1[i] !== list2[i]){
      return false;
    }
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);