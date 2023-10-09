const mongoose = require("mongoose")

require("dotenv").config()

const userDb = process.env.DB_USER

const passDb = process.env.DB_PASS

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${userDb}:${passDb}@cluster0.mqgcfjv.mongodb.net/?retryWrites=true&w=majority`
    )
    console.log("server conectado")
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main
