const { Router } = require("express");
const { createProductHandler } = require("../../handlers/postHandlers");
const postRouter = Router();

postRouter.post("/", createProductHandler);

module.exports = postRouter;
