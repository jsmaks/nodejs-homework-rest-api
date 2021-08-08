
const { Contact } = require('../../models');

const add = async (req, res, next) => {
  const {_id} = req.user;
  const { body } = req;
  try {
    const result = await Contact.create({owner: _id, ...body});
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
