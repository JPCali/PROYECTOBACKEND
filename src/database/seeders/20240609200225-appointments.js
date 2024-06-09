"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("appointments", [
      {
        appointments_date: "02-01-2015 01 : 00",
        id_user: 4,
        id_service: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appointments", null, {});
  },
};
