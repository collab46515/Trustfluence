const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['influencer', 'brand', 'agency', 'admin'], 
    default: 'influencer' 
  },
  referralCode: { type: String, unique: true },
  referredBy: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
