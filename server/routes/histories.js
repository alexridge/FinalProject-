const express = require('express');
const router = express.Router();
const History = require('../models/history');


router.get('/', async (req, res) => {    
    const user = req.headers.user_id    
    let post = await History.find({user_id: user});
    console.log(post)
    res.send(post);
});

router.post('/', async (req, res) => {
    console.log("Post request is running")
    const { text, title, image } = req.body;
    const user_id = req.headers.user_id;

    // console.log("Headers", user_id)
    try {
        const history = await new History({user_id, text, title, image});
        console.log(history)
        await history.save()
        res.status(201).json()
    } catch {
        res.status(400).json()
    }
});

module.exports = router;