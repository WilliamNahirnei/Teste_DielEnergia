require('dotenv').config()
const express = require('express')
const consign = require('consign')
const app = express()
const port = process.env.DEFAULT_PORT || 5000

consign()
    .then('./config/middlewares.js')
    .then('./src/controller')
    .then('./config/routs.js')
    .into(app)



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})