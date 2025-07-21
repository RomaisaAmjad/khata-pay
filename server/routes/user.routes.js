const {Router}= require('express');
const userController = require('../controllers/user.controller.js')


const router = Router();

router.post('/signup',userController.sigUp);
router.post('/login',userController.logIn);


