
require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


// const cors = require('cors')

// Route set up 
const usersRouter = require('./routes/users');
const tokensRouter = require('./routes/tokens');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

//use cors to allow cross origin resource sharing
// app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   );



//Connect to local MongoDB database
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Middleware to check validity of tokens
const tokenChecker =(req, res, next)=>{
    let token;
    const authHeader = req.get("Authorization");

    if (authHeader){
      token = authHeader.slice(7);
    }
  jwt.verify(token, process.env.JWT_SECRET,(err, payload)=> {
    if (err){
      console.log(err)
    }else {
      req.user_id = payload.user_id;
      next();
    }
  })
};


//Routes  

app.use("/users", usersRouter)
app.use("/tokens", tokensRouter)

module.exports = app;