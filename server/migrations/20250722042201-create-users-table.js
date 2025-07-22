'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
     await queryInterface.createTable('users',{
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
    phoneNumber:{
        type: DataTypes.BIGINT,
        allowNull:false,
        unique:true,
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
     await queryInterface.dropTable('users');
     
  }
};
