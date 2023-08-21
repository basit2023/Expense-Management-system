const express = require('express');
const { loginController, Register } = require('../controllers/userController');
const router=express.Router();

//routers
//login page
router.post('/login', loginController);

//post || register router
router.post('/register', Register)
module.exports=router;