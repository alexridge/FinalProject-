const mongoose = require('mongoose');


const HistorySchema = new mongoose.Schema({
    user_id: {type: String},
    text: {type: String },
    title: {type: String},
    image: {type: String},
});



const History = mongoose.model("History", HistorySchema);
module.exports = History;