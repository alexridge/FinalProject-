
require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');


// const cors = require('cors')

// Route set up 
const usersRouter = require('./routes/users');
const tokensRouter = require('./routes/tokens');
const historyRouter = require('./routes/histories');

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



// Middleware to check validity of tokens
const tokenChecker = (req, res, next)=>{
    
    const authHeader = req.get("Authorization");
    console.log(req)
    if (authHeader){
      token = authHeader.slice(7);
    }
    

  JWT.verify(token, process.env.JWT_SECRET,(err, payload)=> {
    if (err){
      console.log(err)
      res.status(401).json({ message: "auth error" });
    }else {
      req.user_id = payload.user_id;
      console.log("Token accepted")
      next();
    }
  })
};


//Routes  

app.use("/users", usersRouter);
app.use("/tokens", tokensRouter);
app.use("/history", tokenChecker, historyRouter);

module.exports = app;