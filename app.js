"use strict";

require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var routes = require('./routes/routes');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
var sequelize = db.sequelize;
sequelize.sync().then(function () {
  console.log('Database & tables created!');
})["catch"](function (err) {
  console.log(err);
});
app.use(routes);
require("./routes/routes");
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Token...');
  }
  next();
});
app.get("/", function (req, res) {
  res.send("Welcome to the Yukimito server WAHAHA!");
});

// Start server
var PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});