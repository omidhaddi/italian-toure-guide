import db from '../database'
const token = "pk.eyJ1IjoiZG9kZGUiLCJhIjoiY2xiZjRubG90MDJsYTNuczJyc2ZzcGp6ZyJ9.u3Hj2gtMVqd1_kDJ07_X4g";

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
  create: async (data) => {
    // console.log('this is data', data);
    const resp = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.address}.json?access_token=${token}`,
      { method: 'GET' })
    const obj = await resp.json()
    console.log(obj);
    const [lon, lat] = obj.features[0].geometry.coordinates
    console.log([lon, lat]);
    const {name, description, imageUrl, CityId } = data
    const place = await db.Place.create({ name, description,lon, lat, imageUrl, CityId  })
    return JSON.parse(JSON.stringify(place))
  }

}

export default placeController