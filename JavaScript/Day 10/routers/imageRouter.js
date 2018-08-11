const express =  require("express");
const imageRouter = express.Router();

const imageModel = require("../model/imageModel");


//Create Image
imageRouter.post("/", (req,res) => {
    const {owner, imageUrl, description, view, like, comment} = req.body;
    imageModel.create({owner, imageUrl, description, view, like, comment}, (err, imageCreated) => {
        if(err) {
            res.status(500).send({success: 0, err});
        } else {
            res.send({success: 1, imageCreated});
        }
    })
})

module.exports = imageRouter;