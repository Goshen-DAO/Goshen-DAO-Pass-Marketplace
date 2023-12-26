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
