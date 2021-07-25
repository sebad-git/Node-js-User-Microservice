
const express = require('express');
const router = express.Router();
module.exports = router;

const userService = require('../controllers/user.controller');

router.post('/login', userService.login);
router.post('/new-user', userService.register);
router.post('/get-email', userService.validateMail);
router.post('/forgot-password', userService.forgotPassword);