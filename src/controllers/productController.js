const { Product: productModel } = require("../models/ProductModel")

const productController = {
  create: async (req, res) => {
    try {
      const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      }

      const response = await productModel.create(product)

      res.status(201).json({ response, msg: "Serviço criado com sucesso" })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = productController
