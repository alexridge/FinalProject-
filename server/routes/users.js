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



module.exports = router;