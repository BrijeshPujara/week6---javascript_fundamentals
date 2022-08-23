
  const numbers = [
    "1763687364",
    "4763687363",
    "7867867862",
    "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
  ];

  const checkLength = (num) => {
    if (num.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  const filterLongNumbers = (arr) => {
    const filter = arr.filter(checkLength);

    return filter;
  };


module.exports = { filterLongNumbers, checkLength, numbers };
