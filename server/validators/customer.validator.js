const Joi = require('joi');

const customerValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  phone_number: Joi.string().min(5).allow(null),
  runningBalance:Joi.number().integer().min(0).default(0),
});

const customerValidator = (data) => customerValidationSchema.validate(data);

module.exports = {customerValidator};