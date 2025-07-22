const { getUnixTime} = require ('date-fns');
module.exports = (sequelize,DataTypes)=>{

const Customer = sequelize.define('Customer',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    fk_user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    runningBalance:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
    },
    createdAt: {
      type: DataTypes.DATE, 
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
},
{
    tableName : 'customers',
}
);

Customer.beforeCreate(function(customer){
    const unixDate = getUnixTime(new Date());
    customer.createdAt = unixDate;
    customer.updatedAt = unixDate;
});

Customer.associate = (models) => {
    Customer.belongsTo(models.User, {
        foreignKey: 'fk_user_id',
        as: "User"
    });

    Customer.hasMany(models.Transaction, {
        foreignKey: 'fk_customer_id',
        as: "transactions"
    });
};

return Customer;

}
