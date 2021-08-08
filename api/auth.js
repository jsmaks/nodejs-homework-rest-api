const express = require("express")
const {useAuth , registerUser} = require("../middlewares")
const {auth: ctrl} = require("../controllers")


const router = express.Router();

router.post("/users/signup", express.json(), registerUser, ctrl.register);
router.post("/users/login", express.json(), registerUser, ctrl.login);
router.post("/users/logout", useAuth,  ctrl.logout);


module.exports = router;