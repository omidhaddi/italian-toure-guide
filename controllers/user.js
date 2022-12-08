import db from "../database"
import { Op } from "sequelize"

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
  authorize: async ({ username, password }) => {
    const user = await db.User.findOne({ where: { [Op.and]: [{ email: username }, { password: password }] } })
    return JSON.parse(JSON.stringify(user))
  },
  findEmail: async (email) => {
    const [user, created] = await db.User.findOrCreate({ where: { email: email } })
    console.log(created);
    return JSON.parse(JSON.stringify(user))

  }
}

export default userController