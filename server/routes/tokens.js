const express = require("express");
const router = express.Router();
const User = require('../models/user');
const TokenGenerator = require('../models/token_generator');

router.post("/", (req,res)=> {
    const {email, password} = req.body
    
    User.findOne({email: email}).then(async (user) => {
        if(!user){
            return res.status(401).json({message:"auth error"})
        }else if (user.password !== password){
            return res.status(401).json({message: "Passwords do not match"})
        }else{            
            const token = await TokenGenerator.jsonwebtoken(user.id);
            console.log("token generated", token)
            res.status(201).json({user_id: user.id, token: token, message: "OK"})
        }
    })
});

module.exports = router;
