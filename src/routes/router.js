const router = require("express").Router()

const productRouter = require("./productsRouter")

router.use("/product", productRouter)

module.exports = router
