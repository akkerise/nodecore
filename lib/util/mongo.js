'use strict';

const config = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
const connection = () => {
  const conf = config.database.mongodb;
  mongoose.connect(
    conf.uri,
    {
      poolSize: conf.poolSize,
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  db.once('open', () => {
    console.log('🚀 Connected to mongodb...');
  });
}

module.exports = connection;
