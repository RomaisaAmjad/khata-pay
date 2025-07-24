'use strict';

const bcrypt = require('bcrypt');
const userTableName = "users"
const customerTableName = "customers"
const transactionTableName = "transactions"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
     
  await queryInterface.bulkInsert(userTableName,[
    {
    name: "Ali Khan",
    password:  await bcrypt.hash('Ali123', 12),
    phone_number: 923001112222,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Fatima Sheraz",
    password: await bcrypt.hash('Fatima123', 12),
    phone_number: 923004445555,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ],{} );
 

  await queryInterface.bulkInsert(customerTableName,[
  {
  fk_user_id: 1,
  name: "Ahmed Raza",
  phone_number: 923005551111,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  fk_user_id: 1,
  name: "Rabia",
  phone_number: 923999000111,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  fk_user_id: 2,
  name: "Zainab Malik",
  phone_number: 923006667777,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
 },
{
  fk_user_id: 2,
  name: "Ahmad",
  phone_number: 9230336672277,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
 },
],{});

await queryInterface.bulkInsert(transactionTableName,[
   {
    fk_customer_id: 1,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fk_customer_id: 2,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fk_customer_id: 3,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fk_customer_id: 4,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
],{});


  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete(userTableName, null, {});
    await queryInterface.bulkDelete(customerTableName, null, {});
    await queryInterface.bulkDelete(transactionTableName, null, {});
  }
};
