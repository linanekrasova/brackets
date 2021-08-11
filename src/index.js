module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let openBracCounter = 0;

  for (let j = 0; j < bracketsConfig.length; j++) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === bracketsConfig[j][0]) {
        openBracCounter++;
      }
      if (str[i] === bracketsConfig[j][1]) {
        openBracCounter--;
      }
      if (openBracCounter < 0) {
        return false;
      }
    }
  }

  if (openBracCounter === 0) {
    return true;
  }
};
