const db = require("../models");
//const {useRoute} = require("vue-router");
const ModeEmploi = db.modeEmploi;
const bodyParser = require("body-parser");

// Création et sauvegarde d'un mode d'emploi
exports.create = (req, res) => {

    //Création du mode d'emploi
    const modeEmploi = new ModeEmploi({
        idArticle: req?.body?.idArticle,
        version: req?.body?.version,
        DateAjout: req?.body?.DateAjout
    })

    //Sauvegarde du mode d'emploi dans la base
    use
        .save(modeEmploi)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating modeEmploi."
            });
        });
};
// Accès à tous les modes d'emploi dans la base
exports.findAll = (req, res) => {
    const id = req.query.id;
    let condition = id ? {
        nom: {
            $regex: new RegExp(id),
            $options: "i"
        }
    } : {};
    ModeEmploi.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ModeEmploi."
            });
        });
};





// Supprimer un mode d'emploi avec son id
exports.delete = (req, res) => {
    const id = req.params.id;
    ModeEmploi.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete mode d'emploi with id=${id}. Maybe it was not found!`
                });
            } else {
                res.send({
                    message: "Le mode d'emploi a été supprimé"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ne peux pas supprimer le mode d'emploi id=" + id
            });
        });
};
