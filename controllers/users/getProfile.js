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

};
module.exports = getProfile;
