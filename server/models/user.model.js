const { getUnixTime} = require ('date-fns');
module.exports = (sequelize,DataTypes)=>{

const User = sequelize.define('User',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull:true,
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

User.associate = (models)=>{ 
    User.hasMany (models.Customer,{
        foreignKey:'fk_user_id',
        as:"User" // as--->alias; giving new name
    })
}
return User;
}

