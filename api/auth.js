const express = require("express")
const {useAuth} = require("../middlewares")
const {auth: ctrl} = require("../controllers")
const {uploadAvatar} = require("../middlewares")

const router = express.Router();

router.post("/users/signup", express.json(), ctrl.register);
router.post("/users/login", express.json(), ctrl.login);
router.post("/users/logout", useAuth,  ctrl.logout);
router.patch("/users/avatars", useAuth, uploadAvatar, ctrl.updateAvatar)

module.exports = router;