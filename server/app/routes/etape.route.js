

module.exports = app => {

    var express = require("express");
    const etape = require("../controllers/etape.controller.js");
    var router = express.Router();

    //Create a new etape
    router.post("/", etape.create);
    //Find all etape
    router.get("/", etape.findAll);

    app.use("/api/etape", router);
}