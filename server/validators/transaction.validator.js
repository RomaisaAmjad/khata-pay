const Joi = require("joi");

const transactionValidationSchema = Joi.object({
  fk_customer_id: Joi.number().required(),
  cashIn: Joi.number().integer().min(0).default(0),
  cashOut: Joi.number().integer().min(0).default(0),
}).custom((value, helpers) => {
  if (value.cashIn === 0 && value.cashOut === 0) {
    return helpers.error("any.custom", {
      message: "Either cashIn or cashOut must be greater than 0",
    });
  }
  return value;
}, "Cash In or Cash Out Check");

const transactionValidator = (data) => transactionValidationSchema.validate(data);

module.exports = { transactionValidator };
