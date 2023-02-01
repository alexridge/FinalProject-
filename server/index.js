const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())

const usersRouter = require('./routes/users')

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use("/users", usersRouter)

module.exports = app;