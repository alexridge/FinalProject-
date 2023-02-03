const express = require('express');
const router = express.Router();
const User = require('../models/user')
const TokenGenerator = require('../models/token_generator')


// Post request to create a new instance of User 
router.post("/", async(req,res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password);
        res.status(201).json({email})
    }catch{
        res.status(400).json()
    }
} );

router.post("/login", async(req, res) => {
    try{
        const user = User.findOne({_id: req.get('User_id')}, {password: req.get('password')});
        const token = await TokenGenerator.jsonwebtoken(req.get('User_ID'))
    }catch (error){
        res.status(400)
    }


})

module.exports = router;