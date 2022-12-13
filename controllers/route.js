import db from '../database'

const routeController = {
    all: async () => {
        const routes = await db.Route.findAll()
        const parsedRoutes = JSON.parse(JSON.stringify(routes))
        return parsedRoutes
    },
    find: async (id) => {
        const route = await db.Route.findByPk(id)
        const parsedRoute = JSON.parse(JSON.stringify(route))
        return parsedRoute
    },
    create: async (data) => {
        const route = await db.Route.create(data)
        return JSON.parse(JSON.stringify(route))
    },
    findWithPlaces: async () => {
        const routes = await db.Route.findAll({ include: [{ model: db.Place }, { model: db.User }] })
        return JSON.parse(JSON.stringify(routes))

    },
}

export default routeController

// include: [{ model: Place, include: [{ model: User, where: { UserId: id}}]}]