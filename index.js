const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()


const Product = require('./src/routes/ProductRoutes')
const Requests = require('./src/routes/PedidosRoutes')

app.get('/', (req, res, next) => {
  return res.status(200).send('Welcome')
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(Product)
app.use(Requests)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
    message: error.message
  })
})

app.listen(PORT = 4000, () => {
  console.log(`Running on port: http://localhost:${PORT}`)
})
