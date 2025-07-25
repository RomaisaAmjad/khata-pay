const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer.controller.js");
const {authenticateUser} = require('../middlewares/auth.middleware.js');
const {customerValidator} = require ('../validators/customer.validator.js')
const {validateInput} = require('../middlewares/validateInput.middleware.js')

router.get('/', authenticateUser,customerController.getAllCustomers);
router.get('/:id', authenticateUser,customerController.getOneCustomer);
router.post('/', authenticateUser, validateInput(customerValidator),customerController.createCustomer);
router.delete('/:id',authenticateUser,customerController.deleteCustomer);
router.put('/:id',authenticateUser,customerController.updateCustomer);
                                                                                                                                
module.exports = router;