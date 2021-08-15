module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  let bracCounter = 0;
  let nextCloseBreakType = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0]) {
        bracCounter++;
        nextCloseBreakType.push(bracketsConfig[j][1]);
      }
      if (str[i] === bracketsConfig[j][1]) {
        if (str[i] !== nextCloseBreakType[nextCloseBreakType.length - 1]) {
          return false;
        } else {
          nextCloseBreakType.pop();
        }
        bracCounter--;
      }
      if (bracCounter < 0) {
        return false;
      }
    }
  }

  return bracCounter === 0;
};
