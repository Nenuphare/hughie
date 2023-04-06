const db = require("../models");
const Etape = db.etape;


// Création et sauvegarde d'une etape
exports.create = (req, res) => {

    //Création d'une etape

        const etape = new Etape({
            idModeEmploi: req?.body?.idModeEmploi,
            Num: req?.body?.Num,
            Nominage: req?.body?.Nominage,
            Commentaire: req?.body?.Commentaire
        });

    //Sauvegarde d'une etape dans la base
    etape
        .save(etape)
        .then(data => {
            res?.send(data);
        })
        .catch(err => {
            res?.status(500)?.send({
                message: err.message || "Some error occurred while creating etape."
            });
        });
};
// Accès à toutes les etapes dans la base
exports.findAll = (req, res) => {
    const id = req?.query?.id;
    let condition = id ? {
        nom: {
            $regex: new RegExp(id),
            $options: "i"
        }
    } : {};
    Etape.find(condition)
        .then(data => {
            res?.send(data);
        })
        .catch(err => {
            res?.status(500)?.send({
                message: err.message || "Some error occurred while retrieving Etape."
            });
        });
};