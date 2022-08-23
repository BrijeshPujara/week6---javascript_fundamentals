const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessages = (arr) => {
  return arr.map((name) => {
    return `Hi ${name} 50% off our best candies for you today!`;
  });
};

generateMessages(names);

module.exports = {names, generateMessages}