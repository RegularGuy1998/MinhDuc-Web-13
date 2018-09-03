const express = require('express');
const mongoose = require('mongoose');
const gameRouter = require('./router/gameRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

let backend = express();

backend.use(cors({
    credentials: true,
    origin: true
}));
backend.use(bodyParser.urlencoded({extended: false}));
backend.use(bodyParser.json());
backend.use('/game', gameRouter);





mongoose.connect("mongodb://localhost/Game", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("mongodb success!")
    }
})

backend.listen(8080, err => {
    if(err) {
        console.error(err);
    } else {
        console.log("Server is listening with localhost 8080");
    }
})