const takeUntil = function(info, callback) {
let result = [];
  for (let infoPos in info) {
    let item = info[infoPos];
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;