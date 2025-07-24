const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  referrer: { type: String, required: true },
  referee: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'ACCEPTED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Referral', referralSchema);
