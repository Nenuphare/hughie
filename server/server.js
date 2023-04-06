const express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const url = require("./app/config/db.config.js");



const corsOptions = {
    origin: "http://localhost:5173", // DEV
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



//simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TECHNATURE."
    });
});
// route pour etape
app.get(require("./app/routes/etape.route.js")(app));
app.get(require("./app/routes/modeEmplois.route.js")(app));
app.get(require("./app/routes/article.route.js")(app));




// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
