const express =  require("express");
const userRouter = express.Router();

const userModel = require("../model/userModel");




//Get all
userRouter.get("/", (req, res) => {
    userModel.find({}, (err, user) => {
        if (err) {
            res.status(500).send({success: 0, err});
        } else {
            res.send({success: 1, user});
        }
    });
});

//Create New
userRouter.post("/", (req, res) => {
    const {email, password, username, avatarUrl, fullName} = req.body;
    userModel.create({email, password, username, avatarUrl, fullName}, (err, userCreated) => {
        if (err) {
            res.status(500).send({success: 0, err});
        } else {
            res.send({success: 1, userCreated});
        }
    });
});

//Update
userRouter.put("/", (req, res) => {
    const {email, password, username, avatarUrl, fullName, id} = req.body;
    userModel.update({_id: id},{email: email, password: password, username: username, avatarUrl: avatarUrl, fullName: fullName}, (err, userUpdated) => {
        if(err){
            res.status(500).send({success: 0, err});
        } else {
            res.send({success: 1, userUpdated});
        }
    });
});

//Delete
userRouter.delete("/", (req, res) => {
    const id = req.body.id;
    userModel.findByIdAndRemove(id, (err, userRemove) => {
        if(err){
            res.status(500).send({success: 0, err});
        } else {
            res.send({success: 1, userRemove});
        }
    })
})

//Get by id
userRouter.put("/findID", (req, res) => {
    const {email, password, username, avatarUrl, fullName, id} = req.body;
    userModel.findByIdAndUpdate(id, {email, password, username, avatarUrl, fullName}, (err, userUpdated) => {
        if (err) {
            res.status(500).send({success: 0, err});
        }else {
            res.send({success: 1, userUpdated});
        }
    });
});

module.exports = userRouter;