const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
const farmRoutes = require('./routes/farmRoutes');
app.use('/api/farms', farmRoutes);

// Serve static frontend
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Use Render's port only
const PORT = process.env.PORT;
if (!PORT) {
  console.error('ERROR: process.env.PORT is not set. Render will set this for you.');
  process.exit(1);
}
app.listen(PORT, () => console.log('Server running on port ' + PORT));
