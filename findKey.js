const findKey = function(info, callback) {
  let infoKeys = Object.keys(info);
  for (let key of infoKeys) {
    if (callback(info[key]))  {
      return key;
    }
  }
};

module.exports = findKey;

