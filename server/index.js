const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fetchUniversities = require('./utils/fetchUniversities');

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to fetch universities by country
app.get('/universities', async (req, res) => {
  const { country } = req.query;
  try {
    const universities = await fetchUniversities.getByCountry(country);
    res.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

// Endpoint to fetch universities by country and state/province
app.get('/universities/province', async (req, res) => {
  const { country, province } = req.query;
  try {
    const universities = await fetchUniversities.getByProvince(country, province);
    res.json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
