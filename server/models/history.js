const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({

});

const History = mongoose.model("History", historySchema);
module.exports = History;