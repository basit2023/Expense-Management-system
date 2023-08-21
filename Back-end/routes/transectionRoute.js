
const express = require('express');
const {addTransection, getTransection, editTransection, deleteTransection } = require('../controllers/transectionctl');
const router=express.Router();
//add transection
router.post('/add-transection',addTransection)
//Edit transection
router.post('/edit-transection',editTransection)
//Delete transection
router.post('/delete-transection',deleteTransection)

//get transection
router.post('/get-transection',getTransection)
module.exports=router;