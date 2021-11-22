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

module.exports = middle;