const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const gameModel = require("./model/gameModel");
const apiRouter = require("./router/apiRouter");


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static('public'));

app.use("/game", apiRouter);


app.get("/", (req,res) => {
    res.render("create");
    
})



mongoose.connect("mongodb://localhost:27017/Game", { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("mongodb success!")
    }
})

app.listen(8080, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log("Sever is listening in PORT 8080");
    }
});