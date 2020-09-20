function blackCards(parent, args, context) {
  return context.prisma.packs
    .findOne({
      where: { id: parent.id },
    })
    .blackCards()
}

function whiteCards(parent, args, context) {
  return context.prisma.packs
    .findOne({
      where: { id: parent.id },
    })
    .whiteCards()
}

module.exports = {
  blackCards,
  whiteCards,
}
