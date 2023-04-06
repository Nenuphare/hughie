var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose => {
    const ModeEmplois = mongoose.model(
        "modeEmplois",
        Schema({
            idArticle: {
                type: Number
            },
            version: {
                type: String
            },
            DateAjout: {
                type: Date
            },
        }, )
    );
    return ModeEmplois;
};
