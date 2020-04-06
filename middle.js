const middle = function(array) {
  let index = array[Math.floor(array.length / 2)];
  let midIndex = [];
  if (array.length <= 2) {
    return midIndex;
  } else if (array.length % 2 === 0) {
    midIndex.push(array[index - 2]);
    midIndex.push(array[index - 1]);
  } else {
    midIndex.push(array[index - 1 ]);
  }
  return midIndex;
};

module.exports = middle;