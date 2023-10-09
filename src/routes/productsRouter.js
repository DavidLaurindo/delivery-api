const router = require("express").Router()

const productController = require("../controllers/productController")

router.route("/").post((req, res) => {
  productController.create(req, res)
})

module.exports = router
