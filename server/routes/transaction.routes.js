const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller.js');
const {authenticateUser} = require('../middlewares/auth.middleware.js');
const {transactionValidator} = require ('../validators/transaction.validator.js');
const {validateInput} = require('../middlewares/validateInput.middleware.js')

router.post('/',authenticateUser,validateInput(transactionValidator),transactionController.recordTransaction);

module.exports = router;