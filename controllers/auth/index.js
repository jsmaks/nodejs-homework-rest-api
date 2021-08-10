const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const verifyToken = require('./verifyToken');
const verify = require("./verify");

module.exports = {
  register,
  login,
  logout,
  verifyToken,
  verify
};
