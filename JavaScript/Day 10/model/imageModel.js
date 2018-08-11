const mongosee = require("mongoose");
const Schema = mongosee.Schema;

const imageSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    imageUrl: {type: String, require: true},
    description: {type: String},
    view: {type: Number, default: 0},
    like: {type: Number, default: 0},
    comment: [{
        commentOwner: {type: Schema.Types.ObjectId, ref: "User"},
        commentContent: {type: String, require: true},
        commentTime: {type: String, default: new Date().toLocaleString},
    }],
}, {
    timestamps: true
});

module.exports = mongosee.model("Image", imageSchema);