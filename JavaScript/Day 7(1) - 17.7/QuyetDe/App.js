const express = require("express");
const hdb = require("express-handlebars");
const path = require("path");
// const questionList = require("./questionList.json");
const fs = require("fs");
const bp = require("body-parser");
const router = require("./router/questionRouter");
const mongoose = require("mongoose");
const questionModel = require("./model/questionModel");

let app = express();

app.engine("handlebars", hdb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + "/public")))

app.use("/question", router);

app.get("/style.css", function(req,res) {
    res.sendFile("./style.css");
});

app.get("/image/:imageUrl", function(req,res) {
    res.sendFile("./image/" + req.params.imageUrl);
});



// app.get("/addQuestion", function(req,res) {
//     res.render("addQuestion", {
//         isActive1: "active",
//     });
// });

app.get("/", function(req,res) {
    questionModel.find({}, function(req, resFind) {
        let ques = resFind[Math.floor(Math.random()* resFind.length)];
        res.render("home", {
            isActive2: "active",
            ques
        });
    });  
});



// Mongoose connect --------
mongoose.connect("mongodb://quyetde:123456a.@ds239681.mlab.com:39681/project1",{useNewUrlParser: true}, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("mongodb success!")
    }
})


// App Listen
app.listen( process.env.PORT ||  3000, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Connect localhost 3000 !");
    }
});