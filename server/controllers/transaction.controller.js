const {asynWrapper} = require('../middlewares/asyncWrapper.middleware.js');

exports.recordTransaction = asyncWrapper(async(req,res)=>{
    req.status(200).json({
    message:'Transaction recoreded successfully!'});
})