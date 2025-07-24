const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@trustfluence.com' && password === 'admin123') {
    const token = 'fake-jwt-token-for-testing';
    return res.json({ token, user: { email } });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
