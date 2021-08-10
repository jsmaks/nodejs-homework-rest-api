
const { User } = require('../models');

const getOne = filter => {
  return User.findOne(filter);
};
const getById = (id)=> User.findById(id);
const add = ({email,password, verifyToken })=>{ //other = { email, verifyCode}
     
    const newUser = new User({email, verifyToken});
    console.log(newUser);
    newUser.setPassword(password);
    return newUser.save();

};
const updateById = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, {new : true} )
}

module.exports = { getOne, add, getById, updateById };
