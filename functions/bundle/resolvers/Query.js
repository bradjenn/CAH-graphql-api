function whiteCard(parent, args, context) {
  return context.prisma.whiteCards.findOne({
    where: { id: parseInt(args.id, 10) },
  })
}

function whiteCards(parent, args, context) {
  return context.prisma.whiteCards.findMany()
}

function blackCard(parent, args, context) {
  return context.prisma.blackCards.findOne({
    where: { id: parseInt(args.id, 10) },
  })
}

function blackCards(parent, args, context) {
  return context.prisma.blackCards.findMany()
}

function pack(parent, args, context) {
  return context.prisma.packs.findOne({
    where: { id: parseInt(args.id, 10) },
  })
}

function packs(parent, args, context) {
  return context.prisma.packs.findMany()
}

module.exports = {
  whiteCard,
  whiteCards,
  blackCard,
  blackCards,
  pack,
  packs,
}
