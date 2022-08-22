const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
};
  
module.exports = isValidLength;
  
  // isValidLength('00');
  
  // isValidLength('0011223344');
  // true
  