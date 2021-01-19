/*Importaciones*/
const express = require('express')
const cors=require('cors')
const router = require ('./routes/index')
const app = express()
/*Middlewares*/
app.use(cors())
//app.use('/api', router)// si entra cualquier pedido con contenido api
/*Pedidos*/
app.get('/cities',router)
app.get('/cities/:id',router)
/*Server port e iniciacion*/
const port=4000
app.listen(port, () => console.log(`App listening on port ${port}`))