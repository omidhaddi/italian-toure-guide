import db from '../database'

const placeController = {
  all: async () => {
    const places = await db.Place.findAll()
    const parsedPlaces = JSON.parse(JSON.stringify(places))
    return parsedPlaces
  },
  find: async (id) => {
    const place = await db.Place.findByPk(id)
    const parsedPlace = JSON.parse(JSON.stringify(place))
    return parsedPlace
  },
  associate: async (id, user) => {
    const place= await db.Place.findByPk(id)
    user.addPlaces(place)
    place.setUsers(user)
  },
  create: async (data) => {
    const place = await db.Place.create(data)
    return JSON.parse(JSON.stringify(place))
  }

}

export default placeController