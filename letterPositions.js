// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
const letterPositions = function(sentence) {
  const results = {};
  
  for (const itemIndex in sentence) {
    let index = sentence[itemIndex];
    if (index !== " ") {
      results[index] ? results[index].push(parseInt(itemIndex)) : results[index] = [parseInt(itemIndex)];
    }
  }
  return results;
};

module.exports = letterPositions;
