'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
  
    await queryInterface.createTable('transactions', { id:{
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
    }});
     
  },

  async down (queryInterface,DataTypes) {
      await queryInterface.dropTable('transactions');
     
  }
};
