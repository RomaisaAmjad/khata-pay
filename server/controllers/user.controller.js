const {asyncWrapper} = require('../middlewares/asyncWrapper.middleware.js');

exports.signUp = asyncWrapper(async (req,res)=>{
    res.status(200).json({message:"User created!"});
})

exports.logIn = asyncWrapper(async (req,res)=>{
    res.status(200).json({message:"User created!"});
})