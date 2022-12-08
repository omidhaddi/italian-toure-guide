'use strict';
import Connection from '../connection';

const { Model, DataTypes } = require('sequelize');
const initUser = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Review, { foreignKey: "UserId" }),
        User.hasMany(models.Route, { foreignKey: "UserId" })
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(Connection, DataTypes)