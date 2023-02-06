const mongoose = require('mongoose');


const HistorySchema = new mongoose.Schema({
    text: {type: String },
    title: {type: String},
    image: {type: String},
});

// HistorySchema.statics.saveHistory = async function(text, title, image) {
//     console.log("Save method is running")
//     const history = await this.create({text, title, image});
//     return history
// }

const History = mongoose.model("History", HistorySchema);
module.exports = History;