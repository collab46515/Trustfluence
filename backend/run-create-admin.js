require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminUser = require('./models/AdminUser');

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);

  const email = 'admin@trustfluence.com';
  const password = 'admin123';

  const existing = await AdminUser.findOne({ email });
  if (existing) {
    console.log('⚠️  Admin already exists:', email);
    mongoose.connection.close();
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  const admin = new AdminUser({ email, password: hashed });

  await admin.save();
  console.log('✅ Admin created:', email);
  mongoose.connection.close();
}

createAdmin().catch(console.error);
