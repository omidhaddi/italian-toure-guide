import db from '../database'

const routeController = {
    all: async () => {
        const routes = await db.Route.findAll()
        const parsedRoutes = JSON.parse(JSON.stringify(routes))
        return parsedRoutes
    },
    find: async (id) => {
        const route = await db.Place.findByPk(id)
        const parsedRoute = JSON.parse(JSON.stringify(route))
        return parsedRoute
    },
    create: async (data) => {
        const route = await db.Place.create(data)
        return JSON.parse(JSON.stringify(route))
    }
}

export default routeController