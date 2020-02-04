const expect = require("chai").expect;
const axios = require("axios");
const config = require("../src/config/index");
const BASE_URL = config.testHost || "http://localhost:4000";

if (config.environment == "local") {
  describe("API test", function() {
    let rightAnswer = {
      sudokuAnswer: [
        [5, 3, 2, 9, 8, 6, 7, 4, 1],
        [4, 8, 7, 2, 1, 5, 3, 6, 9],
        [6, 9, 1, 4, 3, 7, 5, 8, 2],
        [3, 2, 5, 1, 7, 4, 8, 9, 6],
        [7, 6, 4, 3, 9, 8, 1, 2, 5],
        [8, 1, 9, 5, 6, 2, 4, 3, 7],
        [1, 5, 6, 8, 2, 3, 9, 7, 4],
        [9, 7, 8, 6, 4, 1, 2, 5, 3],
        [2, 4, 3, 7, 5, 9, 6, 1, 8]
      ]
    };

    let wrongAnswer = {
      sudokuAnswer: [
        [5, 3, 5, 9, 8, 6, 7, 4, 1],
        [4, 8, 7, 2, 1, 5, 3, 6, 9],
        [6, 9, 1, 4, 3, 7, 5, 8, 2],
        [3, 2, 5, 1, 7, 4, 8, 9, 6],
        [7, 6, 4, 3, 9, 8, 1, 2, 5],
        [8, 1, 9, 5, 6, 2, 4, 3, 7],
        [1, 5, 6, 8, 2, 3, 9, 7, 4],
        [9, 7, 8, 6, 4, 1, 2, 5, 3],
        [2, 4, 3, 7, 5, 9, 6, 1, 8]
      ]
    };

    it("should ok when 9x9 arrays submitted with right answer", async function() {
      const resp = await axios.post(BASE_URL + "/answer/check", rightAnswer);
      expect(resp.status).to.eql(200);
    });

    it("should true when right answer submitted", async function() {
      const resp = await axios.post(BASE_URL + "/answer/check", rightAnswer);
      expect(resp.status).to.eql(200);
      expect(resp.data.answer).to.eql(true);
    });

    it("should ok when 9x9 arrays submitted with wrong answer", async function() {
      const resp = await axios.post(BASE_URL + "/answer/check", wrongAnswer);
      expect(resp.status).to.eql(200);
    });

    it("should false when wrong answer submitted", async function() {
      const resp = await axios.post(BASE_URL + "/answer/check", wrongAnswer);
      expect(resp.status).to.eql(200);
      expect(resp.data.answer).to.eql(false);
    });

    it("should error 400 when input format is wrong", async function() {
      rightAnswer.sudokuAnswer = [];
      const resp = await axios
        .post(BASE_URL + "/answer/check", rightAnswer)
        .catch(function(err) {
          expect(err.response.status).to.eql(400);
        });
    });
  });
}
