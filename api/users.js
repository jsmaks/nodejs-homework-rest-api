const express = require('express');
const { useAuth, uploadAvatar } = require('../middlewares');
const { users: ctrl } = require('../controllers');

const router = express.Router();

router.get('/current', useAuth, ctrl.getProfile);
router.patch('/avatars', useAuth, uploadAvatar, ctrl.updateAvatar);

module.exports = router;
