// const { getContactById } = require('../../model')

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  console.log(contactId);

  try {
    const selectProduct = service.getById();
    console.log(selectProduct);

    if (!selectProduct) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact with this id not found',
      });
      return;
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: selectProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getById;
