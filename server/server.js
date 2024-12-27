require("dotenv").config();
const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get("/api-key", (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
