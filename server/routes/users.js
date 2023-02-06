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

// router.post("/login", async(req, res) => {
//     console.log("Inside login route")
//     console.log(req.body.email, req.body.password)
//     try{
//         const user = await User.findOne({email: req.body.email});
//         console.log("User console.log",user)
//         const token = await TokenGenerator.jsonwebtoken(req.get('User_ID'));
//         res.status(201).json({user:user, token: token})
//     }catch {
//         res.status(400)
//     }


// })

module.exports = router;