'use strict';

import Connection from 'pg/lib/connection';

const { Model, DataTypes } = require('sequelize');
const initRoute = (sequelize, DataTypes) => {
  class Route extends Model {
    static associate(models) {
      // define association here
      Route.belongsTo(models.Place),
        Route.belongsTo(models.User)
    }
  }
  Route.init({
    UserId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};
export default initRoute(Connection, DataTypes)