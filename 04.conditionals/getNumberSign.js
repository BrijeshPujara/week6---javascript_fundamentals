const getNumberSign = (num) => {
  if (num < 0) {
    return 'negative';
  } else if (num === 0) {
    return 'zero';
  } else {
    return 'postiive';
  }
};

module.exports = getNumberSign;
