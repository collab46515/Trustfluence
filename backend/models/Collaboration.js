const mongoose = require('mongoose');

const collaborationSchema = new mongoose.Schema({
  influencerId: { type: String, required: true },
  brandId: { type: String, required: true },
  campaign: String,
  date: Date,
  proofLinks: [String],
  dualConfirmed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Collaboration', collaborationSchema);
