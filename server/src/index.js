const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to University Search API');
});

app.get('/universities', async (req, res) => {
  const { country, state } = req.query;

  if (!country) {
    return res.status(400).json({ error: 'Country is required' });
  }

  const url = `http://universities.hipolabs.com/search?country=${country}`;
  if (state) {
    url += `&state-province=${state}`;
  }

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
