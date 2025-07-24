const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ DB Connected'))
  .catch(err => console.error('❌ DB Error:', err));

// ✅ Use routes
app.use('/api/lookup', require('./routes/lookup'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// Serve static files
app.use('/reports', express.static('reports'));

// Root route
app.get('/', (req, res) => {
  res.send('<h1>TrustFluence Backend Running ✅</h1>');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
