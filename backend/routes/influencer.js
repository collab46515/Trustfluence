const express = require('express');
const router = express.Router();
const influencerController = require('../controllers/influencerController');
const auth = require('../middleware/auth');

router.get('/:username/score', influencerController.getRealityScore);
router.get('/:username/risk', influencerController.getRiskMeter);
router.post('/verify', auth, influencerController.applyForVerification);
router.get('/leaderboard', influencerController.getLeaderboard);

module.exports = router;
