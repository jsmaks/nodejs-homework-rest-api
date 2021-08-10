const useAuth = require("./useAuth");
const uploadAvatar = require("./uploadAvatar");
const registerUser = require("./userValidate");
const contactsValidate = require("./contactValidate")
const sendMail = require("./sendMail")

module.exports = {
    useAuth,
    uploadAvatar,
    registerUser,
    contactsValidate,
    sendMail
}