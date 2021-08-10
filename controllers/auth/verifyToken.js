const { user: service } = require('../../services');

const verifyToken = async (req, res, next) => {
  const { verifyToken } = req.params;
  try {
    const user = await service.getOne({ verifyToken });
    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'код верификации устарел',
      });
      //
    }
    await service.updateById(user._id, { verify: true, verifyToken: null });
    res.json({
      status: 'success',
      code: 200,
      message: 'Почта подтвержденна , спасибо!',
    });
    res.send('<h2>Почта подтвержденна , спасибо!</h2>');
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
