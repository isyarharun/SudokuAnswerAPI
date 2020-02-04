const Joi = require("@hapi/joi");
module.exports = {
  arrayInput(req, res, next) {
    const schema = {
      sudokuAnswer: Joi.array()
        .items(
          Joi.array()
            .length(9)
            .error(() => {
              return {
                message: "please provide a valid answer input"
              };
            })
        )
        .length(9)
        .error(() => {
          return {
            message: "please provide a valid answer input"
          };
        })
    };
    let validate = Joi.validate(req.body, schema);
    if (validate.error == null) {
      next();
    } else {
      res.status(400).send({ error: validate.error.details[0].message });
    }
  }
};
