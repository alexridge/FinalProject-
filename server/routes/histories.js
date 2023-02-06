const express = require('express');
const router = express.Router();
const History = require('../models/history');


router.get('/', async (req, res) => {
    // res.send("Welcome to the GET request for saved history");
    let post = await History.find({title: "This is my title"});
    console.log(post)
    res.send(post);
});

router.post('/', async (req, res) => {
    console.log("Post request is running")
    const { text, title, image } = req.body    
    try {
        const history = await new History(text, title, image);
        await history.save()
        res.status(201).json(text, title, image )
    } catch {
        res.status(400).json()
    }
});

module.exports = router;