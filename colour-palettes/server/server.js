const express = require('express');
const cors = require('cors');
const { getRandomPalette, getPaletteFromColor, getPaletteFromText } = require('../src/backend.js');

const app = express();
app.use(express.json())
const port = 3001; // Can be any port that's free on your system

app.use(cors()); // Use CORS to allow cross-origin requests

// Endpoint to get a random palette
app.get('/random-palette', async (req, res) => {
  try {
    const palette = await getRandomPalette();
    res.json(palette);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/hex-palette', async (req, res) => {
    try {
      const input = req.body.RGB_array; // Ensure the client sends RGB_array
      const palette = await getPaletteFromColor(input);
      console.log("Server.js:", palette);
      res.json(palette);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  });
  
  // Endpoint to get a palette from text
  app.post('/text-palette', async (req, res) => {
    try {
      const input = req.body.string; // Ensure the client sends string
      const palette = await getPaletteFromText(input);
      // console.log("input: ", input)
      // console.log("Palette to send: ", palette)
      res.json(palette);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  });
