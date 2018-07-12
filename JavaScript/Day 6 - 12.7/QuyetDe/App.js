const express = require("express");
const hdb = require("express-handlebars");
const path = require("path");
const questionList = require("./questionList.json");
const fs = require("fs");
const bp = require("body-parser");

let app = express();

app.engine("handlebars", hdb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + "/public")))

app.get("/style.css", function(req,res) {
    res.sendFile(__dirname + "./style.css");
});

app.get("/addQuestion", function(req,res) {
    res.render("addQuestion", {
        isActive1: "active",
    });
});

app.get("/", function(req,res) {
    let ques = questionList[Math.floor(Math.random() * questionList.length)];
    res.render("home", {
        isActive2: "active",
        ques
        
    });
});





// -------------------------  Params And Query  ---------------------------- //

//Params
//   http://localhost:3000/vote/1
app.get("/vote/:questionId", function(req,res) {
    let ques = questionList[req.params.questionId];
    let yes = Math.floor(100 / (ques.yes + ques.no) * ques.yes * 100) / 100;
    let no = Math.floor(100 / (ques.yes + ques.no) * ques.no * 100) / 100;
    let yesHidden, noHidden;
    if (isNaN(yes) || yes === 0) {
        yesHidden = "hidden";
    }
    if (isNaN(no) || no === 0) {
        noHidden = "hidden";
    }
    res.render("vote", {
        isActive2: "active",
        ques,
        no,
        yes,
        total: ques.yes + ques.no,
        yesHidden,
        noHidden
    });
});



//Query
//   http://localhost:3000/vote?questionId=1&a=KiTuBatKy
// app.get("/vote", function(req,res) {
//     let ques = questionList[req.query.questionId];
//     console.log(req.query)
//     res.render("vote", {
//         isActive2: "active",
//         ques,
//         yes: Math.floor(100 / (ques.yes + ques.no) * ques.yes),
//         no: Math.floor(100 / (ques.yes + ques.no) * ques.no),
//         total: ques.yes + ques.no
//     });
// });

// ---------------------------------------------------------------------------//


app.get("/answer/:questionId/:vot", (req,res) => {
    questionList[req.params.questionId][req.params.vot] += 1;
    fs.writeFileSync("questionList.json", JSON.stringify(questionList));
    res.redirect("/vote/" + req.params.questionId);
});

app.post("/addQuestion/add", (req,res) => {
    let newQuestion = ({
        id: questionList.length,
        question: req.body.question,
        yes:0,
        no:0
    });
    questionList.push(newQuestion);
    fs.writeFileSync("questionList.json", JSON.stringify(questionList));
    res.redirect(res.redirect("/vote/" + newQuestion.id ));
});



app.listen(3000, function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log("Connect localhost 3000 !");
    }
});