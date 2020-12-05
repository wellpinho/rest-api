const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  return res.status(200).send('Welcome')
})

app.listen(PORT = 4000, () => {
  console.log(`Running on port: http://localhost:${PORT}`)
})
