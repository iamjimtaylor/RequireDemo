var express = require("express"),
    exphbs  = require("express3-handlebars"),
coffeeMiddleware = require('coffee-middleware');

// Create express app
var app = express();

// Setup layout engine
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(coffeeMiddleware({
    src: __dirname,
    compress: true
}));

// Static folder
app.use(express.static(__dirname + "/"));

// Homepage
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/multi", function (req, res) {
    res.render("home", {
        layout: "multi"
    });
});

// Listen on a port number
var server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
