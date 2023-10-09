const express = require("express")
const cors = require("cors")

require("dotenv").config()
const port = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

const conn = require("./db/conn")
conn()

const routes = require("./routes/router")

app.use("/", routes)

app.listen(port, function () {
  console.log("Servidor Online!")
})
