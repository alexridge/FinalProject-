const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/TIH_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("Connection established")
})
.catch((err)=> {
    console.log("Error occured");
    console.log(err)
})

const User = require('../models/user');

const test = new User({email: "test@test.com", password: "test_1"})

test.save().then(user => {
    console.log(user)
}).catch(e => {
    console.log(e)
})