const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let players = new Schema ({
    name: {type: String, default: "Player 1"},
    score: [{type: Number, default: 0}],
});

let gameSchema = new Schema({
    player: [players]
}, {
    timestamps: true
});

module.exports = mongoose.model("Game", gameSchema);