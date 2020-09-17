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
    pick: Int!
    pack: Pack!
  }

  type Pack {
    id: ID!
    name: String!
    blackCards: [BlackCard]!
    whiteCards: [WhiteCard]!
  }

  type Query {
    blackCards: [BlackCard]!
    blackCard(id: ID!): BlackCard
    whiteCards: [WhiteCard]!
    whiteCard(id: ID!): WhiteCard
    packs: [Pack]!
    pack(id: ID!): Pack
  }

  input BlackCardsCreateWithoutPackInput {
    text: String!
    pick: Int!
  }

  input BlackCardsCreateManyWithoutPackInput {
    create: [BlackCardsCreateWithoutPackInput!]
    connect: [BlackCardsWhereUniqueInput!]
  }

  input BlackCardsWhereUniqueInput {
    id: ID
  }

  input WhiteCardsCreateManyWithoutPackInput {
    create: [WhiteCardsCreateWithoutPackInput]
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

  type Mutation {
    createPack(data: CreatePackInput!): CreatePackPayload
  }

  type CreatePackPayload {
    pack: Pack
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports = typeDefs
