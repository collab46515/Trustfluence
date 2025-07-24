const express = require('express');
const router = express.Router();

router.get('/:handle', (req, res) => {
  const { handle } = req.params;
  // Mock risk score (0–5)
  const riskScore = (Math.random() * 5).toFixed(1);
  res.json({ handle, riskScore });
});

module.exports = router;
