var express = require("express"),
    exphbs  = require("express3-handlebars");

// Create express app
var app = express();

// Setup layout engine
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Static folder
app.use(express.static(__dirname + "/"));

// Homepage
app.get("/", function(req, res) {
  res.render("home");
});

// Listen on a port number
var server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});