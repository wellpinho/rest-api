const express = require('express')
const router = express.Router()

router.get('/products', (req, res, next) => {
  return res.status(200).json({
    message: 'This is a method GET for get all products.'
  })
})

router.get('/product/:id', (req, res, next) => {
  const id = req.params

  if (id === 1) {
    return res.status(200).json({
      message: 'This is a method get by ID a product on database.',
      Product: id
    })
  }else {
    return res.status(400).json({
      message: 'The send id does not have in our database',
      Product: id
    })
  }
})

router.post('/product', (req, res, next) => {
  const { name, price } = req.body

  return res.status(200).json({
    message: 'Usind the method POST for create a new product.',
    nome: name,
    preço: price
  })
})

router.put('/product/:id', (req, res, next) => {
  return res.status(200).json({
    message: 'Product updated.',
    Product: name
  })
})

router.delete('/product/:prod_id', (req, res, next) => {
  const prod_id = req.params

  return res.status(200).json({
    message: 'Product deleted.',
    Product: prod_id
  })
})

module .exports = router