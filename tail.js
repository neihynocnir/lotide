const tail = function(value) {
  let newValue = (value.slice(1));
  return newValue;
};

module.exports = tail;