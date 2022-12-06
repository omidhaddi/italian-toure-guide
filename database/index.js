import Sequelize from 'sequelize';
import config from './config/config.mjs';
import City from './models/city';
import Place from './models/place';
import Review from './models/review';
import Route from './models/route';
import User from './models/user';


const db = {};
 db.User = User
 db.Review = Review
 db.Place = Place
 db.Route = Route
 db.City = City

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
