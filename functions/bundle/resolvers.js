const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const User = require("./resolvers/User")
const Pack = require("./resolvers/Pack")
const WhiteCard = require("./resolvers/WhiteCard")
const BlackCard = require("./resolvers/BlackCard")

const resolvers = {
  Query,
  Mutation,
  User,
  Pack,
  WhiteCard,
  BlackCard,
}

module.exports = resolvers
