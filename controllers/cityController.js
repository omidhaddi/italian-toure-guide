import db from '../database'

const cityController = {
  all: async () => {
    const cities = await db.City.findAll()
    const parsedCities = JSON.parse(JSON.stringify(cities))
    return parsedCities
  },
  find: async (id) => {
    const city = await db.City.findByPk(id)
    const parsedCity = JSON.parse(JSON.stringify(city))
    return parsedCity
  }
}

export default cityController