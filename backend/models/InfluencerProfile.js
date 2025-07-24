const mongoose = require('mongoose');

const influencerProfileSchema = new mongoose.Schema({
  handle: { type: String, unique: true, required: true },
  platform: { type: String, enum: ['instagram', 'tiktok', 'youtube', 'twitter', 'linkedin'] },
  trustScore: { type: Number, default: 0 },
  trustTier: { 
    type: String, 
    enum: ['Platinum', 'Gold', 'Silver', 'Bronze', 'Flagged'], 
    default: 'Bronze' 
  },
  realityScore: { type: Number, default: 0 },
  riskMeter: { type: Number, default: 0 },
  pastCollaborations: [String],
  status: { type: String, enum: ['PENDING', 'VERIFIED', 'REJECTED'], default: 'PENDING' },
  verifiedCollaborations: [{
    brand: String,
    campaign: String,
    date: Date
  }]
}, { timestamps: true });

module.exports = mongoose.model('InfluencerProfile', influencerProfileSchema);
