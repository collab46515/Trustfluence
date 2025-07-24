const InfluencerProfile = require('../models/InfluencerProfile');
const { calculateRealityScore } = require('../services/trustscore');

exports.getRealityScore = async (req, res) => {
  const { username } = req.params;
  const profile = await InfluencerProfile.findOne({ handle: username });
  if (!profile) return res.status(404).json({ error: 'Influencer not found' });

  res.json({ realityScore: profile.realityScore, trustTier: profile.trustTier });
};

exports.getRiskMeter = async (req, res) => {
  const { username } = req.params;
  const profile = await InfluencerProfile.findOne({ handle: username });
  if (!profile) return res.status(404).json({ error: 'Influencer not found' });

  res.json({ riskMeter: profile.riskMeter });
};

exports.applyForVerification = async (req, res) => {
  const { handle, platform } = req.body;
  const profile = new InfluencerProfile({ handle, platform, status: 'PENDING' });
  await profile.save();
  res.status(201).json({ message: 'Application submitted' });
};

exports.getLeaderboard = async (req, res) => {
  const profiles = await InfluencerProfile.find({ status: 'VERIFIED' })
    .sort({ trustScore: -1 })
    .limit(100);
  res.json(profiles);
};
