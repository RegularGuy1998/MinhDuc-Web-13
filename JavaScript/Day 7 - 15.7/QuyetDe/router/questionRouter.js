const express = require("express");
const router = express.Router();
// const questionList = require("../questionList.json");
const questionModel = require("../model/questionModel")

//app.get
router.get("/add", function (req, res) {
    res.render("addQuestion", {
        isActive1: "active",
    });
});

router.get("/:id/:vote", (req, res) => {
    questionModel.findOne({_id: req.params.id}, function(err, resFind) {
        let vyes = resFind.yes; let vno = resFind.no;
        if(req.params.vote === "yes") {
            questionModel.updateOne({_id: req.params.id}, {yes: vyes + 1}, function(err, resUpdate) {
                
            });
        }else if(req.params.vote === "no") {
            questionModel.updateOne({_id: req.params.id}, {no: vno + 1}, function(err, resUpdate) {
                
            })
        }
        res.redirect("/question/" + req.params.id);
    });
});

router.post("/addNew", (req, res) => {
    let newQuestion = {
        content: req.body.question
    }
    questionModel.create(newQuestion, function (err, questionCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/question/" + questionCreated._id);
        }
    })
});



// -------------------------  Params And Query  ---------------------------- //

//Params
//   http://localhost:3000/vote/1
// router.get("/question/:id", function(req,res) {
//     let ques = questionList[req.params.id];
//     let yes = Math.floor(100 / (ques.yes + ques.no) * ques.yes * 100) / 100;
//     let no = Math.floor(100 / (ques.yes + ques.no) * ques.no * 100) / 100;
//     let yesHidden, noHidden;
//     if (isNaN(yes) || yes === 0) {
//         yesHidden = "hidden";
//     }
//     if (isNaN(no) || no === 0) {
//         noHidden = "hidden";
//     }
//     res.render("vote", {
//         isActive2: "active",
//         ques,
//         no,
//         yes,
//         total: ques.yes + ques.no,
//         yesHidden,
//         noHidden
//     });
// });



//Query
//   http://localhost:3000/vote?questionId=1&a=KiTuBatKy
// router.get("/vote", function(req,res) {
//     let ques = questionList[req.query.id];
//     console.log(req.query)
//     res.render("vote", {
//         isActive2: "active",
//         ques,
//         yes: Math.floor(100 / (ques.yes + ques.no) * ques.yes),
//         no: Math.floor(100 / (ques.yes + ques.no) * ques.no),
//         total: ques.yes + ques.no
//     });
// });

router.get("/:id", function (req, res) {
    questionModel.findById(req.params.id, (err, resFind) => {
        if (err) {
            console.log(err);
        } else {
            let ques = resFind;
            let yes = Math.floor(100 / (ques.yes + ques.no) * ques.yes * 100) / 100;
            let no = Math.floor(100 / (ques.yes + ques.no) * ques.no * 100) / 100;
            let yesHidden, noHidden;
            if (isNaN(yes) || yes === null) {
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
        }
    });

});



// ---------------------------------------------------------------------------//


module.exports = router;