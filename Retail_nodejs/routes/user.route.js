const express =require('express');
const User = require('../models/user.model');
const UserRouter =express.Router();
const {register,login} =require('../controllers/user.controller')



UserRouter.post('/register',register)
UserRouter.post('/login',login)

module.exports=UserRouter;