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
    name: String
    black: [BlackCard]!
    white: [WhiteCard]!
  }

  type Query {
    blackCards: [BlackCard]!
    blackCard(id: ID!): BlackCard
    whiteCard(id: ID!): String
    packs: [Pack]!
    pack(id: ID!): Pack
  }
`

module.exports = typeDefs
