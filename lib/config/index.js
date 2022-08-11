'use strict';

require('dotenv').config();
module.exports = {
  env: process.env.NODE_ENV,
  gmt: parseInt(process.env.SERVER_GMT),
  port: process.env.PORT || 8888,
  database: {
    mongodb: {
      uri: process.env.DB_MONGO_URI,
    },
  },
  whitelist: process.env.CORS && process.env.CORS.split(',').map(cors => cors.trim()) || []
}
