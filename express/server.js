const express = require("express");
const app = express();

const port = 3000;



// Middleware
app.use((req, res, next) => {
    console.log("Hello Ji! From Middleware.");
    next();
});



// Static routes
app.get('/', (request, response) => {
    response.send("Hello Doston!");
});

app.get('/profile/Static', (req, res) => {
    res.send("Hello Ji! Mai ek Static Profile hunn...");
});



// Dynamic routes
app.get('/profile/:username', (req, res) => {
    res.send(`Hello! This is ${req.params.username}.`);
});



// Static mai Dynamic ka masala...
app.get('/profile', (req, res) => {
    const dataHtml = `<a href="/profile/Static">Go to Static Profile Route.</a>
    <a href="/profile/Dhanesh">Go to Dhanesh's Profile.</a>
    <a href="/profile/Maya">Go to Maya's Profile.</a>
    `;
    res.send(dataHtml);
});


// Port
app.listen(port);