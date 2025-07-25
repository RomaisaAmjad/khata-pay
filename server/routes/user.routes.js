const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
const {userValidator} = require ('../validators/user.validator.js')
const {validateInput} = require('../middlewares/validateInput.middleware.js')

router.post('/signup',validateInput(userValidator),userController.signUp);
router.post('/login',validateInput(userValidator),userController.logIn);

module.exports = router;