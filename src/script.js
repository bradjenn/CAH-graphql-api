const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  // const pack = await prisma.packs.create({
  //   data: {
  //     name: "Test Set 5",
  //     blackCards: {
  //       create: [
  //         { text: "test card test", pick: 1 },
  //         { text: "test card test", pick: 2 },
  //       ],
  //     },
  //   },
  // })
  // console.log(pack.blackCards())

  const pack = await prisma.packs.delete({
    where: {
      id: 1,
    },
  })

  // const allPacks = await prisma.packs.findMany()
  console.log(pack)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
