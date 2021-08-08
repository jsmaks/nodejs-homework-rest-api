const { contacts: service } = require('../../services');

const getList = async (req, res, next) => {
  try {
    const {_id} = req.user; 
    const contacts = await service.getList(_id);

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getList;
