const sudokuController = require("./controllers/sudokuController");
const sudokuControllerValidator = require("./middleware/sudokuControllerValidator");

module.exports = app => {
  app.post(
    "/answer/check",
    sudokuControllerValidator.arrayInput,
    sudokuController.checkAnswer
  );
};
