const express = require("express")
const {useAuth} = require("../middlewares")
const {users: ctrl} = require("../controllers")
const passport = require("passport");

const router = express.Router();

router.get("/current", useAuth, ctrl.getProfile);

module.exports = router;