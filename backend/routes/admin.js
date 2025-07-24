const express = require('express');
const router = express.Router();

router.get('/stats', (req, res) => {
  res.json({ totalInfluencers: 1247, averageTrustScore: 680 });
});

module.exports = router;
