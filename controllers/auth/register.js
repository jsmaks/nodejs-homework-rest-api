const { user: service } = require('../../services');
const { sendMail } = require('../../middlewares');
const { nanoid } = require('nanoid');

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await service.getOne({ email });
    if (result) {
      res.status(409).json({
        status: 'Conflict',
        code: 409,
        message: 'Email in use',
      });
      return;
    }

    const verifyToken = nanoid();
    const newUser = await service.add({ email, password, verifyToken });
    console.log(newUser);

    const mail = {
      to: email,
      subject: 'Подтвердите свой email',
      text: `<a href="http://localhost:3000/auth/users/verify/${verifyToken}"><b>Нажмите для подтверждения</b></a>`,
    };
    await sendMail(mail);

    res.status(201).json({
      status: 'Created',
      code: 201,
      message: `${(newUser.email, newUser.avatarURL, newUser.verifyToken)}. Verify email`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
