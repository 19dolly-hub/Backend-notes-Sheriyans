import express from 'express';
import fetch from 'node-fetch'; // npm i node-fetch


const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send(`<a href="/api/fetchFact"><button>Get fact</button></a>`);
});

app.get('/api/fetchFact', async (req, res) => {
  try {
    // Make a request to the external API
    const response = await fetch("https://useless-facts.sameerkumar.website/api");
    if (!response.ok) {
      throw new Error("External API request failed");
    }
    const data = await response.json();
    
    // Send the data to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
