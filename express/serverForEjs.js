const express = require("express");
const app = express();

const port = 3001;



// Template Engine | ejs
app.set("view engine", "ejs");

app.use(express.static("./public"));



// Using Template engine
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});



// Using variables in ejs pages
app.get('/aman', (req, res) => {
    res.render("aman", {myName : "Aman"});
});



// Error route
app.get('/error', (req, res, next) => {
    throw Error("This is the default Error Route!");
});

// Error Handling
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});



// Port
app.listen(port);