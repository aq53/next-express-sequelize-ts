'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed your data here
    await queryInterface.bulkInsert('Albums', [
      { name: 'Album 1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Album 2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Album 3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Album 4', createdAt: new Date(), updatedAt: new Date() },
      // Add more data as needed
    ], {});
  },
  async down (queryInterface, Sequelize){
    // Remove the seeded data here
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
