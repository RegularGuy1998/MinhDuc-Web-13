const express = require("express");
const router = express.Router();
const questionModel = require("../model/questionModel");

router.use((req,res,next) => {
    console.log("Api router");
    next();
});

router.post("/addNew", (req,res) => {
    console.log(req.body);
    let newQuestion = {
        content: req.body.content
    }
    questionModel.create(newQuestion, function (err, questionCreated) {
        if (err) {
            res.status(500).send({success: 0, errMsg: err});
        } else {
            res.status(200).send({success: 1, quesitonID: questionCreated._id});
        }
    });
});

router.get("/otherQuestion", (req, res) => {
    questionModel.count({}, (err, functionLength) => {
        if (err) {
            console.log(err);
        } else {
            let len = Math.floor(Math.random() * functionLength);
            questionModel.findOne({}).skip(len).exec((err, questionFound) => {
                if (err) {
                    res.status(500).send({success: 0, errMsg: err});
                } else {
                    res.status(200).send({success: 1, questionFound});
                }
            });
        };
    });
});

module.exports = router;