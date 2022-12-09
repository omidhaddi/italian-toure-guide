'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cities', [{
      name: 'Rome',
      description: `With 25 million of foreign visitors a year, Rome is in the lead in the charts of the most loved Italian cities by the tourists that come from all the world. Among Colosseum, St Peter &#39; s Basilica and Trevi Fountain, the Italian capital remains the Eternal City for excellence.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/roma_mxz5jn.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Milan',
      description: `The Cathedral is the most traditional symbol of Milan, that lures almost 11 million visitors every year. Year by year, Milan is accomplishing that internalisation process that brought it to be among the most desirable cities by foreign tourists.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/milano_x7ogmr.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Venice',
      description: `Venice is a unique city. Italians know it and so do the 10 million people, that choose it as final destination of a romantic trip in Italy. Art, timeless charm and fairy-tale location make Venice one of the Italian excellences, reason why the tourists would be willing to do follies in order to live it even only for few hours.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500706/tour-guide/venezia_tr8nmv.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Florence',
      description: `After many centuries, the quadrilateral, composed by the Cathedral, the Campanile, the Dome and the Baptistery, attracts about 9 million visitors a year. Florence has been renamed the Cradle of the Renaissance, for having hosted, in close ages, artists such as Giotto, Vasari; Brunelleschi and Lorenzo Ghiberti. A curiosity: Uffizi Gallery is present in the charts of the most visited museums of the world.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/firenze_moncol.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bologna',
      description: `Bologna deserves the name of Italian capital of the food. Not by chance, in the three nicknames of Emilia Romagna’s county seat, appears also “The Fat”. The tourists love it also for its huge square (Piazza Maggiore) and the enchanting old town that has preserved its medieval origins.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/bologna_xjlzq2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: 'Peschiera',
      description: `Two million visitors a year for the enchanting Peschiera del Garda, close to the most suggestive lake of Italy and to the amusement park Gardaland. Not no mention that Sirmione, the gem of the lake of Garda, is at only 10 km by car.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/Peschiera-del-Garda_xw4htj.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {

      name: 'Naples',
      description: `After Rome, Venice and Florence, Naples is the fifth city for number of inhabitants more visited by foreign tourists that come from the East and the West. From Spaccanapoli, the street that dramatically splits in half the old town of the Neapolitan city, to the landscape on the Vesuvio, Naples offers the best of itself in its many charming contradictions.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500705/tour-guide/napoli_fuu70c.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {

      name: 'Turin',
      description: `From the Museum of the Holy Shroud to the Egyptian Museum, holy and profane get together in Turin, the city called magic by the residents and the tourists. Over than 3 million people visit it every year, and they have the chance to live a weekend or more days at the myth of the Fiat, the Italian automotive industry that has become in time an essential pillar of our economy.`,
      imageUrl: 'https://res.cloudinary.com/dgxasrrac/image/upload/v1670500706/tour-guide/torino_tuofm1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    }

    ], {});

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
