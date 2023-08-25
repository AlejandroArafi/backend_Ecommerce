const express = require('express') //importamos express
const { registerUser } = require('../controllers/user.controller')
const userRoutes = express.Router() //creamos un enrutador


userRoutes.post('/register', registerUser)

userRoutes.post('/login', (req, resp)=>{

})

userRoutes.get('/', (req, resp)=>{
    resp.status(200).json({
        message: 'desde user routes'
    }) 
})

module.exports = {userRoutes}

