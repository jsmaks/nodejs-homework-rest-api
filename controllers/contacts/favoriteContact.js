const { Contact } = require('../../models');

const favoriteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  try {
    const updateContact = await Contact.findByIdAndUpdate(contactId, body);

    if (!updateContact) {
      throw Error;
    }

    if (Object.keys(body).length === 0) {
      throw new Error('400');
    }

    res.json({
      status: 'success',
      code: 200,
      message: 'Favorite succesfully updated',
    });
  } catch (error) {
    if (error.message === '400') {
      return res.status(400).json({
        status: 'bad request',
        code: 400,
        message: 'Missing field favorite',
      });
    }

    res.status(404).json({
      status: 'not found',
      code: 404,
      message: 'Contact with such ID not found',
    });
  }
};
module.exports = favoriteContact;
