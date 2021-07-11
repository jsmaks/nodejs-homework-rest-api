const Joi = require('joi');

const contactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.number().min(8).required(),
});

module.exports = contactsSchema;
