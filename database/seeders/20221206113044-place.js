'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Places', [{
      name: 'Piazza di Spagna',
      description: 'Antich Church with beautiful monument',
      lon: 41.9057,
      lat: 12.4823,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670327296/unsigned-uploads/piazza-di-spagna_dcw5qv.jpg',
      CityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
