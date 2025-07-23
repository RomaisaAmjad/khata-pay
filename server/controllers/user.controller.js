const { User } = require('../models')
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

const {asyncWrapper} = require('../middlewares/asyncWrapper.middleware.js');

exports.signUp = asyncWrapper(async (req,res)=>{
    
  const { name,password,phone_number } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    phone_number,
    password: hashedPassword,
  });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "2hr",
  });

  const userData = {
    id: user.id,
    name: user.name,
    phone_number:user.phone_number,
  };
  return res
    .status(200)
    .json({ userData, token, message: "Signed up successfully!" });
})

exports.logIn = asyncWrapper(async (req,res)=>{
    const {name,password} = req.body;
    const user = await User.findOne({where:{name}});
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password!" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "2hr",
    });

    const userData = {
      id: user.id,
      name: user.name,
      phone_number:user.phone_number,

    };
    return res.status(200).json({userData,token,message:"Logged in succeddfully"});

})