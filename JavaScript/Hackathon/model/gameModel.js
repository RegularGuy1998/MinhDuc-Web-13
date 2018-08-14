const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let gameSchema = new Schema({
    player: [{
        name: {type: String, default: "Player 1"},
        score: [{type: Number, default: 0}],
    }, {
        _id: false,
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Game", gameSchema);