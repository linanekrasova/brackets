module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let openBracCounter = 0;
  if (str[0] === ")") {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openBracCounter++;
    }
    if (str[i] === ")") {
      openBracCounter--;
    }
    if (openBracCounter < 0) {
      return false;
    }
  }
  if (openBracCounter === 0) {
    return true;
  }
};
