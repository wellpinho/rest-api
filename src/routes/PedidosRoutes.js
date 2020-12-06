const express = require('express')
const router = express.Router()

router.get('/requests', (req, res, next) => {
  return res.status(200).json({
    message: 'This is a method GET for get all requests.'
  })
})

router.get('/request/:id', (req, res, next) => {
  const id = req.params

  if (id === 1) {
    return res.status(200).json({
      message: 'This is a method get by ID a request on database.',
      Request: id
    })
  }else {
    return res.status(400).json({
      message: 'The send id does not have in our database',
      Request: id
    })
  }
})

router.post('/requests', (req, res, next) => {
  return res.status(200).json({
    message: 'Usind the method POST for create a new request.'
  })
})

router.delete('/request/:prod_id', (req, res, next) => {
  const prod_id = req.params

  return res.status(200).json({
    message: 'request deleted.',
    Request: prod_id
  })
})

module .exports = router