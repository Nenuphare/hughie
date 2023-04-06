
module.exports = app => {

    var express = require("express");
    const modeEmploi = require("../controllers/modeEmplois.controller.js");
    var router = express.Router();


    //Create a new modeEmploi
    router.post("/", modeEmploi.create);
    //Find all modeEmploi
    router.get("/", modeEmploi.findAll);
    //delete by id
    router.get("/delete:id", modeEmploi.delete);

    app.use("/api/modeEmploi", router);
}