const data = require("./data.json")
// const fs = require("fs")
// const { v4: uuidv4 } = require("uuid")

// const updateJSON = () => {
//   var complete = false
//   var m = JSON.parse(fs.readFileSync("./data.json").toString())

//   // m.whiteCards = m.whiteCards.map((c) => {
//   //   return { text: c }
//   // })

//   m.packs.forEach((pack) => {
//     pack.white = pack.white.map((index) => {
//       return m.whiteCards[index].id
//     })

//     pack.black = pack.black.map((index) => {
//       return m.blackCards[index].id
//     })
//   })

//   if (!complete) {
//     fs.writeFile("./data.json", JSON.stringify(m), (err, result) => {
//       complete = true
//       if (err) {
//         console.log("error", err)
//       }
//     })
//   }
// }

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
