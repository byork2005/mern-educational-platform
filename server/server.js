const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../routes");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("../models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Need connection to DB
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});