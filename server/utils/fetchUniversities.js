const axios = require('axios');

const API_URL = 'https://university-domains-list.vercel.app/api/v1';

async function getByCountry(country) {
  const url = `${API_URL}/universities?country=${country}`;
  const response = await axios.get(url);
  return response.data;
}

async function getByProvince(country, province) {
  const url = `${API_URL}/universities?country=${country}&stateProvince=${province}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  getByCountry,
  getByProvince,
};
