const mongoose = require('mongoose');
const User = require('../backend/models/User');
const InfluencerProfile = require('../backend/models/InfluencerProfile');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await User.create({
    email: 'admin@trustfluence.com',
    password: hashedPassword,
    role: 'admin'
  });

  // Create influencer
  await InfluencerProfile.create({
    handle: 'cool_influencer',
    platform: 'instagram',
    status: 'VERIFIED',
    trustTier: 'Gold'
  });

  console.log('✅ Database seeded');
  mongoose.connection.close();
}

seed().catch(console.error);
