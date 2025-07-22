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
    phoneNumber: 923001112222,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Fatima Sheraz",
    password: await bcrypt.hash('Fatima123', 12),
    phoneNumber: 923004445555,
    createdAt: new Date('2025-07-21T08:00:00Z'),
    updatedAt: new Date('2025-07-22T09:00:00Z')
  }
  ],{} );
 

  await queryInterface.bulkInsert(customerTableName,[
  {
  fk_user_id: 1,
  name: "Ahmed Raza",
  phoneNumber: 923005551111,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  fk_user_id: 1,
  name: "Rabia",
  phoneNumber: 923999000111,
  runningBalance: 0,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  fk_user_id: 2,
  name: "Zainab Malik",
  phoneNumber: 923006667777,
  runningBalance: 0,
  createdAt: new Date('2025-07-21T12:00:00Z'),
  updatedAt: new Date('2025-07-22T09:00:00Z')
 },
{
  fk_user_id: 2,
  name: "Ahmad",
  phoneNumber: 9230336672277,
  runningBalance: 0,
  createdAt: new Date('2025-07-21T12:00:00Z'),
  updatedAt: new Date('2025-07-22T09:00:00Z')
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
    createdAt: new Date('2025-07-22T10:00:00Z'),
    updatedAt: new Date('2025-07-22T12:00:00Z')
  },
  {
    fk_customer_id: 3,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date('2025-07-22T10:00:00Z'),
    updatedAt: new Date('2025-07-22T12:00:00Z')
  },
  {
    fk_customer_id: 4,
    cashIn: 0,
    cashOut: 0,
    createdAt: new Date('2025-07-22T10:00:00Z'),
    updatedAt: new Date('2025-07-22T12:00:00Z')
  }
],{});


  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete(userTableName, null, {});
    await queryInterface.bulkDelete(customerTableName, null, {});
    await queryInterface.bulkDelete(transactionTableName, null, {});
  }
};
