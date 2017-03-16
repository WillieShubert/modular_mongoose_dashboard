// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose_app" is the name of
//our db in mongodb -- this should match the name of the db you are going to use for your project.

// use body-parser!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
