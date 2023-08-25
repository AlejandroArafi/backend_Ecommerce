const express = require('express')  //llamamos a express
const { userRoutes } = require('./routes/user.routes')
const app = express() //inicialización de la app
require('dotenv').config() //con dotenv accedes a las variables de entorno
const port = process.env.PORT || 4500

app.use('/user', userRoutes)

app.get('/' , (req, resp)=>{
    resp.json({
        message: 'ruta inicial'
    })
})
app.get('/user', (req, resp)=>{
    resp.json({
        message: 'respuesta desde el index'
    })
})



app.listen(port, ()=>{
    console.log(`escuchando en el puerto ${port}`)
})

