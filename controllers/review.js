import db from '../database'

const reviewController = {
    all: async () => {
        const reviews = await db.Review.findAll()
        return JSON.parse(JSON.stringify(reviews))

    },
    find: async (id) => {
        const review = await db.Review.findByPk(id)
        return JSON.parse(JSON.stringify(review))

    },
    create: async (data) => {
        const review = await db.Review.create(data)
        return JSON.parse(JSON.stringify(review))
    }
}

export default reviewController