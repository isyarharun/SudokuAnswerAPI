const helpers = require("./helpers");

module.exports = {
  isAnswerValid(values) {
    let result = false;
    if (Array.isArray(values)) {
      // check for rows
      for (let i = 0; i < values.length; i++) {
        let rows = values[i];
        result = isValid(rows);
        if (!result) {
          break;
        }
      }
      if (result) {
        let transpose = helpers.transpose(values);
        // check for colmns
        for (let i = 0; i < values.length; i++) {
          let columns = transpose[i];
          result = isValid(columns);
          if (!result) {
            break;
          }
        }
      }
    }
    return result;
  }
};

// function is coming from
// https://stackoverflow.com/questions/5111434/sudoku-validity-check-algorithm-how-does-this-code-works
function isValid(values) {
  if (Array.isArray(values)) {
    let flag = 0;
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
      if (value != 0) {
        let bit = 1 << value;
        if ((flag & bit) != 0) return false;
        flag |= bit;
      }
    }
    return true;
  }
}
