const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

//routes
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});