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
app.get('/cities',router)
app.get('/cities/:id',router)

//Tantos GET como POST de Admin-Cities van al router
app.get('/admin/cities/:request',router)
app.post('/admin/cities/:request',router)
app.delete('/admin/cities/:request',router)
/*Server port e iniciacion*/
const port=4000
app.listen(port, () => console.log(`App listening on port ${port}`))