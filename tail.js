const tail = function(value) {
  let newValue = (value.slice(1));
  console.log(newValue);
  return newValue;
};

module.exports = tail;