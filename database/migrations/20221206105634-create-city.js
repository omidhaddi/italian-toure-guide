'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      imageUrl: {
        type: Sequelize.STRING
      },
     busPrice: {
      type: Sequelize.FLOAT
      },
      metroPrice: {
        type: Sequelize.FLOAT
        },
<<<<<<< HEAD
=======
        lon: {
          type: Sequelize.FLOAT
        },
        lat: {
          type: Sequelize.FLOAT
        },
>>>>>>> main
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  }
};