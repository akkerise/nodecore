const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  coin: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
  },
  price: {
    type: Number
  },
  change: {
    type: String
  },
  lowest: {
    type: Number
  },
  highest: {
    type: Number
  },
  volume24h: {
    type: Number
  },
}, {
  versionKey: false,
  timestamps: true
});

schema.pre('findOne', function () {
  this.populate({ path: 'product', select: '-createdDate' })
})
module.exports = mongoose.model('Option', schema);
