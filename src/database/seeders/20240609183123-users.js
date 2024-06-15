"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "juan",
          last_name: "cali",
          email: "admin@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          first_name: "federico",
          last_name: "cali",
          email: "super.admin@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          first_name: "luis",
          last_name: "cali",
          email: "manager@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          first_name: "jose",
          last_name: "perez",
          email: "client1@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          first_name: "pedro",
          last_name: "sanchez",
          email: "client2@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          first_name: "javier",
          last_name: "milei",
          email: "client3@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          first_name: "manuel",
          last_name: "adorni",
          email: "client4@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          first_name: "begoña",
          last_name: "perez",
          email: "client5@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          first_name: "carlos",
          last_name: "tercero",
          email: "client6@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          first_name: "lionel",
          last_name: "messi",
          email: "client7@example.com",
          password_hash: "1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
