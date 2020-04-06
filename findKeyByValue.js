const findKeyByValue = function(info, vSearch){
  infoKeys = Object.keys(info);
  for (key of infoKeys) {
    if (info[key] === vSearch) {
      return key
    }
  }
}

module.exports = findKeyByValue;