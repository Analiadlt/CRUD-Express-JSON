const { Router } = require("express");
const { getProducts, getDetail } = require("../../handlers/gethandlers");

const getRouter = Router();

getRouter.get("/", getProducts);

getRouter.get("/:id", getDetail);

module.exports = getRouter;
