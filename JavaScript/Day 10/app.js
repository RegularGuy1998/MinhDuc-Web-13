const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const apiRouter = require("./routers/apirouter");

let app = express();
const port = 3000;



app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
app.use("/api", apiRouter);

app.get("/");

mongoose.connect("mongodb://localhost/techkids-hotgirls", (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log("Server connect")
    }
})

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is listening at ${port}`);
    }
})