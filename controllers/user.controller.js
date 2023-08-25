

const registerUser = (req, resp)=>{
    resp.status(201).json({
        message: 'usuario registrado ahora desde el controlador'
    })
}

module.exports = {registerUser}