const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller.js')

router.post('/',transactionController.recordTransaction);

module.exports = router;