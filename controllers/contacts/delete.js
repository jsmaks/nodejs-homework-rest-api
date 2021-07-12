const { Contact } = require('../../models');

const del = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(contactId);
    const contact = await Contact.findByIdAndDelete(contactId);

    if (contact) {
      res.json({
        status: 'success',
        code: 200,
        message: 'deleted',
        data: {
          contact,
        },
      });
    } else {
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'No Content',
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = del;
