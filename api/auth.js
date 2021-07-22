const express = require("express")
const {useAuth} = require("../middlewares")
const {auth: ctrl} = require("../controllers")

const router = express.Router();

router.post("/users/signup", express.json(), ctrl.register);
router.post("/users/login", express.json(), ctrl.login);
router.post("/users/logout", useAuth,  ctrl.logout);

module.exports = router;