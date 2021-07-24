
const express = require('express');
const router = express.Router();
module.exports = router;

const userService = require('../controllers/user.controller');

router.post('/login', userService.login);

//router.post('/', menuService.saveItem);
//router.get('/:id', menuService.saveItem);
//router.put('/:id', menuService.saveItem);
//router.delete('/:id', menuService.saveItem);