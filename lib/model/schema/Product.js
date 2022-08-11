const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  market: {
    type: String
  },
  name: {
    type: String
  },
  code: {
    type: String
  },
  unit: {
    type: String
  },
  slug: {
    type: String
  },
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('Product', schema);
