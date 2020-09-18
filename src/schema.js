const { gql } = require("apollo-server")

const typeDefs = gql`
  type WhiteCard {
    id: ID!
    text: String!
    pack: Pack!
  }

  type BlackCard {
    id: ID!
    text: String!
    pick: String!
    pack: Pack!
  }

  type Pack {
    id: ID!
    name: String!
    blackCards: [BlackCard!]
    whiteCards: [WhiteCard!]
  }

  type Query {
    blackCards: [BlackCard!]
    blackCard(id: ID!): BlackCard
    whiteCards: [WhiteCard!]
    whiteCard(id: ID!): WhiteCard
    packs: [Pack!]
    pack(id: ID!): Pack
  }

  input BlackCardsCreateWithoutPackInput {
    text: String!
    pick: String!
  }

  input BlackCardsCreateManyWithoutPackInput {
    create: [BlackCardsCreateWithoutPackInput!]
    connect: [BlackCardsWhereUniqueInput!]
  }

  input BlackCardsWhereUniqueInput {
    id: ID
  }

  input WhiteCardsCreateManyWithoutPackInput {
    create: [WhiteCardsCreateWithoutPackInput!]
    connect: [WhiteCardsWhereUniqueInput!]
  }

  input WhiteCardsCreateWithoutPackInput {
    text: String!
  }

  input WhiteCardsWhereUniqueInput {
    id: ID
  }

  input CreatePackInput {
    name: String!
    blackCards: BlackCardsCreateManyWithoutPackInput
    whiteCards: WhiteCardsCreateManyWithoutPackInput
  }

  input PackWhereUniqueInput {
    id: ID
  }

  type Mutation {
    createPack(data: CreatePackInput!): Pack
    deletePack(where: PackWhereUniqueInput!): Pack
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = typeDefs
