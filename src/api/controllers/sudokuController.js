const customErrors = require("../common/customError");
const sudokuService = require("../../services/sudokuService");

module.exports = {
  async checkAnswer(req, res) {
    try {
      let input = req.body;
      let results = sudokuService.isAnswerValid(input.sudokuAnswer);
      let response = {
        message: "Wrong answer, please try again!",
        answer: false
      };
      if (results) {
        response = {
          message: "Great, you solved the sudoku",
          answer: true
        };
      }
      res.send(response);
    } catch (err) {
      customErrors.mapDomainErrorToHttpResponse(res, err);
    }
  }
};
