/*Importaciones*/
const express = require('express')
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
const port=4000
app.listen(port, () => console.log(`App listening on port ${port}`))