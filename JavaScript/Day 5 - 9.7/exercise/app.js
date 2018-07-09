const express = require("express");
const hb = require("express-handlebars");
const ques = require("./question.json");

let app = express();

app.engine("handlebars", hb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "./views/layouts/"));


app.get("/", function (req,res) {
    res.render("ask", {
        question: ques[Math.floor(Math.random() * ques.length)].q
    });
});

app.get("/ask", function (req,res) {
    res.render("addNew");
});

app.get("/vote", function (req,res) {
    const num = Number(ques[Math.floor(Math.random() * ques.length)]);
    res.render("vote", {
        question: ques[Math.floor(Math.random() * ques.length)].q,
        // all: ques[num].t + ques[num].f
    });
});


app.listen(3000, function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Server 3000");
    }
});