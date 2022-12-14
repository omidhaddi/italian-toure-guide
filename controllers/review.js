import db from '../database'

const reviewController = {
    all: async () => {
        const reviews = await db.Route.findAll()
        return JSON.parse(JSON.stringify(reviews))
        
    },
    find: async (id) => {
        const review = await db.Route.findByPk(id)
        return JSON.parse(JSON.stringify(review))
         
    },
    create: async (data) => {
        const review = await db.Route.create(data)
        return JSON.parse(JSON.stringify(review))
    }
}

export default reviewController