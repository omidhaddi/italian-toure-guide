'use strict';

import Connection from 'pg/lib/connection';

const { Model, DataTypes } = require('sequelize');
const initReview = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
      Review.belongsTo(models.User),
        Review.belongsTo(models.Place)
    }
  }
  Review.init({
    UserId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
export default initReview(Connection, DataTypes)