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
`

module.exports = typeDefs
