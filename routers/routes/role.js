const express = require("express");
const { createRole, roles } = require("./../controllers/role");
const roleRouter = express.Router();

////get role function
roleRouter.post("/createrole", createRole);
roleRouter.get("/roles", roles);


module.exports = roleRouter;