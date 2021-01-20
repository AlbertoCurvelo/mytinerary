const mongoose = require('mongoose')
/*Conexion a la base de datos*/
mongoose.connect('mongodb+srv://etodb:20874678db@cluster0.95mw7.mongodb.net/mytinerary?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify:false
})
.then(res=>console.log("Database connected"))
.catch(error => console.log("Error: "+error))