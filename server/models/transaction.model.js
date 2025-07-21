const { getUnixTime} = require ('date-fns');
module.exports = (sequelize,DataTypes)=>{

const Transaction = sequelize.define('Transaction',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    fk_customer_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    cashIn:{
        type:DataTypes.INTEGER,
        allowNull:false,
        default : 0,
    },
    cashOut:{
        type:DataTypes.INTEGER,
        allowNull:false,
        default : 0,
    },
    createdAt: {
      type: DataTypes.DATE, 
    },
    updatedAt: {
      type: DataTypes.DATE,
    }

},
{
    tableName : 'transactions',
}
);

Transaction.beforeCreate(function(transaction){
    const unixDate = getUnixTime(new Date());
    transaction.createdAt = unixDate;
    transaction.updatedAt = unixDate;
})

return User;
}


