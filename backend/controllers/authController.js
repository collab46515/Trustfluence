const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { email: user.email, role: user.role } });
};

exports.signup = async (req, res) => {
  const { email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const referralCode = generateReferralCode();

  const user = new User({ email, password: hashed, role, referralCode });
  await user.save();

  res.status(201).json({ message: 'User created', referralCode });
};

exports.verifyOTP = (req, res) => {
  res.json({ success: true, message: 'OTP verified' });
};

function generateReferralCode() {
  return Math.random().toString(36).substring(2, 9).toUpperCase();
}
