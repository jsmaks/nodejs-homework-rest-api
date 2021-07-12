/* eslint-disable no-unused-vars */
// const { v4: id } = require('uuid')
const { Contact } = require('../../models');

const add = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await Contact.create(body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error)
  }
};
module.exports = add;
