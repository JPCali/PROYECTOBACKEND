"use strict";
const bcrypt = require("bcrypt");
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          first_name: "Juan",
          last_name: "Cali",
          email: "juan.cali@mail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          first_name: "Federico",
          last_name: "Cali",
          email: "federico.cali@mail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          first_name: "Luis",
          last_name: "Cali",
          email: "luis.cali@mail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          first_name: "Jose",
          last_name: "Sosa",
          email: "jose.sosa@mail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          first_name: "Sebastian",
          last_name: "Veron",
          email: "sebastian.veron@mail.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3,
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
