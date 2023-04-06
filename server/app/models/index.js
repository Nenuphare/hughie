const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.etape = require("./etape.model.js")(mongoose);
db.article = require("./article.model.js")(mongoose);
db.modeEmploi = require("./modeEmplois.model")(mongoose);


module.exports = db;