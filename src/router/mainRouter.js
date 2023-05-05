const { Router } = require("express");

const getRouter = require("./subRouters/getRouter");
const postRouter = require("./subRouters/postrouter");
const putRouter = require("./subRouters/putRouter");
const deleteRouter = require("./subRouters/deleteRouter");

const mainRouter = Router();

mainRouter.use("/get", getRouter);
mainRouter.use("/post", postRouter);
mainRouter.use("/put", putRouter);
mainRouter.use("/delete", deleteRouter);

module.exports = mainRouter;
