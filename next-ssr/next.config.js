require('dotenv').config();
const withImages = require('next-images');


module.exports = 
  withImages({
    webpack(config, options) {
      
      return config
    },
    
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      DB_NAME: process.env.DB_NAME,
      WEB_URL:process.env.WEB_URL
    },
});
