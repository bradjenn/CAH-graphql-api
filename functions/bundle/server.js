const { PrismaClient } = require("@prisma/client")
const ApolloServer = require("apollo-server").ApolloServer
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer

const prisma = new PrismaClient()
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

function createLambdaServer() {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ event }) => {
      return {
        requestHeaders: event.headers,
        prisma,
      }
    },
  })
}

function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req }) => {
      return {
        requestHeaders: req.headers,
        prisma,
      }
    },
  })
}

module.exports = { createLambdaServer, createLocalServer }
