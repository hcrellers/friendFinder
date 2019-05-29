const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');

//routes
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});