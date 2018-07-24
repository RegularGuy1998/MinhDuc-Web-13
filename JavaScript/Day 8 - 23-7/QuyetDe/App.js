const express = require("express");
const hdb = require("express-handlebars");
const path = require("path");
// const questionList = require("./questionList.json");
const fs = require("fs");
const bp = require("body-parser");
const router = require("./router/questionRouter");
const apiRouter = require("./router/apiRouter");
const mongoose = require("mongoose");
const questionModel = require("./model/questionModel");

let app = express();

app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static(path.join(__dirname + "/public")))

app.use("/question", router);
app.use("/api", apiRouter);

app.get("/style.css", function (req, res) {
    res.sendFile("./style.css");
});

app.get("/image/:imageUrl", function (req, res) {
    res.sendFile("./image/" + req.params.imageUrl);
});



// app.get("/addQuestion", function(req,res) {
//     res.render("addQuestion", {
//         isActive1: "active",
//     });
// });

app.get("/", function (req, res) {
    questionModel.count({}, (err, functionLength) => {
        if (err) {
            console.log(err);
        } else {
            let len = Math.floor(Math.random() * functionLength);
            questionModel.findOne({}).skip(len).exec((err, questionFound) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render("home", {
                        isActive2: "active",
                        ques: questionFound
                    });
                }
            });
        };
    });
});




    // Mongoose connect --------
    mongoose.connect("mongodb://localhost:27017/quyetde", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("mongodb success!")
        }
    })


    // App Listen
    app.listen(3000, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Connect localhost 3000 !");
        }
    });