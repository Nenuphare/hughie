const db = require("../models");
//const {useRoute} = require("vue-router");
const Article = db.article;
const bodyParser = require("body-parser");

// Création et sauvegarde d'un article
exports.create = (req, res) => {

    //Création de l'article
   const article = new Article({
        code: req?.body?.code
    })

    //Sauvegarde de l'article dans la base
    article
        .save(article)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating article."
            });
        });
};

// Accès à tous les articles dans la base
exports.findAll = (req, res) => {
    const code = req.query.code;
    let condition = code ? {
        nom: {
            $regex: new RegExp(code),
            $options: "i"
        }
    } : {};
    Article.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Article."
            });
        });
};


