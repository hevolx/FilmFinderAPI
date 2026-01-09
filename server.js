require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servera statiska filer (HTML, CSS, JS)
app.use(express.static(__dirname));

// API-endpoint för att hämta API-nyckeln
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.APIkey });
});

app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`);
});