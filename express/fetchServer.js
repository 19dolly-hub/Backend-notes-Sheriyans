const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send(`<a href="/api/fetchFact"><button>Get fact</button></a>`);
});

app.get('/api/fetchFact', (req, res) => {
    fetch("https://useless-facts.sameerkumar.website/api")
    .then(response => response.json())
    .then(output => {
      res.send(`<a href="/api/fetchFact"><button>Get fact</button></a>
                <p>${output.data}</p>
        `);
    })
    .catch(error => console.log(error));  
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  