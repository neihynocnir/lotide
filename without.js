const without = (initial, itemsToDelete) => {
  return initial.filter(item => !itemsToDelete.includes(item));
};

module.exports = without;