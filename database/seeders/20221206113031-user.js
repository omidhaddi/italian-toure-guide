'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: 375983457,
      address: 'Via Roma',
      password: '12345abdc',
      profilePicture: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1669565107/cld-sample.jpg',
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
