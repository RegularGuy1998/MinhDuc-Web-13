const express = require("express");
const router = express.Router();
const gameModel = require("../model/gameModel");

router.use((req, res, next) => {
    console.log("Api router");
    next();
});

router.post("/create", (req, res) => {
    let newGame = {
        player: [
            {
                name: req.body.player1,
                score: [0, 0, 0, 0]
            }, {
                name: req.body.player2,
                score: [0, 0, 0, 0]
            }, {
                name: req.body.player3,
                score: [0, 0, 0, 0]
            }, {
                name: req.body.player4,
                score: [0, 0, 0, 0]
            }
        ]
    };
    gameModel.create(newGame, function (err, gameCreated) {
        if (err) {
            res.status(500).send({ success: 0, errMsg: err });
        } else {
            res.status(200).send({ success: 1, gameID: gameCreated._id });
        }
    });
});

router.post("/getData", (req, res) => {
    gameModel.findById(req.body.gameID, (err, data) => {
        if (err) {
            res.status(500).send({ success: 0, errMsg: err });
        } else {
            res.status(200).send({ success: 1, data });
        }
    });
});

router.post("/addRound", (req, res) => {
    gameModel.findById(req.body.gameID, (err, newData) => {
        if (err) {
            console.error(err);
        } else {
            for (let i = 0; i < 4; i++) {
                newData.player[i].score.splice(newData.player[0].score.length, 0, 0);
            }
            gameModel.updateOne({ _id: req.body.gameID }, newData, (err, resUpdate) => {
                if (err) {
                    res.status(500).send({ success: 0, errMsg: err });
                } else {
                    res.status(200).send({ success: 1, data: newData });
                }
            })
        }
    });
});

router.post("/updateScore", (req, res) => {
    console.log(req.body);
    console.log(req.body.score);
    gameModel.findById(req.body.gameID, (err, newData) => {
        if (err) {
            console.error(err);
        } else {
            newData.player[0].score[req.body.row] = req.body.score0;
            newData.player[1].score[req.body.row] = req.body.score1;
            newData.player[2].score[req.body.row] = req.body.score2;
            newData.player[3].score[req.body.row] = req.body.score3;
            gameModel.updateOne({ _id: req.body.gameID }, newData, (err, resUpdate) => {
                if (err) {
                    res.status(500).send({ success: 0, errMsg: err });
                } else {
                    res.status(200).send({ success: 1, data: newData });
                }
            });
        }
    });
});

router.get("/:gameID", (req, res) => {
    gameModel.findById(req.params.gameID, (err, resFind) => {
        if (err) {
            console.error(err);
        } else {
            let gameInfo = resFind;
            res.render("game", {
                id: gameInfo._id
            });
        }
    });
});

module.exports = router;