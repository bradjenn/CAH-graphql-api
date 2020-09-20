function pack(parent, args, context) {
  return context.prisma.packs.findOne({
    where: { id: parent.packId },
  })
}

module.exports = {
  pack,
}
