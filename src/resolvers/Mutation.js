const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { APP_SECRET, getUserId } = require("../utils")

// async function signup(parent, args, context) {
//   const password = await bcrypt.hash(args.password, 10)
//   const user = await context.prisma.users.create({
//     data: { ...args, password },
//   })
//   const token = jwt.sign({ userId: user.id }, APP_SECRET)

//   return {
//     token,
//     user,
//   }
// }s

async function login(parent, args, context) {
  const user = await context.prisma.users.findOne({
    where: { email: args.email },
  })
  if (!user) {
    throw new Error("No such user found")
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function createPack(parent, args, context, info) {
  const newPack = await context.prisma.packs.create({
    data: {
      ...args.data,
      status: "pending",
    },
  })

  return newPack
}

async function deletePack(parent, args, context) {
  const userId = getUserId(context)

  const deletedPack = await context.prisma.packs.delete({
    where: { id: parseInt(args.where.id, 10) },
  })

  return deletedPack
}

module.exports = {
  login,
  createPack,
  deletePack,
}
