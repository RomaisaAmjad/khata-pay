const{Route} = require('express');
const transactionController = require('../controllers/transaction.controller.js')

const router = Route();

router.post('/',transactionController.recordTransaction);