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

function isValid(values) {
  if (Array.isArray(values)) {
    let temp = [];
    for (let i = 0; i < values.length; i++) {
      let value = values[i];
      if (value != 0) {
        let exist = temp.filter(a => a === value);
        if (exist.length > 0) return false;
        temp.push(value);
      }
    }
    return true;
  }
  return false;
}
