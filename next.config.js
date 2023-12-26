// Load environment variables from .env file in development and on Vercel
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL) {
  const result = require('dotenv').config();
  if (result.error) {
    throw result.error;
  }
}

module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    THIRDWEB_API_KEY: process.env.THIRDWEB_API_KEY,
    CREST_SMARTWALLET_FACTORY_ADDRESS: process.env.CREST_SMARTWALLET_FACTORY_ADDRESS,
  },
};
