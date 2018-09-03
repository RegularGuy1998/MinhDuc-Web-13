const express = require('express');
const router = express.Router();
const gameModel = require('../model/gameModel');

router.use((req, res, next) => {
    console.log("Api Router");
    next();
});




router.post("/", (req, res) => {
    gameModel.create(req.body.newGame)
    .then(gameCreated => {
        res.send({success: 1, gameCreated});
    })
    .catch(err => res.status(500).send({success: 0, err}))
});

router.get('/:id', (req,res) => {
    gameModel.findById(req.params.id)
    .then(gameData => {
        if(!gameData) {
            res.status(404).send({success: 0, message: 'Game Data not found'});
        } else {
            res.send({success: 1, gameData});
        }
    })
    .catch(err => res.status(500).send({message: 0, err}));
});

router.put('/:id', (req, res) => {
    // console.log(req.body.gameData);
    // console.log(req.params.id);
    const gameData = req.body;
    gameModel.findById(req.params.id)
        .then(gameFound => {
            if(!gameFound) {
                // console.log(gameFound);
                res.status(404).send({success: 0, message: 'Game data not found'});
            } else {
                for (let i = 0; i < gameData.length; i++) {
                    gameFound.player[i].score = gameData[i].score;
                }
                // console.log(gameFound)
                return gameFound.save();
            }
        })
        .then(gameUpdated => res.send({success: 1, gameUpdated}))
        .catch(err => res.status(500).send({success: 0, err}));
});


module.exports = router;