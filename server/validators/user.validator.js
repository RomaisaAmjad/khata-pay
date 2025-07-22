const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).trim().required(),
  phoneNumber: Joi.string().min(5).allow(null),
  password: Joi.string().min(5).max(100).trim().required(),
});

const userValidator = (data) => userValidationSchema.validate(data);

module.exports = {userValidator};