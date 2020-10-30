const express = require("express");

const routes = express.Router();

const ShowsController = require('./controllers/ShowsController');

routes.get("/shows", ShowsController.index);
routes.post("/shows", ShowsController.create);
routes.delete("/shows/:id", ShowsController.delete);
routes.put("/shows/:id", ShowsController.update);
routes.patch("/shows/:id", ShowsController.patch);

module.exports = routes;
