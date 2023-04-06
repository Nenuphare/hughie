var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose => {
    const Article = mongoose.model(
        "article",
        Schema({
            code: {
                type: String
            },
            _id:{
                type: String
            }
        }, )
    );
    return Article;
};
