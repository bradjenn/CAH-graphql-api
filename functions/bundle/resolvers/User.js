function approvedPacks(parent, args, context) {
  return context.prisma.users
    .findOne({
      where: { id: parent.id },
    })
    .approvedPacks()
}

module.exports = {
  approvedPacks,
}
