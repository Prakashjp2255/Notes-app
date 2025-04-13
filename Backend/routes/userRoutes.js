const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const signin = require ('../controller/userController');

router.post('/signup', signin.createuser);
router.post('/login' , signin.login);
//get userbyid 
router.get('/user/:id' , signin.fetchuser);
//get all user 
router.get('/allusers' , signin.getallusers);
router.put('/update/:id' , signin.updateuser);
router.delete('/delete/:id' , signin.deleteUser);

module.exports = router ;
