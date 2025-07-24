const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { handle } = req.query;
  if (!handle) return res.status(400).json({ error: 'Handle required' });

  res.json({
    success: true,
    influencer: {
      handle,
      platform: 'instagram',
      trustScore: 820,
      metrics: {
        followers: 500000,
        engagementRate: 17.2
      },
      redFlags: []
    },
    downloadUrl: `/reports/${handle}.pdf`
  });
});

module.exports = router;
