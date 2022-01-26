const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    name: String,
    setup: String,
    punchline: String,
    specials: [String],
    created_at: { type: Date, required: true, default: Date.now }
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke; 