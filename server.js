/*Importaciones*/
const express = require('express')
require('dotenv').config()
const cors=require('cors')
const router = require ('./routes/index')
require('./config/database')

const app = express()
/*Middlewares*/
app.use(cors())
app.use(express.json())
//app.use('/api', router)// si entra cualquier pedido con contenido api
/*Pedidos*/
app.use("/",router)
/*Server port e iniciacion*/
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`))