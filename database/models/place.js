'use strict';

import Connection from 'pg/lib/connection';

const { Model, DataTypes } = require('sequelize');
const initPlace = (sequelize, DataTypes) => {
  class Place extends Model {

    static associate(models) {
      // define association here
      Place.belongsTo(models.City),
        Place.hasMany(models.Review, { foreignKey: "PlaceId" }),
        Place.hasMany(models.Route, { foreignKey: "PlaceId" })
    }
  }
  Place.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    lan: DataTypes.INTEGER,
    lon: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    CityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
export default initPlace(Connection, DataTypes)