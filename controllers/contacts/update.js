const { Contact } = require('../../models');
const { contactsSchema } = require('../../middlewares/contactValidate');

const update = async (req, res, next) => {
  const { error } = contactsSchema.validate(req.body);
  const {body} = req;
 
  const { contactId } = req.params;
  try {
    const result = await Contact.findByIdAndUpdate( { _id: contactId },
      { ...body },);
    
    if (!result) {
      throw Error;
    }

    if (Object.keys(body).length === 0) {
      throw new Error('400');
    }

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact succesfully updated',
    });
  } catch (error) {
    if (error.message === '400') {
      return res.status(400).json({
        status: 'bad request',
        code: 400,
        message: 'Missing the body of the request',
      });
    }

    res.status(404).json({
      status: 'not found',
      code: 404,
      message: 'Contact with such ID not found',
    });
  }
};
module.exports = update;
