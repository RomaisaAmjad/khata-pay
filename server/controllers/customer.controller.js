const {asyncWrapper} = require('../middlewares/asyncWrapper.middleware.js');

exports.getAllCustomers = asyncWrapper(async (req, res) => {
    req.status(200).json({message : "Take all your customers"});
})

exports.createCustomer = asyncWrapper(async(req,res)=>{
    req.status (200).json({message : "New customer created!"})
})

exports.deleteCustomer = asyncWrapper(async(req,res)=>{
    req.status(200).json({message : "Customer deleted!"})
})
exports.updateCustomer = asyncWrapper(async(req,res)=>{
    req.status(200).json({message : "Customer deleted!"})
})