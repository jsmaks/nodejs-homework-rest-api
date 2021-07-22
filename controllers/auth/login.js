const { user: service, user } = require('../../services');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();



const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await service.getOne({ email });

    if (!user || !user.comparePassword(password)) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Email or password is wrong',
      });
      return;
    }

    

    const payload = {
      id: user._id
    }
    const {SECRET_KEY} = process.env;
    const token = jwt.sign(payload, SECRET_KEY)
    await service.updateById(user._id, {token})
    

    
    const result = bcrypt.compareSync(password, user.password);
    res.json({
        status: "success",
        code: 200,
        data: {
            result: token
        }
    })
  } catch (error) {
    next(error);
  }
};
module.exports = login;
