const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY //traemos nuestra clave secreta

const generateToken = (user)=>{
    const {_id, username, mail, premium} = user
    return jwt.sign({ //esto es lo que se envia al usuario
        _id,
        username,
        mail,
        premium
    }, secret, {
        expiresIn: '1d'
     }) //duración del token   
}

module.exports = generateToken