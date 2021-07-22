const { user: service, user } = require('../../services');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getProfile = async (req, res, next) => {

    const userProfile = {
        email: req.user.email,
        _id: req.user.id,
    }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: userProfile,
    },
  });
  // const {Authorization} = req.headers;
  // const [, token] = Authorization.split(" ");
  // const {SECRET_KEY} = process.env;
  // try {
  //     const {id} = jwt.verify(token, SECRET_KEY)
  //     const user = service.findById(id);
  // } catch (error) {
  //     res.status(401).json({

  //     })
  // }
};
module.exports = getProfile;
