'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
  await queryInterface.createTable('customers', {
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
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    runningBalance:{
        type:DataTypes.INTEGER,
        allowNull:false,
        default:0,
    },
    createdAt: {
      type: DataTypes.DATE, 
    },
    updatedAt: {
      type: DataTypes.DATE,
    }

       });
     
  },

  async down (queryInterface, DataTypes) {
  
     await queryInterface.dropTable('customers');
     
  }
};
