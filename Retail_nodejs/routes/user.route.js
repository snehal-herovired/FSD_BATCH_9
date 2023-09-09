const express =require('express');
const User = require('../models/user.model');
const UserRouter =express.Router();
const {register,login,getallUser} =require('../controllers/user.controller')

const jwtVerify =require('../middlewares/jwt.middleware')

UserRouter.post('/register',register)
UserRouter.post('/login',login)

// authorized or protected Apis : 
UserRouter.get('/alluser',jwtVerify,getallUser)

module.exports=UserRouter;