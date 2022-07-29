require('dotenv').config()

const express = require('express')

// express app
const app = express()

// middleware
app.use((req, _res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (_req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})