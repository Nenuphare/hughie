module.exports = app => {

    var express = require("express");
    const article = require("../controllers/article.controller.js");
    var router = express.Router();


    //Create a new etape
    router.post("/", article.create);
    //Find all etape
    router.get("/", article.findAll);

    app.use("/api/article", router);
}