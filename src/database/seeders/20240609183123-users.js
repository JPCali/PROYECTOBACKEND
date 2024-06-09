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
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          first_name: "federico",
          last_name: "cali",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          first_name: "luis",
          last_name: "cali",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          first_name: "jose",
          last_name: "perez",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          first_name: "pedro",
          last_name: "sanchez",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          first_name: "javier",
          last_name: "milei",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          first_name: "manuel",
          last_name: "adorni",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          first_name: "begoña",
          last_name: "perez",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          first_name: "carlos",
          last_name: "tercero",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          first_name: "lionel",
          last_name: "messi",
          email: "super.admin@example.com",
          password: bcrypt.hashSync(plainPassword, 10),
          is_active: true,
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
