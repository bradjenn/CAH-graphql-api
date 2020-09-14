const { ApolloServer } = require("apollo-server")
const { ApolloServerLambda } = require("apollo-server-lambda")

const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const serverOptions = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
}

function createLambdaServer() {
  return new ApolloServerLambda(serverOptions)
}

function createLocalServer() {
  return new ApolloServer(serverOptions)
}

module.exports = { createLambdaServer, createLocalServer }
