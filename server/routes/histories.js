const express = require('express');
const router = express.Router();
const History = require('../models/history');


router.get('/', async (req, res) => {    
    const user = req.headers.user_id    
    let post = await History.find({user_id: user});   
    res.send(post);
});

router.post('/', async (req, res) => {
    console.log("req", req.body)
    // const { text, title, image } = req.body;
    // const user_id = req.headers.user_id;
    const {user_id, text, title, image} = req.headers
   
    try {
        const history = await new History({user_id, text, title, image});        
        await history.save()
        res.status(201).json(history)
    } catch {
        res.status(400).json()
    }
});

module.exports = router;