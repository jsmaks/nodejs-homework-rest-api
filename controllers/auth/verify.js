

const { user: service } = require('../../services');
const { sendMail } = require('../../middlewares');
const { nanoid } = require('nanoid');

const verify = async ({ body: { email } }, res, next)  => {
  if (!email) {
    return res.status(400).json({
      status: 'Bad Request',
      code: 400,
      message: 'email is required',
    });
  }

  try {
    const user = await service.getOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 'Not Found',
        code: 404,
        message: 'no user found with that email',
      });
    }

    if (user.verify) {
      return res.status(400).json({
        status: 'Bad Request',
        code: 400,
        message: 'Verification has already been passed',
      });
    }

    const verifyToken = nanoid();
    await service.updateById(user.id, { verifyToken });

    await sendMail({
      to: email,
      subject: 'Валидация email',
      text: `Для завершения пройдите по ссылке <a href="http://localhost:3000/auth/users/verify/${verifyToken}"></a>`,
    });

    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result: {
          id: user._id,
          email: user.email,
          avatarURL: user.avatarURL,
          verifyToken,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};



module.exports = verify;