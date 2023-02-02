const express = require("express");
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

// Route set up 
const usersRouter = require('./routes/users')

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

app.use("/users", usersRouter)

module.exports = app;