const express =  require("express");
const apiRouter = express.Router();
const userRouter = require("../routers/userRouter");


apiRouter.use("/", (req, res, next) => {
    console.log("Api Router");
    next();
})

apiRouter.get("/", (req, res) => {
    res.send("aeldglfjslf");
})

apiRouter.use("/users", userRouter);

module.exports = apiRouter;