const addToBatch = (arr, num) => {
  if (arr.length >= 5) {
    return arr;
  }
  return arr.concat(num);
};
