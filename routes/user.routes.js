const express=require('express')

const router= express.Router()

const{ signup, getUsers, updateUser, deleteUser, login}=require('../controllers/user.controller')


router.get('/', getUsers)

router.post('/',signup)

router.put('/', updateUser)

router.delete('/', deleteUser)

router.get('/login', login)

module.exports=router;