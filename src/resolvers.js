const data = require("./data.json")

const resolvers = {
  Query: {
    blackCards: () => data.blackCards,
    blackCard: (parent, args) => {
      return data.blackCards[args.index]
    },
    whiteCard: (parent, args) => {
      return data.whiteCards[args.index]
    },
    packs: () => data.packs,
    pack: (parent, args) => {
      return data.packs.find((pack) => pack.id === args.id)
    },
  },
  BlackCard: {
    pack(parent) {
      return data.packs.find((pack) => {
        return pack.id === parent.packId
      })
    },
  },
  WhiteCard: {
    pack(parent) {
      return data.packs.find((pack) => {
        return pack.id === parent.packId
      })
    },
  },
  Pack: {
    black(parent) {
      return data.blackCards.filter((card) => {
        return parent.black.indexOf(card.id) === -1
      })
    },
    white(parent) {
      return data.whiteCards.filter((card) => {
        return parent.white.indexOf(card.id) === -1
      })
    },
  },
}

module.exports = resolvers
