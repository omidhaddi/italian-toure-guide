import db from "../database"

const userController = {
  all: async () => {
    const users = await db.User.findAll()
    const parsedUsers = JSON.parse(JSON.stringify(users))
    return parsedUsers
  },
  find: async (id) => {
    const user = await db.User.findByPk(id)
    return JSON.parse(JSON.stringify(user))
  },
  findEmail: async (email) => {
    const [user, created] = await db.User.findOrCreate({ include: { all: true, nested: true }, where: { email: email } })
    console.log(created);
    return JSON.parse(JSON.stringify(user))


  }
}

export default userController