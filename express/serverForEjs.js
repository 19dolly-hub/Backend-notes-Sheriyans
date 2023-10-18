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



// fetch api with ejs
app.get('/fetch', (req, res) => {
    res.render("fetch");
});

app.get('/fetchData', (req, res) => {
    fetch("https://useless-facts.sameerkumar.website/api")
    .then(response => response.json())
    .then(obj => {
        res.json({fact: obj.data});
    })
    .catch(error => console.log(error));
    // res.json({fact: "oo lala oo lala"});
    // let dataObj = {
    //     name: "fact",
    //     fact: "this is a fact",
    //     other: 5
    // }
    // res.json(JSON.stringify(dataObj));
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



// Dynamic Routing with ejs
app.get('/:username', (req, res) => {
    if(req.params.username !== "error") {
        res.render("default", {username : `${req.params.username}`});
    }
});



// Port
app.listen(port);