/*Importaciones*/
const express = require('express')
const path = require('path')
require('dotenv').config()
require('./config/database')
const cors=require('cors')
const router = require ('./routes/index')
const app = express()

/*Middlewares*/
app.use(express.json())
app.use(cors())
/*Pedidos*/
app.use("/api",router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+"/client/build/index.html"))
  })
}
const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'

/*Server port e iniciacion*/
app.listen(port, host, () => console.log(`App listening on port ${process.env.PORT}`))