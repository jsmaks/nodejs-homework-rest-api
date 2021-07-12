const Joi = require('joi');

const contactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().min(8).required(),
});

const contactsUpdateSchema = Joi.object({
  favorite: Joi.boolean().optional(),
  name: Joi.string().alphanum().min(3).max(30).optional(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .optional(),
  phone: Joi.string().min(10).optional(),
});
const contactsCreateSchema = Joi.object({
  favorite: Joi.boolean().optional(),
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.string().min(10).required(),
});

module.exports = {contactsSchema, contactsUpdateSchema, contactsCreateSchema};
