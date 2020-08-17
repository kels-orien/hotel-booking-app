require('dotenv').config();

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
};
