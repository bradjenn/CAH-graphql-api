const resolvers = {
  Mutation: {
    createPack: async (parent, args, context, info) => {
      const newPack = await context.prisma.packs.create({
        data: args.data,
      })

      return newPack
    },
    deletePack: async (parent, args, context) => {
      const deletedPack = await context.prisma.packs.delete({
        where: { id: parseInt(args.where.id, 10) },
      })

      return deletedPack
    },
  },
  Query: {
    whiteCards: async (parent, args, context) => {
      return context.prisma.whiteCards.findMany()
    },
    blackCards: async (parent, args, context) => {
      return context.prisma.blackCards.findMany()
    },
    packs: async (parent, args, context) => {
      return context.prisma.packs.findMany()
    },
    blackCard: async (parent, args, context) => {
      return context.prisma.blackCards.findOne({
        where: { id: parseInt(args.id, 10) },
      })
    },
    whiteCard: async (parent, args, context) => {
      return context.prisma.whiteCards.findOne({
        where: { id: parseInt(args.id, 10) },
      })
    },
    pack: async (parent, args, context) => {
      return context.prisma.packs.findOne({
        where: { id: parseInt(args.id, 10) },
      })
    },
  },
  BlackCard: {
    pack(parent, args, context) {
      return context.prisma.packs.findOne({
        where: { id: parent.packId },
      })
    },
  },
  WhiteCard: {
    pack(parent, args, context) {
      return context.prisma.packs.findOne({
        where: { id: parent.packId },
      })
    },
  },
  Pack: {
    blackCards(parent, args, context) {
      return context.prisma.packs
        .findOne({
          where: { id: parent.id },
        })
        .blackCards()
    },
    whiteCards(parent, args, context) {
      return context.prisma.packs
        .findOne({
          where: { id: parent.id },
        })
        .whiteCards()
    },
  },
}

module.exports = resolvers
