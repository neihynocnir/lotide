const head = function(items) {
  let firstOne;
  if (items === undefined) {
    firstOne = undefined;
  } else if (items.length === undefined) {
    firstOne = items;
  } else {
    firstOne = items[0];
  }
  return firstOne;
};

module.exports = head;
