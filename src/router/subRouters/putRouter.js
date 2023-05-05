const { Router } = require("express");
const { updateProductHandler } = require("../../handlers/putHandlers");

const putRouter = Router();

putRouter.put("/", updateProductHandler);

module.exports = putRouter;
