const axios = require('axios');

const API_URL = 'https://university-domains-list.vercel.app/api/v1';

/**
 * Fetch universities by country.
 * @param {string} country Country name to search universities for.
 * @returns {Promise<Array>} Array of universities matching the country.
 */
async function getUniversitiesByCountry(country) {
  try {
    const response = await axios.get(`${API_URL}/universities?country=${country}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching universities by country:', error);
    throw error;
  }
}

/**
 * Fetch universities by country and province/state.
 * @param {string} country Country name to search universities for.
 * @param {string} province Province or state name to filter universities.
 * @returns {Promise<Array>} Array of universities matching the country and province.
 */
async function getUniversitiesByProvince(country, province) {
  try {
    const response = await axios.get(`${API_URL}/universities?country=${country}&stateProvince=${province}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching universities by province:', error);
    throw error;
  }
}

module.exports = {
  getUniversitiesByCountry,
  getUniversitiesByProvince,
};
