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
  favorite: Joi.boolean().required(),
});

const validator = (schema, { body }, res, next) => {
  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({
      status: 'Bad Request',
      code: 400,
      message: error.message.replace(/"/g, ''),
    });
  }

  next();
};
const addContact = (req, res, next) =>
  validator(contactsSchema, req, res, next);
  
const updateContact = (req, res, next) =>
  validator(contactsUpdateSchema, req, res, next);

const favContact = (req, res, next) =>
  validator(contactsCreateSchema, req, res, next);

module.exports = { addContact, updateContact, favContact };
