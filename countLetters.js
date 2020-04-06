const countLetters = function(phrase) {
  let splitPhrase = phrase.split(" ").join("").toLowerCase();
  const results = {};
  for (const letter of splitPhrase) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
