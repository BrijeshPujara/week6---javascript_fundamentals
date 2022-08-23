const lowerCase = (str) => {
  return str.toLowerCase();
};

const transform = (str, transformMessage) => {
  let string = transformMessage(str);
  return string;
};

transform('WHY ARE YOU SHOUTING?', lowerCase)
