const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminUserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true }
});

AdminUserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('AdminUser', AdminUserSchema);
