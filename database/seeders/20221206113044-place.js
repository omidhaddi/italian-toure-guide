'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Places', [{
      name: 'Piazza di Spagna',
      description: 'At the foot of the French church "Trinita dei Monti" lie the 135 steps of the Spanish Steps. The Spanish Steps decent to the Piazza di Spagna, where you will find a distinctive fountain by Pietro Bernini. The 18th-century  have grown into a tourist hotspot, and the top of the stairs offers a gorgeous view of Rome.',
      lon: 12.4823,
      lat: 41.9057,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670589987/tour-guide/piazza_spanga_n8thj4.jpg',
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
