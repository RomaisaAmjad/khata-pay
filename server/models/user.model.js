const { getUnixTime} = require ('date-fns');
module.exports = (sequelize,DataTypes)=>{

const User = sequelize.define('User',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    phoneNumber:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    createdAt: {
      type: DataTypes.DATE, 
    },
    updatedAt: {
      type: DataTypes.DATE,
    }

},
{
    tableName : 'users',
}
);

User.beforeCreate(function(user){
    const unixDate = getUnixTime(new Date());
    user.createdAt = unixDate;
    user.updatedAt = unixDate;
})

return User;
}


