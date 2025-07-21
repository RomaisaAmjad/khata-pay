const {Router} = require("express");
const customerController = require("../controllers/customer.controller.js");

const router = Router();

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);
router.delete('/:id',customerController.deleteCustomer);
router.update('/:id',customerController.updateCustomer);