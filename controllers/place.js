import db from '../database'
// const token = "pk.eyJ1IjoiZG9kZGUiLCJhIjoiY2xiZjRubG90MDJsYTNuczJyc2ZzcGp6ZyJ9.u3Hj2gtMVqd1_kDJ07_X4g";

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
    const place = await db.Place.findByPk(id)
    user.addPlaces(place)
    place.setUsers(user)
  },
  createNew: async (data) => {
    const place = await db.Place.create(data)
    return JSON.parse(JSON.stringify(place))
  },
  // // create: async (req) => {
  // //   const { name, description, lon, lat, imageUrl, CityId } = req.query;
  // //   const place = await db.Place.findOne({ where: { name: name } })
  // //   const resp = await fetch(
  // //     `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`,
  // //     { method: 'GET' })
  // //   const obj = await resp.json()
  // //   const [lon, lat] = obj.features[0].geometry.coordinates
  // //   return await db.Place.create({
  // //     name, description, lon, lat, imageUrl, CityId
  // //   })

  // }

}

export default placeController